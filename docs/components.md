---
title: 总览
order: 5
group:
  path: /
nav:
  title: 基础组件
  path: /components
---

## 镜像

👉 heaven 镜像详情点击: http://npm.perfma-inc.com/-/web/detail/@perfma/heaven

## 快速使用

1、安装依赖

```bash
$ yarn add @perfma/heaven@latest --save
```

2、根组件加 ConfigProvider

```bash
import { ConfigProvider, Button } from '@perfma/heaven';

const app = () => {
  return
  <ConfigProvider>
    <Button />
  </ConfigProvider>
}
```

3、enjoy it

👉 升级详情：[heaven 从 v1 迁移到 v2](./migration-v2)

## 扩展组件

> 新增组件，以及对原有组件新增功能

- [Checkbox](/components/checkbox#扩展)
- [Radio](/components/radio#扩展)
- [EmptyImage](/components/empty-image)
- [Input](/components/input#扩展)
- [InputNumber](/components/input-number#扩展)
- [LetterIndexList](/components/letter-index-list)
- [Radio](/components/radio#扩展)
- [Table](/components/table#扩展)
- [Tabs](/components/tabs#扩展)
- [Toast](/components/toast)
- [Tooltip.Ellipsis](/components/tooltip#ellipsis)

## 改造组件

> 仅对样式进行了自定义修改

- [x] Alert
- [x] Badge
- [x] Breadcrumb
- [x] Button
- [x] Card
- [x] Cascader
- [x] DatePicker
- [x] Drawer
- [x] Empty
- [x] Form
- [x] InputNumber
- [x] Message
- [x] Menu
  - [x] themes, layouts
  - [ ] resize?
- [x] Modal
- [x] Notification
- [x] Pagination
- [x] Popconfirm
- [x] Popover
- [x] Progress
- [x] Select
- [x] Skeleton
- [x] Slider
- [x] Spin
- [x] Switch
- [x] Transfer
- [x] Tree
- [x] TreeSelect
- [x] Tabs
- [x] Tag
- [x] TimePicker
- [ ] Timeline
- [x] Tooltip
  - [ ] 白底
- [x] Upload
