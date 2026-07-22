#!/usr/bin/env python3
"""Extract one research DOCX into deterministic JSON blocks and original images."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import struct
from pathlib import Path

from docx import Document
from docx.table import Table
from docx.text.paragraph import Paragraph
from docx.oxml.ns import qn


ABSTRACT_PREFIX_RE = re.compile(r"^摘要(?:[｜|:：]|\s)+")
ABSTRACT_LABEL_RE = re.compile(r"^摘要$")
KEYWORDS_PREFIX_RE = re.compile(r"^关键词(?:[｜|:：]|\s)+")
FIGURE_CAPTION_RE = re.compile(r"^图\s*\d+\s*[｜|]")
TABLE_CAPTION_RE = re.compile(r"^表\s*\d+\s*[｜|]")


def paragraph_text(paragraph: Paragraph) -> str:
    return paragraph.text


def paragraph_segments(paragraph: Paragraph) -> list[dict]:
    segments: list[dict] = []
    for run in paragraph.runs:
        if not run.text:
            continue
        segment = {"text": run.text}
        if run.bold:
            segment["bold"] = True
        if run.italic:
            segment["italic"] = True
        if run.underline:
            segment["underline"] = True
        if run.font.color.rgb:
            segment["color"] = f"#{run.font.color.rgb}"
        if run.font.size:
            segment["fontSizePt"] = run.font.size.pt
        segments.append(segment)
    return segments


def paragraph_layout(paragraph: Paragraph) -> dict:
    """Return only direct DOCX paragraph properties, without guessing style inheritance."""
    properties = paragraph._p.pPr
    if properties is None:
        return {}

    layout: dict = {}
    spacing = properties.find(qn("w:spacing"))
    if spacing is not None:
        for source, target in (
            ("before", "spaceBeforeTwips"),
            ("after", "spaceAfterTwips"),
            ("line", "lineTwips"),
        ):
            value = spacing.get(qn(f"w:{source}"))
            if value is not None:
                layout[target] = int(value)
        line_rule = spacing.get(qn("w:lineRule"))
        if line_rule:
            layout["lineRule"] = line_rule

    indentation = properties.find(qn("w:ind"))
    if indentation is not None:
        for source, target in (
            ("firstLine", "firstLineTwips"),
            ("left", "leftTwips"),
            ("right", "rightTwips"),
            ("hanging", "hangingTwips"),
        ):
            value = indentation.get(qn(f"w:{source}"))
            if value is not None:
                layout[target] = int(value)

    justification = properties.find(qn("w:jc"))
    if justification is not None and justification.get(qn("w:val")):
        layout["alignment"] = justification.get(qn("w:val"))

    shading = properties.find(qn("w:shd"))
    if shading is not None and shading.get(qn("w:fill")):
        layout["backgroundColor"] = f"#{shading.get(qn('w:fill'))}"

    borders = properties.find(qn("w:pBdr"))
    if borders is not None:
        for side, target in (("left", "leftBorder"), ("bottom", "bottomBorder")):
            border = borders.find(qn(f"w:{side}"))
            if border is not None:
                layout[target] = {
                    "color": f"#{border.get(qn('w:color'))}",
                    "sizeEighthPoints": int(border.get(qn("w:sz"))),
                    "spacePoints": int(border.get(qn("w:space"))),
                }

    sizes = {
        run.font.size.pt
        for run in paragraph.runs
        if run.text.strip() and run.font.size is not None
    }
    if len(sizes) == 1:
        layout["fontSizePt"] = sizes.pop()
    return layout


def paragraph_role(paragraph: Paragraph, index: int, before_abstract: bool) -> str:
    text = paragraph.text.strip()
    runs = [run for run in paragraph.runs if run.text.strip()]
    sizes = [run.font.size.pt for run in runs if run.font.size]
    all_bold = bool(runs) and all(run.bold for run in runs)
    max_size = max(sizes, default=0)

    if index == 1:
        return "title"
    if ABSTRACT_PREFIX_RE.match(text):
        return "abstract"
    if before_abstract and index == 2:
        return "subtitle"
    if before_abstract and paragraph.alignment is not None and str(paragraph.alignment).startswith("CENTER"):
        return "deck"
    if KEYWORDS_PREFIX_RE.match(text):
        return "keywords"
    if text == "核心判断":
        return "heading"
    if paragraph.style is not None and paragraph.style.name.startswith("Heading"):
        return "heading"
    if all_bold and max_size >= 12.5:
        return "heading"
    if text.startswith(("落地建议｜", "行动建议｜", "落地原则｜")):
        return "closing"
    return "paragraph"


def direct_cell_paragraphs(table: Table) -> list[str]:
    texts: list[str] = []
    for row in table.rows:
        for cell in row.cells:
            for child in cell._tc.iterchildren():
                if child.tag == qn("w:p"):
                    text = Paragraph(child, cell).text.strip()
                    if text:
                        texts.append(text)
    return texts


def direct_cell_paragraph_objects(table: Table) -> list[Paragraph]:
    paragraphs: list[Paragraph] = []
    for row in table.rows:
        for cell in row.cells:
            for child in cell._tc.iterchildren():
                if child.tag == qn("w:p"):
                    paragraph = Paragraph(child, cell)
                    if paragraph.text.strip():
                        paragraphs.append(paragraph)
    return paragraphs


def nested_table_data(table: Table) -> list[list[str]] | None:
    for row in table.rows:
        for cell in row.cells:
            for child in cell._tc.iterchildren():
                if child.tag == qn("w:tbl"):
                    nested = Table(child, cell)
                    return [[item.text for item in nested_row.cells] for nested_row in nested.rows]
    return None


def image_relationship_ids(element) -> list[str]:
    ids: list[str] = []
    for blip in element.xpath('.//*[local-name()="blip"]'):
        relationship_id = blip.get(qn("r:embed"))
        if relationship_id and relationship_id not in ids:
            ids.append(relationship_id)
    return ids


def paragraph_list_marker(paragraph: Paragraph) -> dict | None:
    properties = paragraph._p.pPr
    numbering = properties.find(qn("w:numPr")) if properties is not None else None
    if numbering is None:
        return None

    level_element = numbering.find(qn("w:ilvl"))
    number_id_element = numbering.find(qn("w:numId"))
    if number_id_element is None:
        return None

    level = level_element.get(qn("w:val")) if level_element is not None else "0"
    number_id = number_id_element.get(qn("w:val"))
    numbering_root = paragraph.part.numbering_part.element
    number = next(
        (item for item in numbering_root.findall(qn("w:num")) if item.get(qn("w:numId")) == number_id),
        None,
    )
    if number is None:
        return None

    abstract_id_element = number.find(qn("w:abstractNumId"))
    if abstract_id_element is None:
        return None
    abstract_id = abstract_id_element.get(qn("w:val"))
    abstract = next(
        (
            item
            for item in numbering_root.findall(qn("w:abstractNum"))
            if item.get(qn("w:abstractNumId")) == abstract_id
        ),
        None,
    )
    if abstract is None:
        return None

    level_definition = next(
        (item for item in abstract.findall(qn("w:lvl")) if item.get(qn("w:ilvl")) == level),
        None,
    )
    if level_definition is None:
        return None
    number_format = level_definition.find(qn("w:numFmt"))
    level_text = level_definition.find(qn("w:lvlText"))
    if (
        number_format is None
        or number_format.get(qn("w:val")) != "bullet"
        or level_text is None
        or not level_text.get(qn("w:val"))
    ):
        return None

    marker: dict = {"text": level_text.get(qn("w:val"))}
    run_properties = level_definition.find(qn("w:rPr"))
    color = run_properties.find(qn("w:color")) if run_properties is not None else None
    if color is not None and color.get(qn("w:val")):
        marker["color"] = f"#{color.get(qn('w:val'))}"

    paragraph_properties = level_definition.find(qn("w:pPr"))
    indentation = paragraph_properties.find(qn("w:ind")) if paragraph_properties is not None else None
    if indentation is not None:
        left = indentation.get(qn("w:left"))
        hanging = indentation.get(qn("w:hanging"))
        if left is not None:
            marker["leftTwips"] = int(left)
        if hanging is not None:
            marker["hangingTwips"] = int(hanging)
    return marker


def paragraph_payload(paragraph: Paragraph, block_id: str, block_type: str) -> dict:
    block = {"id": block_id, "type": block_type, "text": paragraph_text(paragraph)}
    segments = paragraph_segments(paragraph)
    segment_sizes = {
        segment["fontSizePt"]
        for segment in segments
        if "fontSizePt" in segment
    }
    if any(
        segment.get("bold")
        or segment.get("italic")
        or segment.get("underline")
        or segment.get("color")
        for segment in segments
    ) or len(segment_sizes) > 1:
        block["segments"] = segments
    layout = paragraph_layout(paragraph)
    list_marker = paragraph_list_marker(paragraph)
    if list_marker:
        block["listMarker"] = list_marker
        if "leftTwips" in list_marker and "leftTwips" not in layout:
            layout["leftTwips"] = list_marker["leftTwips"]
        if "hangingTwips" in list_marker and "hangingTwips" not in layout:
            layout["hangingTwips"] = list_marker["hangingTwips"]
    if layout:
        block["layout"] = layout
    return block


def png_dimensions(blob: bytes) -> tuple[int, int]:
    if blob[:8] != b"\x89PNG\r\n\x1a\n" or blob[12:16] != b"IHDR":
        raise ValueError("Research article image is not a PNG")
    return struct.unpack(">II", blob[16:24])


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("output_json", type=Path)
    parser.add_argument("asset_dir", type=Path)
    parser.add_argument("--slug", required=True)
    parser.add_argument("--category", required=True)
    parser.add_argument("--display-title")
    args = parser.parse_args()

    document = Document(args.source)
    args.asset_dir.mkdir(parents=True, exist_ok=True)
    args.output_json.parent.mkdir(parents=True, exist_ok=True)

    blocks: list[dict] = []
    paragraph_index = 0
    figure_index = 0
    table_index = 0

    children = list(document.element.body.iterchildren())
    skipped_children: set[int] = set()
    pending_table_caption: dict | None = None
    before_abstract = True

    for child_index, child in enumerate(children):
        if child.tag == qn("w:p"):
            paragraph_index += 1
            if child_index in skipped_children:
                continue
            paragraph = Paragraph(child, document)
            text = paragraph_text(paragraph)
            relationship_ids = image_relationship_ids(child)

            if relationship_ids:
                caption_block = None
                if child_index + 1 < len(children) and children[child_index + 1].tag == qn("w:p"):
                    caption_paragraph = Paragraph(children[child_index + 1], document)
                    if FIGURE_CAPTION_RE.match(caption_paragraph.text.strip()):
                        caption_block = paragraph_payload(
                            caption_paragraph,
                            f"p-{paragraph_index + 1:03d}",
                            "caption",
                        )
                        skipped_children.add(child_index + 1)
                for relationship_id in relationship_ids:
                    figure_index += 1
                    image_part = document.part.related_parts[relationship_id]
                    extension = Path(str(image_part.partname)).suffix.lower() or ".png"
                    filename = f"figure-{figure_index:02d}{extension}"
                    target = args.asset_dir / filename
                    target.write_bytes(image_part.blob)
                    width, height = png_dimensions(image_part.blob)
                    block = {
                        "id": f"figure-{figure_index:02d}",
                        "type": "figure",
                        "src": f"/images/research/{args.slug}/{filename}",
                        "sourceMedia": str(image_part.partname),
                        "sha256": hashlib.sha256(image_part.blob).hexdigest(),
                        "width": width,
                        "height": height,
                        "caption": caption_block["text"] if caption_block else "",
                        "sourceKind": "paragraph",
                    }
                    source_layout = paragraph_layout(paragraph)
                    if source_layout:
                        block["sourceLayout"] = source_layout
                    if caption_block:
                        block["captionSegments"] = caption_block.get("segments")
                        block["captionLayout"] = caption_block.get("layout")
                    blocks.append(block)
                continue

            if not text.strip():
                continue

            if (
                before_abstract
                and ABSTRACT_LABEL_RE.match(text.strip())
                and child_index + 1 < len(children)
                and children[child_index + 1].tag == qn("w:p")
            ):
                abstract_body = Paragraph(children[child_index + 1], document)
                if abstract_body.text.strip() and not image_relationship_ids(children[child_index + 1]):
                    block = paragraph_payload(
                        abstract_body,
                        f"p-{paragraph_index + 1:03d}",
                        "abstract",
                    )
                    block["leadLabel"] = text
                    label_segments = paragraph_segments(paragraph)
                    label_layout = paragraph_layout(paragraph)
                    if label_segments:
                        block["leadLabelSegments"] = label_segments
                    if label_layout:
                        block["leadLabelLayout"] = label_layout
                    blocks.append(block)
                    skipped_children.add(child_index + 1)
                    before_abstract = False
                    continue

            if TABLE_CAPTION_RE.match(text.strip()) and child_index + 1 < len(children) and children[child_index + 1].tag == qn("w:tbl"):
                if not image_relationship_ids(children[child_index + 1]):
                    pending_table_caption = paragraph_payload(
                        paragraph,
                        f"p-{paragraph_index:03d}",
                        "caption",
                    )
                    continue

            block_type = paragraph_role(paragraph, paragraph_index, before_abstract)
            block = paragraph_payload(paragraph, f"p-{paragraph_index:03d}", block_type)
            blocks.append(block)
            if block_type == "abstract":
                before_abstract = False
            continue

        if child.tag != qn("w:tbl"):
            continue

        table = Table(child, document)
        relationship_ids = image_relationship_ids(child)
        direct_texts = direct_cell_paragraphs(table)

        if before_abstract and len(table.rows) == 1 and len(table.columns) == 1:
            frontmatter_paragraphs = direct_cell_paragraph_objects(table)
            abstract_paragraph = next(
                (paragraph for paragraph in frontmatter_paragraphs if ABSTRACT_PREFIX_RE.match(paragraph.text.strip())),
                None,
            )
            keywords_paragraph = next(
                (paragraph for paragraph in frontmatter_paragraphs if KEYWORDS_PREFIX_RE.match(paragraph.text.strip())),
                None,
            )
            if abstract_paragraph is not None and keywords_paragraph is not None:
                blocks.append(paragraph_payload(abstract_paragraph, "frontmatter-abstract", "abstract"))
                blocks.append(paragraph_payload(keywords_paragraph, "frontmatter-keywords", "keywords"))
                before_abstract = False
                continue

        if relationship_ids:
            for relationship_id in relationship_ids:
                figure_index += 1
                image_part = document.part.related_parts[relationship_id]
                extension = Path(str(image_part.partname)).suffix.lower() or ".png"
                filename = f"figure-{figure_index:02d}{extension}"
                target = args.asset_dir / filename
                target.write_bytes(image_part.blob)
                width, height = png_dimensions(image_part.blob)
                blocks.append(
                    {
                        "id": f"figure-{figure_index:02d}",
                        "type": "figure",
                        "src": f"/images/research/{args.slug}/{filename}",
                        "sourceMedia": str(image_part.partname),
                        "sha256": hashlib.sha256(image_part.blob).hexdigest(),
                        "width": width,
                        "height": height,
                        "caption": "\n".join(direct_texts),
                    }
                )
            continue

        nested_rows = nested_table_data(table)
        if nested_rows is not None:
            table_index += 1
            caption = direct_texts[0] if direct_texts else ""
            blocks.append(
                {
                    "id": f"table-{table_index:02d}",
                    "type": "table",
                    "caption": caption,
                    "rows": nested_rows,
                }
            )
            continue

        following_caption = None
        if child_index + 1 < len(children) and children[child_index + 1].tag == qn("w:p"):
            caption_paragraph = Paragraph(children[child_index + 1], document)
            if TABLE_CAPTION_RE.match(caption_paragraph.text.strip()):
                following_caption = paragraph_payload(
                    caption_paragraph,
                    f"table-caption-{table_index + 1:02d}",
                    "caption",
                )
                skipped_children.add(child_index + 1)

        table_index += 1
        block = {
            "id": f"table-{table_index:02d}",
            "type": "table",
            "caption": (
                pending_table_caption["text"]
                if pending_table_caption
                else following_caption["text"] if following_caption else ""
            ),
            "rows": [[cell.text for cell in row.cells] for row in table.rows],
        }
        if pending_table_caption:
            block["captionPosition"] = "before"
            block["captionSegments"] = pending_table_caption.get("segments")
            block["captionLayout"] = pending_table_caption.get("layout")
        elif following_caption:
            block["captionPosition"] = "after"
            block["captionSegments"] = following_caption.get("segments")
            block["captionLayout"] = following_caption.get("layout")
        blocks.append(block)
        pending_table_caption = None

    source_sha256 = hashlib.sha256(args.source.read_bytes()).hexdigest()
    source_title = next(block["text"] for block in blocks if block["type"] == "title")
    abstract = next((block["text"] for block in blocks if block["type"] == "abstract"), None)
    payload = {
        "slug": args.slug,
        "category": args.category,
        "displayTitle": args.display_title,
        "sourceTitle": source_title,
        "summary": abstract,
        "publishedAt": None,
        "sourceDocx": args.source.name,
        "sourceDocxSha256": source_sha256,
        "blocks": blocks,
    }
    args.output_json.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
