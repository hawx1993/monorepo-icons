---
title: 迁移到 V0.5.x
group:
  path: /
nav:
  title: 组件
  path: /components
---

## 样式

### prefix

如果在 `ConfigProvider` 全局配置中使用了自定义 `prefixCls`，需要在 `@perfma/heaven/dist/heaven.less` 文件引入的下方声明 `@ant-prefix: heaven;`

## 组件 API 变动

### Card

#### API 废弃

废弃 `size` 属性。

### Empty

#### 图片大小

如需单独使用 `Empty` 组件，可以通过设置 `size` 为使用不同尺寸的空状态。支持 4 种尺寸，默认(normal): 64\*40, large: 160\*110, middle: 120\*90, small: 90\*60

[demo](/components/drawer#图片大小)

### Drawer

#### 四种大小

可以通过设置 `size` 为使用不同尺寸的抽屉。支持 4 种宽度，默认(default): 640, large: 800, small: 480, xsmall: 360

[demo](/components/drawer#四种大小)

### Modal

#### 四种大小

可以通过设置 `size` 为使用不同尺寸的弹窗。支持 4 种宽度，默认(default): 640, large: 800, small: 480, xsmall: 360

[demo](/components/modal#四种大小)

### Table

#### 拖拽调整列宽度

需要在 `columns` 使用 `resizable: true` 开启

```
const columns = [
    {
        title: 'Date',
        dataIndex: 'date',
        width: 200,
        resizable: true
    }
]
```

#### 操作列固定右侧

如需右侧固定操作列，可在 `columns` 使用 `action: true` 开启

```
const columns = [
    {
        title: 'Action',
        width: 200,
        action: true
    }
]
```

[demo](/components/table#操作列默认固定定位)
