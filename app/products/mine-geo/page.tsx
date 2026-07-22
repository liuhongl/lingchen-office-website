import Image from "next/image";
import { ProductBreadcrumb } from "@/components/product-breadcrumb";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function MineGeoPage() {
  return (
    <>
      <SiteHeader />
      <main className="mine-geo-page">
        <ProductBreadcrumb compact name="Mine GEO" description="AI 出海获客 Agent—大模型流量入口，交付品牌在大模型中的曝光率、推荐率与高意向客户线索。" />
        <section className="mine-geo-hero">
          <div className="mine-geo-shell">
            <h1>品牌生成式引擎优化与获客 AI Agent</h1>
            <p>在大模型时代，帮助企业持续管理品牌在 AI 搜索、AI 聊天和生成式答案中的可见度、推荐率与情感倾向；把新的客户决策入口变成可诊断、可治理、可优化的获客增长体系。</p>
            <p>让每一家企业都拥有自己的「品牌生成式资产管理与获客运营官」，让品牌进入 AI 的最佳答案。不只是“更快生成内容”，而是围绕 AI 答案入口形成可衡量、可复盘、可持续优化的业务结果，让“被 AI 看见、被 AI 正确理解、被 AI 推荐”从偶然与不可控变成可运营资产，打造品牌的数字护城河。</p>
            <div className="mine-geo-contrast">
              <article className="mine-geo-past"><h2><Image src="/images/mine-geo/past-icon@3x.png" alt="" width={40} height={40}/>传统 SEO / 竞价时代</h2><p>流量入口正在从搜索结果页迁移到 AI 答案。过去企业优化网页排名和信息曝光，用户在成百上千网页中自己搜索、人工比对，品牌只能被动等待曝光且难以下手改善表现。</p></article>
              <article className="mine-geo-current"><h2><Image src="/images/mine-geo/current-icon@3x.png" alt="" width={40} height={40}/>Mine GEO 智能治理时代</h2><p>用户直接向 AI 询问“哪家更适合、有什么风险、是否值得购买”。通过 Mine GEO 的诊断、治理、创作、分发、监控闭环，持续管理品牌在大模型中的可见度、推荐率与情感倾向，把新的决策入口变成可控获客资产。</p></article>
            </div>
          </div>
        </section>
        <section className="mine-geo-core-loop">
          <div className="mine-geo-shell">
            <header><h2>五大能力 · 一个闭环</h2></header>
            <div className="mine-geo-five-grid">
              <article><i>1</i><h3>诊断</h3><p>AI 可见度、推荐率、引用来源。持续监测品牌在主流 AI 平台中是否被提及、是否被推荐、排在什么位置、AI 引用了哪些来源以及情感倾向。</p></article>
              <article><i>2</i><h3>治理</h3><p>标准事实与知识资产统一。将企业标准事实、客户案例、FAQ、权威报告、专家/IP 内容沉淀为可治理知识库资产，减少信息缺口、表达偏差与口径不一致。</p></article>
              <article><i>3</i><h3>创作</h3><p>PR、FAQ、脚本与关键词策略。围绕用户搜索意图与 AI 引用逻辑，生成多版本 PR 稿、FAQ、摘要、短视频脚本与关键词埋点策略，提升内容生产效率与可采纳性。</p></article>
              <article><i>4</i><h3>分发</h3><p>权威页面、媒体、公域触点。一键多平台群控、定时排程，让经过审核的事实包进入官网、公域页面、媒体与资料库等适合 AI 采纳的信源渠道。</p></article>
              <article><i>5</i><h3>监控</h3><p>指标追踪与持续迭代。对提及率、推荐率、Top 3 占比、平均排名、信源引用质量及错误/负向回答占比等指标进行长期自进化追踪与复盘迭代。</p></article>
            </div>
            <div className="mine-geo-loop-line" />
          </div>
        </section>
        <section className="mine-geo-workflow">
          <div className="mine-geo-shell">
            <header className="mine-geo-workflow-title"><h2>重构关键业务流</h2></header>
            <div className="mine-geo-workflow-grid">
              <article><Image src="/images/mine-geo/workflow-diagnosis@3x.png" alt="" width={40} height={40}/><h3>深度诊断</h3><p>看清品牌在 AI 答案中的可见度、推荐率、排名和情感倾向</p></article>
              <article><Image src="/images/mine-geo/workflow-knowledge@3x.png" alt="" width={40} height={40}/><h3>知识库构建</h3><p>标准事实、案例与 FAQ 沉淀为可治理知识资产，杜绝信息缺口</p></article>
              <article><Image src="/images/mine-geo/workflow-content@3x.png" alt="" width={40} height={40}/><h3>内容创作与分发</h3><p>生成符合 RAG 偏好的 PR 稿、FAQ，并向权威触点高权同步</p></article>
              <article><Image src="/images/mine-geo/workflow-monitor@3x.png" alt="" width={40} height={40}/><h3>持续监控与迭代</h3><p>按指标优化内容 and 分发，让 GEO 运作有据可依、持续增效</p></article>
            </div>
          </div>
        </section>
        <section className="mine-geo-products">
          <div className="mine-geo-shell">
            <h2 className="mine-geo-section-heading"><Image src="/images/mine-geo/core-title@3x.png" alt="" width={32} height={32}/>核心产品能力</h2>
            <div className="mine-geo-product-grid">
              <article><div><h3>核心功能一：GEO 审计（看清品牌在 AI 答案中的真实表现）</h3></div><p>通过多平台、多问题、多维指标的持续监测，看清品牌在 AI 答案中的真实表现。追踪本品牌与行业均值的可见度、推荐率、平均排名、来源质量和情感倾向。提供包括 AI 可见度、推荐率、推荐排名（Top 3 / Top 5）以及信源 Tracer 追踪等关键表现画像。</p></article>
              <article><div><h3>核心功能二：结构化知识库（让 AI 获得准确、一致、可引用的品牌事实）</h3></div><p>将企业标准事实（产品/公司/数据口径）、客户案例（行业实践与交付成果）、FAQ 话术（高频问题与异议处理）以及权威信源内容沉淀为品牌知识核心。通过审核、版本管理、权限及引用追溯等治理动作，减少大模型回答中的信息缺口、表达偏差与口径不一致。</p></article>
              <article><div><h3>核心功能三：AI Content Studio（把品牌事实转化为 AI 采纳的内容资产）</h3></div><p>围绕用户搜索意图与 AI 引用逻辑，进行：意图洞察（客户如何提问/比较和表达意图）➔ 内容策略（明确事实/证据/案例与差异化观点）➔ 多版本生成（PR/FAQ/摘要/脚本与销售话术）➔ 关键词埋点（品牌词/场景词/行业词自然表达）➔ 审核微调（事实/语气/合规与发布路径确认）➔ 发布素材（同步至官网/公域页面/媒体与资料库等信源）。</p></article>
              <article><div><h3>核心功能四：项目生命周期管理（让 GEO 从一次性动作变成品牌资产）</h3></div><p>支持多品牌、多项目、目标评分、平台组合、阶段监控与复盘。其生命周期流程为：阶段 1. 业务场景（明确品牌/产品线、目标平台、验收指标）➔ 阶段 2. 知识接入（导入资料、案例、FAQ、权威来源）➔ 阶段 3. 内容执行（生成、审核、发布、记录）➔ 阶段 4. 效果复盘（分析收录率、可见度、推荐率、引用源、情感倾向）➔ 持续运营，周期滚动。</p></article>
            </div>
          </div>
        </section>
        <section className="mine-geo-platform">
          <div className="mine-geo-shell">
            <h2 className="mine-geo-section-heading mine-geo-platform-heading"><Image src="/images/mine-geo/platform-title@3x.png" alt="" width={32} height={32}/>国内外主流 AI 平台多模型矩阵统一接入</h2>
            <div className="mine-geo-platform-panel"><p><b>国内外主流 AI 平台统一接入</b><span>全面覆盖 DeepSeek、Kimi、豆包、通义、元宝、ChatGPT、Gemini、Claude、Perplexity 等主流平台，提供统一的数据分析入口。</span></p><p><b>统一指标口径</b><span>提供统一问题集、统一指标口径与跨平台高精度横向对比，让品牌在大模型时代下的可见度、推荐度及提及趋势一目了然。</span></p><p><b>权限安全与数据边界</b><span>内置严密的数据边界与访问控制能力，企业私有的标准事实与品牌知识核心不进入公共模型训练池，确保业务数据零污染。</span></p></div>
          </div>
        </section>
        <section className="mine-geo-value">
          <div className="mine-geo-shell">
            <h2 className="mine-geo-section-heading"><Image src="/images/mine-geo/value-title@3x.png" alt="" width={32} height={32}/>产品价值</h2>
            <h3 className="mine-geo-value-title">产品价值与实效指标归因</h3>
            <p className="mine-geo-value-intro">Mine GEO 的价值不止是“更快生成内容”，而是围绕 AI 答案入口形成可衡量、可复盘、可持续优化的业务结果。通过数据驱动闭环，实现效率、成本、业务、管理、风险、技术六维提升，让品牌在 AI 时代获得高壁垒的数字资产。</p>
            <div className="mine-geo-metric-grid">
              <article><strong><Image src="/images/mine-geo/metric-response@3x.png" alt="" width={30} height={30}/>响应时间</strong><span>降低系统/团队响应及处理周期</span></article>
              <article><strong><Image src="/images/mine-geo/metric-work@3x.png" alt="" width={30} height={30}/>人工处理量</strong><span>大幅省去重复性、低效的人工排查</span></article>
              <article><strong><Image src="/images/mine-geo/metric-query@3x.png" alt="" width={30} height={30}/>知识查询效率</strong><span>标准事实快速检索与一致性口径</span></article>
              <article><strong><Image src="/images/mine-geo/metric-recommend@3x.png" alt="" width={30} height={30}/>AI 推荐率</strong><span>提升大模型答案中本品牌的提及与推荐</span></article>
            </div>
            <div className="mine-geo-value-grid">
              <article><Image src="/images/mine-geo/check-efficiency@3x.png" alt="" width={24} height={24}/><div><strong>效率价值</strong><p>批量观测自动整理，替代范围小、不可复现的人工试问；统一问题集和模型矩阵，大幅减少人工重复排查的时间。</p></div></article>
              <article><Image src="/images/mine-geo/check-cost@3x.png" alt="" width={24} height={24}/><div><strong>成本价值</strong><p>通过标准事实（产品定义/案例/FAQ）一次沉淀与结构化知识治理，供多个业务和市场团队无限次复用，大幅降本。</p></div></article>
              <article><Image src="/images/mine-geo/check-business@3x.png" alt="" width={24} height={24}/><div><strong>业务价值</strong><p>占领 AI 答案这一全新且高转化的客户决策入口，提升本品牌被提及、被推荐与正向描述概率，获取大量精准增量线索。</p></div></article>
              <article><Image src="/images/mine-geo/check-risk@3x.png" alt="" width={24} height={24}/><div><strong>风险与管理价值</strong><p>流程标准化，让发布与效果全程可追溯。有效减少 AI 错误事实、负向倾向与各渠道服务口径不一致风险，主动纠正过时和偏差引用。</p></div></article>
              <article><Image src="/images/mine-geo/check-tech@3x.png" alt="" width={24} height={24}/><div><strong>技术价值</strong><p>具备优秀的集成能力，支持与企业现有 OA / CRM / API 系统对接，将流量与 AI 答案转化为稳定的 IP 获客和数据资产飞轮。</p></div></article>
            </div>
          </div>
        </section>
        <section className="mine-geo-traditional-section">
          <div className="mine-geo-shell">
            <div className="mine-geo-traditional"><h3>相比传统方案：从人工试探式优化，升级为数据驱动闭环</h3><div className="mine-geo-traditional-head"><b>验证维度</b><b>建议考核指标</b></div><div><strong>观测阶段 (人工试问 vs 批量监测)</strong><p>【传统做法】范围小、不可复现，口径极其散落依赖个人经验； 【Mine GEO 闭环】批量监测，通过统一问题集和模型矩阵进行跨平台、多维度、多模型的持续观测。</p></div><div><strong>治理阶段 (资料散落 vs 知识治理)</strong><p>【传统做法】事实口径多版本并存、资料散落、极易出现口径偏差； 【Mine GEO 闭环】知识治理，标准事实与企业核心知识资产全部进入结构化资产库，实现事实、口径、引用与版本统一。</p></div><div><strong>优化阶段 (单次发稿 vs 持续迭代)</strong><p>【传统做法】依靠盲目发公关稿，发布后完全无法知晓是否被 AI 采纳或引用； 【Mine GEO 闭环】持续迭代，按提及率、推荐率和情感倾向指标进行定向优化与发布，让结果可被追踪、复盘和持续改进。</p></div></div>
          </div>
        </section>
        <section className="mine-geo-business">
          <div className="mine-geo-shell">
            <h2 className="mine-geo-section-heading"><Image src="/images/mine-geo/business-title@3x.png" alt="" width={32} height={32}/>商业实效</h2>
            <h3>品牌生成式引擎优化与获客 AI Agent</h3><p className="mine-geo-business-intro">围绕 AI 答案入口，让“被 AI 看见、被 AI 正确理解、被 AI 推荐”从偶然与不可控变成可运营资产。</p>
            <div className="mine-geo-business-compare"><article><h4><Image src="/images/mine-geo/business-past@3x.png" alt="" width={40} height={40}/>过去如何 · 传统人工</h4><div><b>【品牌 AI 可见度审计与竞品对比】</b><p>AI 答案分散且变化快，依靠人工试问无法形成稳定判断；品牌也极易被竞品替代推荐，或因公开资料不足导致无法被准确引用。</p></div><div><b>【售前资料与公关内容自动生成】</b><p>产品资料繁多、版本更新复杂、客户重复提问高频，导致多业务团队对外宣发和公关的口径一致性低，资料准备耗时极长。</p></div><div><b>【AI 口碑与风险表述治理】</b><p>需应对 AI 频现的错误事实表述、负向情绪倾向、来源失控、口径不一等可能损害品牌形象及法务合规的问题。</p></div></article><article><h4><Image src="/images/mine-geo/business-current@3x.png" alt="" width={40} height={40}/>现在如何 · 用 Mine GEO</h4><div><b>【问题集 ➔ 平台矩阵 ➔ 指标输出 ➔ 优化建议】工作流</b><p>出具品牌提及率、推荐率、Top 3 占比、平均排名、信源引用质量及情感倾向画像。形成 AI 答案入口基线，识别优先优化的平台、问题和信源。</p></div><div><b>【企业事实层 ➔ 客户问题层 ➔ 内容资产层 ➔ 审核分发层】闭环流程</b><p>一键将企业标准事实（产品定义、边界、案例）转化为高品质 PR 稿、FAQ、销售话术、脚本和摘要，保障口径一致，缩短改稿时间。</p></div><div><b>【发现偏差 ➔ 补齐事实 ➔ 审核追溯】闭环口碑治理机制</b><p>监测并捕捉错误/负向回答偏差，定向补齐标准事实并优化发布信源，大幅降低错误/负向回答占比，缩短偏见纠正与更新周期。</p></div></article></div>
          </div>
        </section>
        <section className="mine-geo-scenarios">
          <div className="mine-geo-shell">
            <h2 className="mine-geo-section-heading mine-geo-scenario-heading"><Image src="/images/mine-geo/scenario-title@3x.png" alt="" width={32} height={32}/>典型应用场景与成功案例</h2>
            <p className="mine-geo-business-intro mine-geo-scenario-intro">通过科学化与数据化的 GEO 治理，让市场、公关、售前与服务团队在生成式答案时代占领高转化的决策前置入口。</p>
            <div className="mine-geo-scenario-table"><div className="head"><b>落地场景</b><b>适用角色</b><b>可衡量指标 / 解决的问题</b></div><div><strong>品牌 AI 可见度审计<br/>与竞品对比</strong><span>适用对象：品牌&市场部、增长<br/>团队、公关团队</span><p>【痛点】AI 答案分散且变化快，品牌可能被竞品替代推荐，或因公开资料不足而无法被准确引用。 【收益】批量监测国内外主流 AI 平台，获得全方位的可见度、推荐率、信源引用质量与情感倾向画像，精准识别优先优化的问题、平台与来源，形成 AI 答案入口基线。</p></div><div><strong>售前资料与公关内<br/>容自动生成</strong><span>适用对象：售前、市场、品牌、<br/>公关团队</span><p>【痛点】产品资料多、版本迭代复杂、客户重复问题，跨多团队口径一致性差，资料和 PR 准备繁琐耗时。 【收益】基于结构化标准事实统一事实、口径、版本，自动且快速生成百科、PR 稿、FAQ、销售话术、摘要与短视频脚本，大幅缩短资料准备和改稿时间。</p></div><div><strong>AI 口碑与风险表述<br/>治理</strong><span>适用对象：品牌、公关、法务合<br/>规、客户服务团队</span><p>【痛点】AI 面临错误事实表述、负向情绪倾向扩散、来源失控、口径不一致等合规风险与品牌声誉挑战。 【收益】建立 发现偏差 ➔ 补齐事实 ➔ 审核追溯 治理机制，持续追踪错误/负向回答占比与权威引用占比，使风险指标与错误回答占比显著下降。</p></div></div>
            <div className="mine-geo-rollout"><h3>典型落地路径建议：先见效，再扩展</h3><div><article><h4><i>1</i>快速试点 (4-6 周看到基线与改善)</h4><p>可从可衡量的小场景试点开始，分为四个核心阶段运行： 1. 业务场景梳理：明确具体品牌问题、目标平台和试点指标（如提及率、推荐率、引用来源）。 2. 数据知识接入：导入企业核心资料、案例、FAQ 及权威信源。 3. 小范围试点：选定 1 个核心产品线或品牌进行集中优化。 4. 效果复盘：持续观测 AI 平台中的提及率、推荐率、来源和情感倾向变化，评估基线并实现指标改善。</p></article><article><h4><i>2</i>见效后扩展 (规模化运营与组织协同)</h4><p>见效后扩展至多品牌、多平台、多场景规模化运营： 1. 灵活的运营方式：支持 RaaS 托管、本地部署或专业代运营，实现品牌资产与获客体系长期滚动。 2. 组织高效协同：促使市场、销售、客服与公关等多部门口径无缝协同，通过数据飞轮越用越懂业务。</p></article></div></div>
          </div>
        </section>
        <section className="mine-geo-cooperation">
          <div className="mine-geo-shell"><h2 className="mine-geo-section-heading"><Image src="/images/mine-geo/cooperation-title@3x.png" alt="" width={32} height={32}/>合作模式</h2><h3>灵活多元的合作落地模式</h3><p>提供安全、可控、可量化结果且可逐步推广的企业级 AI Agent 落地机制。</p><div><article><Image src="/images/mine-geo/mode-saas@3x.png" alt="" width={48} height={48}/><h4>RaaS模式</h4><b>席位制，按使用量付费。</b><p>适合需要自主管理品牌可见度与内容分发的市场与 PR 团队。</p></article><article><Image src="/images/mine-geo/mode-managed@3x.png" alt="" width={48} height={48}/><h4>托管运营服务</h4><b>托管服务费 + 绩效指标（如提升提及率/推荐率）挂钩收费。</b><p>适合希望全权委托专家团队进行生成式引擎优化与增量拓客的中大型企业。</p></article><article><Image src="/images/mine-geo/mode-private@3x.png" alt="" width={48} height={48}/><h4>私有化部署 / 专属定制</h4><b>部署及定制开发费用 + 年度维护升级费。</b><p>适合对数据隐私、数据主权、系统集成有极高合规要求的银行、法律、制造业及集团客户。</p></article></div></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
