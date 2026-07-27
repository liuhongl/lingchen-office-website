import { BookingTrigger } from "@/components/booking-trigger";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SolutionTabs } from "@/components/solution-tabs";
import Image from "next/image";

export function NonPerformingAssetsContent() {
  return (
    <main className="npa-page">
        <section className="npa-hero">
          <div className="npa-shell">
            <p className="npa-hero__eyebrow"><i />不良资产处置 · 行业解决方案</p>
            <h1>批量债权催收解决方案</h1>
            <h2>全国首个全链路、自进化、多智能体协作的批量债权催收智能体</h2>
            <p className="npa-hero__lead">基于灵宸智能推出的Recov Agent催收智能体的全链路、自进化、多智能体催收协作方案，把逾期资产，高效、合规地转化为企业现金流，助力信用中国建设。</p>
            <BookingTrigger className="npa-primary-cta">预约产品演示 <span aria-hidden="true">→</span></BookingTrigger>
          </div>
        </section>
        <section className="npa-overview npa-section">
          <div className="npa-shell">
            <h2 className="npa-section-title">一、方案概述</h2>
            <div className="npa-overview__grid">
              <div className="npa-overview__copy">
                <p>以“高频、小额、标准化”为特征的批量逾期债权，正让企业同时承受成本、效率与合规的三重压力。大量逾期资产被拖成历史坏账，持续侵蚀现金流与利润；传统“人海＋人工法务”的催收模式，流程断点多、单笔成本高、合规难以管控，越拖越难、越难越亏。</p>
                <p>灵宸智能推出的 <strong>Recov Agent</strong> —— 全国首个全链路、自进化、多智能体协作的批量债权催收智能体，以“懂业务、能决策、可进化”的 AI Agent 为内核，把数据解析、逾期画像、策略生成、多身份触达、全域送达、诉讼立案等原本分散的人工流程，压缩为一套可由 AI 全自动执行的闭环作业：7×24 批量运行、全程留痕、按进展自动升级。其目标不是交付一套催收软件，而是直接交付现金流增量——以更低成本、更高效率、更高合规标准，把逾期资产高效合规地转化为确定性现金流。</p>
              </div>
              <aside className="npa-overview__questions">
                <h3>本方案将回答的五个核心问题</h3>
                <ol>
                  <li><b>1</b><span>企业面临什么问题：成本、效率、合规三重压力与逾期资产持续恶化的恶性循环</span></li>
                  <li><b>2</b><span>Recov Agent 如何解决：全生命周期六大环节＋多身份流转＋司法闭环＋自进化引擎</span></li>
                  <li><b>3</b><span>独特优势与能力：AI Agent 能力基座、组合能力矩阵与随时间加深的结构性护城河</span></li>
                  <li><b>4</b><span>带来什么成效与价值：效率↑300%、人力成本↓50%、合规纠纷 0 起、现金流增量</span></li>
                  <li><b>5</b><span>最终交付什么成果：现金流回款和企业专属的 AI 智能体综合催收能力，最快 15 天上线</span></li>
                </ol>
              </aside>
            </div>
          </div>
        </section>
        <section className="npa-problems npa-section">
          <div className="npa-shell">
            <h2 className="npa-section-title">二、行业与企业面临的问题</h2>
            <h3 className="npa-subsection-title">2.1 催收业务的三重压力</h3>
            <div className="npa-pressure-grid">
              <article className="npa-pressure-card npa-pressure-card--cost">
                <div className="npa-pressure-card__metric-row"><span className="npa-pressure-icon"><Image src="/images/non-performing-assets/pressure-cost@3x.png" alt="" width={23} height={14} /></span><strong>60%+</strong></div>
                <h4>成本之痛</h4>
                <p>人力投入占比高，员工压力与人员流动性叠加，单笔催收成本居高不下。</p>
              </article>
              <article className="npa-pressure-card npa-pressure-card--efficiency">
                <div className="npa-pressure-card__metric-row"><span className="npa-pressure-icon"><Image src="/images/non-performing-assets/pressure-efficiency@3x.png" alt="" width={23} height={23} /></span><strong>数月<span>↓</span></strong></div>
                <h4>效率之痛</h4>
                <p>账龄越长越难收，沉淀坏账持续侵蚀利润；当年逾期未催完，次年新增又至。</p>
              </article>
              <article className="npa-pressure-card npa-pressure-card--risk">
                <div className="npa-pressure-card__metric-row"><span className="npa-pressure-icon"><Image src="/images/non-performing-assets/pressure-risk@3x.png" alt="" width={23} height={21} /></span><strong>零容忍</strong></div>
                <h4>风险之殇</h4>
                <p>暴力催收、骚扰投诉与品牌声誉风险并存，监管趋严，合规红线不容触碰。</p>
              </article>
            </div>
            <h3 className="npa-subsection-title npa-subsection-title--aging">2.2 回款率随账龄断崖式下降</h3>
            <div className="npa-aging-card">
              <p>逾期账龄每延长一个阶段，回款难度显著上升。小额、批量、分散的债权一旦被拖成历史坏账，回收率将降至个位数——<strong>“早期、高频、高效触达”</strong>因此成为决定回款的关键变量。</p>
            </div>
            <h3 className="npa-subsection-title npa-subsection-title--contradiction">2.3 传统人力密集模式的结构性矛盾</h3>
            <div className="npa-contradiction">
              <ul>
                <li><strong>大量真人电话催收：</strong>坐席投入高、覆盖能力受限、单笔成本高且合规性差，质量因人而异。</li>
                <li><strong>人工法律催收：</strong>函件、送达、起诉材料与诉讼依赖人工法务或律师，周期长、难以批量化。</li>
                <li><strong>逾期变坏账的恶性循环：</strong>不积极催缴会引发“跟风欠缴”，收缴率进一步下降，企业无力维持或提升服务水平，服务质量被迫下降，进而陷入“欠费—减质—更难收”的恶性循环。</li>
              </ul>
              <aside className="npa-core-pain"><h4>ⓘ&nbsp; 核心痛点</h4><p>大量重复劳动、成本高、效率低、合规性差、吞噬现金流与利润、恶性循环</p></aside>
            </div>
          </div>
        </section>
        <section className="npa-solution npa-section">
          <div className="npa-shell">
            <h2 className="npa-section-title">三、解决方案：Recov Agent 如何解决这些问题</h2>
            <h3 className="npa-subsection-title">3.1 产品定位 &amp; 覆盖逾期资产全生命周期的六大处理环节</h3>
            <p className="npa-solution-lead">Recov Agent 不是“辅助人催收”，而是全链路主动执行催收作业的 AI 工作伙伴：主动执行、自主决策、声音交互、有记忆反思、自主进化。每个环节都直接化解一类传统痛点：</p>
            <div className="npa-step-grid">
              {[
                ['01','数据解析','数据解析与历史沟通记录归集，记录每个项目的真实问题（业务全身体检）。','【化解】：信息断点、口径不一'],
                ['02','逾期画像','按账龄、行为、争议原因与风险标签，形成千人千面画像。','【化解】：一刀切、策略粗放'],
                ['03','策略生成','自动匹配催收节奏、话术、强度与升级路径。','【化解】：策略依赖经验、难标准化'],
                ['04','多身份触达','管家、客服、法务、律师身份按进展动态切换。','【化解】：温度与强度难兼顾'],
                ['05','全域送达','电话、邮件、短信、快递多方式自动化送达，并具备信息修复能力。','【化解】：触达覆盖不全、失联'],
                ['06','诉讼与立案','催收函、律师函、诉状与证据 AI 批量生成、自动申请立案、跟进案件进展。','【化解】：法律催收难批量、周期长'],
              ].map(([no,title,copy,pain]) => <article key={no}><header><b>{no}</b><h4>{title}</h4></header><p>{copy}</p><strong>{pain}</strong></article>)}
            </div>
            <h3 className="npa-subsection-title npa-subsection-title--identity">3.2 AI多重身份自动流转：从温馨提醒到法律威慑</h3>
            <p className="npa-solution-lead">智能体按催收进展自动升级身份，沟通温度由高到低、法律强度由低到高，逐级递进——既保留人情味，也形成法律压力，避免一上来就对立：</p>
            <div className="npa-identity-grid">
              <article><header className="npa-identity-card__header"><span className="npa-identity-icon"><Image src="/images/non-performing-assets/identity-project-manager@3x.png" alt="" width={12} height={15}/></span><h4>项目管家</h4><strong>沟通温度: 高</strong></header><b>温馨提醒、关系维护</b><p>用于早期催缴或日常温和提醒，降低抵触情绪。</p></article>
              <article><header className="npa-identity-card__header"><span className="npa-identity-icon"><Image src="/images/non-performing-assets/identity-customer-service@3x.png" alt="" width={17} height={13}/></span><h4>企业客服主管</h4><strong>双重转化</strong></header><b>账单核对、答疑沟通</b><p>对账单有异议者提供专业对账服务，捕获真实拒收抗辩理由。</p></article>
              <article><header className="npa-identity-card__header"><span className="npa-identity-icon"><Image src="/images/non-performing-assets/identity-legal-manager@3x.webp" alt="" width={15} height={15}/></span><h4>法务经理</h4><strong>启动法理</strong></header><b>正式催告、责任告知</b><p>对无理由抗交者，以公司法务名义发出合规告知，申明信用违约责任。</p></article>
              <article><header className="npa-identity-card__header"><span className="npa-identity-icon"><Image src="/images/non-performing-assets/identity-lawyer@3x.png" alt="" width={15} height={10}/></span><h4>执业律师</h4><strong>法律强度: 高</strong></header><b>律师函、起诉立案</b><p>对恶意欠费者流转至律师身份，批量生成律师正函并推送司法立案程序。</p></article>
            </div>
            <h3 className="npa-subsection-title npa-subsection-title--legal">3.3 司法闭环：标准化、可批量的法律处置</h3>
            <p className="npa-solution-lead">智能体把证据、文书、签章、送达、立案与案件跟进串成闭环，依据回款进展自动决定下一步法律动作，动作标准化、全程留痕、按进展自动升级：</p>
            <div className="npa-legal-grid">
              {[
                ['01','温馨提醒','项目管家式提醒，降低抵触情绪。'],['02','正式催告','明确账单、期限与后果。'],['03','律师话术 / EMS','法律威慑与送达留痕。'],
                ['04','证据链补齐','合同、账单、沟通记录自动归档。'],['05','诉讼材料','起诉状、证据目录自动生成。'],['06','立案跟进','自动提交法院立案系统并跟踪，支持异地代开庭。'],
              ].map(([no,title,copy]) => <article key={no}><div className="npa-legal-card__heading"><b>{no}</b><h4>{title}</h4></div><p>{copy}</p></article>)}
            </div>
            <p className="npa-legal-note">独特核心优势：律师级材料生成 + 在线签章 + 自动立案跟进，让批量小额债权首次具备规模化司法处置能力。</p>
            <div className="npa-solution-bottom">
              <article><h3>3.4 语义分析与自动对账：减少误催，变“被动收费”为“主动治理”</h3><p>每一次外呼不只是催缴，更是发现服务缺口。当客户反馈“已缴费”或“要求核对”时，系统自动触发后台对账，减少误催与重复催；典型拒缴原因（如物业设施损坏、绿化无人修剪、车位纠纷等）被自动提炼并回写知识库，推动企业从“被动收费”转向“主动治理”。</p></article>
              <article><h3>3.5 自进化引擎：越用越准的数据飞轮</h3><p>声音克隆保持统一品牌语气，关键节点支持实时人机协作接管，全程质检复盘话术与转化，拒缴原因回写知识库，智能体自主反思、进化。</p><div className="npa-evolution-tags"><span>催缴数据持续注入</span><span>催收反馈实时回收</span><span>策略与话术复盘进化</span><span>审查与催收能力升级</span></div></article>
            </div>
          </div>
        </section>
        <section className="npa-advantages npa-section">
          <div className="npa-shell">
            <h2 className="npa-section-title">四、独特优势与核心能力</h2>
            <div className="npa-advantages-grid">
              <div><h3>4.1 完善的 AI Agent 能力基座</h3><div className="npa-foundation-list">
                <article><h4>知识与经验</h4><p>专家经验 · 行业规范 · 法律法规 · 拒缴案例</p></article>
                <article><h4>模型能力</h4><p>垂直大模型 · 推理大模型 · 记忆模型 · 声音与视觉大模型</p></article>
                <article><h4>工程方法</h4><p>上下文工程 · 思维链 · 结构化催收步骤 · 独有、创新的智能体架构</p></article>
                <article><h4>Agent 内核</h4><p>知识推理 · 知识总结 · 自主执行 · 自主进化</p></article>
              </div></div>
              <div><h3>4.2 组合能力矩阵：从千人多面到千人千面的高并发作业</h3><p className="npa-matrix-lead">真正的竞争力来自“策略 + 身份 + 信息修复 + 法律 + 并发”的组合，而非单点外呼或单点诉讼。</p><div className="npa-matrix-grid">
                <article><h4>策略大脑</h4><p>按画像、账龄、行为自动分层，生成千人千面策略与话术。</p></article>
                <article><h4>AI 多身份</h4><p>管家、客服、法务、律师四种身份按进展动态切换。</p></article>
                <article><h4>多渠道触达</h4><p>语音外呼、短信、邮件、法律 EMS 四位一体并留痕。</p></article>
                <article><h4>高并发作业</h4><p>可同时处理 1 户到 1 千户，资产量越大，并发优势越明显。</p></article>
                <article><h4>法律文书</h4><p>催收函、律师函、起诉状、证据清单批量生成并盖章。</p></article>
                <article><h4>自主诉讼</h4><p>自动提交法院立案系统，跟进进展，支持异地代开庭。</p></article>
              </div></div>
            </div>
          </div>
        </section>
        <section className="npa-results npa-section">
          <div className="npa-shell">
            <h2 className="npa-section-title">五、价值与成效：问题被解决得如何</h2>
            <div className="npa-metrics">
              <article><strong className="is-directional">↑<span>300%</span></strong><h3>效率提升</h3><p>唤醒沉睡的历史欠费与小额坏账，大幅提升单位时间处理量。</p></article>
              <article><strong className="is-directional">↓<span>50%</span></strong><h3>人力成本下降</h3><p>替代重复外呼与法律文书处理及诉讼，释放人力聚焦核心案情。</p></article>
              <article><strong><span>0 起</span></strong><h3>暴力催收 / 合规纠纷</h3><p>话术可控、全程录音留痕，将语言暴力与合规纠纷降至为零。</p></article>
              <article><strong><span>7×24</span></strong><h3>批量执行</h3><p>全时段不间断作业，自进化、越用越懂业务、越用越准。</p></article>
            </div>
            <div className="npa-value-flow">
              <h3>5.2 价值闭环流程</h3>
              <div className="npa-flow-nodes">
                <article><span className="npa-flow-icon"><Image src="/images/non-performing-assets/flow-assets@3x.png" alt="" width={19} height={24}/></span><h4>逾期资产池</h4><p>历史欠费 / 小额账单 / 批量分散债权</p></article><i>→</i>
                <article className="is-primary"><span className="npa-flow-icon"><Image src="/images/non-performing-assets/flow-agent@3x.png" alt="" width={21} height={24}/></span><h4>Recov Agent 运营</h4><p>画像 · 外呼 · 送达 · 文书 · 立案 · 对账，7×24 批量执行</p></article><i>→</i>
                <article><span className="npa-flow-icon"><Image src="/images/non-performing-assets/flow-results@3x.png" alt="" width={24} height={24}/></span><h4>回款与改进</h4><p>回款确认 / 合规留痕 / 服务改进，支持按回款结果收费</p></article>
              </div>
              <p className="npa-flow-summary">综合价值：交付的是<strong>“现金流增量”</strong>，而非一套催收软件；把逾期资产变为现金流入，变“被动收费”为“主动治理”，以合规方式助力信用中国建设。</p>
            </div>
          </div>
        </section>
        <section className="npa-scenes npa-section">
          <div className="npa-shell">
            <h2 className="npa-section-title">六、应用场景</h2>
            <p className="npa-scenes-lead">以批量、小额、标准化为特征的逾期债权，是 Recov Agent 并发优势最明显的主战场。方案可全维度覆盖以下场景：</p>
            <div className="npa-scene-grid">
              <article><div className="npa-scene-card__heading"><span className="npa-scene-icon"><Image src="/images/non-performing-assets/scene-consumer-finance@3x.png" alt="" width={18} height={14}/></span><h3>消费金融类</h3></div><p>逾期信用卡账单 · 消费分期（花呗 / 白条）· 现金贷 / 小额借款</p></article>
              <article><div className="npa-scene-card__heading"><span className="npa-scene-icon"><Image src="/images/non-performing-assets/scene-personal-credit@3x.png" alt="" width={14} height={18}/></span><h3>个人信贷类</h3></div><p>银行无抵押个人信用贷 · 汽车金融分期 · 批量小额个贷</p></article>
              <article><div className="npa-scene-card__heading"><span className="npa-scene-icon"><Image src="/images/non-performing-assets/scene-life-services@3x.png" alt="" width={18} height={18}/></span><h3>生活服务类</h3></div><p>逾期物业费 · 水电燃气通讯欠费 · 长租公寓 / 商铺租约</p></article>
              <article><div className="npa-scene-card__heading"><span className="npa-scene-icon"><Image src="/images/non-performing-assets/scene-commercial-debt@3x.png" alt="" width={18} height={18}/></span><h3>商业小额债权</h3></div><p>供应链下游应收 · 电商平台违约扣罚 · 标准化批量贸易债权</p></article>
              <article><div className="npa-scene-card__heading"><span className="npa-scene-icon"><Image src="/images/non-performing-assets/scene-intellectual-property@3x.png" alt="" width={18} height={18}/></span><h3>知识产权类</h3></div><p>图片 / 字体 / 音乐维权 · 专利 / 商标侵权 · 标准化小额索赔</p></article>
              <article><div className="npa-scene-card__heading"><span className="npa-scene-icon"><Image src="/images/non-performing-assets/scene-other@3x.png" alt="" width={16} height={2}/></span><h3>其他场景化</h3></div><p>教育培训分期 · 医疗美容分期 · 更多场景违约债权……</p></article>
            </div>
          </div>
        </section>
        <section className="npa-delivery npa-section">
          <div className="npa-shell">
            <h2 className="npa-section-title">七、交付成果与实施</h2>
            <div className="npa-delivery-grid">
              <div><h3>7.1 交付成果：企业专属的 AI 智能体综合催收能力</h3><div className="npa-deliverables">
                <article><h4>专业法律能力</h4><p>律师标准文书、电子签章、法院立案与案件跟进一体化。</p></article>
                <article><h4>全链路闭环</h4><p>触达、送达、诉讼、回款确认、服务治理完整打通。</p></article>
                <article><h4>自进化运营</h4><p>语义分析、实时接管、质检复盘与话术策略持续优化。</p></article>
                <article><h4>灵活部署</h4><p>托管催收、本地化部署、托管 + 本地混合均可支持。</p></article>
              </div></div>
              <div><h3>7.2 合作上线节奏：最快 15 天启动专属能力</h3><ol className="npa-timeline">
                <li><b>01 需求对接</b><p>梳理逾期规模与回款目标 · 2 天</p></li>
                <li><b>02 数据接入</b><p>加密传输账单名册并归集 · 3 天</p></li>
                <li><b>03 策略定制</b><p>训练专属业态策略与话术 · 5 天</p></li>
                <li><b>04 正式上线</b><p>配置线路，7×24 批量运行 · 5 天</p></li>
              </ol></div>
            </div>
            <div className="npa-cooperation"><h3>7.4 灵活的合作（商业）模式</h3><div>
              <article><h4>RaaS (按回款收费)</h4><p>Result as a Service：按实际回款金额收费，将坏账直接转化为确定性现金流。</p></article>
              <article><h4>数字员工 (按结果收费)</h4><p>Digital Employee：催收 AI Agent 作为“数字员工”入职企业，按实际产出付费。</p></article>
            </div><p className="npa-cooperation__foundation">以结果为导向，与客户利益深度对齐 —— 效率更高、收费更低，收得回才付费。</p></div>
          </div>
        </section>
        <section className="npa-why npa-section">
          <div className="npa-shell"><h2 className="npa-section-title">八、为什么选择 Recov Agent</h2><div className="npa-why-grid">
            {[
              ['01','结果导向','按实际回款收费，利益深度对齐——交付的是现金流增量，而非一套催收软件。'],
              ['02','合规安全','全程算法控制话术、行为可追溯，将语言暴力与合规纠纷降至为零，保护品牌声誉。'],
              ['03','全链路闭环','策略·画像·身份·外呼·送达·法律·并发一体，律师级材料生成 + 自动立案，规模化电话催收 + 司法处置。'],
            ].map(([no,title,copy]) => <article key={no}><div className="npa-why-card__heading"><b>{no}</b><h3>{title}</h3></div><p>{copy}</p></article>)}
          </div></div>
        </section>
        <section className="npa-closing">
          <div className="npa-shell">
            <h2>构建您的 AI 智能体综合催收能力</h2>
            <p>让逾期资产高效、合规地变为企业现金流。让人们从重复劳动中解放出来。</p>
          </div>
        </section>
    </main>
  );
}

export default function NonPerformingAssetsPage() {
  return (
    <>
      <SiteHeader />
      <SolutionTabs />
      <NonPerformingAssetsContent />
      <SiteFooter />
    </>
  );
}
