import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import Image from "next/image";
import { ProductBreadcrumb } from "@/components/product-breadcrumb";

export default function DeepDocPage() {
  return (
    <div className="deepdoc-page">
      <SiteHeader />
      <main>
        <ProductBreadcrumb name="DeepDoc" description="AI 出海风控 Agent—跨境单证智能审核，跨境业务效率提升，跨境单证风险损失降低。" />
        <section className="deepdoc-hero">
          <div className="deepdoc-shell">
            <div className="deepdoc-positioning"><b>新一代跨境单证智能审核产品解决方案</b></div>
            <h1>新一代跨境单证智能审核<br /><em>产品解决方案</em></h1>
            <div className="deepdoc-hero-copy">
              <p>DeepDoc 智眸是专门针对国际单证、跨境单证及票据等而设计的新一代跨境单证智能审核大脑。系统深度融合了 UCP 600、ISBP 821 国际惯例及 10 年以上资深银行审单专家的实战经验，基于 OCR 与大语言模型双引擎驱动，开创了从「文本识别」到「智能认知」的大模型审查时代。它彻底摆脱了传统 OCR 对模板的依赖，能思考、会进化，真正理解复杂的业务语境，帮助企业与银行精准、智能地完成跨境单证的全自动审核，成为能深度赋能业务的「智能业务伙伴」。具备深层的上下文语义解析和多步逻辑推理能力、记忆能力，能随业务运行实现审核能力的敏捷更新、自适应进化。</p>
              <p>通过引入“智策-智审-智进”的 AI 审单新范式，打通完整性审核、单文档审核、多文档审核及 AI 辅助决策，实现从工具到大脑的范式革命。每一笔业务的审核都更准确、专业与一致，将人工难以穷尽的条文漏洞转变为强制校验项。</p>
            </div>
          </div>
        </section>
        <section className="deepdoc-contrast">
          <div className="deepdoc-shell deepdoc-contrast-grid">
            <article className="deepdoc-contrast-card deepdoc-contrast-card--past">
              <header><Image src="/images/deepdoc/past-icon.png" alt="" width={40} height={40} /><div><small>过去</small><h2>告别人工审单困局，迎接智能审单时代</h2></div></header>
              <p>人工审单耗时耗力（熟练业务员审单仅7笔/天，系统录入耗时30分钟/笔）；新人培养难（高强度全周期投入至少3年，且留存成本高）；审核质量不一，极易因拼写、缺少空格或格式退单拒付；国际规则与版式多变、模板繁杂，难以有效沉淀经验。</p>
            </article>
            <article className="deepdoc-contrast-card deepdoc-contrast-card--current">
              <header><Image src="/images/deepdoc/current-icon.png" alt="" width={40} height={40} /><div><small>现在</small><h2>大模型+OCR：大模型驱动智能认知审单时代</h2></div></header>
              <p>基于全球领先 OCR + 大语言模型，支持复杂模糊/扭曲/盖章场景，不仅识别“是什么”，更能理解“为什么”以及“怎么办”，实现深度文本理解、全要素信息抽取、多步思考推理与自动不符点说明生成，打造能思考、会进化的“智能业务伙伴”。</p>
            </article>
          </div>
        </section>
        <section className="deepdoc-challenges">
          <div className="deepdoc-shell">
            <h2>结构复杂、版式多变：跨境单证智能化的三座大山</h2>
            <div className="deepdoc-title-line" />
            <div className="deepdoc-challenge-grid">
              <article><h3>挑战一：单证类型极其多样</h3><p>涵盖基础商业单证（合同、PO单、商业发票、装箱单）、货运物流单证（海运/空运提单、船证明、仓单）、官方监管单证（报关单、原产地证、检验证书）、金融信用单证（信用证 MT700/710、汇票、保单等10+类型）。每种单证都有独特结构和关键字段，需系统具备广谱识别能力。</p></article>
              <article><h3>挑战二：版式无标准，千差万别</h3><p>不同国家、不同银行、不同公司都有自己的单证模板，同一类型单证存在数十种版式变体。传统 OCR 模式极度依赖固定模板标注，泛化能力差，遇到新版式即失效。传统标注训练方式成本高、效果差，无法适应真实业务场景。</p></article>
              <article><h3>挑战三：抽取需求高度复杂</h3><p>涉及表格信息抽取（货物描述、明细、单价、总价）、条款内容理解（信用证特殊条款、合同权利义务）、逻辑关系判断（单证间关联性、数据一致性）、专业术语解析（贸易术语、行业特定表达）。需要系统具备语义理解和逻辑推理能力，而不仅是文字识别。</p></article>
            </div>
          </div>
        </section>
        <section className="deepdoc-flow">
	          <div className="deepdoc-shell"><h2>重构关键业务流</h2><div className="deepdoc-title-line" />
            <div className="deepdoc-flow-grid">
              <article><Image src="/images/deepdoc/flow-1.png" alt="" width={64} height={64} /><h3>双引擎驱动识别</h3><p>采用 OCR 及自研技术实现高精度文字识别，自适应扭曲、模糊及盖章等场景</p></article>
              <article><Image src="/images/deepdoc/flow-2.png" alt="" width={64} height={64} /><h3>多维度智能解析</h3><p>突破表面文字识别，深刻理解业务意图、因果逻辑，实现智能综合判断</p></article>
	              <article><Image src="/images/deepdoc/flow-3.png" alt="" width={64} height={64} /><h3>自然语言规则配置</h3><p>用日常口述逻辑代替繁琐编码，AI辅助生成审核逻辑树，实现0门槛快速上手</p></article>
              <article><Image src="/images/deepdoc/flow-4.png" alt="" width={64} height={64} /><h3>知识工程深度内化</h3><p>深度融合 UCP600、ISBP 821 国际惯例与10年以上资深银行审单专家规则库</p></article>
            </div>
          </div>
        </section>
        <section className="deepdoc-evidence">
          <div className="deepdoc-shell">
            <p className="deepdoc-pill"><Image src="/images/deepdoc/evidence-pill-icon.png" alt="" width={16} height={16} />四大维度智能审核体系</p><h2>360° 封堵单证风险</h2><div className="deepdoc-title-line" />
            <div className="deepdoc-evidence-grid">
              <article><b>1</b><div><h3>完整性审核 (2种判断逻辑)</h3><p>系统自动解析信用证46A等字段（要求单据），与受益人提交的单据类型进行比对；或配置单证清单。如果提交的单据种类或份数少于规定，判定为“单证缺失”并高亮预警；如果提交了未要求的单据，则提示“多余单证”，拦截基础拒付风险。</p></div></article>
              <article><b>2</b><div><h3>单文档审核 (12类常见问题，200+条规则核验)</h3><p>系统以 UCP600 等国际惯例为铁律，对单据自身细微瑕疵（如签署不规范、信息缺失）进行自动化、精准化审核。如海运单签署身份不明（仅显示为&apos;As Agent&apos;，未标明代表哪位承运人或船长），提前拦截致命形式瑕疵，避免贸易中断。</p></div></article>
              <article><b>3</b><div><h3>多文档审核 - 以信用证为中心 (200+条核验规则)</h3><p>信用证条款为“标尺”，对所有附属单证进行全维度校验。比对信用证与商业发票、提单、装箱单等多类单证，秒级识别不符点（如：发票受益人名称、地址及汇票受票人名称、地址与信用证描述冲突，币种及金额差异等），确保结算安全兑现。</p></div></article>
              <article><b>4</b><div><h3>多文档审核 - 以商业发票为中心 (200+条交叉勾稽规则)</h3><p>将商业发票作为“信息锚点”，对箱单、提单、报关单等进行交叉校验。进行多步逻辑推理与勾稽关系核查，如判断装箱单上发货人与发票上受益人是否一致，核对计价币制、大小写金额、计量单位和货物品名、唛头货描等单单一致瑕疵。</p></div></article>
            </div>
          </div>
        </section>
        <section className="deepdoc-engine">
          <div className="deepdoc-shell"><h2>后台审核引擎：传统模式 VS 智能配置</h2><div className="deepdoc-title-line" />
            <div className="deepdoc-engine-grid">
              <article><h3><Image src="/images/deepdoc/traditional-icon.png" alt="" width={20} height={20} />传统模式</h3><ul><li>业务口述逻辑：用“自然语言规则配置”（如“装运日期晚于信用证规定的最迟装运日”）替代硬编码，AI辅助自动生成并验证可执行的审核逻辑树。</li><li>持续学习活体：传统系统是一次性建成的静态资产，随时间推移而贬值；智眸是持续学习的活体组织，在使用中不断自我迭代和增值。</li><li>零样本/少样本抽取：摆脱传统AI对大量标注数据的依赖，无需进行繁琐的数据标注和模型微调，部署即用，业务人员零技术门槛操作。</li></ul></article>
              <article className="active"><h3><Image src="/images/deepdoc/intelligent-icon.png" alt="" width={20} height={20} />智能配置</h3><ul><li>融合知识推理：不依赖硬编码，结合大语言模型与UCP600/ISBP821等知识库，能深度理解语义、语境与业务意图，如同高水准“专家脑”。</li><li>识别隐含风险：不仅像“机械眼”只能发现表面简单错误，更如同“专家脑”能深度识别隐含的、需要复杂逻辑推理的深层业务风险。</li><li>自适应复杂质量：支持多语言、多版式、复杂表格的混合处理；自适应不同图像质量（如扫描件、照片、褶皱、盖章或低清传真噪点件）。</li></ul></article>
            </div>
          </div>
        </section>
        <section className="deepdoc-value">
          <div className="deepdoc-shell"><p className="deepdoc-pill"><Image src="/images/deepdoc/value-pill-icon.png" alt="" width={16} height={16} />产品价值</p><h2>产品价值与实效指标归因</h2><p className="deepdoc-value-lead">通过在多家股份制银行与头部报关公司的全场景落地验证，灵宸智能单证审核平台全面实现业务线上化、智能化，大幅削减成本，保障合规质效。</p>
            <div className="deepdoc-metrics"><article><strong>6<em> 倍</em></strong><p>审单效能提升，单套处理从 60 分钟<br />➔ 10 分钟</p></article><article><strong>99<em>%+</em></strong><p>关键信息抽取准确率，多格式非标<br />单据高精识别</p></article><article><strong>70<em>%</em></strong><p>减少人工投入，处理容量提升、运<br />营成本大幅降低</p></article><article><strong>1<em> 个月</em></strong><p>人才培养周期，从 36 个月压缩至 1<br />个月上线</p></article></div>
            <div className="deepdoc-value-grid">
              <article><h3><b>一</b>实现业务线上化与智能化</h3><p>将传统的国际结算从线下审核转变为线上化、智能化，大幅度提升业务办理水平，推动国际结算与单证合规管理的跨越式升级。</p></article>
              <article><h3><b>二</b>沉淀专家经验并降低成本</h3><p>将资深专家经验和业务规则沉淀到系统中。计算机按照行业规范智能审核，仅需人工辅助对不符点等结果进行确认，快速完成复核任务。</p></article>
              <article><h3><b>三</b>数据资产增值与高公信力结构化</h3><p>将分散、异构的国际票据、合同、发票等信息进行高精抽取与结构化存储，转化为企业与银行的核心数字资产，持续为其他领域业务增效赋能。</p></article>
              <article><h3><b>四</b>提升票据审核质量与合规管理</h3><p>统一审单与核验标准，杜绝因审单员业务水平及精神状态差异导致的疏漏，全面加强合规性控制，显著降低信用证拒付与资金风险。</p></article>
              <article><h3><b>五</b>提升业务办理效率并减轻审单压力</h3><p>机器自动给出单证不符点并预警业务人员，针对不符点备注说明。不用再手工录入各类相关方和条款，系统自动识别填写并实现快速通关。</p></article>
              <article><h3><b>六</b>双引擎驱动的高精度文字识别</h3><p>基于 OCR + 大语言模型双引擎，在扭曲、褶皱、盖章或极低质量图像下实现超凡的识别精度与多维度智能语义感知。</p></article>
            </div>
          </div>
        </section>
        <section className="deepdoc-business">
          <div className="deepdoc-shell"><p className="deepdoc-pill business"><Image src="/images/deepdoc/business-pill-icon.png" alt="" width={16} height={16} />商业实效</p><h2>构建具备进化能力的国际单证智能审核大脑</h2><p className="deepdoc-business-lead">告别人工审单耗时耗力、质量不一、规则变动、培养难和数据沉淀痛点，交付确定性的降本提效。</p>
            <div className="deepdoc-business-grid"><article><h3>过去如何 · 传统人工</h3><p>人工审单耗时耗力且系统录入累赘，熟练业务员人工审核每日仅 7 笔/天，系统录入需 30 分钟/笔，全球年均 40 亿页影像件，数据极难沉淀。</p><p>审单标准不一、人工由于疲劳易产生漏判风险。议付行与受益人对“相符”标准裁量冲突，细微形式瑕疵（如空格拼写错漏）易导致退单或海外拒付。</p><p>合格审单人员培养极其漫长（通常需 3 年以上高强度投入），且国际结算规则更新（UCP 约 10 年、ISBP 约 5 年一次）导致团队培训成本居高不下。</p></article><article className="active"><h3>现在如何 · 用 DeepDoc</h3><p><b>基于 OCR + NLP 深度融合，一键上传单证自动完成文档智能分类与核心要素抽取（300+要素）。</b>单套处理时间从 60 分钟缩至 10 分钟，效率飞跃 6 倍。</p><p><b>以 UCP600 及 ISBP 821 为铁律，建立完整性、单文档、多文档交叉勾稽共四大规则体系。</b>360° 封堵风险，让不一致漏洞转为强制校验，安全兑现。</p><p><b>无需标注训练样本与微调，开箱即用。</b>支持以自然语言描述配置审核推理规则（0 门槛上手），人才培训上岗期从 36 个月缩至 1 个月，大幅降低运营成本。</p></article></div>
          </div>
        </section>
        <section className="deepdoc-scenes">
          <div className="deepdoc-shell"><p className="deepdoc-pill"><Image src="/images/deepdoc/scene-pill-icon.png" alt="" width={16} height={16} />落地场景</p><h2>覆盖多业务场景的国际结算与智能审单适配</h2><p className="deepdoc-scenes-lead">从解放销售获客业务中的「脏活、累活、卡点活」开始——交付给您高意向客户线索</p>
            <div className="deepdoc-table"><div><b>落地场景</b><b>适用角色</b></div><div><strong>信用证开立 (出口商)</strong><span>开证申请书、贸易合同、进口批文、进口汇付备案表、营业执照</span></div><div><strong>信用证议付 (出口商)</strong><span>商业发票、装箱单、重量单、海运提单、产地证、保险单等多证配套</span></div><div><strong>信用证保兑 (出口商/出口单据)</strong><span>营业执照、开户许可、国际合同、海关出口报关单、装箱单、商业发票</span></div><div><strong>进口信用证 &amp; 进口代收</strong><span>信用证电文、装箱单、货运提单、普惠制原产地证、合同、托收单据</span></div><div><strong>出口托收 (跟单/光票)</strong><span>营业执照、商业发票、装箱单、原产地证、托收委托书、法人代表授权书</span></div><div><strong>汇入汇款 &amp; 汇出汇款</strong><span>境内外汇款申请书、电汇凭证、汇票、指示信、开户许可证、国际收支申报表</span></div></div>
            <h3 className="deepdoc-case-title">支持的国际单证与金融级交付标准客户案例</h3>
            <div className="deepdoc-case-grid"><article><h3><Image src="/images/deepdoc/case-bank-icon.png" alt="" width={40} height={40} />某股份制银行 · 进口开证与智能单证审核平台</h3><p>构建“识别-抽取-审核”一体化智能审单平台，实现 40+ 关键要素智能抽取与动态校验纠错。单套单证处理时长从 60 分钟缩短至 10 分钟，效率提升 6 倍，新手培训周期从 36 个月缩短至 1 个月。</p></article><article><h3><Image src="/images/deepdoc/case-customs-icon.png" alt="" width={40} height={40} />某头部报关公司 · 国际业务智能单证/票据识别</h3><p>实现接口及外部海关、舱单等多渠道数据自动接入。覆盖 10+ 种单据类型共 300+ 核心要素，自适应解析 400 多种格式各异的国际发票、箱单、提单。全流程自动识别与录入，升级为人机协同作业，实时进行审单与风险预警。</p></article></div>
          </div>
        </section>
        <section className="deepdoc-cooperation">
          <div className="deepdoc-shell"><p className="deepdoc-pill"><Image src="/images/deepdoc/cooperation-pill-icon.png" alt="" width={16} height={16} />合作模式</p><h2>懂业务 · 经验丰富 · 服务健全的全栈 AI 升级赋能</h2><p className="deepdoc-cooperation-lead">提供标准产品开箱即用、本地化部署安全可控、轻量级定制快速适配以及综合场景定制深度专属服务。</p>
            <div className="deepdoc-cooperation-grid"><div className="head"><b>合作类型</b><b>合作服务模式</b><b>付费结算方式</b></div><div><strong>标准服务</strong><span>标准产品开箱即用 / 订阅服务</span><span>产品订阅年费 + 弹性调用流量套餐</span></div><div><strong>专属服务</strong><span>本地私有化部署 / 深度专属定制</span><span>产品部署与定制开发费 + 年度维护与规则微调/升级服务费</span></div></div>
            <h3 className="deepdoc-safety-title">安全稳健落地体系（合作客户金融级交付标准）</h3>
            <div className="deepdoc-safety-grid"><article><b>1</b><h3>资深银行专家把关</h3><p>精准转化 1000+ 条 10 年以上从业经验的资深银行专家业务知识，融入 UCP/ISBP 规范，系统性消除人工疏漏。</p></article><article><b>2</b><h3>全栈 AI 服务适配</h3><p>多格式映像件高精 OCR 识别，结合大语言模型语义解析，自动分类、信息抽取，实现进口开证全流程自动化。</p></article><article><b>3</b><h3>金融级安全隔离</h3><p>支持本地化部署、多级角色权限隔离，单证数据零污染，数据不进入公域大模型，保障数据主权完整。</p></article><article><b>4</b><h3>人机协同审核质检</h3><p>一键提取并智能交叉核对后，提供人机协作确认机制，针对不符点备注说明并自动录入，行为 100% 留痕可追溯。</p></article></div>
            <h3 className="deepdoc-assurance-title">多维部署与交付安全保障体系</h3>
            <div className="deepdoc-assurance-grid"><article><h3><Image src="/images/deepdoc/assure-1-icon.png" alt="" width={20} height={20} />深耕金融全业态</h3><p>服务覆盖外资、国有、股份制及城商行全业态（成功落地工商银行、浦发银行、上海银行、三井住友、渣打银行、招商银行等），斩获多项行业创新大奖，树立智能化标杆。</p></article><article><h3><Image src="/images/deepdoc/assure-2-icon.png" alt="" width={20} height={20} />进阶跨境与通关</h3><p>为头部物流（如马士基）与报关企业（如万历报关）打造智能单证中枢，自适应支持 400 多种国际单证格式，稳定支撑全球几十个国家与地区的业务无缝流转。</p></article><article><h3><Image src="/images/deepdoc/assure-3-icon.png" alt="" width={20} height={20} />零/少样本开箱即用</h3><p>摆脱传统 AI 对大量标注数据与模型微调的依赖。无需专业算法团队，部署即用，业务人员通过自然语言规则配置 0 门槛上手，快速上线。</p></article></div>
            <article className="deepdoc-advice"><Image src="/images/deepdoc/advice-icon.png" alt="" width={48} height={48} /><div><h3>落地建议与指引</h3><p><span>1. 极其显著的审单效率提升：单证处理从 60 分钟/套 ➔ 10 分钟/套，效能飞跃 6 倍，无并发上限秒级审单。</span><span>2. 极致精确的不符点筛查：准确率提升至 99%+，全生命周期交叉校验，全面消除由于人工疲劳而导致的信用证退单拒付漏洞。</span><span>3. 大幅节省运营与培训成本：新人上岗培训周期从 36 个月 ➔ 1 个月，支持以自然语言描述配置审核推理规则，降低企业 70% 的人工投入。</span></p></div></article>
          </div>
        </section>
      </main>
      <SiteFooter />
      <div className="deepdoc-tail" aria-hidden="true" />
    </div>
  );
}
