# 产品详情页公共面包屑验证

- [x] 六个产品详情页均使用 `ProductBreadcrumb`
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
- [ ] 本轮同视口浏览器截图待复核，不沿用旧版实心按钮的视觉结论。
