import agentOsArticle from "@/content/research/agent-os-three-layer-architecture/article.json";
import aiComplianceArticle from "@/content/research/ai-debt-collection-compliance-engineering/article.json";
import knowledgeAssetsArticle from "@/content/research/enterprise-knowledge-assetization-data-flywheel/article.json";
import multiAgentArticle from "@/content/research/multi-agent-collaboration-engineering/article.json";
import raasArticle from "@/content/research/results-as-a-service-raas/article.json";
import acceptanceMetricsArticle from "@/content/research/results-oriented-ai-agent-acceptance-metrics/article.json";
import batchSmallDebtArticle from "@/content/research/ai-batch-small-overdue-debt/article.json";
import { additionalResearchArticles } from "@/lib/additional-research-articles";

export type ArticleSegment = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  color?: string;
  fontSizePt?: number;
};

export type ParagraphLayout = {
  spaceBeforeTwips?: number;
  spaceAfterTwips?: number;
  lineTwips?: number;
  lineRule?: string;
  firstLineTwips?: number;
  leftTwips?: number;
  rightTwips?: number;
  hangingTwips?: number;
  alignment?: string;
  backgroundColor?: string;
  fontSizePt?: number;
  leftBorder?: {
    color: string;
    sizeEighthPoints: number;
    spacePoints: number;
  };
  bottomBorder?: {
    color: string;
    sizeEighthPoints: number;
    spacePoints: number;
  };
};

export type TextBlock = {
  id: string;
  type: "title" | "subtitle" | "deck" | "abstract" | "keywords" | "heading" | "paragraph" | "closing";
  text: string;
  segments?: ArticleSegment[];
  layout?: ParagraphLayout;
  listMarker?: {
    text: string;
    color?: string;
    leftTwips?: number;
    hangingTwips?: number;
  };
  leadLabel?: string;
  leadLabelSegments?: ArticleSegment[];
  leadLabelLayout?: ParagraphLayout;
};

export type FigureBlock = {
  id: string;
  type: "figure";
  src: string;
  sourceMedia: string;
  sha256: string;
  width: number;
  height: number;
  caption: string;
  captionSegments?: ArticleSegment[];
  captionLayout?: ParagraphLayout;
  sourceKind?: "paragraph" | "table";
  sourceLayout?: ParagraphLayout;
};

export type TableBlock = {
  id: string;
  type: "table";
  caption: string;
  rows: string[][];
  captionSegments?: ArticleSegment[];
  captionLayout?: ParagraphLayout;
  captionPosition?: "before" | "after";
};

export type ResearchArticle = {
  slug: string;
  category: string;
  displayTitle: string | null;
  sourceTitle: string;
  summary: string | null;
  publishedAt: string | null;
  sourceDocx: string;
  sourceDocxSha256: string;
  blocks: Array<TextBlock | FigureBlock | TableBlock>;
};

export const researchArticles = [
  agentOsArticle as ResearchArticle,
  aiComplianceArticle as ResearchArticle,
  knowledgeAssetsArticle as ResearchArticle,
  multiAgentArticle as ResearchArticle,
  raasArticle as ResearchArticle,
  acceptanceMetricsArticle as ResearchArticle,
  batchSmallDebtArticle as ResearchArticle,
  ...(additionalResearchArticles as ResearchArticle[]),
];

export function getResearchArticle(slug: string) {
  return researchArticles.find((article) => article.slug === slug);
}
