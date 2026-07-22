import Image from "next/image";
import { ProductBreadcrumb } from "@/components/product-breadcrumb";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const positioning = [
  ["1", "过去：手工驱动", "依赖人工在海外搜寻线索、名单，草拟邮件，质量不稳定且过程难复盘。"],
  ["2", "现在：AI 驱动", "AI 智能体按理想客户画像 (ICP) 自动发现、精准评分、深度调研并生成个性化触达建议。"],
  ["3", "客户收益：增长资产", "更快速、成体系地建立目标线索池，更清楚优先跟进谁、凭什么去沟通。"],
];

const flows = [
  ["flow-portrait.png", "画像驱动", "个性化精确定义目标客户画像"],
  ["flow-search.png", "全网扫描", "24h不间断全网扫描与行为分析"],
  ["flow-chat.png", "持续响应", "全天候响应跨时区业务不中断"],
  ["flow-cycle.png", "闭环运营", "获客到成交效果可追踪可复盘"],
];

const capabilities = [
  ["1", "ICP 建模：客户画像数据模型化", "根据目标客户经验，AI智能体将行业、国家/地区、产品场景、采购信号与负向因子、排除规则等拆解为可执行的数据模型，统一团队客户标准。"],
  ["2", "线索发现与评分：从“更多名单”到“更值得跟进”", "通过多源挖掘（行业协会/展会/官网等）、数据清洗富化、NLP语义意图识别，及多维度数据驱动的自进化评分排序（画像匹配、可触达数据、采购信号等），输出优先级客户线索池。"],
  ["3", "客户洞察：公开信号转为高价值情报", "整合官网动态、行业新闻、招聘、社媒、招投标等多源信息，分钟级自动生成战略背景（扩产/融资/供应链等）、采购信号、决策人线索与定制切入建议的尽调报告。"],
  ["4", "个性化触达：保持客户语境，杜绝群发噪音", "基于客户洞察、业务规则 and 本地化语境，一键生成符合业务语境的邮件 / LinkedIn等高度个性化内容，支持多变量、语气微调和多轮多触点跟进，状态可追踪。"],
  ["5", "转化与集成：销售能力沉淀与全链路闭环", "将AI获客Harness深度接入企业知识、业务系统（CRM、邮箱、LinkedIn）以及提供数据可见性分析，实现过程留痕、ROI评估与销售流程的可管理、可复制、可复用。"],
];

const proofRows = [
  ["效率价值", "调研耗时、第一声响应时间、日均处理线索数"],
  ["获客价值", "有效线索量、线索单价、正向回复率、商机创建率"],
  ["管理价值", "CRM 字段完整率、跟进动作留痕率、规则覆盖率"],
  ["知识价值", "新人培训与查询耗时、话术复用率、方案一致性"],
  ["风险价值", "重复触达率、负面回复率、操作权限审计完整性"],
  ["技术价值", "业务稳定性、同步时延、系统整体可用度"],
];

const scenarios = [
  ["capability-search.svg", "出海目标客户发现", "适合 销售 / 市场 / BD 阶段", "有效线索量与占比、商机创建率"],
  ["capability-data.svg", "目标客户尽调报告", "适合 售前 / 解决方案 阶段", "调研与报告撰写时长、复用率"],
  ["capability-chat.svg", "客户咨询自动应答", "适合 官网 / 邮件 / 社媒 互动", "首响时间、问题解决率"],
  ["capability-email.svg", "销售线索跟进辅助", "适合 销售代表 / 主管 日常", "跟进及时率、意图识别准确率、内容针对性"],
  ["capability-globe.svg", "企业知识智能检索", "适合 新人销售 / 渠道 培训", "查询耗时、培训周期"],
  ["capability-workflow.svg", "经营数据分析", "适合 销售管理层决策", "数据整理与生成时长、决策周期"],
];

export default function SalesInPage() {
  return (
    <>
      <SiteHeader />
      <main className="sales-in-page">
        <ProductBreadcrumb name="Sales in" description="AI 出海获客 Agent—客户线索数据挖掘与筛选，交付高意向客户线索。" />

        <section className="sales-in-hero">
          <div className="sales-in-shell">
            <h1>
              <span>出海企业的 AI 销售 Harness</span>
              <em>让获客到成交的每一步都可衡量、可复制</em>
            </h1>
            <p className="sales-in-hero__lead">
              客户得到的不只是工具，而是一套出海销售增长工作流。从获客到成交推进，让团队减少重复劳动，把精力投向高价值客户沟通与转化。通过高质量线索、客户洞察、个性化触达、销售转化，让出海销售全链闭环运作。
            </p>

            <div className="sales-in-contrast">
              <article className="sales-in-contrast__past">
                <div className="sales-in-contrast__tag">
                  <Image src="/images/sales-in/past-icon.png" alt="" width={40} height={40} />
                  <span>过去</span>
                </div>
                <h2>低效人工方式</h2>
                <p>依赖人工在海外搜寻线索、名单、挨个排查官网资料、草拟冷邮件或者社媒信息，效率低下、获客质量随人员状态发生波动，拓客过程、数据无法沉淀和复盘。</p>
              </article>
              <article className="sales-in-contrast__current">
                <div className="sales-in-contrast__tag">
                  <Image src="/images/sales-in/current-icon.png" alt="" width={40} height={40} />
                  <span>现在</span>
                </div>
                <h2>Agent全网多维自动挖掘</h2>
                <p>AI 按理想客户画像 (ICP) 自动全网挖掘信息、自动筛选、多维验证、多维评分、深度搜集采购情报并生成千人千面个性化触达，更清楚该优先跟进谁、怎么去谈，获客效率极度跃迁。</p>
              </article>
            </div>
          </div>
        </section>

        <section className="sales-positioning sales-section"><div className="sales-in-shell">
          <div className="sales-section-pill">一图读懂产品定位</div>
          <div className="sales-positioning-grid">{positioning.map(item => <article key={item[0]}><b>{item[0]}</b><h2>{item[1]}</h2><p>{item[2]}</p></article>)}</div>
        </div></section>

        <section className="sales-flow sales-section"><div className="sales-in-shell">
          <h2 className="sales-centered-kicker">重构关键业务流</h2>
          <div className="sales-flow-grid">{flows.map(item => <article key={item[1]}><Image src={`/images/sales-in/${item[0]}`} alt="" width={56} height={56}/><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>
        </div></section>

        <section className="sales-capabilities sales-section"><div className="sales-in-shell">
          <h2 className="sales-heading"><Image src="/images/sales-in/core-heading.png" alt="" width={40} height={40}/>核心产品能力</h2>
          <div className="sales-capability-grid">{capabilities.map(item => <article key={item[0]}><small>核心能力 {item[0]}</small><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>
          <article className="sales-difference"><h2><span><Image src="/images/sales-in/difference-star.svg" alt="" width={20} height={20}/></span>差异化竞争力：五大可运营、可治理、可进化的闭环能力</h2><div><ul><li>ICP 规则可配置：用业务语言描述目标客户，沉淀为可复用筛选规则</li><li>客户洞察可复核：基于公开信号和客户资料生成可追溯调研初稿</li><li>评分模型可进化：按行业、区域、意向、角色等维度持续优化权重</li></ul><ul><li>触达动作可追踪：邮件、LinkedIn、CRM 状态统一记录，避免资产流失</li><li>系统边界可治理：权限、审计、人工确认与本地化接入适配企业要求</li></ul></div></article>
          <article className="sales-ai-note"><h2><span><Image src="/images/sales-in/ai-compare-pen.svg" alt="" width={20} height={20}/></span>与普通 AI 聊天工具相比</h2><p>不是一次性使用，而是能持续沉淀客户画像、过程数据和获客方法 —— 把出海获客流程做成可管理、可复制、可复用、可进化的运营体系。</p></article>
        </div></section>

        <section className="sales-value sales-section"><div className="sales-in-shell">
          <p className="sales-kicker sales-kicker--icon"><span><Image src="/images/sales-in/position-result.svg" alt="" width={18} height={18}/></span>产品价值</p><h2 className="sales-title">产品价值与实效指标归因</h2><p className="sales-lead">价值指标：把出海获客从「碰运气」变成「可经营的增长资产」。四大引擎可共享客户画像、知识库与数据回流，越用越懂您的业务，沉淀为企业可持续、可进化的获客能力。</p>
          <div className="sales-metrics"><article className="active"><strong>7×24</strong><span>全天候跨时区获客，商机 24 小时不漏接</span></article><article><strong>500%+</strong><span>触达效率较人工提升，通联成本降至 30%~60%</span></article><article><strong>-70%~-90%</strong><span>内容与调研生产周期大幅压缩，分钟级成稿</span></article><article><strong>1 → N</strong><span>一份知识资产循环产出线索、内容与品牌曝光</span></article></div>
          <div className="sales-value-cards"><article><h3><span><Image src="/images/sales-in/capability-search.svg" alt="" width={18} height={18}/></span>获客价值 · 线索更准、更可解释</h3><p>以 ICP 模型 + 多维评分替代冷名单，输出可解释、可筛选、可复盘的优先级线索池；正向回复率、商机创建率全程可量化。</p></article><article><h3><span><Image src="/images/sales-in/capability-workflow.svg" alt="" width={18} height={18}/></span>经营价值 · 销售能力沉淀与复制</h3><p>画像、话术、模板、评分规则与过程数据持续沉淀，复刻销冠经验；人员流动不再带走客户资产，新人快速上手。</p></article><article><h3><span><Image src="/images/sales-in/capability-data.svg" alt="" width={18} height={18}/></span>增长价值 · ROI 可衡量、可优化</h3><p>线索量、回复率、转化率统一看板复盘，按 POC 指标验证效果；支持按意向线索量 / 回款结果付费，利益深度对齐。</p></article></div>
        </div></section>

        <section className="sales-proof sales-section"><div className="sales-in-shell"><h2><span><Image src="/images/sales-in/capability-data.svg" alt="" width={18} height={18}/></span>价值验证：用客户可验收的指标证明产品效果 (POC 指标体系)</h2><div className="sales-table"><div><b>验证维度</b><b>建议考核指标</b></div>{proofRows.map(r=><div key={r[0]}><strong>{r[0]}</strong><span>{r[1]}</span></div>)}</div></div></section>

        <section className="sales-industry sales-section"><div className="sales-in-shell"><p className="sales-kicker orange sales-kicker--icon"><span><Image src="/images/sales-in/capability-data.svg" alt="" width={18} height={18}/></span>商业实效</p><h2 className="sales-title">行业痛点对碰与 AI 改变</h2><p className="sales-lead">我们深知您最需要的不是“更多数据”，而是更准的意向客户、更快的价值判断和更科学的销售动作。</p><div className="sales-change"><article><h3><span><Image src="/images/sales-in/problem-warning.svg" alt="" width={16} height={16}/></span>行业当前痛点</h3><ul><li>名单多但有效性低，销售时间被无效客户消耗</li><li>客户背景分散在官网、新闻、招聘和社媒，调研慢</li><li>触达内容缺少个性化、针对性，海外客户回复率不稳定</li><li>优秀销售经验只在个人手里，新人复制难</li></ul></article><article><h3><span><Image src="/images/sales-in/position-result.svg" alt="" width={16} height={16}/></span>Sales in 带来的改变</h3><ul><li>以 ICP 规则自动筛选和评分，优先输出高匹配账户</li><li>生成客户洞察与采购信号，帮助销售快速判断切入点</li><li>基于客户情境生成针对性邮件 / LinkedIn 内容，支持多轮跟进</li><li>沉淀画像、话术、模板、评分规则和 CRM 过程数据</li></ul></article></div></div></section>

        <section className="sales-scenes sales-section"><div className="sales-in-shell"><p className="sales-kicker purple sales-kicker--icon"><span><Image src="/images/sales-in/capability-globe.svg" alt="" width={18} height={18}/></span>落地场景</p><h2 className="sales-title">优先落地场景：从解放业务中的脏活、累活场景开始</h2><p className="sales-lead">先选择高频、重复、可衡量、数据可接入、人工复核明确的销售场景（筛选标准：高频 | 重复 | 可接入 | 可量化）。</p><div className="sales-table scenes"><div><b>落地场景</b><b>适用角色</b><b>可衡量指标 / 解决的问题</b></div>{scenarios.map(r=><div key={r[1]}><strong><span><Image src={`/images/sales-in/${r[0]}`} alt="" width={16} height={16}/></span>{r[1]}</strong><span>{r[2]}</span><span>{r[3]}</span></div>)}</div><h3 className="sales-subtitle">典型落地场景示例</h3><div className="sales-examples"><article><Image className="sales-example-icon" src="/images/sales-in/case-shopping.svg" alt="" width={20} height={18}/><small>场景一</small><h3>出海目标客户发现，从名单采购转向意向识别</h3><p>适合需要持续开发海外客户的外贸、跨境 B2B、制造业等。通过 1.创建ICP模型 → 2.扫描 → 3.评分 → 4.交付 → 5.跟进。收益包括减少无效名单和低质量跟进，销售精力向高匹配度客户集中，建立多维度市场情报反馈体系。</p></article><article><Image className="sales-example-icon" src="/images/sales-in/case-laptop.svg" alt="" width={23} height={18}/><small>场景二</small><h3>客户互动与跟进，让专业响应不再只依赖少数专家</h3><p>适合产品复杂、售前资源紧张、跨时区咨询频繁的销售团队。人机协同响应，业务关键节点人工接管。支持调用企业知识库、客户调研报告、历史成功话术，生成问答建议、方案初稿、跟进邮件等，实现首响更快、知识更准、方案更稳、培训更省。</p></article></div></div></section>

        <section className="sales-cooperation sales-section"><div className="sales-in-shell"><p className="sales-kicker red">合作模式</p><h2 className="sales-title">灵活多元的合作模式</h2><p className="sales-lead">按实际意向线索量付费，利益深度对齐。先用真实样本验证，再扩大场景；用数据说话，而不是用概念承诺。</p><div className="sales-table scenes"><div><b>合作服务模式</b><b>付费结算方式</b><b>最契合对应客户画像</b></div><div><strong>轻量 POC 验证</strong><span>按 POC 指标采集验收，真实样本数据说话，低门槛启动</span><span>适合想要先以小成本快速验证出海获客效果或售前支持的成长型企业</span></div><div><strong>系统化规模推广</strong><span>按意向线索量 / 回款结果付费，支持利益深度对齐</span><span>适合已有 CRM、系统邮箱、知识库和社媒 LinkedIn 基础的成熟型出海团队</span></div><div><strong>私有化与本地化部署</strong><span>提供一次性买断、本地部署运维、或者按阶段里程碑交付</span><span>适合对数据主权、隔离安全和定制边界有极高合规审计需求的大型出海集团</span></div></div><h3 className="sales-subtitle">落地路径：先验证一个流程，再扩展成销售智能体能力</h3><div className="sales-paths">{[["路径一 · 第一步","业务场景梳理","用 2-4 周 POC 快速证明价值，通过真实样本定义验收指标，梳理现有获客难点。"],["路径一 · 第二步","构建ICP模型并试点","基于现有成功客群数据，提炼并配置结构化 ICP 建模与过滤规则，进行小范围高敏开发。"],["路径二 · 第三步","系统集成与配置","通过验收后，将获客 Harness 接入 CRM 系统、企业邮箱及 LinkedIn，配置人工确认与安全审核边界。"],["路径二 · 第四步","规模化运营与进化","正式上线测试并进入常态化运作，持续积累用户行为反馈并回写评分模型、开发话术。"]].map(x=><article key={x[0]}><small>{x[0]}</small><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div><article className="sales-final-note"><h3>落地建议与指引：为什么选择灵宸 Sales in？</h3><p><b>1. 结果导向：</b>聚焦可衡量的销售结果，交付高质量线索池与商机增量，而非又一个数据工具。</p><p><b>2. 合规安全：</b>尊重各地数据与触达合规，全程可追溯、可复核，守护出海品牌长期声誉。</p><p><b>3. 全链路闭环：</b>ICP、线索、洞察、触达、CRM 回写一体，从找客户到成交持续沉淀客户资产。</p><p>让每一次出海客户连接，都高效、合规地转化为可持续增长。</p></article></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
