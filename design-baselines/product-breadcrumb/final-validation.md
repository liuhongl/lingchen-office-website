# 产品详情页公共面包屑验证

- [x] 七个产品详情页均使用 `ProductBreadcrumb`
- [x] 返回链接统一到 `/products/`
- [x] 六页桌面 1440×900 截图均生成并人工检查
- [x] DeepLaw 390×844 移动截图人工检查，无横向溢出
- [x] 生产构建静态站点点击 CTA，打开公共 `BookingModal`
- [x] Escape 关闭弹窗
- [x] 未修改冻结的 Header、Footer、Logo、字体、BookingModal、BookingTrigger
- [ ] 用户截图不是 MasterGo 100% 干净基线，因此本次只报告“已视觉校准”，不报告新一轮全页 1:1

## 2026-07-23 CTA 弱化回归

- [x] 非紧凑面包屑仍只在 Sales in、Social Grow、DeepDoc、DeepLaw 四页显示预约按钮。
- [x] 按钮实现已改为蓝色描边、白底、蓝字、无阴影；三个紧凑面包屑页面没有新增按钮。
- [x] 本轮同视口浏览器截图已复核，未沿用旧版实心按钮的视觉结论。

## 2026-07-24 字号与位置回归

- [x] 内容完整迁移通过
- [x] 已视觉校准
- [x] 七个详情页面包屑桌面字号统一为 15px
- [x] 非紧凑页面预约按钮紧跟文字轨迹并保留 24px 间距
- [x] 1616×1258 下 Harness、DeepDoc、Recov AI、DeepLaw 横向溢出均为 0
- [x] 用户确认的字号和位置覆盖已登记在 `scope.md` 与 `visual-ledger.md`
- [x] 公共预约触发行为、Header、Footer、Logo、BookingModal、BookingTrigger 未因本轮改动变化
