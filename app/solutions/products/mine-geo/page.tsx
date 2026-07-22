import Image from "next/image";
import { BookingTrigger } from "@/components/booking-trigger";

const capabilities = [
  ["capability-diagnosis.png", "诊断", "AI 可见度、推荐率、引用来源。持续监测品牌在主流 AI 平台中是否被提及、是否被推荐、排在什么位置、AI 引用了哪些来源以及情感倾向。"],
  ["capability-governance.png", "治理", "标准事实与知识资产统一。将企业标准事实、客户案例、FAQ、权威报告、专家/IP 内容沉淀为可治理知识库资产，减少信息缺口、表达偏差与口径不一致。"],
  ["capability-creation.png", "创作", "PR、FAQ、脚本与关键词策略。围绕用户搜索意图与 AI 引用逻辑，生成多版本 PR 稿、FAQ、摘要、短视频脚本与关键词埋点策略，提升内容生产效率与可采纳性。"],
  ["capability-distribution.png", "分发", "权威页面、媒体、公域触点。一键多平台群控、定时排程，让经过审核的事实包进入官网、公域页面、媒体与资料库等适合 AI 采纳的信源渠道。"],
  ["capability-monitoring.png", "监控", "指标追踪与持续迭代。对提及率、推荐率、Top 3 占比、平均排名、信源引用质量及错误/负向回答占比等指标进行长期自进化追踪与复盘迭代。"],
] as const;

const pains = [
  {
    challenge: "【品牌 AI 可见度审计与竞品对比】 AI 答案分散且变化快，依靠人工试问无法形成稳定判断；品牌也极易被竞品替代推荐，或因公开资料不足导致无法被准确引用。",
    solution: "【问题集 ➔ 平台矩阵 ➔ 指标输出 ➔ 优化建议】工作流。 出具品牌提及率、推荐率、Top 3 占比、平均排名、信源引用质量及情感倾向画像。形成 AI 答案入口基线，识别优先优化的平台、问题和信源。",
  },
  {
    challenge: "【售前资料与公关内容自动生成】 产品资料繁多、版本更新复杂、客户重复提问高频，导致多业务团队对外宣发和公关的口径一致性低，资料准备耗时极长。",
    solution: "【企业事实层 ➔ 客户问题层 ➔ 内容资产层 ➔ 审核分发层】闭环流程。 一键将企业标准事实（产品定义、边界、案例）转化为高品质 PR 稿、FAQ、销售话术、脚本和摘要，保障口径一致，缩短改稿时间。",
  },
  {
    challenge: "【AI 口碑与风险表述治理】 需应对 AI 频现的错误事实表述、负向情绪倾向、来源失控、口径不一等可能损害品牌形象及法务合规的问题。",
    solution: "【发现偏差 ➔ 补齐事实 ➔ 审核追溯】闭环口碑治理机制。 监测并捕捉错误/负向回答偏差，定向补齐标准事实并优化发布信源，大幅降低错误/负向回答占比，缩短偏见纠正与更新周期。",
  },
] as const;

const contentStudioSteps = [
  ["意图洞察", "客户如何提问/比较和表达意图"],
  ["内容策略", "明确事实/证据/案例与差异化观点"],
  ["多版本生成", "PR/FAQ/摘要/脚本与销售话术"],
  ["关键词埋点", "品牌词/场景词/行业词自然表达"],
  ["审核微调", "事实/语气/合规与发布路径确认"],
  ["发布素材", "同步至官网/公域页面/媒体与资料库等信源"],
] as const;

const lifecycleSteps = [
  ["阶段 1. 业务场景", "明确品牌/产品线、目标平台、验收指标"],
  ["阶段 2. 知识接入", "导入资料、案例、FAQ、权威来源"],
  ["阶段 3. 内容执行", "生成、审核、发布、记录"],
  ["阶段 4. 效果复盘", "分析收录率、可见度、推荐率、引用源、情感倾向"],
  ["持续运营，周期滚动。", ""],
] as const;

const advantages = [
  ["advantage-platforms.png", "国内外主流 AI 平台统一接入", "全面覆盖 DeepSeek、Kimi、豆包、通义、元宝、ChatGPT、Gemini、Claude、Perplexity 等主流平台，提供统一的数据分析入口。"],
  ["advantage-metrics.png", "统一指标口径", "提供统一问题集、统一指标口径与跨平台高精度横向对比，让品牌在大模型时代下的可见度、推荐度及提及趋势一目了然。"],
  ["advantage-security.png", "权限安全与数据边界", "内置严密的数据边界与访问控制能力，企业私有的标准事实与品牌知识核心不进入公共模型训练池，确保业务数据零污染。"],
] as const;

const outcomeMetrics = [
  ["outcome-response-clock.svg", "↓ 响应时间", "降低系统/团队响应及处理周期"],
  ["outcome-cost.png", "↓ 人工处理量", "大幅省去重复性、低效的人工排查"],
  ["outcome-growth.png", "↑ 知识查询效率", "标准事实快速检索与一致性口径"],
  ["outcome-risk.png", "↑ AI 推荐率", "提升大模型答案中本品牌的提及与推荐"],
] as const;

const outcomeValues = [
  ["outcome-response.png", "效率价值", "批量观测自动整理，替代范围小、不可复现的人工试问；统一问题集和模型矩阵，大幅减少人工重复排查的时间。"],
  ["outcome-cost.png", "成本价值", "通过标准事实（产品定义/案例/FAQ）一次沉淀与结构化知识治理，供多个业务和市场团队无限次复用，大幅降本。"],
  ["outcome-growth.png", "业务价值", "占领 AI 答案这一全新且高转化的客户决策入口，提升本品牌被提及、被推荐与正向描述概率，获取大量精准增量线索。"],
  ["outcome-risk.png", "风险与管理价值", "流程标准化，让发布与效果全程可追溯。有效减少 AI 错误事实、负向倾向与各渠道服务口径不一致风险，主动纠正过时和偏差引用。"],
  ["advantage-platforms.png", "技术价值", "具备优秀的集成能力，支持与企业现有 OA / CRM / API 系统对接，将流量与 AI 答案转化为稳定的 IP 获客和数据资产飞轮。"],
] as const;

const comparisons = [
  ["观测阶段 (人工试问 vs 批量监测)", "范围小、不可复现，口径极其散落依赖个人经验；", "批量监测，通过统一问题集和模型矩阵进行跨平台、多维度、多模型的持续观测。"],
  ["治理阶段 (资料散落 vs 知识治理)", "事实口径多版本并存、资料散落、极易出现口径偏差；", "知识治理，标准事实与企业核心知识资产全部进入结构化资产库，实现事实、口径、引用与版本统一。"],
  ["优化阶段 (单次发稿 vs 持续迭代)", "依靠盲目发公关稿，发布后完全无法知晓是否被 AI 采纳或引用；", "持续迭代，按提及率、推荐率和情感倾向指标进行定向优化与发布，让结果可被追踪、复盘和持续改进。"],
] as const;

const scenarios = [
  ["品牌 AI 可见度审计与竞品对比", "适用对象：品牌&市场部、增长团队、公关团队", "【痛点】AI 答案分散且变化快，品牌可能被竞品替代推荐，或因公开资料不足而无法被准确引用。 【收益】批量监测国内外主流 AI 平台，获得全方位的可见度、推荐率、信源引用质量与情感倾向画像，精准识别优先优化的问题、平台与来源，形成 AI 答案入口基线。"],
  ["售前资料与公关内容自动生成", "适用对象：售前、市场、品牌、公关团队", "【痛点】产品资料多、版本迭代复杂、客户重复问题，跨多团队口径一致性差，资料和 PR 准备繁琐耗时。 【收益】基于结构化标准事实统一事实、口径、版本，自动且快速生成百科、PR 稿、FAQ、销售话术、摘要与短视频脚本，大幅缩短资料准备和改稿时间。"],
  ["AI 口碑与风险表述治理", "适用对象：品牌、公关、法务合规、客户服务团队", "【痛点】AI 面临错误事实表述、负向情绪倾向扩散、来源失控、口径不一致等合规风险与品牌声誉挑战。 【收益】建立 发现偏差 ➔ 补齐事实 ➔ 审核追溯 治理机制，持续追踪错误/负向回答占比与权威引用占比，使风险指标与错误回答占比显著下降。"],
] as const;

const cooperationModes = [
  ["模式 1", "RaaS模式", "适合需要自主管理品牌可见度与内容分发的市场与 PR 团队。", "席位制，按使用量付费。"],
  ["模式 2", "托管运营服务", "适合希望全权委托专家团队进行生成式引擎优化与增量拓客的中大型企业。", "托管服务费 + 绩效指标（如提升提及率/推荐率）挂钩收费。"],
  ["模式 3", "私有化部署 / 专属定制", "适合对数据隐私、数据主权、系统集成有极高合规要求的银行、法律、制造业及集团客户。", "部署及定制开发费用 + 年度维护升级费。"],
] as const;

function ProcessList({ items }: { items: readonly (readonly [string, string])[] }) {
  return <ol className="mgs-prototype-process">{items.map(([title, detail], index) => <li key={title}><span><strong>{title}</strong>{detail && <small>{detail}</small>}</span>{index < items.length - 1 && <b aria-hidden="true">➔</b>}</li>)}</ol>;
}

export default function MineGeoSolutionPage() {
  return (
    <main className="mgs-page">
      <section className="mgs-hero" aria-labelledby="mgs-title">
        <div className="mgs-hero__copy">
          <p className="mgs-hero__eyebrow"><i aria-hidden="true" />产品专项解决方案 · MINE GEO</p>
          <h1 id="mgs-title"><span>Mine GEO</span><strong>智能解决方案</strong></h1>
          <h2 className="mgs-prototype-hero-subtitle">品牌生成式引擎优化与获客 AI Agent</h2>
          <p className="mgs-hero__lead">在大模型时代，帮助企业持续管理品牌在 AI 搜索、AI 聊天和生成式答案中的可见度、推荐率与情感倾向；把新的客户决策入口变成可诊断、可治理、可优化的获客增长体系。</p>
          <p className="mgs-hero__body">让每一家企业都拥有自己的「品牌生成式资产管理与获客运营官」，让品牌进入 AI 的最佳答案。不只是“更快生成内容”，而是围绕 AI 答案入口形成可衡量、可复盘、可持续优化的业务结果，让“被 AI 看见、被 AI 正确理解、被 AI 推荐”从偶然与不可控变成可运营资产，打造品牌的数字护城河。</p>
          <div className="mgs-hero__actions"><BookingTrigger className="mgs-hero__primary">预约产品演示 <span aria-hidden="true">→</span></BookingTrigger></div>
        </div>
      </section>

      <section className="mgs-capabilities" id="mine-geo-capabilities" aria-labelledby="mgs-capabilities-title">
        <div className="mgs-capabilities__heading"><h2 id="mgs-capabilities-title">一、一图读懂 (五大能力 · 一个闭环)</h2></div>
        <div className="mgs-capabilities__grid">
          {capabilities.map(([icon, title, body], index) => <article className={`mgs-capability-card${index === 4 ? " mgs-capability-card--wide" : ""}`} key={title}><Image src={`/images/solutions/mine-geo/${icon}`} alt="" width={56} height={56} /><div><h3>{title}</h3><p>{body}</p></div></article>)}
        </div>
      </section>

      <section className="mgs-pain-points" aria-labelledby="mgs-pain-points-title">
        <div className="mgs-pain-points__heading"><h2 id="mgs-pain-points-title">二、行业困局与核心痛点</h2></div>
        <div className="mgs-pain-points__grid">
          {pains.map((item, index) => <article className={`mgs-pain-card mgs-pain-card--${["red", "orange", "yellow"][index]}`} key={item.challenge}><h4><Image src="/images/social-grow-solution/problem-alert.svg" alt="" width={24} height={24} />传统行业挑战与痛点：</h4><p>{item.challenge}</p><hr /><h4 className="mgs-pain-card__solution"><Image src="/images/social-grow-solution/problem-check.svg" alt="" width={24} height={24} />灵宸 AI 解决方案：</h4><p>{item.solution}</p></article>)}
        </div>
      </section>

      <section className="mgs-flow" aria-labelledby="mgs-flow-title">
        <div className="mgs-flow__heading"><h2 id="mgs-flow-title">三、灵宸重构：核心数字化处理流 (端到端智能闭环)</h2></div>
        <div className="mgs-flow__list">
          <article className="mgs-flow-card mgs-flow-card--blue"><div className="mgs-flow-card__identity"><b>1</b><h3>核心功能一：GEO 审计（看清品牌在 AI 答案中的真实表现）</h3></div><p className="mgs-flow-card__body">通过多平台、多问题、多维指标的持续监测，看清品牌在 AI 答案中的真实表现。追踪本品牌与行业均值的可见度、推荐率、平均排名、来源质量和情感倾向。提供包括 AI 可见度、推荐率、推荐排名（Top 3 / Top 5）以及信源 Tracer 追踪等关键表现画像。</p></article>
          <article className="mgs-flow-card mgs-flow-card--cyan"><div className="mgs-flow-card__identity"><b>2</b><h3>核心功能二：结构化知识库（让 AI 获得准确、一致、可引用的品牌事实）</h3></div><p className="mgs-flow-card__body">将企业标准事实（产品/公司/数据口径）、客户案例（行业实践与交付成果）、FAQ 话术（高频问题与异议处理）以及权威信源内容沉淀为品牌知识核心。通过审核、版本管理、权限及引用追溯等治理动作，减少大模型回答中的信息缺口、表达偏差与口径不一致。</p></article>
          <article className="mgs-flow-card mgs-flow-card--purple"><div className="mgs-flow-card__identity"><b>3</b><h3>核心功能三：AI Content Studio（把品牌事实转化为 AI 采纳的内容资产）</h3></div><p className="mgs-prototype-process-lead">围绕用户搜索意图与 AI 引用逻辑，进行：</p><ProcessList items={contentStudioSteps} /></article>
          <article className="mgs-flow-card mgs-flow-card--green"><div className="mgs-flow-card__identity"><b>4</b><h3>核心功能四：项目生命周期管理（让 GEO 从一次性动作变成品牌资产）</h3></div><p className="mgs-prototype-process-lead">支持多品牌、多项目、目标评分、平台组合、阶段监控与复盘。其生命周期流程为：</p><ProcessList items={lifecycleSteps} /></article>
        </div>
        <p className="mgs-flow__difference"><strong>与孤立工具的区别：</strong>Mine GEO 不是单点的「文案助手」或「剪辑软件」，而是把诊断、治理、创作、分发、监控整条链路自动化的品牌生成式引擎优化与获客 Agent。它将国内外主流 AI 平台统一接入、统一问题集和口径，并内置严密的数据安全边界，确保品牌数据资产私有、合规、零污染。</p>
      </section>

      <section className="mgs-advantages" aria-labelledby="mgs-advantages-title">
        <div className="mgs-advantages__heading"><h2 id="mgs-advantages-title">四、关键竞争优势：多维能力协同，构筑企业专属资产</h2><span>国内外主流 AI 平台多模型矩阵统一接入</span></div>
        <div className="mgs-advantages__grid">{advantages.map(([icon, title, body]) => <article key={title}><Image src={`/images/solutions/mine-geo/${icon}`} alt="" width={56} height={56} /><h3>{title}</h3><p>{body}</p></article>)}</div>
        <article className="mgs-architecture"><h3>Mine GEO 智能系统架构：</h3><ol><li><b>1</b><p>业务应用层：支持品牌审计、竞品对比、售前资料生成、口碑风险治理与经营问答辅助。</p></li><li><b>2</b><p>GEO 能力层：诊断、治理、创作、分发、监控五大能力协同，形成可复盘优化闭环。</p></li><li><b>3</b><p>数据知识层：包含标准事实、客户案例、FAQ、权威报告、专家 / IP 内容与发布记录。</p></li></ol></article>
      </section>

      <section className="mgs-outcomes" aria-labelledby="mgs-outcomes-title">
        <div className="mgs-outcomes__heading"><h2 id="mgs-outcomes-title">五、可交付商业成果与落地价值</h2><span>Mine GEO 的价值不止是“更快生成内容”，而是围绕 AI 答案入口形成可衡量、可复盘、可持续优化的业务结果。通过数据驱动闭环，实现效率、成本、业务、管理、风险、技术六维提升，让品牌在 AI 时代获得高壁垒的数字资产。</span></div>
        <div className="mgs-outcomes__cards">{outcomeMetrics.map(([icon, title, body]) => <article key={title}><Image src={`/images/solutions/mine-geo/${icon}`} alt="" width={64} height={64} /><h3>{title}</h3><p>{body}</p></article>)}</div>
        <div className="mgs-prototype-values">{outcomeValues.map(([icon, title, body]) => <article key={title}><Image src={`/images/solutions/mine-geo/${icon}`} alt="" width={48} height={48} /><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
        <div className="mgs-prototype-comparison"><h3>相比传统方案：从人工试探式优化，升级为数据驱动闭环</h3>{comparisons.map(([title, traditional, mineGeo]) => <article key={title}><h4>{title}</h4><div className="mgs-prototype-comparison__sides"><p className="mgs-prototype-comparison__traditional"><strong>【传统做法】</strong><span>{traditional}</span></p><p className="mgs-prototype-comparison__mine"><strong>【Mine GEO 闭环】</strong><span>{mineGeo}</span></p></div></article>)}</div>
      </section>

      <section className="mgs-scenarios" aria-labelledby="mgs-scenarios-title">
        <div className="mgs-scenarios__heading"><h2 id="mgs-scenarios-title">六、部分应用场景示例</h2><span>通过科学化与数据化的 GEO 治理，让市场、公关、售前与服务团队在生成式答案时代占领高转化的决策前置入口。</span></div>
        <div className="mgs-prototype-scenario-table">
          <div className="mgs-prototype-scenario-head"><span>业务模块 / 场景类型</span><span>核心痛点 / 服务群体</span><span>灵宸智能适配解决方案</span></div>
          <div className="mgs-prototype-scenarios">{scenarios.map(([title, audience, body]) => <article key={title}><h3>{title}</h3><p>{audience}</p><p>{body}</p></article>)}</div>
        </div>
        <h3 className="mgs-prototype-path-title"><span aria-hidden="true"><Image src="/images/sales-in-solution/path-scale.svg" alt="" width={24} height={24} /></span>典型落地路径建议：先见效，再扩展</h3>
        <div className="mgs-prototype-paths">
          <article><h4>快速试点 (4-6 周看到基线与改善)</h4><p>可从可衡量的小场景试点开始，分为四个核心阶段运行： 1. 业务场景梳理：明确具体品牌问题、目标平台和试点指标（如提及率、推荐率、引用来源）。 2. 数据知识接入：导入企业核心资料、案例、FAQ 及权威信源。 3. 小范围试点：选定 1 个核心产品线或品牌进行集中优化。 4. 效果复盘：持续观测 AI 平台中的提及率、推荐率、来源和情感倾向变化，评估基线并实现指标改善。</p></article>
          <article><h4>见效后扩展 (规模化运营与组织协同)</h4><p>见效后扩展至多品牌、多平台、多场景规模化运营： 1. 灵活的运营方式：支持 RaaS 托管、本地部署或专业代运营，实现品牌资产与获客体系长期滚动。 2. 组织高效协同：促使市场、销售、客服与公关等多部门口径无缝协同，通过数据飞轮越用越懂业务。</p></article>
        </div>
      </section>

      <section className="mgs-cooperation" aria-labelledby="mgs-cooperation-title">
        <div className="mgs-cooperation__heading"><h2 id="mgs-cooperation-title">七、合作模式</h2><span>提供安全、可控、可量化结果且可逐步推广的企业级 AI Agent 落地机制。</span></div>
        <div className="mgs-cooperation__grid">{cooperationModes.map(([label, title, description, payment], index) => <article className={`mgs-cooperation-card mgs-cooperation-card--${["blue", "purple", "green"][index]}`} key={label}><b className="mgs-cooperation-card__badge">{label}</b><h3>{title}</h3><p>{description}</p><div className="mgs-prototype-payment"><strong>付费方案：</strong><p>{payment}</p></div></article>)}</div>
      </section>

      <section className="mgs-closing" aria-labelledby="mgs-closing-title"><h2 id="mgs-closing-title">大模型时代·Mine GEO-品牌生成式引擎优化与获客AI Agent</h2><p>帮助企业持续管理品牌在 AI 搜索、AI 聊天和生成式答案中的可见度、推荐率与情感倾向；<br />把新的客户决策入口变成可诊断、可治理、可优化的获客增长体系。</p></section>
    </main>
  );
}
