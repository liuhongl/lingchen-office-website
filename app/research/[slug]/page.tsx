import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  getResearchArticle,
  researchArticles,
  type ArticleSegment,
  type TextBlock,
} from "@/lib/research-articles";
import styles from "./page.module.css";

const siteUrl = "https://lingchen-ai.com";

type PageProps = { params: Promise<{ slug: string }> };

function descriptionFrom(summary: string | null) {
  return summary?.replace(/^摘要(?:[｜|:：]|\s)+/, "") ?? "";
}

function RichText({ block }: { block: TextBlock }) {
  if (!block.segments) return block.text;

  return block.segments.map((segment: ArticleSegment, index) => {
    let content: React.ReactNode = segment.text;
    if (segment.bold) content = <strong>{content}</strong>;
    if (segment.italic) content = <em>{content}</em>;
    if (segment.underline) content = <u>{content}</u>;
    const segmentStyle: CSSProperties = {};
    if (segment.color) segmentStyle.color = segment.color;
    if (segment.fontSizePt) segmentStyle.fontSize = `${segment.fontSizePt}pt`;
    return <span key={`${block.id}-${index}`} style={Object.keys(segmentStyle).length ? segmentStyle : undefined}>{content}</span>;
  });
}

function StandardLeadText({ block }: { block: TextBlock }) {
  if (block.leadLabel) {
    return (
      <>
        <strong className={`${styles.leadLabel} ${styles.leadLabelStandalone}`}>{block.leadLabel}</strong>
        <span className={styles.leadBody}>{block.text}</span>
      </>
    );
  }

  const label = block.text.match(/^(?:摘要|关键词)(?:[｜|:：]|\s)+/)?.[0];
  if (!label) return <RichText block={block} />;
  const displayLabel = block.type === "keywords" ? "关键词｜" : label;

  return (
    <>
      <strong className={styles.leadLabel}>{displayLabel}</strong>
      <span className={styles.leadBody}>{block.text.slice(label.length)}</span>
    </>
  );
}

function docxParagraphStyle(block: TextBlock): CSSProperties | undefined {
  if (block.type === "abstract") {
    return {
      marginTop: "8px",
      marginBottom: "13.3333px",
      padding: "18px 22px 18px 18.6667px",
      color: "#0F172A",
      backgroundColor: "#F4F6FA",
      borderLeft: "3px solid #2E5FA3",
      fontSize: "11pt",
      lineHeight: 340 / 240,
      textAlign: "justify",
    };
  }

  if (block.type === "keywords") {
    return {
      marginTop: 0,
      marginBottom: "13.3333px",
      padding: 0,
      color: "#595959",
      backgroundColor: "transparent",
      borderLeft: 0,
      fontSize: "10.5pt",
      lineHeight: 320 / 240,
      textAlign: "left",
    };
  }

  const layout = block.layout;
  if (!layout) return undefined;

  const style: CSSProperties = {};
  const twipsToPixels = (twips: number) => `${twips / 15}px`;
  if (layout.spaceBeforeTwips !== undefined) style.marginTop = twipsToPixels(layout.spaceBeforeTwips);
  if (layout.spaceAfterTwips !== undefined) style.marginBottom = twipsToPixels(layout.spaceAfterTwips);
  if (layout.firstLineTwips !== undefined) style.textIndent = twipsToPixels(layout.firstLineTwips);
  if (layout.leftTwips !== undefined) style.paddingLeft = twipsToPixels(layout.leftTwips);
  if (layout.rightTwips !== undefined) style.paddingRight = twipsToPixels(layout.rightTwips);
  if (layout.hangingTwips !== undefined) style.textIndent = twipsToPixels(-layout.hangingTwips);
  if (layout.lineTwips !== undefined && layout.lineRule === "auto") style.lineHeight = layout.lineTwips / 240;
  if (layout.lineTwips !== undefined && layout.lineRule === "exact") style.lineHeight = twipsToPixels(layout.lineTwips);
  if (layout.fontSizePt !== undefined) style.fontSize = `${layout.fontSizePt}pt`;
  if (layout.alignment === "both") style.textAlign = "justify";
  if (layout.alignment === "center") style.textAlign = "center";
  if (layout.backgroundColor) style.backgroundColor = layout.backgroundColor;
  if (layout.leftBorder) {
    const borderWidth = layout.leftBorder.sizeEighthPoints / 6;
    style.borderLeft = `${borderWidth}px solid ${layout.leftBorder.color}`;
    style.paddingLeft = `calc(${twipsToPixels(layout.leftTwips ?? 0)} + ${layout.leftBorder.spacePoints * 4 / 3}px)`;
  }
  if (layout.bottomBorder) {
    const borderWidth = layout.bottomBorder.sizeEighthPoints / 6;
    style.borderBottom = `${borderWidth}px solid ${layout.bottomBorder.color}`;
    style.paddingBottom = `${layout.bottomBorder.spacePoints * 4 / 3}px`;
  }
  if (block.type === "closing") style.paddingRight = "22px";
  return style;
}

function Caption({
  id,
  text,
  segments,
  layout,
}: {
  id: string;
  text: string;
  segments?: ArticleSegment[];
  layout?: TextBlock["layout"];
}) {
  if (!text) return null;
  const block: TextBlock = { id, type: "paragraph", text, segments, layout };
  return <figcaption style={docxParagraphStyle(block)}><RichText block={block} /></figcaption>;
}

export function generateStaticParams() {
  return researchArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getResearchArticle(slug);
  if (!article) return {};

  const description = descriptionFrom(article.summary);
  const canonical = `/research/${article.slug}`;
  return {
    title: article.sourceTitle,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "zh_CN",
      siteName: "灵宸智能",
      url: canonical,
      title: article.sourceTitle,
      description,
    },
  };
}

export default async function ResearchArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getResearchArticle(slug);
  if (!article) notFound();

  const titleBlock = article.blocks.find((block) => block.type === "title") as TextBlock;
  const subtitle = article.blocks.find((block) => block.type === "subtitle") as TextBlock | undefined;
  const deck = article.blocks.find((block) => block.type === "deck") as TextBlock | undefined;
  const articleUrl = `${siteUrl}/research/${article.slug}/`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    url: articleUrl,
    headline: article.sourceTitle,
    description: descriptionFrom(article.summary),
    inLanguage: "zh-CN",
    publisher: { "@id": `${siteUrl}/#organization` },
    isPartOf: { "@id": `${siteUrl}/research/#webpage` },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "灵宸研究院", item: `${siteUrl}/research/` },
      { "@type": "ListItem", position: 2, name: article.sourceTitle, item: articleUrl },
    ],
  };

  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <nav className={styles.breadcrumb} aria-label="面包屑导航">
              <Link href="/research/">← 返回上一级</Link>
              <span className={styles.breadcrumbPath}>
                <Link href="/research/">灵宸研究院</Link>
                <span>{article.category}</span>
              </span>
            </nav>
            <h1><RichText block={titleBlock} /></h1>
            {subtitle ? <p className={styles.heroDescription}><RichText block={subtitle} /></p> : null}
            {deck ? <p className={styles.heroDeck}><RichText block={deck} /></p> : null}
          </div>
        </header>

        <article className={styles.article}>
          {article.blocks.filter((block) => !["title", "subtitle", "deck"].includes(block.type)).map((block) => {
            if (block.type === "figure") {
              const sourceBlock: TextBlock = {
                id: `${block.id}-source`,
                type: "paragraph",
                text: "",
                layout: block.sourceLayout,
              };
              return (
                <figure
                  className={styles.figure}
                  key={block.id}
                  style={block.sourceKind === "paragraph" ? { margin: 0, ...docxParagraphStyle(sourceBlock) } : undefined}
                >
                  <Image
                    src={block.src}
                    alt={block.caption}
                    width={block.width}
                    height={block.height}
                    sizes="(max-width: 760px) calc(100vw - 40px), 820px"
                  />
                  <Caption id={`${block.id}-caption`} text={block.caption} segments={block.captionSegments} layout={block.captionLayout} />
                </figure>
              );
            }

            if (block.type === "table") {
              return (
                <figure className={styles.tableFigure} key={block.id} style={block.captionPosition === "before" ? { margin: 0 } : undefined}>
                  {block.captionPosition === "before" ? (
                    <Caption id={`${block.id}-caption`} text={block.caption} segments={block.captionSegments} layout={block.captionLayout} />
                  ) : null}
                  <div className={styles.tableScroll}>
                    <table>
                      <thead>
                        <tr>{block.rows[0].map((cell, index) => <th key={index}>{cell}</th>)}</tr>
                      </thead>
                      <tbody>
                        {block.rows.slice(1).map((row, rowIndex) => (
                          <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {block.captionPosition !== "before" ? (
                    <Caption id={`${block.id}-caption`} text={block.caption} segments={block.captionSegments} layout={block.captionLayout} />
                  ) : null}
                </figure>
              );
            }

            if (block.type === "heading") {
              return <h2 key={block.id} style={docxParagraphStyle(block)}><RichText block={block} /></h2>;
            }

            if (block.type === "abstract") {
              return <p className={styles.abstract} key={block.id} style={docxParagraphStyle(block)}><StandardLeadText block={block} /></p>;
            }

            if (block.type === "keywords") {
              return <p className={styles.keywords} key={block.id} style={docxParagraphStyle(block)}><StandardLeadText block={block} /></p>;
            }

            if (block.type === "closing") {
              return <p className={styles.closing} key={block.id} style={docxParagraphStyle(block)}><RichText block={block} /></p>;
            }

            return (
              <p className={styles.bodyParagraph} key={block.id} style={docxParagraphStyle(block)}>
                {block.listMarker ? (
                  <span
                    aria-hidden="true"
                    className={styles.listMarker}
                    style={{
                      color: block.listMarker.color,
                      width: block.listMarker.hangingTwips
                        ? `${block.listMarker.hangingTwips / 15}px`
                        : undefined,
                    }}
                  >
                    {block.listMarker.text}
                  </span>
                ) : null}
                <RichText block={block} />
              </p>
            );
          })}
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
