export type ContactUsPayload = {
  name: string;
  company: string;
  position: string;
  phone: string;
  email: string;
  interestedProducts: string;
  demand: string;
};

export const contactProducts = [
  ["Sales in", "AI出海获客-客户线索数据挖掘与筛选"],
  ["Social Grow", "AI出海获客-内容营销与流量孵化"],
  ["Mine GEO", "AI出海获客-大模型流量入口"],
  ["AI获客Harness", "AI出海获客-高并发智慧触达与筛选、转化"],
  ["Recov AI", "AI不良资产处置-批量不良资产业务处置"],
  ["DeepDoc", "AI出海风控-跨境单证智能审核"],
  ["DeepLaw", "AI 法律 Agent-案件拓展与法律工作流"],
] as const;

export const contactFormCopy = {
  fields: {
    name: { label: "您的姓名 *", placeholder: "例如：沈经理" },
    company: {
      label: "您的公司 *",
      placeholder: "例如：某外贸制造进出口大厂",
    },
    role: {
      label: "您的职位 / 部门",
      placeholder: "例如：法务总监 / 市场开发负责人",
    },
    phone: { label: "您的手机 *", placeholder: "例如：138-xxxx-xxxx" },
    email: { label: "您的邮箱", placeholder: "例如：example@company.com" },
  },
  productsLegend: "您感兴趣的灵宸 AI 产品 (可多选)",
  messageLabel: "具体合作需求描述",
  messagePlaceholder:
    "描述您的拖欠款规模、出海目标重点国家对标等，以便我们顾问更好地为您定制测试...",
  submit: "提交产品合作需求/预约解决方案",
} as const;

export function buildContactUsPayload({
  name,
  company,
  position,
  phone,
  email,
  products,
  demand,
}: {
  name: string;
  company: string;
  position: string;
  phone: string;
  email: string;
  products: string[];
  demand: string;
}): ContactUsPayload {
  return {
    name,
    company,
    position,
    phone,
    email,
    interestedProducts: products.join("、"),
    demand,
  };
}

export async function submitContactUs(payload: ContactUsPayload) {
  const response = await fetch("/system/contact-us", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const text = await response.text();
  let result: { code?: number; msg?: string } = {};

  if (text) {
    try {
      result = JSON.parse(text) as { code?: number; msg?: string };
    } catch {
      if (!response.ok) throw new Error("提交失败");
    }
  }

  if (!response.ok || (typeof result.code === "number" && result.code !== 200)) {
    throw new Error(result.msg || "提交失败");
  }
}
