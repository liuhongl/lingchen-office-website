import { BookingTrigger } from "@/components/booking-trigger";
import Image from "next/image";

const directChanges = [
  {
    value: "分钟级",
    description: "从一段文字 / 一个热点到成稿、成片",
    icon: "/images/social-grow-solution/change-clock.svg",
    tone: "blue",
  },
  {
    value: "≈ 0",
    description: "数字人 + 声音克隆，免去出镜与棚录",
    icon: "/images/social-grow-solution/change-flask.svg",
    tone: "gray",
  },
  {
    value: "1 人",
    description: "可运营并维护数十个账号矩阵",
    icon: "/images/social-grow-solution/change-user.svg",
    tone: "green",
  },
  {
    value: "1 → N",
    description: "一份知识资产循环产出成百上千条内容",
    icon: "/images/social-grow-solution/change-loop.svg",
    tone: "purple",
  },
] as const;

const industryProblems = [
  {
    problem: "【选题】凭经验手动刷各平台找热点",
    solution: "热点雷达按赛道实时聚合，一键转草稿 ➔ 带来结果：选题相关度提升、选题耗时大幅缩短",
  },
  {
    problem: "【内容生产】专业人士亲自写或外包，周期长",
    solution: "知识库 RAG 一键重构多平台爆款文案 ➔ 带来结果：单条生产周期降低 -70%~-90%",
  },
  {
    problem: "【出镜 / 视频】请编导 / 摄影 / 剪辑，成本高",
    solution: "数字人 + 声音克隆，分钟级成片 ➔ 带来结果：单条短视频成本降低 -60%~-85%、出镜成本→0",
  },
  {
    problem: "【分发】写、录、剪、投需 3-4 人协作",
    solution: "矩阵群发群控，一键多平台定时上架 ➔ 带来结果：1 人运营即可维护 10~30+ 账号矩阵",
  },
  {
    problem: "【知识复用】一篇深度内容往往只用一次",
    solution: "一份知识循环产出成百上千条内容 ➔ 带来结果：内容复用率成倍~成百倍放大",
  },
  {
    problem: "【效果复盘】凭感觉，难以反哺创作",
    solution: "数据面板全网复盘，反哺知识库 ➔ 带来结果：ROI 可衡量、打法可持续优化",
  },
] as const;

const digitalFlow = [
  { number: "1", title: "01 热点雷达", description: "多平台热点实时聚合 + 专业赛道过滤，任意热点一键转为创作草稿。" },
  { number: "2", title: "02 知识库管理", description: "专业级 RAG 引擎，把产品/服务知识、案例、白皮书、录音设为 AI 指定检索源，保障准确合规、避免幻觉。" },
  { number: "3", title: "03 创作工坊", description: "一篇知识或一个热点，自动重构为抖音、小红书、微信公众号等各平台调性的爆款文案并精排。" },
  { number: "4", title: "04 视频工坊", description: "数字人 + 声音克隆，专业短视频流水线，支持横竖屏 / 画中画一键合成。" },
  { number: "5", title: "05 发布矩阵", description: "图文 / 视频多平台群发群控，定时排程，分发状态可视化追踪。" },
  { number: "6", title: "06 数据面板", description: "全网曝光、阅读、互动数据复盘，分析内容与受众喜好反哺并迭代创作库。" },
] as const;

const competitiveAdvantages = [
  { title: "热点雷达价值", description: "选题既有传播性又具备业务相关性，缩短选题时间、提升内容与获客的相关度。", icon: "/images/social-grow-solution/advantage-hot.svg" },
  { title: "知识库管理价值", description: "AI 严格基于知识库检索校验，保障专业文案的准确度、合规性与行业深度。", icon: "/images/social-grow-solution/advantage-knowledge.svg" },
  { title: "创作工坊价值", description: "一份知识衍生多平台文案，兼顾专业度与传播性，大幅提升内容复用率。", icon: "/images/social-grow-solution/advantage-create.svg" },
  { title: "视频工坊价值", description: "零拍摄成本、分钟级成片；专属数字形象持续产出，出镜成本趋近于零。", icon: "/images/social-grow-solution/advantage-video.svg" },
  { title: "发布矩阵价值", description: "把「写录剪投」的多人分工压缩为 1 名运营，实现极高的人力杠杆。", icon: "/images/social-grow-solution/advantage-publish.svg" },
  { title: "数据面板价值", description: "用数据驱动选题与创作决策，让内容 ROI 可衡量、可优化、可复制。", icon: "/images/social-grow-solution/advantage-data.svg" },
] as const;

const resultMetrics = [
  { value: "-70%~-90%", label: "单条内容生产周期", tone: "blue" },
  { value: "-60%~-85%", label: "单条短视频综合成本", tone: "green" },
  { value: "10~30+", label: "1名运营维护账号矩阵", tone: "purple" },
  { value: "×3~×10", label: "内容更新频次/线索提升", tone: "orange" },
] as const;

const resultValues = [
  { title: "效率价值", description: "成稿、成片从「天 / 小时」压缩到「分钟级」，选题与排版耗时显著降低，内容更新频次提升 3~10 倍，获客线索量提升。", icon: "/images/social-grow-solution/result-efficiency.svg" },
  { title: "成本价值", description: "用 AI 替代编导 / 摄影 / 剪辑团队与棚录，显著降低人力与制作支出，单条短视频成本降低 60%~85%，出镜成本趋于零。", icon: "/images/social-grow-solution/result-cost.svg" },
  { title: "业务与管理价值", description: "高频、多平台覆盖专业内容，持续获取公私域线索、建立行业 IP 话语权；1 名运营即可轻松维护数十个账号矩阵。", icon: "/images/social-grow-solution/result-business.svg" },
  { title: "风险与技术价值", description: "依托 RAG 知识边界和全程留痕的人机协同机制，降低专业事实硬伤、合规风险与知识流失，支持模块化嵌入现有系统。", icon: "/images/social-grow-solution/result-risk.svg" },
] as const;

const applicationScenarios = [
  {
    title: "律师 / 律所专业 IP 矩阵",
    audience: "适用对象：执业律师、律所市场负责人",
    pain: "【痛点】律师专业但没时间或没意愿出镜，内容难传播，案源高度依赖人脉与转介绍。",
    solution: "【落地业务收益】低成本、可持续地获取公域案源，沉淀律所与律师个人专业话语权与品牌资产。工作流：律所知识库为 RAG 源 ➔ 创作工坊合规文案 ➔ 数字人「张三律师」出镜 ➔ 发布矩阵全网分发。指标：周更短视频 × N 条，案源线索量提升、单条获客成本下降。",
    tone: "blue",
  },
  {
    title: "自媒体、专家型人士内容前置",
    audience: "适用对象：咨询顾问、知识与内容运营",
    pain: "【痛点】自媒体人士、资深专家产能稀缺，咨询前置的专业科普内容少，获客高度依赖公域流量与口碑传播。",
    solution: "落地业务收益：把自媒体人士、专家经验「IP 化、规模化」，以专业内容前置获取流量、筛选高意向客户、缩短咨询转化路径。工作流：知识库/素材入库 ➔ 一键衍生多平台解读 ➔ 数字人讲解短视频 ➔ 矩阵分发并复盘。指标：内容产出量、流量显著提升、咨询线索前置率与到访量提升。",
    tone: "green",
  },
  {
    title: "企业专业 IP 高频获客",
    audience: "适用对象：企业市场 / 品牌团队、高客单专业服务商",
    pain: "【痛点】高客单、决策链长的行业（财税、医美、教育等）需持续专业种草，且合规要求高、内容产能不足。",
    solution: "【落地业务收益】建立稳定的公域获客内容流，降低对单一渠道与投放预算的依赖，强化专业品牌信任。工作流：产品 / 服务知识库 RAG ➔ 多调性合规文案 ➔ 数字人短视频 ➔ 群控分发 + 数据复盘反哺。指标：触达量提升、内容合规差错下降、综合获客成本下降。",
    tone: "purple",
  },
  {
    title: "MCN / 代运营服务商规模化交付",
    audience: "适用对象：MCN 机构、代运营团队",
    pain: "【痛点】人均产能有限，交付质量不稳定，顶尖专家的内容经验难以复制到整个团队。",
    solution: "【落地业务收益】实现规模化、质量稳定的交付，把一份深度内容循环复用为成百上千条，显著放大毛利。工作流：一名运营借助创作工坊与视频工坊，同时产出并维护数十位各垂直行业专家的短视频矩阵。指标：人均可维护账号数 × N、人天交付条数提升、项目毛利率提升。",
    tone: "orange",
  },
] as const;

const scenarioExamples = [
  { title: "律师 / 律所专业 IP 矩阵", description: "低成本、可持续地获取公域案源，沉淀律所及律师个人专业话语权与品牌资产。工作流包括律所知识库为 RAG 源、创作工坊生产合规文案、数字人出镜、以及发布矩阵全网分发，实现周更短视频 × N 条，促使案源线索量提升、单条获客成本下降。", tone: "blue" },
  { title: "自媒体、专家型人士内容前置", description: "把自媒体人士、专家经验进行「IP 化与规模化」，以专业内容前置获取公域流量、筛选高意向客户，缩短咨询转化路径。通过知识库/素材入库、一键衍生多平台解读、数字人讲解短视频，实现内容产出量与流量显著提升、到访量提升。", tone: "green" },
] as const;

const socialGrowReasons = [
  { number: "1", title: "文本专业准确：", description: "依托 RAG 防幻觉引擎，保障专业文案的准确度、合规性与行业深度。", tone: "blue" },
  { number: "2", title: "零拍摄成本：", description: "真人数字人克隆与声音克隆，实现分钟级一键出片，出镜成本趋于零。", tone: "green" },
  { number: "3", title: "一键分发与数据反哺：", description: "矩阵群控多平台定时发布，实现极高的人力杠杆与数据驱动的选题反哺。", tone: "purple" },
] as const;

export default function SocialGrowSolutionPage() {
  return (
    <main className="sgs-page">
      <section className="sgs-hero" aria-labelledby="sgs-title">
        <div className="sgs-shell">
          <p className="sgs-hero__eyebrow">产品专项解决方案 · SOCIAL GROW</p>
          <h1 id="sgs-title">Social Grow 智能解决方案</h1>
          <h2>专业知识内容 AI 生产与全域分发 Agent</h2>
          <p className="sgs-hero__lead">连接「专业知识」与「公域流量」的内容创作 Agent —— 知识入库 → 自媒体出库，让每一位专业人士都拥有自己的「内容 AI 分身」与「24小时不间断的流量孵化器」。</p>
          <p className="sgs-hero__body">Social Grow 把本地专业知识（PDF、Word、案例、白皮书、录音等）融合热点或自主选题，一键转化为可发布的图文与数字人短视频，并分发到抖音、小红书、视频号、微博、头条等全网平台，服务于自媒体、律师、咨询顾问等专业人士，以及企业市场 / 品牌团队、MCN 与代运营服务商等。</p>
          <BookingTrigger className="sgs-hero__cta">预约产品演示 <span aria-hidden="true">→</span></BookingTrigger>
        </div>
      </section>
      <section className="sgs-change" aria-labelledby="sgs-change-title">
        <div className="sgs-shell">
          <h2 id="sgs-change-title" className="sgs-section-title">一、 产品带来的直接改变</h2>
          <div className="sgs-change__grid">
            {directChanges.map((item) => (
              <article className={`sgs-change__card sgs-change__card--${item.tone}`} key={item.value}>
                <div className="sgs-change__heading">
                  <Image src={item.icon} alt="" width={48} height={48} />
                  <strong>{item.value}</strong>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sgs-problems" aria-labelledby="sgs-problems-title">
        <div className="sgs-shell">
          <h2 id="sgs-problems-title" className="sgs-section-title">二、行业困局与核心痛点</h2>
          <div className="sgs-problems__grid">
            {industryProblems.map((item) => (
              <article className="sgs-problems__card" key={item.problem}>
                <div className="sgs-problems__row sgs-problems__row--problem">
                  <Image src="/images/social-grow-solution/problem-alert.svg" alt="" width={40} height={40} />
                  <div><strong>传统痛点与挑战</strong><p>{item.problem}</p></div>
                </div>
                <div className="sgs-problems__row sgs-problems__row--solution">
                  <Image src="/images/social-grow-solution/problem-check.svg" alt="" width={32} height={32} />
                  <div><strong>灵宸 AI 解决方案：</strong><p>{item.solution}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sgs-flow" aria-labelledby="sgs-flow-title">
        <div className="sgs-shell">
          <h2 id="sgs-flow-title" className="sgs-section-title">三、灵宸重构：核心数字化处理流 (端到端智能闭环)</h2>
          <div className="sgs-flow__grid">
            {digitalFlow.map((item) => (
              <article className="sgs-flow__item" key={item.number}>
                <span className="sgs-flow__number">{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
          <aside className="sgs-flow__note">
            <Image src="/images/social-grow-solution/flow-info.svg" alt="" width={40} height={40} />
            <p>与孤立工具的区别：不是「文案助手」或「剪辑软件」，而是把写、录、剪、投、复盘整条链路自动化的数字运营官。</p>
          </aside>
        </div>
      </section>
      <section className="sgs-advantages" aria-labelledby="sgs-advantages-title">
        <div className="sgs-shell">
          <h2 id="sgs-advantages-title" className="sgs-section-title">四、关键竞争优势：多维能力协同，构筑企业专属资产</h2>
          <p className="sgs-advantages__subtitle">核心模块对客户的真实价值</p>
          <div className="sgs-advantages__grid">
            {competitiveAdvantages.map((item) => (
              <article className="sgs-advantages__card" key={item.title}>
                <div className="sgs-advantages__heading"><Image src={item.icon} alt="" width={40} height={40} /><h3>{item.title}</h3></div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <aside className="sgs-advantages__loop">
            <div className="sgs-advantages__tags"><span>知识入库</span><b>➔</b><strong>自媒体出库</strong><b>➔</b><span>闭环图谱</span></div>
            <p>把传统「写 ➔ 录 ➔ 剪 ➔ 发布 ➔ 复盘」的多人协作，压缩为一条由 AI 驱动、可循环增值的内容生产线。数据面板的全网反馈持续回流，越用越懂受众，内容资产随时间增值。</p>
          </aside>
        </div>
      </section>
      <section className="sgs-results" aria-labelledby="sgs-results-title">
        <div className="sgs-shell">
          <h2 id="sgs-results-title" className="sgs-section-title">五、可交付商业成果与落地价值</h2>
          <p className="sgs-results__subtitle">从效率、成本到风险与技术，为客户带来全方位、可量化的经营提升（可衡量 · 可考核）。</p>
          <div className="sgs-results__metrics">
            {resultMetrics.map((item) => <article className={`sgs-results__metric sgs-results__metric--${item.tone}`} key={item.value}><strong>{item.value}</strong><p>{item.label}</p></article>)}
          </div>
          <div className="sgs-results__values">
            {resultValues.map((item) => (
              <article className="sgs-results__value" key={item.title}>
                <div className="sgs-results__value-heading"><Image src={item.icon} alt="" width={40} height={40} /><h3>{item.title}</h3></div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sgs-scenarios" aria-labelledby="sgs-scenarios-title">
        <div className="sgs-shell">
          <h2 id="sgs-scenarios-title" className="sgs-section-title">六、部分应用场景示例</h2>
          <p className="sgs-scenarios__subtitle">让自媒体从业者、爱好者与专业人士将专业知识规模化、IP 化，持续获取公域流量与高意向客户。</p>
          <div className="sgs-scenarios__head"><span>业务模块 / 场景类型</span><span>核心痛点 / 服务群体</span><span>灵宸智能适配解决方案</span></div>
          <div className="sgs-scenarios__table">
            {applicationScenarios.map((item) => (
              <article className={`sgs-scenarios__row sgs-scenarios__row--${item.tone}`} key={item.title}>
                <div><strong>{item.title}</strong></div>
                <div><p>{item.audience}</p><p>{item.pain}</p></div>
                <p>{item.solution}</p>
              </article>
            ))}
          </div>
          <h3 className="sgs-scenarios__examples-title"><Image src="/images/social-grow-solution/scenario-document.svg" alt="" width={20} height={20} />典型落地场景详解</h3>
          <div className="sgs-scenarios__examples">
            {scenarioExamples.map((item) => <article className={`sgs-scenarios__example sgs-scenarios__example--${item.tone}`} key={item.title}><h4>{item.title}</h4><p>{item.description}</p></article>)}
          </div>
        </div>
      </section>
      <section className="sgs-cooperation" aria-labelledby="sgs-cooperation-title">
        <div className="sgs-shell">
          <h2 id="sgs-cooperation-title" className="sgs-section-title">七、合作模式</h2>
          <p className="sgs-cooperation__subtitle">可按照使用量或者结果付费，数据飞轮越用越懂业务 —— 既能直接服务专业人士与企业内容获客，也能帮 MCN 规模化交付。</p>
          <div className="sgs-cooperation__grid">
            <article className="sgs-cooperation__card sgs-cooperation__card--primary"><span>模式 1</span><h3>RaaS模式</h3><p>付费方案：</p><strong>席位制，按使用量付费。</strong></article>
            <article className="sgs-cooperation__card"><span>模式 2</span><h3>私有化部署或定制</h3><p>付费方案：</p><strong>模型微调/训练费 + 本地部署&amp;定制费</strong></article>
          </div>
        </div>
      </section>
      <section className="sgs-why" aria-labelledby="sgs-why-title">
        <div className="sgs-shell sgs-why__panel">
          <h2 id="sgs-why-title"><span><Image src="/images/social-grow-solution/why-question.svg" alt="" width={24} height={24} /></span>为什么选择 Social Grow？</h2>
          <div className="sgs-why__list">
            {socialGrowReasons.map((item) => <article className={`sgs-why__item sgs-why__item--${item.tone}`} key={item.number}><b>{item.number}</b><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}
          </div>
        </div>
      </section>
      <section className="sgs-closing" aria-labelledby="sgs-closing-title">
        <h2 id="sgs-closing-title">让专业内容 7×24 小时孵化流量</h2>
        <p>让每一位专业人士，都拥有自己的「内容 AI 分身」与「24 小时不间断的流量孵化器」。</p>
      </section>
    </main>
  );
}
