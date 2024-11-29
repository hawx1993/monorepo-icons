---
title: 迁移到 V2.0.x
group:
  path: /
nav:
  title: 组件
  path: /components
---

### 从 v1 到 v2

本文档将帮助你从 heaven 1.x 版本升级到 heaven 2.x 版本，如果你是 1.x 或者更老的版本，请先参考之前的升级文档升级到 2.x。

v2.0 依然支持 `tree-shaking`，只需根组件配置 `ConfigProvider`，导入组件即可使用：

#### 1、antd 依赖升级

antd 依赖已升级到 v4.22.7 版本；

#### 2、antd 作为 heaven 的 deps

antd 已作为 deps，业务无需安装 antd，已安装的可卸载

#### 3、移除 modifyVars，无需复杂的配置即可使用

可移除之前`less-loader`繁琐的 `modifyVars` 配置，无需任何配置即可使用

#### 4、移除 ant-prefix

less 文件可去除`@ant-prefix: heaven`

#### 5、无需全局 heaven 样式引入

less 文件可去除`@import '@perfma/heaven/dist/heaven.less`；无需全局 heaven 样式引入

#### 6、增加色盘

详情：http://heaven.perfma-inc.com/components/color

#### 7、简化 ConfigProvider

根组件 ConfigProvider 无需配置 prefix 和 locale

```bash
import { ConfigProvider } from '@perfma/heaven';

const app = () => {
  return
  <ConfigProvider>
    {children}
  </ConfigProvider>
}
```

[👉 详情 changelog](./changelog)
