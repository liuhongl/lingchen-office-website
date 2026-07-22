# 首页视觉属性台账

| 元素 ID | 区块 | 关键设计事实 | MasterGo 证据 | 本地证据 | 核对 |
|---|---|---|---|---|---|
| V-H-001 | Header | 1440 宽、66 高、白色半透明背景；Logo、导航、口号、蓝色 CTA | `01-mastergo-1440x720.jpg` | `01-local-1440x720.jpg` | PASS |
| V-H-002 | Hero | 620 高；浅蓝背景；居中标题；“新质生产力”蓝紫渐变；白色产品卡；双按钮 | `01-mastergo-1440x720.jpg` | `01-local-1440x720.jpg` | PASS |
| V-H-003 | Problems | `#EAF5FF` 背景；1220 内容宽；左右双栏；红点与蓝/紫方案卡 | `target-problems` | `02-problems.png` | PASS |
| V-H-004 | Value | 1180 内容宽；四张独立描边卡；四组重字重指标；白色 ribbon | `target-value-title`、`target-ribbon` | `03-value.png` | PASS |
| V-H-005 | Agent OS | 1120×680；六个白色圆节点；分段发光轨道；双层虚线内圆；蓝紫中心核 | `target-agent-node`、全画板 | `04-agent-os.png` | PASS |
| V-H-008 | Agent OS 节点说明 | 保留 200×200 圆形节点；说明置于标签下方，最大宽 156px；10px / 1.45，`#6B7C93`，居中；不改变轨道与节点定位 | 当前 Agent OS 视觉语言 + 用户新增内容要求 | `08-agent-os-prototype-copy-local.png` | PASS |
| V-H-006 | CTA | 深蓝背景、径向光、渐变标题、居中蓝色 CTA | MasterGo 全画板 | `05-closing-cta.png` | PASS |
| V-H-007 | Footer | `#050F23` 背景；三列信息；顶部/底部分隔线 | 公共 Footer 基线 | `06-contact.png` | PASS |

## 布局测量

- 1440：`scrollWidth=clientWidth=1440`，全页高 3844；100% MasterGo 分区基线已补齐为完整 1440 宽。
- 980/760/390：均无页面级横向溢出；390 的 CTA 光晕为裁切装饰，不扩大根滚动宽度。
- 公共资产哈希本轮未发生变化。
- 2026-07-23 Agent OS 六段说明补齐后：6 个节点 `clientHeight=scrollHeight=200`，节点间重叠 0，页面横向溢出 0。

## 门禁结论

- 背景、渐变、字体层级、卡片、图标与特殊图形：PASS
- 桌面关键布局未发现超过 2 CSS px 的已知偏差
- 结论：已视觉校准
