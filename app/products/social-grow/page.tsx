import Image from "next/image";
import { ProductBreadcrumb } from "@/components/product-breadcrumb";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const businessComparison = [
  ["【选题】", "凭经验手动刷各平台找热点", "热点雷达按赛道实时聚合，一键转草稿", "➔ 带来结果：选题相关度提升、选题耗时大幅缩短"],
  ["【内容生产】", "专业人士亲自写或外包，周期长", "知识库 RAG 一键重构多平台爆款文案", "➔ 带来结果：单条生产周期降低 -70%~-90%"],
  ["【出镜 / 视频】", "请编导 / 摄影 / 剪辑，成本高", "数字人 + 声音克隆，分钟级成片", "➔ 带来结果：单条短视频成本降低 -60%~-85%、出镜成本→0"],
  ["【分发】", "写、录、剪、投需 3-4 人协作", "矩阵群发群控，一键多平台定时上架", "➔ 带来结果：1 人运营即可维护 10~30+ 账号矩阵"],
  ["【知识复用】", "一篇深度内容往往只用一次", "一份知识循环产出成百上千条内容", "➔ 带来结果：内容复用率成倍~成百倍放大"],
  ["【效果复盘】", "凭感觉，难以反哺创作", "数据面板全网复盘，反哺知识库", "➔ 带来结果：ROI 可衡量、打法可持续优化"],
];

export default function SocialGrowPage() {
  return (
    <>
      <SiteHeader />
      <main className="social-grow-page">
        <ProductBreadcrumb name="Social Grow" description="AI 出海获客 Agent—专业知识内容生产+全域种草分发+流量孵化。" />

        <section className="social-grow-hero">
          <div className="social-grow-shell">
            <div className="social-grow-hero__grid">
              <div className="social-grow-hero__copy">
                <h1>专业知识内容<strong>AI 生产与全域分发 Agent</strong></h1>
                <p>连接「专业知识」与「公域流量」的内容创作 Agent —— 知识入库 → 自媒体出库，让每一位专业人士都拥有自己的「内容 AI 分身」与「24小时不间断的流量孵化器」。</p>
                <p>Social Grow 把本地专业知识（PDF、Word、案例、白皮书、录音等）融合热点或自主选题，一键转化为可发布的图文与数字人短视频，并分发到抖音、小红书、视频号、微博、头条等全网平台，服务于自媒体、律师、咨询顾问等专业人士，以及企业市场 / 品牌团队、MCN 与代运营服务商等。</p>
              </div>
              <Image className="social-grow-hero__image" src="/images/social-grow/hero-dashboard.png" alt="Social Grow 内容运营 Dashboard" width={550} height={385} priority />
            </div>
            <div className="social-grow-contrast">
              <article className="social-grow-contrast__past"><div><Image src="/images/social-grow/past-icon.png" alt="" width={40} height={40}/><b>过去</b></div><h2>多人协作耗尽精力</h2><p>在企业市场/运营/品牌、法律、财税、自媒体等专业领域，常态文案、出镜、配音、剪映及合规校对、适用不同平台风格等消耗团队与成本预算，效率低、成本高昂。</p></article>
              <article className="social-grow-contrast__current"><div><Image src="/images/social-grow/current-icon.png" alt="" width={40} height={40}/><b>现在</b></div><h2>数字人 IP 与内容自迭代飞轮</h2><p>基于RAG技术，融合专业知识库与个性化AI指令或热点、自有选题等，一键自动生成小红书体、LinkedIn体等不同社媒平台风格文章，支持人工微调，并可配置声音克隆，秒速分发。</p></article>
            </div>
          </div>
        </section>

        <section className="social-grow-process">
          <div className="social-grow-shell">
            <h2 className="social-grow-section-label">产品带来的直接改变</h2>
            <div className="social-grow-change-grid">
              <article><span>1</span><strong>分钟级</strong><p>从一段文字 / 一个热点到成稿、成片</p></article>
              <article><span>2</span><strong>≈ 0</strong><p>数字人 + 声音克隆，免去出镜与棚录</p></article>
              <article><span>3</span><strong>1 人</strong><p>可运营并维护数十个账号矩阵</p></article>
              <article><span>4</span><strong>1 → N</strong><p>一份知识资产循环产出成百上千条内容</p></article>
            </div>

            <h2 className="social-grow-section-label social-grow-section-label--flow">重构关键业务流</h2>
            <div className="social-grow-flow-grid">
              <article><span>1</span><strong>严肃 RAG 控制</strong><p>严控专业合规边界减少幻觉发生</p></article>
              <article><span>2</span><strong>声音克隆与数字人生成</strong><p>真人声音克隆与超仿真数字人技术</p></article>
              <article><span>3</span><strong>创作内容一键生成</strong><p>一键生成文本与视频创作内容，自适应多平台风格</p></article>
              <article><span>4</span><strong>多平台矩阵发布</strong><p>多社媒平台矩阵一键自动发布</p></article>
            </div>
          </div>
        </section>

        <section className="social-grow-capabilities">
          <div className="social-grow-shell">
            <h2 className="social-grow-section-label">核心产品能力</h2>
            <div className="social-grow-capability-grid">
              <article><Image src="/images/social-grow/capability-hot.png" alt="" width={44} height={44}/><i>1</i><strong>热点雷达</strong><p>多平台热点实时聚合 + 专业赛道过滤，任意热点一键转为创作草稿。</p></article>
              <article><Image src="/images/social-grow/capability-knowledge.png" alt="" width={44} height={44}/><i>2</i><strong>知识库管理</strong><p>专业级 RAG 引擎，把产品/服务知识、案例、白皮书、录音设为 AI 指定检索源，保障准确合规、避免幻觉。</p></article>
              <article><Image src="/images/social-grow/capability-create.png" alt="" width={44} height={44}/><i>3</i><strong>创作工坊</strong><p>一篇知识或一个热点，自动重构为抖音、小红书、微信公众号等各平台调性的爆款文案并精排。</p></article>
              <article><Image src="/images/social-grow/capability-video.png" alt="" width={44} height={44}/><i>4</i><strong>视频工坊</strong><p>数字人 + 声音克隆，专业短视频流水线，支持横竖屏 / 画中画一键合成。</p></article>
              <article><Image src="/images/social-grow/capability-publish.png" alt="" width={44} height={44}/><i>5</i><strong>发布矩阵</strong><p>图文 / 视频多平台群发群控，定时排程，分发状态可视化追踪。</p></article>
              <article><Image src="/images/social-grow/capability-data.png" alt="" width={44} height={44}/><i>6</i><strong>数据面板</strong><p>全网曝光、阅读、互动数据复盘，分析内容与受众喜好反哺并迭代创作库。</p></article>
            </div>

            <h2 className="social-grow-section-label social-grow-value-label">核心模块对客户的真实价值</h2>
            <div className="social-grow-value-list">
              <p><b>热点雷达价值：</b>选题既有传播性又具备业务相关性，缩短选题时间、提升内容与获客的相关度。</p>
              <p><b>知识库管理价值：</b>AI 严格基于知识库检索校验，保障专业文案的准确度、合规性与行业深度。</p>
              <p><b>创作工坊价值：</b>一份知识衍生多平台文案，兼顾专业度与传播性，大幅提升内容复用率。</p>
              <p><b>视频工坊价值：</b>零拍摄成本、分钟级成片；专属数字形象持续产出，出镜成本趋近于零。</p>
              <p><b>发布矩阵价值：</b>把「写录剪投」的多人分工压缩为 1 名运营，实现极高的人力杠杆。</p>
              <p><b>数据面板价值：</b>用数据驱动选题与创作决策，让内容 ROI 可衡量、可优化、可复制。</p>
            </div>

            <h2 className="social-grow-section-label social-grow-loop-label">知识入库 ➔ 自媒体出库 闭环图谱</h2>
            <div className="social-grow-loop">
              <div className="social-grow-loop__steps"><span>写</span><i>➔</i><span>录</span><i>➔</i><span>剪</span><i>➔</i><span>发布</span><i>➔</i><span>复盘</span></div>
              <div className="social-grow-loop__down">↓</div>
              <strong><Image src="/images/social-grow/loop-lightning.png" alt="" width={24} height={24}/>AI 驱动、可循环增值的内容生产线</strong>
              <p>把传统「写 ➔ 录 ➔ 剪 ➔ 发布 ➔ 复盘」的多人协作，压缩为一条由 AI 驱动、可循环增值的内容生产线。数据面板的全网反馈持续回流，越用越懂受众，内容资产随时间增值。</p>
            </div>
          </div>
        </section>

        <section className="social-grow-results">
          <div className="social-grow-shell">
            <h2 className="social-grow-section-label">产品价值</h2>
            <h3>产品价值与实效指标归因</h3>
            <p className="social-grow-results__intro">从效率、成本到风险与技术，为客户带来全方位、可量化的经营提升（可衡量 · 可考核）。</p>
            <div className="social-grow-metrics">
              <article><strong>-70%~-90%</strong><span>单条内容生产周期</span></article>
              <article><strong>-60%~-85%</strong><span>单条短视频综合成本</span></article>
              <article><strong>10~30+</strong><span>1名运营维护账号矩阵</span></article>
              <article><strong>×3~×10</strong><span>内容更新频次/线索提升</span></article>
            </div>
            <div className="social-grow-result-cards">
              <article><div><Image src="/images/social-grow/value-efficiency.png" alt="" width={32} height={32}/><strong>效率价值</strong></div><p>成稿、成片从「天 / 小时」压缩到「分钟级」，选题与排版耗时显著降低，内容更新频次提升 3~10 倍，获客线索量提升。</p></article>
              <article><div><Image src="/images/social-grow/value-cost.png" alt="" width={32} height={32}/><strong>成本价值</strong></div><p>用 AI 替代编导 / 摄影 / 剪辑团队与棚录，显著降低人力与制作支出，单条短视频成本降低 60%~85%，出镜成本趋于零。</p></article>
              <article><div><Image src="/images/social-grow/value-business.png" alt="" width={32} height={32}/><strong>业务与管理价值</strong></div><p>高频、多平台覆盖专业内容，持续获取公私域线索、建立行业 IP 话语权；1 名运营即可轻松维护数十个账号矩阵。</p></article>
              <article><div><Image src="/images/social-grow/value-risk.png" alt="" width={32} height={32}/><strong>风险与技术价值</strong></div><p>依托 RAG 知识边界和全程留痕的人机协同机制，降低专业事实硬伤、合规风险与知识流失，支持模块化嵌入现有系统</p></article>
            </div>

            <h2 className="social-grow-section-label social-grow-business-label">商业实效</h2>
            <h3 className="social-grow-business-title">专业知识内容 AI 生产与全域分发 Agent</h3>
            <p className="social-grow-results__intro">从「人海重复」到「智能复用」的逐环节传统与 AI 做法对照。</p>
            <div className="social-grow-business-compare">
              <div className="social-grow-business-head"><b>环节</b><h4>过去如何做 · 传统人工</h4><h4>现在如何 · 用 Social Grow</h4></div>
              {businessComparison.map((row) => <div className="social-grow-business-row" key={row[0]}><strong>{row[0]}</strong><p>{row[1]}</p><div><b>{row[2]}</b><span>{row[3]}</span></div></div>)}
            </div>
          </div>
        </section>

        <section className="social-grow-scenarios">
          <div className="social-grow-shell">
            <h2 className="social-grow-section-label">落地场景</h2>
            <h3>典型应用场景示例</h3>
            <p className="social-grow-scenarios__intro">让自媒体从业者、爱好者与专业人士将专业知识规模化、IP 化，持续获取公域流量与高意向客户。</p>
            <div className="social-grow-scenario-table">
              <div className="social-grow-scenario-row social-grow-scenario-head"><b>落地场景</b><b>适用角色</b><b>痛点</b><b>可衡量指标 / 解决的问题</b></div>
              <div className="social-grow-scenario-row"><strong>律师 / 律所专业 IP 矩阵</strong><span>适用对象：执业律师、律所市场负责人</span><p>律师专业但没时间或没意愿出镜，内容难传播，案源高度依赖人脉与转介绍。</p><p>低成本、可持续地获取公域案源，沉淀律所与律师个人专业话语权与品牌资产。工作流：律所知识库为 RAG 源 ➔ 创作工坊合规文案 ➔ 数字人「张三律师」出镜 ➔ 发布矩阵全网分发。指标：周更短视频 × N 条，案源线索量提升、单条获客成本下降。</p></div>
              <div className="social-grow-scenario-row"><strong>自媒体、专家型人士内容前置</strong><span>适用对象：咨询顾问、知识与内容运营</span><p>自媒体人士、资深专家产能稀缺，咨询前置的专业科普内容少，获客高度依赖公域流量与口碑传播。</p><p>把自媒体人士、专家经验「IP 化、规模化」，以专业内容前置获取流量、筛选高意向客户、缩短咨询转化路径。工作流：知识库/素材入库 ➔ 一键衍生多平台解读 ➔ 数字人讲解短视频 ➔ 矩阵分发并复盘。指标：内容产出量、流量显著提升、咨询线索前置率与到访量提升。</p></div>
              <div className="social-grow-scenario-row"><strong>企业专业 IP 高频获客</strong><span>适用对象：企业市场 / 品牌团队、高客单专业服务商</span><p>高客单、决策链长的行业（财税、医美、教育等）需持续专业种草，且合规要求高、内容产能不足。</p><p>建立稳定的公域获客内容流，降低对单一渠道与投放预算的依赖，强化专业品牌信任。工作流：产品 / 服务知识库 RAG ➔ 多调性合规文案 ➔ 数字人短视频 ➔ 群控分发 + 数据复盘反哺。指标：触达量提升、内容合规差错下降、综合获客成本下降。</p></div>
              <div className="social-grow-scenario-row"><strong>MCN / 代运营服务商规模化交付</strong><span>适用对象：MCN 机构、代运营团队</span><p>人均产能有限，交付质量不稳定，顶尖专家的内容经验难以复制到整个团队。</p><p>实现规模化、质量稳定的交付，把一份深度内容循环复用为成百上千条，显著放大毛利。工作流：一名运营借助创作工坊与视频工坊，同时产出并维护数十位各垂直行业专家的短视频矩阵。指标：人均可维护账号数 × N、人天交付条数提升、项目毛利率提升。</p></div>
            </div>
            <h3>典型落地场景详解</h3>
            <div className="social-grow-scenario-cards">
              <article><h4><Image src="/images/social-grow/scenario-law.svg" alt="" width={20} height={20}/>律师 / 律所专业 IP 矩阵</h4><p>低成本、可持续地获取公域案源，沉淀律所及律师个人专业话语权与品牌资产。工作流包括律所知识库为 RAG 源、创作工坊生产合规文案、数字人出镜、以及发布矩阵全网分发，实现周更短视频 × N 条，促使案源线索量提升、单条获客成本下降。</p></article>
              <article><h4><Image src="/images/social-grow/scenario-expert.svg" alt="" width={20} height={20}/>自媒体、专家型人士内容前置</h4><p>把自媒体人士、专家经验进行「IP 化与规模化」，以专业内容前置获取公域流量、筛选高意向客户，缩短咨询转化路径。通过知识库/素材入库、一键衍生多平台解读、数字人讲解短视频，实现内容产出量与流量显著提升、到访量提升。</p></article>
            </div>
          </div>
        </section>

        <section className="social-grow-cooperation">
          <div className="social-grow-shell">
            <h2 className="social-grow-section-label">合作模式</h2>
            <h3>灵活的合作模式</h3>
            <p className="social-grow-cooperation__intro">可按照使用量或者结果付费，数据飞轮越用越懂业务 —— 既能直接服务专业人士与企业内容获客，也能帮 MCN 规模化交付。</p>
            <div className="social-grow-cooperation-grid">
              <article><h4><Image src="/images/social-grow/cooperation-mode@3x.png" alt="" width={32} height={32}/>合作服务模式</h4><p>RaaS模式</p><p>私有化部署或定制</p></article>
              <article><h4><Image src="/images/social-grow/payment-mode@3x.png" alt="" width={32} height={32}/>付费结算方式</h4><p>席位制，按使用量付费。</p><p>模型微调/训练费 + 本地部署&定制费</p></article>
            </div>
            <div className="social-grow-final">
              <h3>为什么选择 Social Grow？</h3>
              <div><article><strong><i>1</i>文本专业准确</strong><p>依托 RAG 防幻觉引擎，保障专业文案的准确度、合规性与行业深度。</p></article><article><strong><i>2</i>零拍摄成本</strong><p>真人数字人克隆与声音克隆，实现分钟级一键出片，出镜成本趋于零。</p></article><article><strong><i>3</i>一键分发与数据反哺</strong><p>矩阵群控多平台定时发布，实现极高的人力杠杆与数据驱动的选题反哺。</p></article></div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
