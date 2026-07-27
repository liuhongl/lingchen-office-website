import { ProductBreadcrumb } from "@/components/product-breadcrumb";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import Image from "next/image";

const pressures = [
  [
    "1",
    "60%+",
    "成本之痛",
    "人力投入占比高，客服与法务管家面临服务压力与催收压力，导致单笔催收成本居高不下。",
  ],
  [
    "2",
    "数月↓",
    "效率之痛",
    "账龄越长越难收，当年逾期未收完次年新增又至，沉淀坏账持续侵蚀企业现金流与微薄利润。",
  ],
  [
    "3",
    "零容忍",
    "风险之痛",
    "传统粗放沟通中，暴力催收、骚扰投诉与品牌声誉风险并存，合规红线对企业是一条不容逾越的高压线。",
  ],
];

const flows = [
  [
    "大模型决策大脑",
    "根据欠款画像、争议原因及还款潜力自适应制定千人千面策略与话术，自适应流转。",
    "/images/recov-ai/flow-decision.svg",
  ],
  [
    "AI 身份阶梯流转",
    "项目管家（温度高） → 企业客服（账单核对） → 法务经理（督缴告诫） → 执业律师（诉讼威慑）动态流转。",
    "/images/recov-ai/flow-identity.svg",
  ],
  [
    "自动化文书装配",
    "一键提取合同凭证，AI 极速生成律师函、催收函、正规民事起诉状、证据清单并在线盖章。",
    "/images/recov-ai/flow-document.svg",
  ],
  [
    "直贯法院自动立案",
    "无缝对接互联网法院、进行在线送达、调解及跟审跟庭程序，彻底攻克批量小额起诉门槛。",
    "/images/recov-ai/flow-court.svg",
  ],
];
const stages = [
  [
    "1",
    "数据解析",
    "债权数据与历史沟通记录智能归集。记录每个项目真实问题，实现物业/服务全身体检，沉淀为可建模的结构化数据资产。",
  ],
  [
    "2",
    "逾期画像",
    "按账龄、行为、争议原因与风险标签，对欠缴人进行千人千面精准建模，为针对性策略定制提供决策依据。",
  ],
  [
    "3",
    "策略生成",
    "基于画像自动匹配催收节奏、定制化话术、施压强度与流转升级路径，告别“一刀切”的传统机械模板。",
  ],
  [
    "4",
    "多身份触达",
    "项目管家、企业客服、法务经理、执业律师四种身份动态切换，AI 具备低延迟、可思考、自主协商与调解能力。",
  ],
  [
    "5",
    "全域送达",
    "电话、短信、邮件、法律 EMS 四位一体自动化级联触达，具备强大的失联信息修复与触达留痕存证能力。",
  ],
  [
    "6",
    "诉讼与立案",
    "催收函、律师函、起诉状、证据清单 AI 一键批量生成并盖章，自动对接法院立案系统申请立案，并跟进跟审案件进展。",
  ],
];

const capabilities = [
  [
    "策略大脑",
    "按画像、账龄、行为自动分层，智能体自主分析、自适应话术，实现千人千面的催收策略定制。",
  ],
  [
    "AI 多身份流转",
    "项目管家（温馨提醒/关系维护） → 企业客服（账单核对/答疑沟通） → 法务经理（正式催告/责任告知） → 执业律师（律师函/起诉立案）按进展与还款意愿动态切换。",
  ],
  [
    "司法闭环",
    "从温馨提醒到自主诉讼，实现法律动作标准化。通过律师级材料生成、在线签章、自动立案跟进，赋予小额分散债权规模化司法处置能力。",
  ],
  [
    "高并发作业",
    "支持 7×24 批量高并发运行，可同时处理 1 户到 1000 户，欠费资产规模越大，其并发效率优势越明显。",
  ],
  [
    "失联信息修复",
    "多渠道级联触达留痕，配合失联信息修复技术，有效唤醒由于失联、搬迁或拒接导致的沉睡呆坏账。",
  ],
  [
    "自进化引擎",
    "支持统一品牌语气的声音克隆、关键节点实时接管、全程质检复盘，拒缴原因回写知识库并自主反思、进化。",
  ],
];

const metrics = [
  ["↑ 300%", "效率提升 / 唤醒呆账"],
  ["↓ 50%", "人力成本下降 / 释放体力"],
  ["0 起", "暴力催收 / 合规纠纷"],
  ["RaaS", "结果付费 / 按回款确认收费"],
];
const scenes = [
  [
    "生活服务类",
    "逾期物业费、水/电/燃气/供暖/通讯欠费、长租公寓房租欠缴、商铺小额租金违约等。",
  ],
  [
    "消费金融类",
    "信用卡逾期账单、消费分期违约（花呗/白条等）、小额网贷/现金借款违约。",
  ],
  [
    "个人信贷类",
    "银行无抵押个人信用贷款、汽车金融分期逾期、非银机构批量小额个贷。",
  ],
  [
    "商业小额债权",
    "供应链下游小额欠款/应收账款、电商平台商家违约扣罚、标准化批量贸易尾款等。",
  ],
  [
    "知识产权类",
    "图片/字体/音乐版权批量侵权索赔、专利/商标小额侵权标准化索赔。",
  ],
  [
    "其他场景化",
    "教育培训分期贷款、医疗美容消费违约分期等各类分期场景......",
  ],
];

function Heading({
  label,
  title,
  icon,
}: {
  label: string;
  title?: string;
  icon?: string;
}) {
  return (
    <header className={`recov-heading${icon ? " recov-heading--asset" : ""}`}>
      <span>
        {icon && (
          <i>
            <Image src={icon} alt="" width={14} height={14} />
          </i>
        )}
        {label}
      </span>
      {title && <h2>{title}</h2>}
    </header>
  );
}

export default function RecovAiPage() {
  return (
    <div className="recov-page">
      <SiteHeader />
      <main>
        <ProductBreadcrumb name="Recov AI" description="AI 不良资产处置 Agent—批量不良资产业务处置，提升企业服务水准，交付现金流回款结果。" />
        <section className="recov-hero">
          <div className="recov-shell">
            <div className="recov-hero-tags">
              <span>
                <Image src="/images/recov-ai/hero-agent.svg" alt="" width={12} height={11} />
                AI Agent
              </span>
              <span>企业级解决方案</span>
            </div>
            <h1>
              <span>Recov</span> <strong>AI</strong>
            </h1>
            <div className="recov-hero-row">
              <span>
                全国首个全链路、自进化、多智能体协作的批量债权催收智能体，把逾期资产，高效、合规的变成企业现金流，助力信用中国建设
              </span>
            </div>
          </div>
        </section>

        <section className="recov-positioning recov-section">
          <div className="recov-shell">
            <article className="recov-statement">
              Recov Agent 不是辅助人催收的工具，而是全链路主动执行催收作业的「
              <strong>AI 工作伙伴</strong>
              」，按实际回款金额收费（RaaS），与客户利益深度对齐。
            </article>
            <div className="recov-positioning-copy">
              <p>
                Recov Agent（全国首个全链路、自进化、多智能体协作的批量债权催收智能体）以“懂业务、能决策、可进化”的
                AI Agent
                为内核，融合专家经验、行业规范与法律法规构建。产品通过“差异化策略大脑
                + AI 多身份触达 + 自动化文书与立案 +
                实时回款确认”，把原本分散低效的人工流程压缩为一套可全自动执行的多智能体协作闭环，实现
                7×24 批量运行、全程留痕、按进展自动升级。
              </p>
              <p>
                产品专门聚焦于「批量、高频、小额、标准化」的信用类逾期债权，以高效、低成本、合规的方式，全链路替代传统物业费、欠费等催收运作方式，强化企业现金流、提升项目服务质量，变“被动收费”为“主动治理”，助力信用中国建设。
              </p>
            </div>
            <div className="recov-contrast">
              <article>
                <b>
                  <Image
                    src="/images/recov-ai/contrast-past.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                  过去
                </b>
                <h3>传统人工模式：人海战术、合规雷区</h3>
                <p>
                  依靠大体量客服、管家等人工电话或微信催缴，单笔催缴成本高昂且易产生摩擦冲突，面临高红线投诉率和人员流失流转，海量小额欠费因催收成本高、周期繁琐而被迫完全计提，持续侵蚀微薄利润。
                </p>
              </article>
              <article>
                <b>
                  <Image
                    src="/images/recov-ai/contrast-current.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                  现在
                </b>
                <h3>Recov Agent：全生命周期自进化多智能体协作</h3>
                <p>
                  懂业务、能决策、可进化的 AI Agent
                  作为数字伙伴，自动画像、智能生成千人千面话术。催收中从温馨提醒逐级转化为法律威慑，通过全自动律师级材料装配、在线签章与自动立案，使海量小额分散债权首次具备低成本、规模化催收处置能力。
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="recov-pressure recov-section">
          <div className="recov-shell">
            <h2>行业现状：传统催收面临的三重压力与结构性矛盾</h2>
            <div className="recov-pressure-grid">
              {pressures.map((x) => (
                <article key={x[0]}>
                  <small>{x[0]}</small>
                  <strong>{x[1]}</strong>
                  <h3>{x[2]}</h3>
                  <p>{x[3]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="recov-flow recov-section">
          <div className="recov-shell">
            <Heading
              label="重构关键业务流"
              icon="/images/recov-ai/heading-flow.svg"
            />
            <div className="recov-flow-grid">
              {flows.map((x, i) => (
                <article key={x[0]}>
                  <span
                    className={`recov-flow-icon${x[0] === "自动化文书装配" ? " recov-flow-icon--compact" : ""}`}
                  >
                    <Image src={x[2]} alt="" width={93} height={93} />
                  </span>
                  <i>STEP {i + 1}</i>
                  <h3>{x[0]}</h3>
                  <p>{x[1]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="recov-stages recov-section">
          <div className="recov-shell">
            <h2>覆盖逾期资产全生命周期的六大核心处理环节</h2>
            <div className="recov-stage-grid">
              {stages.map((x) => (
                <article key={x[0]}>
                  <small>
                    <b>{x[0]}</b>
                    <span>核心能力</span>
                  </small>
                  <h3>{x[1]}</h3>
                  <p>{x[2]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="recov-collaboration recov-section">
          <div className="recov-shell">
            <Heading
              label="全链路多智能体协作与能力矩阵"
              icon="/images/recov-ai/heading-collaboration.svg"
            />
            <div className="recov-collab-grid">
              {capabilities.map((x) => (
                <article key={x[0]}>
                  <h3>
                    <i />
                    {x[0]}
                  </h3>
                  <p>{x[1]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="recov-agent recov-section">
          <div className="recov-shell">
            <Heading
              label="完善的AI Agent 能力基座支撑"
              icon="/images/recov-ai/heading-agent.svg"
            />
            <p>
              「知识与经验（专家经验·行业规范·法律法规·拒缴案例）+ 模型能力（垂直/推理/记忆/声音与视觉大模型）+ 工程方法（上下文工程·思维链·结构化催收步骤）+ Agent 内核（知识推理·知识总结·自主执行·自主进化）」四位一体，驱动懂业务、能决策、可进化的催收大脑。
            </p>
          </div>
        </section>

        <section className="recov-value recov-section">
          <div className="recov-shell">
            <Heading
              label="产品价值"
              title="产品价值与实效指标归因"
              icon="/images/recov-ai/heading-value.svg"
            />
            <p className="recov-value-lead">
              交付的是现金流增量，而不是一套催收软件 —— 商业模式与客户财务结果深度对齐。
            </p>
            <div className="recov-metrics">
              {metrics.map((x) => (
                <article key={x[0]}>
                  <strong>{x[0]}</strong>
                  <span>{x[1]}</span>
                </article>
              ))}
            </div>
            <div className="recov-value-grid">
              <article>
                <Image
                  src="/images/recov-ai/value-card-outcome.svg"
                  alt=""
                  width={40}
                  height={40}
                />
                <h3>结果导向 · 利益深度对齐</h3>
                <p>
                  按实际回款金额百分比收费，不向客户预收高昂安装费。直接将呆账坏账转化为确定性的账面现金流。
                </p>
              </article>
              <article>
                <Image
                  src="/images/recov-ai/value-card-compliance.svg"
                  alt=""
                  width={40}
                  height={40}
                />
                <h3>合规安全 · 捍卫企业声誉</h3>
                <p>
                  话术算法可控、行为全程可追溯、沟通全量留痕。消除一切粗暴侵扰，将违规和纠纷投诉永久安全降零。
                </p>
              </article>
              <article>
                <Image
                  src="/images/recov-ai/value-card-loop.svg"
                  alt=""
                  width={40}
                  height={40}
                />
                <h3>全链路闭环 · 规模化司法</h3>
                <p>
                  将策略、画像、外呼、送达、文书、立案串联成闭环，使海量小额债权首次具备低成本、规模化司法处置能力。
                </p>
              </article>
              <article>
                <Image
                  src="/images/recov-ai/value-card-governance.svg"
                  alt=""
                  width={40}
                  height={40}
                />
                <h3>变“被动催收”为“主动治理”</h3>
                <p>
                  NLP
                  语义分析自动提炼拒缴原委（如物业报修未果、车位纠纷等）回流决策，改善服务，切断“欠费-减质”恶性循环。
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="recov-results recov-section">
          <div className="recov-shell">
            <Heading
              label="商业实效"
              title="降本增效：交付真实的回款现金流结果"
              icon="/images/recov-ai/heading-results.svg"
            />
            <p className="recov-results-lead">
              解决传统人工催收“人力占比大、流程容易断、合规不可控”的三重结构性矛盾。将原本难以处理的小额、批量、分散资产池转变为可审计、可验收、全程留痕的现金流回笼。
            </p>
            <div className="recov-results-grid">
              <article>
                <small>过去如何 · 传统人工</small>
                <p>
                  人力密集成本高昂（占比 60%+）：依赖管家反复上门或人工坐席无休止拨号，单笔处置成本居高不下，且面临高精神压力与高人员流动率。
                </p>
                <p>
                  跟风效仿导致恶性循环：账龄越拖越长、催收越难，未缴费业主侵犯守约业主权益；物业无资金提升服务，形成“欠费-服务下降-更难缴费”恶性循环。
                </p>
                <p>
                  违规红线投诉多：人工外呼沟通尺度极难标准掌控，极易因情绪激动、违规施压等面临暴力催收、骚扰投诉和监管红线，侵害企业和品牌声誉。
                </p>
              </article>
              <article>
                <small>现在如何 · 用 Recov AI</small>
                <p>
                  <strong>AI 批量主动、全自动 7×24 执行：</strong>
                  替代重复性极强的人工外呼与繁冗的法律文书材料撰写，使综合人力成本下降约
                  50%。
                </p>
                <p>
                  <strong>高频、早期、规范触达：</strong>
                  配合失联信息修复，自动流转升级，有效唤醒沉淀的历史旧账与小额呆账，清收效率提升超
                  300%。
                </p>
                <p>
                  <strong>沟通全量留痕：</strong>
                  话术完全由符合司法与消保标准的算法模型控制，侵权、侵扰与合规违规红线投诉降低为 0 起，完美捍卫品牌。
                </p>
              </article>
            </div>
            <div className="recov-result-assets">
              <article>
                <Image src="/images/recov-ai/result-cash.svg" alt="" width={32} height={32} />
                <h3>实效现金流回款</h3>
                <p>
                  支持按实际回笼现金流进行提分成效验收，真金白银入账，切切实实改善企业经营质量。
                </p>
              </article>
              <article>
                <Image src="/images/recov-ai/result-document.svg" alt="" width={32} height={32} />
                <h3>完整司法合规凭证</h3>
                <p>
                  每一次 AI
                  外呼沟通录音、发送的级联信息凭证、电子签章文书、法院立案卷宗等全量归档、全程可追溯。
                </p>
              </article>
              <article>
                <Image src="/images/recov-ai/result-data.svg" alt="" width={32} height={32} />
                <h3>服务治理缺陷分析库</h3>
                <p>
                  语义分析自动解析业主和客户不缴费的真实拒缴诱因，并提供直观的可视化图表，使清收过程变成企业“全身体检”的数据入口。
                </p>
              </article>
              <article>
                <Image src="/images/recov-ai/result-data.svg" alt="" width={32} height={32} />
                <h3>企业自有催缴策略资产</h3>
                <p>通过不断的业务交互、专家标注和数据飞轮演进，最终沉淀为企业自有的、越用越准的差异化策略和千人千面话术资产。</p>
              </article>
            </div>
            <aside>
              逾期资产池（历史欠缴 / 小额账单 / 批量分散债权） → Recov
              Agent 运营（画像·外呼·送达·文书·立案·对账 | 7×24 批量执行） → 现金流回款确认 / 合规留痕 / 语义分析服务改进 ——
              <strong>利益深度对齐，收得回才付费！</strong>
            </aside>
          </div>
        </section>

        <section className="recov-scenes recov-section">
          <div className="recov-shell">
            <Heading
              label="落地场景"
              title="部分落地场景示例"
              icon="/images/recov-ai/heading-scenes.svg"
            />
            <p className="recov-scenes-lead">
              全维度覆盖以“批量、高频、小额、标准化”为特征的逾期债权，高并发级联作业是
              Recov Agent 优势发挥最明显的主战场。
            </p>
            <div className="recov-scene-table">
              <div>
                <strong>落地场景</strong>
                <strong>适用角色</strong>
              </div>
              {scenes.map((x) => (
                <div key={x[0]}>
                  <strong>{x[0]}</strong>
                  <span>{x[1]}</span>
                </div>
              ))}
            </div>
            <h3>典型落地场景示例</h3>
            <div className="recov-case-grid">
              <article>
                <h4>场景一：生活服务类（物业费催收）—— 唤醒沉淀历史呆账</h4>
                <p>
                  某大中型物业服务集团，面临数年拖欠物业费的历史旧账，传统依靠管家微信、上门、第三方人工催收成本高、效率低、容易产生物业与业主对立情绪。接入
                  Recov Agent
                  后，智能体先以「项目管家」身份进行温馨问候和对账，智能捕获业主关于“电梯长期不修”、“车位被霸占”等服务缺陷抗议，将数据实时回写物业公司，由项目人员核实抢修并友好致歉，对无理恶意欠缴者，系统自动升级为「企业客服主管」和「法务经理」进行利弊申明，最终对个别钉子户流转至「执业律师」一键生成诉讼材料、电子签章并自动提交立案申请，实现了良好的催缴回款率，提升了项目服务水平，维护了良好社区生态。
                </p>
              </article>
              <article>
                <h4>场景二：消费金融类（小额分期账单）—— 极低单笔成本高并发折现</h4>
                <p>
                  某消费金融机构拥有数十万笔账面均值在几百元到数千元不等的逾期消费分期账单，采用人工催收极不划算且面临较高的催收合规投诉。采用
                  Recov Agent
                  后，系统自动抓取债权凭证，进行高并发、千人千面的邮件、短信与语音外呼触达，话术严密遵循金融消保监管红线，全程自动对账确认，以较低单笔催收成本合规唤醒海量坏账，折现为企业现金流入。
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="recov-cooperation recov-section">
          <div className="recov-shell">
            <Heading
              label="合作模式"
              title="灵活的合作模式"
              icon="/images/recov-ai/heading-cooperation.svg"
            />
            <p>
              以结果为导向、利益深度对齐的多元化合作模式，收得回才付费，让企业在高效、低成本、合规回款的同时也能沉淀自有催收智能体。
            </p>
            <div className="recov-coop-table">
              <div>
                <b>合作服务模式</b>
                <b>付费结算方式</b>
              </div>
              <div>
                <span>RaaS按回款结果收费</span>
                <strong>按实际收回的款项百分比佣金收费</strong>
              </div>
              <div>
                <span>本地化部署+托管运维</span>
                <strong>本地化部署服务费+回款结果服务费</strong>
              </div>
              <div>
                <span>Skills / API 开放平台接口授权</span>
                <strong>按实际使用量或回款结果付费。</strong>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
