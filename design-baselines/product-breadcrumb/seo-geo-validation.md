# 产品详情页公共面包屑 SEO / GEO 台账

## 组件定义

- 名称：`ProductBreadcrumb`
- 适用路由：`/products/*`
- canonical URL：https://lingchen-ai.com/products/deeplaw/（示例；实际由各详情页输出对应自指 canonical）
- 类型：共享导航组件，不是独立可索引页面
- 最后复核日期：2026-07-24

## 组件级结论

| 项目 | 处理方式 | 验证结果 |
|---|---|---|
| title / description / canonical / Open Graph | 由各产品详情页独立维护，组件不注入元数据 | PASS |
| h1 与标题层级 | 组件不输出 h1-h6 | PASS |
| 站内关系 | 输出返回产品矩阵的可抓取链接 | PASS |
| 预约 CTA | 使用公共 `BookingTrigger`，不改变索引语义 | PASS |
| 可见产品名称与描述 | 服务端 HTML 输出，内容由调用页面传入 | PASS |

## 门禁结论

- 本地实现：通过
- 线上抓取与索引：由七个产品详情页分别验证
- GEO 抽样：不适用于共享导航组件
- 最终状态：组件级 SEO/GEO 约束已实现，待各页面线上验证
