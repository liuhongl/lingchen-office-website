import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const page = process.argv[2];

if (!page) {
  console.error("用法: pnpm mastergo:check <page-slug>");
  process.exit(2);
}

const root = join(process.cwd(), "design-baselines", page);
const requiredFiles = [
  "scope.md",
  "content-ledger.md",
  "visual-ledger.md",
  "seo-geo-validation.md",
  "final-validation.md",
];
const errors = [];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) errors.push(`缺少 ${file}`);
}

if (errors.length === 0) {
  const scope = readFileSync(join(root, "scope.md"), "utf8");
  const content = readFileSync(join(root, "content-ledger.md"), "utf8");
  const visual = readFileSync(join(root, "visual-ledger.md"), "utf8");
  const seoGeo = readFileSync(join(root, "seo-geo-validation.md"), "utf8");
  const validation = readFileSync(join(root, "final-validation.md"), "utf8");
  const files = readdirSync(root);

  const hasMasterGoPageId = /page_id[^\n]*`?[^`\s]+/i.test(scope);
  const hasDeclaredVisualSource = /视觉真源[^\n]*\S+/i.test(scope);
  if (!hasMasterGoPageId && !hasDeclaredVisualSource) errors.push("scope.md 缺少 page_id 或明确视觉真源");
  if (!/内容真源[^\n]*\S+/i.test(scope)) errors.push("scope.md 缺少明确内容真源");
  if (!/目标桌面视口[^\n]*\d+\s*[×x]\s*\d+/i.test(scope)) errors.push("scope.md 缺少明确桌面视口");
  if (/\bBLOCKED\b|待核对|未完成/.test(content)) errors.push("content-ledger.md 仍有 BLOCKED/待核对/未完成");
  if (/\bBLOCKED\b|待核对|未完成/.test(visual)) errors.push("visual-ledger.md 仍有 BLOCKED/待核对/未完成");
  if (/\bBLOCKED\b/.test(seoGeo)) errors.push("seo-geo-validation.md 仍有 BLOCKED");
  if (!/canonical URL[^\n]*https?:\/\//i.test(seoGeo)) errors.push("seo-geo-validation.md 缺少正式 canonical URL");
  if (/未通过|未运行|待完成/.test(validation)) errors.push("final-validation.md 仍有未通过/未运行/待完成");
  const hasPixelPass = /\[x\]\s*1:1 验证通过/i.test(validation);
  const hasContentMigrationPass = /\[x\]\s*内容完整迁移通过/i.test(validation);
  const hasCalibratedUserOverride =
    /\[x\]\s*已视觉校准/i.test(validation) &&
    /用户确认[\s\S]*(覆盖|例外|替换)/i.test(scope);
  if (!hasPixelPass && !(hasContentMigrationPass && hasCalibratedUserOverride)) {
    errors.push("final-validation.md 未勾选 1:1 验证通过，且没有内容完整迁移与已登记用户覆盖的视觉校准结论");
  }
  if (!files.some((file) => /(mastergo|prototype|visual-source).*\.png$/i.test(file))) errors.push("缺少内容或视觉真源 PNG 基线");
  if (!files.some((file) => /local.*\.png$/i.test(file))) errors.push("缺少本地同视口 PNG 截图");
  if (!files.some((file) => /(comparison|diff).*\.png$/i.test(file))) errors.push("缺少 comparison/diff PNG");
}

if (errors.length > 0) {
  console.error(`MasterGo 证据门禁未通过: ${page}`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`MasterGo 证据门禁通过: ${page}`);
