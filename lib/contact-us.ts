export type ContactUsPayload = {
  name: string;
  company: string;
  phone: string;
  demand: string;
};

export const contactProducts = [
  ["Sales In", "AI出海获客"],
  ["Social Grow", "内容营销增长"],
  ["Kine CEO", "大模型流量入口"],
  ["AI获客Harness", "海外获客智能触达"],
  ["Recov AI", "不良资产处置"],
  ["DeepDoc", "跨境单证智能审核"],
  ["DeepLan", "案件拓展与法律工作流"],
] as const;

export function buildContactDemand({
  role,
  email,
  products,
  message,
}: {
  role: string;
  email: string;
  products: string[];
  message: string;
}) {
  return [
    role && `职位 / 部门：${role}`,
    email && `联系邮箱：${email}`,
    products.length > 0 && `意向产品：${products.join("、")}`,
    message && `需求描述：${message}`,
  ]
    .filter(Boolean)
    .join("\n");
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
