import Image from "next/image";
import { BookingTrigger } from "@/components/booking-trigger";

const recovSteps = [
  ["数据解析", "数据解析与历史沟通记录归集，记录每个项目的真实问题（业务全身体检）。", "信息断点、口径不一"],
  ["逾期画像", "按账龄、行为、争议原因与风险标签，形成千人千面画像。", "一刀切、策略粗放"],
  ["策略生成", "自动匹配催收节奏、话术、强度与升级路径。", "策略依赖经验、难标准化"],
  ["多身份触达", "管家、客服、法务、律师身份按进展动态切换。", "温度与强度难兼顾"],
  ["全域送达", "电话、邮件、短信、快递多方式自动化送达，并具备信息修复能力。", "触达覆盖不全、失联"],
  ["诉讼与立案", "催收函、律师函、诉状与证据 AI 批量生成、自动申请立案、跟进案件进展。", "法律催收难批量、周期长"],
];

const recovIdentities = [
  ["project-manager-icon.svg", "沟通温度: 高", "① 项目管家", "温馨提醒、关系维护", "用于早期催缴或日常温和提醒，降低抵触情绪。"],
  ["customer-service-icon.svg", "双重转化", "② 企业客服主管", "账单核对、答疑沟通", "对账单有异议者提供专业对账服务，捕获真实拒收抗辩理由。"],
  ["legal-manager-icon.svg", "启动法理", "③ 法务经理", "正式催告、责任告知", "对无理由抗交者，以公司法务名义发出合规告知，申明信用违约责任。"],
  ["lawyer-icon.svg", "法律强度: 高", "④ 执业律师", "律师函、起诉立案", "对恶意欠费者流转至律师身份，批量生成律师正函并推送司法立案程序。"],
];

const recovLegalSteps = [
  ["温馨提醒", "项目管家式提醒，降低抵触情绪。"], ["正式催告", "明确账单、期限与后果。"], ["律师话术 / EMS", "法律威慑与送达留痕。"],
  ["证据链补齐", "合同、账单、沟通记录自动归档。"], ["诉讼材料", "起诉状、证据目录自动生成。"], ["立案跟进", "自动提交法院立案系统并跟踪，支持异地代开庭。"],
];

const recovFoundation = [
  ["knowledge.png", "知识与经验", "专家经验 · 行业规范 · 法律法规 · 拒缴案例"],
  ["model.png", "模型能力", "垂直大模型 · 推理大模型 · 记忆模型 · 声音与视觉大模型"],
  ["engineering.png", "工程方法", "上下文工程 · 思维链 · 结构化催收步骤 · 独有、创新的智能体架构"],
  ["agent.png", "Agent 内核", "知识推理 · 知识总结 · 自主执行 · 自主进化"],
];

const recovMatrix = [
  ["brain.svg", "策略大脑", "按画像、账龄、行为自动分层，生成千人千面策略与话术。"],
  ["identities.svg", "AI 多身份", "管家、客服、法务、律师四种身份按进展动态切换。"],
  ["channels.svg", "多渠道触达", "语音外呼、短信、邮件、法律 EMS 四位一体并留痕。"],
  ["concurrency.svg", "高并发作业", "可同时处理 1 户到 1 千户，资产量越大，并发优势越明显。"],
  ["document.svg", "法律文书", "催收函、律师函、起诉状、证据清单批量生成并盖章。"],
  ["litigation.svg", "自主诉讼", "自动提交法院立案系统，跟进进展，支持异地代开庭。"],
];

const recovApplications = [
  ["消费金融类", "逾期信用卡账单 · 消费分期（花呗 / 白条）· 现金贷 / 小额借款"],
  ["个人信贷类", "银行无抵押个人信用贷 · 汽车金融分期 · 批量小额个贷"],
  ["生活服务类", "逾期物业费 · 水电燃气通讯欠费 · 长租公寓 / 商铺租约"],
  ["商业小额债权", "供应链下游应收 · 电商平台违约扣罚 · 标准化批量贸易债权"],
  ["知识产权类", "图片 / 字体 / 音乐维权 · 专利 / 商标侵权 · 标准化小额索赔"],
  ["其他场景化", "教育培训分期 · 医疗美容分期 · 更多场景违约债权……"],
];

const recovDeliverables = [
  ["专业法律能力", "律师标准文书、电子签章、法院立案与案件跟进一体化。"],
  ["全链路闭环", "触达、送达、诉讼、回款确认、服务治理完整打通。"],
  ["自进化运营", "语义分析、实时接管、质检复盘与话术策略持续优化。"],
  ["灵活部署", "托管催收、本地化部署、托管 + 本地混合均可支持。"],
];

const recovTimeline = [
  ["01", "需求对接", "梳理逾期规模与回款目标", "2 天"],
  ["02", "数据接入", "加密传输账单名册并归集", "3 天"],
  ["03", "策略定制", "训练专属业态策略与话术", "5 天"],
  ["04", "正式上线", "配置线路, 7×24 批量运行", "5 天"],
];

export default function RecovAiSolutionPage() {
  return (
    <main className="ras-page">
      <section className="ras-hero" aria-labelledby="ras-hero-title">
        <Image className="ras-hero__gradient ras-hero__gradient--large" src="/images/solutions/recov-ai/hero-gradient-large@3x.png" alt="" width={288} height={288} priority aria-hidden="true" />
        <Image className="ras-hero__gradient ras-hero__gradient--small" src="/images/solutions/recov-ai/hero-gradient-small@3x.png" alt="" width={192} height={192} aria-hidden="true" />
        <div className="ras-hero__copy">
          <p className="ras-hero__eyebrow"><i aria-hidden="true" />不良资产处置 · 行业解决方案</p>
          <h1 id="ras-hero-title">批量债权催收<br />解决方案</h1>
          <p className="ras-hero__lead">基于 AI 催收智能体的全链路、自进化、多智能体协作方案</p>
          <p className="ras-hero__body">把逾期资产，高效、合规地转化为企业现金流，助力信用中国建设。</p>
          <div className="ras-hero__actions">
            <BookingTrigger className="ras-hero__primary">预约产品演示 <Image src="/images/solutions/recov-ai/hero-arrow.svg" alt="" width={16} height={16} /></BookingTrigger>
          </div>
        </div>
      </section>
      <section className="ras-overview" id="recov-ai-overview" aria-labelledby="ras-overview-title">
        <div className="ras-overview__title"><i aria-hidden="true" /><h2 id="ras-overview-title">一、方案概述</h2></div>
        <div className="ras-overview__layout">
          <div className="ras-overview__copy">
            <p>以“高频、小额、标准化”为特征的批量逾期债权，正让企业同时承受成本、效率与合规的三重压力。大量逾期资产被拖成历史坏账，持续侵蚀现金流与利润；传统“人海＋人工法务”的催收模式，流程断点多、单笔成本高、合规难以管控，越拖越难、越难越亏。</p>
            <p>灵宸智能推出的 <strong className="is-blue">Recov Agent</strong> —— <strong>全国首个全链路、自进化、多智能体协作的批量债权催收智能体，</strong>以“懂业务、能决策、可进化”的 AI Agent 为内核，把数据解析、逾期画像、策略生成、多身份触达、全域送达、诉讼立案等原本分散的人工流程，压缩为一套可由 AI 全自动执行的闭环作业：<strong>7×24 批量运行、全程留痕、按进展自动升级。</strong>其目标不是交付一套催收软件，而是直接交付<strong className="is-blue">现金流增量</strong>——以更低成本、更高效率、更高合规标准，把逾期资产高效合规地转化为确定性现金流。</p>
          </div>
          <aside className="ras-overview__questions">
            <h3><Image src="/images/social-grow-solution/why-question.svg" alt="" width={20} height={20} />本方案将回答的五个核心问题：</h3>
            <ol>
              <li><i>1</i><p><strong>企业面临什么问题：</strong>成本、效率、合规三重压力与逾期变坏账的恶性循环</p></li>
              <li><i>2</i><p><strong>Recov Agent 如何解决：</strong>全生命周期六大环节 + 多身份流转 + 司法闭环 + 自进化引擎</p></li>
              <li><i>3</i><p><strong>独特优势与能力：</strong>AI Agent 能力基座、组合能力矩阵与随时间加深的结构性护城河</p></li>
              <li><i>4</i><p><strong>带来什么成效与价值：</strong>效率↑300%、人力成本↓50%、合规纠纷 0 起、现金流增量</p></li>
              <li><i>5</i><p><strong>最终交付什么结果：</strong>现金流回款和企业专属的 AI 智能体综合催收能力，最快 15 天上线</p></li>
            </ol>
          </aside>
        </div>
      </section>
      <section className="ras-problems" aria-labelledby="ras-problems-title">
        <div className="ras-problems__title"><i aria-hidden="true" /><h2 id="ras-problems-title">二、行业与企业面临的问题</h2></div>
        <h3>2.1 催收业务的三重压力</h3>
        <div className="ras-pressure-grid">
          <article className="is-cost"><strong>60%+</strong><h4>成本之痛</h4><p>人力投入占比高，员工压力与人员流动性叠加，单笔催收成本居高不下。</p></article>
          <article className="is-efficiency"><strong>数月 ↓</strong><h4>效率之痛</h4><p>账龄越长越难收，沉淀坏账持续侵蚀利润；当年逾期未催完，次年新增又至。</p></article>
          <article className="is-risk"><strong>零容忍</strong><h4>风险之痛</h4><p>暴力催收、骚扰投诉与品牌声誉风险并存，监管趋严，合规红线不容触碰。</p></article>
        </div>
        <div className="ras-problems__lower">
          <article className="ras-aging">
            <h3>2.2 回款率随账龄断崖式下降</h3>
            <p>逾期账龄每延长一个阶段，回款难度显著上升。小额、批量、分散的债权一旦被拖成历史坏账，回收率将降至个位数——<b>“早期、高频、高效触达”</b>因此成为决定回款的关键变量。</p>
            <div className="ras-aging__chart"><i/><i/><i/><i/><i/></div>
            <div className="ras-aging__axis"><span>M1</span><span>M2</span><span>M3</span><span>M6</span><span>M12+</span></div>
          </article>
          <article className="ras-contradictions">
            <h3>2.3 传统人力密集模式的结构性矛盾</h3>
            <ul>
              <li><strong>大量真人电话催收：</strong><p>坐席投入高、覆盖能力受限、单笔成本高且合规性差，质量因人而异。</p></li>
              <li><strong>人工法律催收：</strong><p>函件、送达、起诉材料与诉讼依赖人工法务或律师，周期长、难以批量化。</p></li>
              <li><strong>逾期变坏账的恶性循环：</strong><p>不积极催缴会引发“跟风欠缴”，收缴率进一步下降，企业无力维持或提升服务水平，服务质量被迫下降，进而陷入“欠费—减质—更难收”的恶性循环。</p></li>
            </ul>
            <div className="ras-contradictions__summary">核心痛点：大量重复劳动 · 成本高 · 效率低 · 合规性差 · 吞噬现金流与利润 · 恶性循环</div>
          </article>
        </div>
      </section>
      <section className="ras-solution" aria-labelledby="ras-solution-title">
        <div className="ras-solution__title"><i aria-hidden="true" /><h2 id="ras-solution-title">三、解决方案：Recov Agent 如何解决这些问题</h2></div>
        <h3>3.1 产品定位 &amp; 3.2 覆盖逾期资产全生命周期的六大处理环节</h3>
        <p className="ras-solution__lead">Recov Agent 不是“辅助人催收”，而是<strong>全链路主动执行催收作业的 AI 工作伙伴：</strong>主动执行、自主决策、声音交互、有记忆反思、自主进化。每个环节都直接化解一类传统痛点：</p>
        <div className="ras-step-grid">{recovSteps.map((step, index)=><article key={step[0]}><div><b>{String(index+1).padStart(2,"0")}</b><h4>{step[0]}</h4></div><p>{step[1]}</p><footer><span>【化解】</span>：{step[2]}</footer></article>)}</div>
        <h3 className="ras-solution__identity-title">3.3 AI 多重身份自动流转：从温馨提醒到法律威慑</h3>
        <p className="ras-solution__identity-lead">智能体按催收进展自动升级身份，沟通温度由高到低、法律强度由低到高，逐级递进——既保留人情味，也形成法律压力，避免一上来就对立：</p>
        <div className="ras-identity-grid">{recovIdentities.map((item,index)=><article className={`is-identity-${index+1}`} key={item[2]}><div className="ras-identity-grid__badge"><Image src={`/images/solutions/recov-ai/identities/${item[0]}`} alt="" width={36} height={36}/><span>{item[1]}</span></div><h4>{item[2]}</h4><small>{item[3]}</small><p>{item[4]}</p></article>)}</div>
        <h3 className="ras-solution__legal-title">3.4 司法闭环：标准化、可批量的法律处置</h3>
        <p className="ras-solution__legal-lead">智能体把证据、文书、签章、送达、立案与案件跟进串成闭环，依据回款进展自动决定下一步法律动作，动作标准化、全程留痕、按进展自动升级：</p>
        <div className="ras-legal-grid">{recovLegalSteps.map((step,index)=><article key={step[0]}><h4><b>{String(index+1).padStart(2,"0")}</b>{step[0]}</h4><p>{step[1]}</p></article>)}</div>
        <div className="ras-solution__advantage"><strong>独特核心优势：</strong>律师级材料生成 + 在线签章 + 自动立案跟进，让批量小额债权首次具备规模化司法处置能力。</div>
        <div className="ras-solution__bottom"><article><h3>3.5 语义分析与自动对账：减少误催，变“被动收费”为“主动治理”</h3><p>每一次外呼不只是催缴，更是发现服务缺口。当客户反馈“已缴费”或“要求核对”时，系统自动触发后台对账，减少误催与重复催；典型拒缴原因（如物业设施损坏、绿化无人修剪、车位纠纷等）被自动提炼并回写知识库，推动企业从“被动收费”转向“主动治理”。</p></article><article><h3>3.6 自进化引擎：越用越准的数据飞轮</h3><p>声音克隆保持统一品牌语气，关键节点支持实时人机协作接管，全程质检复盘话术与转化，拒缴原因回写知识库，智能体自主反思、进化。</p><div>{["催缴数据持续注入","催收反馈实时回收","策略与话术复盘进化","审查与催收能力升级"].map((text,index)=><span key={text}>{text}{index<3&&<i>→</i>}</span>)}</div></article></div>
      </section>
      <section className="ras-advantages" aria-labelledby="ras-advantages-title">
        <div className="ras-advantages__title"><i aria-hidden="true" /><h2 id="ras-advantages-title">四、独特优势与核心能力</h2></div>
        <div className="ras-advantages__layout">
          <div className="ras-foundation"><h3>4.1 完善的 AI Agent 能力基座</h3><div>{recovFoundation.map(item=><article key={item[1]}><Image src={`/images/solutions/recov-ai/advantages/${item[0]}`} alt="" width={40} height={40}/><div><h4>{item[1]}</h4><p>{item[2]}</p></div></article>)}</div></div>
          <div className="ras-matrix"><h3>4.2 组合能力矩阵：从千人多面到千人千面的高并发作业</h3><p>真正的竞争力来自“策略 + 身份 + 信息修复 + 法律 + 并发”的组合，而非单点外呼或单点诉讼。</p><div>{recovMatrix.map(item=><article key={item[1]}><div><Image src={`/images/solutions/recov-ai/advantages/${item[0]}`} alt="" width={24} height={24}/><h4>{item[1]}</h4></div><p>{item[2]}</p></article>)}</div></div>
        </div>
      </section>
      <section className="ras-outcomes" aria-labelledby="ras-outcomes-title">
        <div className="ras-outcomes__title"><i aria-hidden="true" /><h2 id="ras-outcomes-title">五、价值与成效：问题被解决得如何</h2></div>
        <div className="ras-outcomes__metrics">
          <article className="is-green"><strong><Image src="/images/solutions/recov-ai/outcomes/trend-up.png" alt="" width={20} height={20}/>300%</strong><h3>效率提升</h3><p>唤醒沉睡的历史欠费与小额坏账，大幅提升单位时间处理量。</p></article>
          <article className="is-blue"><strong><Image src="/images/solutions/recov-ai/outcomes/trend-down.png" alt="" width={20} height={20}/>50%</strong><h3>人力成本下降</h3><p>替代重复外呼与法律文书处理及诉讼，释放人力聚焦核心案情。</p></article>
          <article className="is-amber"><strong>0 起</strong><h3>暴力催收 / 合规纠纷</h3><p>话术可控、全程录音留痕，将语言暴力与合规纠纷降至为零。</p></article>
          <article className="is-indigo"><strong>7×24</strong><h3>批量执行</h3><p>全时段不间断作业，自进化、越用越懂业务、越用越准。</p></article>
        </div>
        <div className="ras-outcomes__flow"><h3>5.2 价值闭环流程</h3><div><article><Image src="/images/solutions/recov-ai/outcomes/assets-pool.png" alt="" width={64} height={64}/><h4>逾期资产池</h4><p>历史欠费 / 小额账单 / 批量分散债权</p></article><i>→</i><article><Image src="/images/solutions/recov-ai/outcomes/agent.png" alt="" width={64} height={64}/><h4>Recov Agent 运营</h4><p>画像 · 外呼 · 送达 · 文书 · 立案 · 对账，7×24 批量执行</p></article><i>→</i><article><Image src="/images/solutions/recov-ai/outcomes/cashflow.png" alt="" width={64} height={64}/><h4>回款与改进</h4><p>回款确认 / 合规留痕 / 服务改进，支持按回款结果收费</p></article></div><p className="ras-outcomes__summary">综合价值：交付的是“现金流增量”，而非一套催收软件；把逾期资产变为现金流入，变“被动收费”为“主动治理”，以合规方式助力信用中国建设。</p></div>
      </section>
      <section className="ras-applications" aria-labelledby="ras-applications-title">
        <div className="ras-applications__title"><i aria-hidden="true" /><h2 id="ras-applications-title">六、应用场景</h2></div>
        <p className="ras-applications__lead">以批量、小额、标准化为特征的逾期债权，是 Recov Agent 并发优势最明显的主战场。方案可全维度覆盖以下场景：</p>
        <div className="ras-applications__grid">{recovApplications.map(([title,body])=><article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>
      <section className="ras-delivery" aria-labelledby="ras-delivery-title">
        <div className="ras-delivery__title"><i aria-hidden="true" /><h2 id="ras-delivery-title">七、交付成果与实施</h2></div>
        <div className="ras-delivery__layout">
          <div className="ras-deliverables"><h3>7.1 交付成果：企业专属的 AI 智能体综合催收能力</h3><div>{recovDeliverables.map(([title,body])=><article key={title}><div><h4>{title}</h4><p>{body}</p></div></article>)}</div></div>
          <div className="ras-timeline"><h3>7.2 合作上线节奏：最快 15 天启动专属能力</h3><ol>{recovTimeline.map(([number,title,body,days])=><li key={number}><b><span>{number}</span>{title}</b><div><h4>{body}</h4><p>{days}</p></div></li>)}</ol></div>
        </div>
        <div className="ras-commercial"><h3>7.3 灵活的合作（商业）模式</h3><div><article><h4>RaaS (按回款收费)</h4><p>Result as a Service：按实际回款金额收费，将坏账直接转化为确定性现金流。</p></article><article><h4>数字员工 (按结果收费)</h4><p>Digital Employee：催收 AI Agent 作为“数字员工”入职企业，按实际产出付费。</p></article></div><p>统一基石：以结果为导向，与客户利益深度对齐 —— 效率更高、收费更低，收得回才付费。</p></div>
      </section>
      <section className="ras-why" aria-labelledby="ras-why-title">
        <div className="ras-why__title"><i aria-hidden="true" /><h2 id="ras-why-title">八、为什么选择 Recov Agent</h2></div>
        <div className="ras-why__grid"><article><h3>结果导向</h3><p>按实际回款收费，利益深度对齐——交付的是现金流增量，而非一套催收软件。</p></article><article><h3>合规安全</h3><p>全程算法控制话术、行为可追溯，将语言暴力与合规纠纷降至为零，保护品牌声誉。</p></article><article><h3>全链路闭环</h3><p>策略·画像·身份·外呼·送达·法律·并发一体，律师级材料生成 + 自动立案，规模化电话催收 + 司法处置。</p></article></div>
      </section>
      <section className="ras-closing" aria-labelledby="ras-closing-title">
        <h2 id="ras-closing-title">构建您的 AI 智能体综合催收能力：让逾期资产高效、合规地变为企业现金流。让人们从重复劳动中解放出来。</h2>
      </section>
    </main>
  );
}
