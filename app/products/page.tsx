import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const products = [
  {
    category: "AI出海获客",
    capability: "-客户线索数据挖掘与筛选",
    type: "Agent",
    name: "Sales in",
    result: "交付高意向客户线索",
    description: "把出海获客中的低效消耗，变为Agent化的客户线索数据挖掘与筛选，让出海获客从低效、碰运气变为可经营、可持续的稳定、高效获客体系。",
    scope: "出海",
    href: "/products/sales-in/",
  },
  {
    category: "AI出海获客",
    capability: "-内容营销与流量孵化",
    type: "Agent",
    name: "Social Grow",
    result: "交付品牌曝光、流量孵化与高意向客户线索",
    description: "内容生产与全域分发Agent，把沉淀的专业知识，分钟级、低成本、高并发的变成全网图文与短视频内容矩阵，7×24小时孵化公域流量与高意向客户线索。",
    scope: "出海·国内",
    href: "/products/social-grow/",
  },
  {
    category: "AI出海获客",
    capability: "-大模型流量入口",
    type: "Agent",
    name: "Mine GEO",
    result: "交付品牌在大模型中的曝光率、推荐率与高意向客户线索",
    description: "生成式搜索引擎优化(GEO)获客 Agent，把品牌在 AI 答案中偶发的引用、推荐，可衡量、可持续地变成稳定的可见度、推荐率与正向口碑，抢占大模型时代的获客新入口。",
    scope: "出海·国内",
    href: "/products/mine-geo/",
  },
  {
    category: "AI出海获客",
    capability: "-高并发智慧触达与筛选、转化",
    type: "Agent",
    name: "AI获客Harness",
    result: "交付高意向客户线索",
    description: "语音、邮件、短信三引擎协同的全场景销售 AI 获客 Harness，把机械群发变成千人千面的智慧触达与线索筛选，让每一次客户连接更高效、更精准、更有温度。",
    scope: "出海·国内",
    href: "/products/ai-acquisition-harness/",
  },
  {
    category: "AI出海风控",
    capability: "-跨境单证智能审核",
    type: "AI工具",
    name: "DeepDoc",
    result: "跨境业务效率提升，跨境单证风险损失降低",
    description: "将每一笔跨境交易中国际单证从人工审单，变成大模型时代的双校验AI柔性审核，构建具备递归进化能力的出海跨境单证智能审核大脑。",
    scope: "出海",
    href: "/products/deepdoc/",
  },
  {
    category: "AI不良资产处置",
    capability: "-批量不良资产业务处置",
    type: "Agent",
    name: "Recov AI",
    result: "提升企业服务水准，交付现金流回款结果",
    description: "全国首个全链路、自进化、多智能体协作的批量不良资产处置智能体，把逾期资产，高效、合规地变成企业现金流，助力信用中国建设。",
    scope: "国内",
    href: "/products/recov-ai/",
  },
  {
    category: "AI 法律 Agent",
    capability: "-案件拓展与法律工作流",
    type: "Agent",
    name: "DeepLaw",
    result: "交付案源流量孵化体系、高意向案件线索与法律工作流",
    description: "法律人的AI Agent，把碰运气式的案源拓展与重复的办案文字工作，变成可持续经营的案源拓展能力体系，做法律人的“AI市场部+运营部+办案中心”。",
    scope: "国内·出海",
    href: "/products/deeplaw/",
  },
];

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="product-matrix-page">
        <h1 className="product-matrix-title">产品矩阵</h1>
        <div className="shell product-matrix-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-card__meta">
                <span className="product-card__tag">{product.category}</span>
                <span className="product-card__capability">{product.capability}</span>
                <span className="product-card__type">{product.type}</span>
              </div>
              <h2>{product.name}</h2>
              <p className="product-card__result">{product.result}</p>
              <p className="product-card__description">{product.description}</p>
              <footer className="product-card__footer">
                <span>适用范围： <strong>{product.scope}</strong></span>
                {product.href ? (
                  <Link href={product.href} aria-label={`查看 ${product.name} 详细产品介绍`}>
                    查看详细产品介绍 <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                ) : (
                  <span className="product-card__unlinked">查看详细产品介绍</span>
                )}
              </footer>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
