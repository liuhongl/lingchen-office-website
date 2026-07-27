import prototypeCases from "@/data/customer-cases.prototype.json";
import currentOverseasCases from "@/data/customer-cases.overseas-current.json";

export const customerCaseDomains = ["全部", "AI出海获客", "AI不良资产处置", "AI法律获客与工作流"] as const;
export const customerCaseProducts = ["全部", "Sales in", "Social Grow", "Mine GEO", "AI获客Harness", "Recov AI", "DeepDoc", "DeepLaw"] as const;

export type CustomerCase = {
  slug: string;
  product: string;
  products: string[];
  domain: string;
  title: string;
  summary: string;
  customerIntroduction: string;
  challenges: string[];
  solutionLead: string;
  solutions: string[];
  sampleScope: string;
  results: string[][];
  resultSummary: string;
  relatedProducts: string[];
  views: ReadonlyArray<"domain" | "product">;
};

const prototypeSlugs = [
  "ningbo-auto-electronics-icp-leads",
  "hefei-semiconductor-abm-leads",
  "kunshan-mold-overseas-content",
  "suzhou-training-content-growth",
  "shenzhen-cobot-ai-answer-governance",
  "industrial-inspection-ai-reputation",
  "dongguan-exhibition-lead-followup",
  "guangzhou-medical-distributor-followup",
  "property-arrears-recovery",
  "consumer-finance-early-collection",
  "bank-credit-card-smart-collection",
  "bank-cross-border-document-review",
  "customs-invoice-document-review",
  "yangtze-commercial-law-firm-growth",
  "guangzhou-family-lawyer-growth",
  "shanghai-legal-consulting-workflow",
] as const;

const productViewCases = prototypeCases.map((item, index) => ({
  ...item,
  slug: prototypeSlugs[index],
  products: [item.product],
  views: item.domain === "AI出海获客" ? ["product"] as const : ["domain", "product"] as const,
})) satisfies CustomerCase[];

const domainOverseasCases = currentOverseasCases.map((item) => ({
  ...item,
  views: ["domain"] as const,
})) satisfies CustomerCase[];

export const customerCases: CustomerCase[] = [
  ...domainOverseasCases,
  ...productViewCases,
];

export function getCustomerCase(slug: string) {
  return customerCases.find((item) => item.slug === slug);
}

export function getCustomerCaseDisplayTitle(title: string) {
  return title.replace(/^\d{2}\s*案例名称：/, "");
}
