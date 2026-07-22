import { mkdir, readFile, writeFile } from "node:fs/promises";

const sourcePath = new URL("../design-baselines/customer-cases/prototype-evidence/products-all.txt", import.meta.url);
const outputPath = new URL("../data/customer-cases.prototype.json", import.meta.url);
const ledgerPath = new URL("../design-baselines/customer-cases/prototype-content-ledger.md", import.meta.url);
const products = ["Sales in", "Social Grow", "Mine GEO", "AI获客Harness", "Recov AI", "DeepDoc", "DeepLaw"];
const domains = ["AI出海获客", "AI不良资产处置", "AI法律获客与工作流"];
const lines = (await readFile(sourcePath, "utf8"))
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean);

let cursor = lines.findIndex((line, index) => line === "Sales in" && lines[index + 1] === "(部分案例)");
const cases = [];
let product = "";

const expect = (value) => {
  if (lines[cursor] !== value) {
    throw new Error(`Expected “${value}” at line ${cursor + 1}, got “${lines[cursor]}”`);
  }
  cursor += 1;
};

while (cursor < lines.length) {
  if (products.includes(lines[cursor]) && lines[cursor + 1] === "(部分案例)") {
    product = lines[cursor];
    cursor += 2;
    continue;
  }

  const domain = lines[cursor];
  if (!domains.includes(domain)) {
    throw new Error(`Expected domain at line ${cursor + 1}, got “${domain}”`);
  }
  cursor += 1;

  const title = lines[cursor++];
  if (!/^\d{2} 案例名称：/.test(title)) {
    throw new Error(`Expected case title at line ${cursor}, got “${title}”`);
  }
  const summaryLine = lines[cursor++];
  if (!summaryLine.startsWith("摘要 ")) {
    throw new Error(`Expected summary at line ${cursor}, got “${summaryLine}”`);
  }

  expect("客户介绍");
  const customerIntroduction = lines[cursor++];
  expect("业务挑战");
  const challenges = [];
  while (lines[cursor] !== "我们如何解决的") challenges.push(lines[cursor++]);
  expect("我们如何解决的");
  const solutionLead = lines[cursor++];
  const solutions = [];
  while (lines[cursor] !== "落地成效与价值") solutions.push(lines[cursor++]);
  expect("落地成效与价值");
  expect("样本口径");
  const sampleScope = lines[cursor++];
  expect("指标");
  expect("上线前基线");
  expect("上线后结果");
  expect("变化");

  const resultCells = [];
  while (lines[cursor] !== "关联 AI 产品：") resultCells.push(lines[cursor++]);
  expect("关联 AI 产品：");
  const resultSummary = resultCells.pop();
  if (resultCells.length % 4 !== 0) {
    throw new Error(`Result table for “${title}” has ${resultCells.length} cells`);
  }
  const results = [];
  for (let index = 0; index < resultCells.length; index += 4) {
    results.push(resultCells.slice(index, index + 4));
  }

  const relatedProducts = [lines[cursor++]];
  cases.push({
    product,
    domain,
    title,
    summary: summaryLine.slice(3),
    customerIntroduction,
    challenges,
    solutionLead,
    solutions,
    sampleScope,
    results,
    resultSummary,
    relatedProducts,
  });
}

if (cases.length !== 16) throw new Error(`Expected 16 prototype cases, parsed ${cases.length}`);
await mkdir(new URL("../data/", import.meta.url), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(cases, null, 2)}\n`);
const ledgerRows = cases.map((item, index) => {
  const fieldCount = 7 + item.challenges.length + item.solutions.length + (item.results.length * 4) + item.relatedProducts.length;
  return `| PC-${String(index + 1).padStart(2, "0")} | ${item.product} | ${item.domain} | ${item.title.replaceAll("|", "\\|")} | ${item.challenges.length} | ${item.solutions.length} | ${item.results.length} | ${fieldCount} | PASS |`;
});
await writeFile(ledgerPath, `# 原型客户案例内容台账\n\n来源：AI Studio 原型按产品 → 全部，提取日期 2026-07-21。原始逐字证据：\`prototype-evidence/products-all.txt\`。\n\n| ID | 产品 | 领域 | 原型逐字标题 | 挑战条数 | 方案条数 | 指标行数 | 已核对字段数 | 状态 |\n|---|---|---|---|---:|---:|---:|---:|---|\n${ledgerRows.join("\n")}\n\n校验规则：每个案例均逐项保留标题、摘要、客户介绍、挑战列表、解决方案导语及列表、样本口径、四列表格、成效总结和关联产品；解析器遇到字段缺失、表格非四列或案例总数非 16 时直接失败。\n`);
console.log(`Generated ${cases.length} cases at ${outputPath.pathname}`);
