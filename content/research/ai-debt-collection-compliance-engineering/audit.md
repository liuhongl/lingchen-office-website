# AI 催收的合规工程内容审计

## 源文件登记

- 分类：行业洞察
- 原始 DOCX：`AI催收的合规工程.docx`
- 原始 DOCX SHA-256：`d8d9683c99b01d869dfb98626b11563485d367431296b05f1da65b04271b417d`
- `slug`：`ai-debt-collection-compliance-engineering`
- `displayTitle`：AI 催收的合规工程；已接入列表和正式路由
- `sourceTitle`：AI 催收的合规工程
- 正式发布日期：未提供，不展示
- 原始非空段落数：55
- 原始图片数：8
- 原始表格数：3
- 原始标题：1 个 h1、14 个正文分节标题；副标题保留为独立段落

## 内容块台账

| 顺序 | 块 ID | 类型 | 原文或素材标识 | 字符/行列数 | 实现位置 | 核对状态 |
|---:|---|---|---|---:|---|---|
| 1 | `p-001` | title | AI 催收的合规工程 | 10 | `article.json` | PASS |
| 2 | `p-002` | subtitle | 话术可控、频次管控、全程留痕如何从口号落到系统 | 23 | `article.json` | PASS |
| 3 | `p-003` | abstract | 摘要｜合规不是催收 AI 的约束项，而是准入门槛与竞争壁垒；话术可控、频次管控、全程留痕不能停留在… | 137 | `article.json` | PASS |
| 4 | `p-004` | keywords | 关键词｜AI 催收合规 · 话术可控 · 频次管控 · 全程留痕 · 人工兜底 · Regulat… | 71 | `article.json` | PASS |
| 5 | `p-005` | heading | 核心判断 | 4 | `article.json` | PASS |
| 6 | `p-006` | paragraph | 其一，AI 催收的竞争壁垒不在外呼并发量，而在高并发执行之下仍能稳定合规，能并发只是门票 | 44 | `article.json` | PASS |
| 7 | `p-007` | paragraph | 其二，话术、频次、身份、数据、审批与留痕必须在系统层面连成完整链路，坐席培训式的管理方法管不住机器 | 49 | `article.json` | PASS |
| 8 | `p-008` | paragraph | 其三，失效信号同样明确——缺少合法债权基础、授权链与清晰数据来源的企业，任何 AI 催收系统都不应启动 | 51 | `article.json` | PASS |
| 9 | `p-009` | heading | 合规为什么要先于效率 | 10 | `article.json` | PASS |
| 10 | `p-010` | paragraph | AI 催收最容易被误解成“打更多电话、发更多短信、自动发起诉讼”，而这恰恰是风险所在；催收场景牵着… | 101 | `article.json` | PASS |
| 11 | `p-011` | paragraph | 国际规则给出了直观参照，美国 Regulation F 在 12 CFR §1006.14 中对催… | 146 | `article.json` | PASS |
| 12 | `p-012` | paragraph | 在中国语境下，《个人信息保护法》《数据安全法》同样要求催收 AI 在合法基础、授权管理、最小必要、… | 140 | `article.json` | PASS |
| 13 | `figure-01` | figure | 图 1｜四层合规控制栈：数据、策略、留痕、人工兜底自下而上构成 AI 催收的准入门槛 | 1600×900 | `article.json` | PASS |
| 14 | `p-014` | heading | 四层控制各管什么、各留什么证 | 14 | `article.json` | PASS |
| 15 | `p-015` | paragraph | 数据合规层是地基，管债权合法性、授权链、最小必要、脱敏与删除机制，这一层出了问题，上面三层做得再精… | 116 | `article.json` | PASS |
| 16 | `p-016` | paragraph | 执行留痕层记录全过程，录音、文本、送达、文书与回款确认拼成完整的案件时间线；人工兜底层处理机器不该… | 173 | `article.json` | PASS |
| 17 | `table-01` | table | 表 1｜四层合规控制栈检查表：每一层的核心控制与必须留证的内容 | 5×3 | `article.json` | PASS |
| 18 | `p-018` | heading | 话术可控：不是模板多，而是边界硬 | 16 | `article.json` | PASS |
| 19 | `p-019` | paragraph | 催收话术的风险通常不在一句标准开场白，而在模型根据上下文的自由发挥；债务人情绪激动、提出服务争议或… | 105 | `article.json` | PASS |
| 20 | `p-020` | paragraph | 工程上要做三道控制，生成前把身份、债权事实、禁止表达和沟通目标写进提示词与策略，生成中对威胁、侮辱… | 108 | `article.json` | PASS |
| 21 | `p-021` | paragraph | 灵宸智能的 Recov AI 在产品设计上就强调全程话术可控、行为留痕可追溯、关键节点人工确认与真… | 93 | `article.json` | PASS |
| 22 | `figure-02` | figure | 图 2｜话术风控四步闭环：生成前约束、生成中拦截、生成后质检、Badcase 回写 | 1600×900 | `article.json` | PASS |
| 23 | `p-023` | heading | 话术风控要从词表升级到意图识别 | 15 | `article.json` | PASS |
| 24 | `p-024` | paragraph | 早期的话术风控多靠敏感词表，拦“威胁”“恐吓”“曝光”这些明显的词，可模型生成的风险不一定落在敏感… | 114 | `article.json` | PASS |
| 25 | `p-025` | paragraph | 意图识别离不开上下文，同一句“我们将进入下一步流程”，在普通提醒阶段可能构成过度施压，放在法务审批… | 123 | `article.json` | PASS |
| 26 | `p-026` | paragraph | 企业验收时不妨自备一套风险样本库——情绪激动的客户、老人或弱势群体、第三人接听、债务争议、已付款未… | 95 | `article.json` | PASS |
| 27 | `figure-03` | figure | 图 3｜话术意图识别风险样本库：按违规类别组织测试样本，覆盖不可预设的坏场景 | 1600×900 | `article.json` | PASS |
| 28 | `p-028` | heading | 频次管控：把“克制”写进系统 | 14 | `article.json` | PASS |
| 29 | `p-029` | paragraph | 人工催收时代，频次靠主管培训和坐席自觉，AI 催收里频次必须由系统硬性控制；道理很简单，AI 并发… | 115 | `article.json` | PASS |
| 30 | `p-030` | paragraph | 频次规则还得跟案件状态联动，客户已接通并承诺付款，应进入冷却期，客户要求改用邮件沟通，电话就该停下… | 108 | `article.json` | PASS |
| 31 | `p-031` | paragraph | 美国 Regulation F 的“七天内不超过七次”与通话后七天冷却期，不能机械照搬到中国，但它… | 94 | `article.json` | PASS |
| 32 | `figure-04` | figure | 图 4｜频次规则与案件状态联动：承诺、改渠道、争议、已付款分别触发不同的系统动作 | 1600×900 | `article.json` | PASS |
| 33 | `p-033` | heading | 全程留痕：从自证清白到运营改进 | 15 | `article.json` | PASS |
| 34 | `p-034` | paragraph | 留痕的第一重价值是合规自证，谁在什么时间、以什么身份、通过什么渠道、基于哪份债权事实发出了什么内容… | 97 | `article.json` | PASS |
| 35 | `p-035` | paragraph | 第二重价值在运营改进，拒缴原因、投诉类型、服务争议、承诺履约率，都能反过来优化催收策略与服务质量；… | 104 | `article.json` | PASS |
| 36 | `p-036` | heading | 合规工程要覆盖执行前、执行中、执行后 | 18 | `article.json` | PASS |
| 37 | `p-037` | paragraph | 执行前，系统要确认债权基础、数据来源、授权范围、客户身份和触达策略，同时设好频次上限、禁触达名单、… | 99 | `article.json` | PASS |
| 38 | `p-038` | paragraph | 执行中要实时盯话术、情绪、身份披露、停止联系请求、客户争议和付款状态，外呼或短信不是发出去就结束，… | 115 | `article.json` | PASS |
| 39 | `p-039` | paragraph | 执行后完成录音转写、质检、投诉归因、回款确认与 Badcase 回写，合规不只是证明自己没错，更要… | 81 | `article.json` | PASS |
| 40 | `figure-05` | figure | 图 5｜催收执行的三段式合规控制：执行前校验、执行中监控、执行后复盘 | 1600×900 | `article.json` | PASS |
| 41 | `p-041` | heading | 合规能力会成为供应商分水岭 | 13 | `article.json` | PASS |
| 42 | `p-042` | paragraph | 短期看，AI 催收供应商大多能演示外呼、短信、文书生成和回款看板，真正拉开差距的，是系统能否在高并… | 128 | `article.json` | PASS |
| 43 | `p-043` | paragraph | 采购方应把合规能力列为准入项而不是加分项，至少确认四件事——能否自主配置话术和频次规则，能否导出单… | 117 | `article.json` | PASS |
| 44 | `p-044` | paragraph | 合规工程的价值最终会回馈业务结果，客户被正确识别、被合理触达，争议被及时处理，已付款不再被误催，长… | 84 | `article.json` | PASS |
| 45 | `figure-06` | figure | 图 6｜AI 催收供应商合规评分卡（示意）：五项能力逐项现场验证，而非听口头承诺 | 1600×900 | `article.json` | PASS |
| 46 | `p-046` | heading | 上线后要建立合规运营例会 | 12 | `article.json` | PASS |
| 47 | `p-047` | paragraph | 合规工程不是上线前的一次性审查，系统跑起来之后，话术表现、频次策略、客户反馈、投诉类型乃至法规环境… | 116 | `article.json` | PASS |
| 48 | `p-048` | paragraph | 周度例会看异常，高风险话术拦截、超频阻断、投诉、误催、要求停止联系、第三人接听都在此列，异常清单宁… | 179 | `article.json` | PASS |
| 49 | `figure-07` | figure | 图 7｜合规运营例会节奏：周度看异常、月度看趋势、季度改制度，红线实时处置 | 1600×900 | `article.json` | PASS |
| 50 | `p-050` | heading | 指标要能直接翻译成决策动作 | 13 | `article.json` | PASS |
| 51 | `p-051` | paragraph | 例会要有产出，指标必须能翻译成动作——拦截率异常就修正样本和局部策略，争议趋势上升就调整频次与分层… | 160 | `article.json` | PASS |
| 52 | `p-052` | paragraph | 指标口径也要提前对齐，拦截率的分母是全部外呼还是仅高风险话术，误催是否包含已付款未入账的案例，超频… | 131 | `article.json` | PASS |
| 53 | `table-02` | table | 表 2｜合规运营例会指标：不同周期关注的指标与对应决策动作 | 5×3 | `article.json` | PASS |
| 54 | `p-054` | heading | 给管理层的落地检查：可演示、可导出、可复盘 | 21 | `article.json` | PASS |
| 55 | `p-055` | paragraph | 管理层评估 AI 催收的合规能力，不能只听供应商说“我们合规”；合规必须可演示——现场展示频次规则… | 106 | `article.json` | PASS |
| 56 | `p-056` | paragraph | 还必须可导出，任一案件都应能拉出完整时间线，债权事实、触达记录、录音文本、话术版本、审批记录、送达… | 89 | `article.json` | PASS |
| 57 | `p-057` | paragraph | 最后必须可复盘，投诉不能简单关闭，要归因到数据、话术、频次、身份、状态同步或人工处理环节，复盘结论… | 99 | `article.json` | PASS |
| 58 | `figure-08` | figure | 图 8｜合规能力“三可”验收标准：可演示、可导出、可复盘 | 1600×900 | `article.json` | PASS |
| 59 | `p-059` | heading | 验收现场值得做一次“红队式”测试 | 16 | `article.json` | PASS |
| 60 | `p-060` | paragraph | 演示环节还要看供应商敢不敢接反向测试，题目由企业当场出、不提前透露，临时抛出一组高风险样本——第三… | 177 | `article.json` | PASS |
| 61 | `p-061` | paragraph | 测试样本最好由业务、客服与法务分别出题，避免供应商提前准备，测试过程本身也要录屏留痕，作为验收档案… | 111 | `article.json` | PASS |
| 62 | `table-03` | table | 表 3｜催收 AI 合规能力落点：合规要求、系统实现与验收方式对照 | 5×3 | `article.json` | PASS |
| 63 | `p-063` | heading | 合规责任不能全部外包给供应商 | 14 | `article.json` | PASS |
| 64 | `p-064` | paragraph | 管理层还要明确合规责任的内部归属，供应商提供系统能力，企业仍要对债权合法性、数据授权、策略审批和投… | 85 | `article.json` | PASS |
| 65 | `p-065` | paragraph | 规模化之后，合规看板应与经营看板并排摆放，回款率的提升若伴随着投诉率、误催率和超频拦截率一起上升，… | 161 | `article.json` | PASS |
| 66 | `p-066` | closing | 行动建议｜企业可以预约灵宸智能 Recov AI 的合规工程演示，重点查看话术拦截、频次引擎、案件… | 90 | `article.json` | PASS |

## 行内格式与颜色台账

| 色值 | DOCX 作用范围 | JSON 实现 | 状态 |
|---|---|---|---|
#1A1A1A | 主标题 | `segments.color` | PASS |
#1F4E79 | 副标题、摘要/关键词标签、14 个分节标题、“其一/其二/其三”、“行动建议｜” | `segments.color` | PASS |
#595959 | 关键词正文 | `segments.color` | PASS |

- 23 个含直接格式的 run 已保留；未检测到斜体、下划线或手动换行。
- 所有 segments 拼接后与对应原段落 text 逐字符相同。

## 图片台账

| 图片 ID | DOCX media 路径 | SHA-256 | 原始像素 | 图注 | 实现路径 | 原图检查 |
|---|---|---|---:|---|---|---|
| `figure-01` | `/word/media/0c276bbb4b63c7976fdbb635aadec33e931663b7.png` | `bc7ebe3dc7e753bd3a7ed2992061fe6d812048dc3d1e2b6376076d338f322e49` | 1600×900 | 图 1｜四层合规控制栈：数据、策略、留痕、人工兜底自下而上构成 AI 催收的准入门槛 | `/images/research/ai-debt-collection-compliance-engineering/figure-01.png` | PASS：PNG/RGB/完整可读 |
| `figure-02` | `/word/media/f1f382c27164cdc131271edd688c9aa6776dfbe3.png` | `531e5b62aba30fbd1121c41f0e48139f883da95b08ddea53eb1afac956b5c45f` | 1600×900 | 图 2｜话术风控四步闭环：生成前约束、生成中拦截、生成后质检、Badcase 回写 | `/images/research/ai-debt-collection-compliance-engineering/figure-02.png` | PASS：PNG/RGB/完整可读 |
| `figure-03` | `/word/media/2c14d9b34958f547d20d2a24b15c8ff54f91e223.png` | `538c275e3e4ed68e9e7b55a87a9cafb6767857fe6c22c160a943843f4224c217` | 1600×900 | 图 3｜话术意图识别风险样本库：按违规类别组织测试样本，覆盖不可预设的坏场景 | `/images/research/ai-debt-collection-compliance-engineering/figure-03.png` | PASS：PNG/RGB/完整可读 |
| `figure-04` | `/word/media/1c11e21f2e84b2bdfa5d76a4abd12cb7445bd060.png` | `e810de86551da040615bd0b92b73b1115c75644e5bf735d7a5e7702303f1083a` | 1600×900 | 图 4｜频次规则与案件状态联动：承诺、改渠道、争议、已付款分别触发不同的系统动作 | `/images/research/ai-debt-collection-compliance-engineering/figure-04.png` | PASS：PNG/RGB/完整可读 |
| `figure-05` | `/word/media/c7afc3a224e1baa96db28875878d1da94e99ce6d.png` | `4586740b343d1961b8f484ca49b6f0baa9a14b12d411e8fb3a0be29047be035f` | 1600×900 | 图 5｜催收执行的三段式合规控制：执行前校验、执行中监控、执行后复盘 | `/images/research/ai-debt-collection-compliance-engineering/figure-05.png` | PASS：PNG/RGB/完整可读 |
| `figure-06` | `/word/media/94867623e7820c0c5e01de1ac7870fa0d1949bc1.png` | `c08dc682ef8e2580ad86f50feab8a954957310758739a99b3f3b5220b0f729f3` | 1600×900 | 图 6｜AI 催收供应商合规评分卡（示意）：五项能力逐项现场验证，而非听口头承诺 | `/images/research/ai-debt-collection-compliance-engineering/figure-06.png` | PASS：PNG/RGB/完整可读 |
| `figure-07` | `/word/media/504c51a220db68b6334198f7a7dd67f657b2fea8.png` | `d9e870be65612436c4e3c2e4fa2f0fe2af0237a7488143745eb792f8f00bd9ca` | 1600×900 | 图 7｜合规运营例会节奏：周度看异常、月度看趋势、季度改制度，红线实时处置 | `/images/research/ai-debt-collection-compliance-engineering/figure-07.png` | PASS：PNG/RGB/完整可读 |
| `figure-08` | `/word/media/3ce2f85585dc11df393629b00744371f8a4b649b.png` | `37d9b4fc3fbbcd2b450836631202d1e683792a1ecc7b934229f10aa172f2f3b8` | 1600×900 | 图 8｜合规能力“三可”验收标准：可演示、可导出、可复盘 | `/images/research/ai-debt-collection-compliance-engineering/figure-08.png` | PASS：PNG/RGB/完整可读 |

## 表格台账

| 表格 ID | 原始行×列 | 图注 | 单元格逐字核对 | 移动端策略 | 状态 |
|---|---:|---|---|---|---|
| `table-01` | 5×3 | 表 1｜四层合规控制栈检查表：每一层的核心控制与必须留证的内容 | PASS | 保持行列，容器横向滚动 | PASS |
| `table-02` | 5×3 | 表 2｜合规运营例会指标：不同周期关注的指标与对应决策动作 | PASS | 保持行列，容器横向滚动 | PASS |
| `table-03` | 5×3 | 表 3｜催收 AI 合规能力落点：合规要求、系统实现与验收方式对照 | PASS | 保持行列，容器横向滚动 | PASS |

## 自动一致性校验

- DOCX 顶层内容依次标准化为文本、图片图注、表格数据三类 token。
- 源文件 token：66；JSON token：66；按顺序逐项深比较：`True`。
- 图片输出文件 SHA-256 与 DOCX media blob SHA-256 一致。
- 未解释内容差异：0；内容阻塞项：0。

## 门禁结论

- SOURCE：通过。
- CONTENT：通过。
- ASSET：通过。
- STRUCTURE：通过。
- 发布状态：未发布；列表标题和封面仍需独立确认。
