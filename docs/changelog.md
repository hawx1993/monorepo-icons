---
title: Changelog
group:
  path: /
nav:
  title: 组件
  path: /components
---
- V 2.0.1-alpha 发布时间 2022-11-21 <font color="#346fff">antd 版本升级</font>
  -  升级 antd 版本从`4.22.7` -> `4.23.2` （主要解决tooltip问题）
  -  https://4x.ant.design/changelog-cn 具体看此文档


- V 2.0.0 发布时间 2022-09-06 <font color="#346fff">now is ready</font>

  - 调整

    - 升级 antd 版本从`4.19.4` -> `4.22.7`
    - 升级 @types/react `16.14.28` -> `18.0.18` 详见 issue:https://github.com/ant-design/ant-design/issues/35788
    - 去除内部组件样式依赖引用，改为按需加载插件引用以及全局引用
    - 通过 ConfigProvider.config()
      - 默认配置 locale = zhCN
      - renderEmpty = `<Empty image={EmptyImage.simple} size="small" />`
    - 调整默认字体为 14px
    - 调整主题色为 #346fff
    - 无需手动引入 heaven 样式文件
    - 优化按需加载相关逻辑代码

    - `Button`

      - 增加虚线按钮高亮属性（highlight）
      - 修改 disabled 颜色,调整为主色值透明度 50%

    - `Switch`

      - 修改 disabled 颜色,调整为主色值透明度 50%(涉及开和关颜色值调整)

    - `Empty`

      - 重新整理 12 种空页场景图片模版，可直接使用
      - 自定义 Description，可设置 title,remark,addon，自动生成符合标准设计的空场景方案
      - 调整图片尺寸 size，small：64x40, middle normal：120x82，large:160x110

    - `Spin`

      - 新增主动执行类：圆圈指示符，用于比如点击执行等待相关,只需要在 Spin 组件中增加 circle 属性
      - circle 属性类型为 boolean | {icon:boolean,text:string 或 boolean}

    - `Radio`

      - 修改 disabled 颜色,调整为主色值透明度 50%(涉及选中和未选中颜色值调整)

    - `Upload`

      - 精简代码，剔除 pic-list/pic/text 三份代码
      - 新增上传文本 uploadText 和校验内容 uploadHint 自定义配置
      - 优化配置，新增 drag 属性即可改为拖拽上传，修改默认拖拽上传图标
      - <s>不建议：兼容原拖拽上传写法 const { Dragger } = Upload</s>

    - `Transfer`

      - 优化代码
      - 支持双向联动穿梭框(`bidirectional`)

    - `Tree`

      - 优化树缩进距离以及相关配色以及 Icon

    - `tag标签`:

      - 新增 tag 彩色标签样式和尺寸
      - 修改 tag 悬停和禁用样式
      - 修改 tag 圆角
      - 新增浅色 tag

    - `select选择器`:

      - 修改 select 选择器 hover 背景色
      - 修复 select 选择器 disabled 颜色和字重

    - `Steps步骤条`:

      - 箭头加粗

    - `Alert警告提示`:

      - 修改警告提示默认 icon，颜色更饱满
      - 修改 close 按钮颜色
      - 修改 alert message 字体大小和字重

    - `Badge徽标`:

      - 调整颜色、大小
      - 新增方形徽标 `square` 属性类型为 `boolean`

    - `Form表单`:

      - 调整报错信息间距

    - `Input输入框`:

      - 调整颜色、字号

    - `InputNumber数字输入框`:

      - 调整颜色、字号

    - `Table表格`:

      - 调整颜色、字号、行高、间距

    - `Tooltip文字提示`

      - 修改字体大小和背景颜色
      - 修改三角形形状

    - `Popover气泡卡片`

      - 修改字号颜色

    - `Popconfim气泡确认框`

      - 修改字号和颜色
      - 修改标题和正文样式

    - `Modal对话框`

      - 修改字色、字号
      - 更换关闭图标
      - 更换创建类、正向类、询问类、警示类、破坏类图标

    - `Timeline时间轴`
      - 修改 icon 尺寸和文字间距

- V 1.1.1 发布时间 2022-07-15

  - 调整
    - message/notification: 通过 ConfigProvider.config() 配置 prefixCls，替代原组件内 xxx.config()

- V 1.1.0 发布时间 2022-07-14

  - 新特性
    - 支持样式按需加载，[使用方式](/)（推荐使用此方式，替换原全量加载方式）
    - less 变量 @ant-prefix 以及 ConfigProvider 参数 prefixCls 默认调整为 heaven
  - 修复
    - Input.TextArea: showCount disabled 背景色错误

- V 1.0.7 发布时间 2022-06-08

  - 新增
    - Select, TreeSelect: 增加 全选模式 [selectAllMode](/components/select#全选模式)
    - Table: 字段设置功能 增加 禁用选项 [disableCheckbox](/components/select#字段设置)
  - 修复
    - Radio: sub 模式 样式错误
  - 调整
    - Input.TextArea: showCount 计数器增加背景色

- V 1.0.5 发布时间 2022-04-27

  - 调整
    - Table: filter 功能，修改选项后，仅点击确定才会生效，失焦关闭弹出层的情况下不生效

- V 1.0.3 发布时间 2022-04-22

  - 修复
    - Input.Search: allowClear 导致高度撑开

- V 1.0.2 发布时间 2022-04-21

  - 修复
    - Drawer: header 关闭按钮应位于右侧
    - Table: th 颜色

- V 1.0.1 发布时间 2022-04-14

  - 修复
    - Drawer: header 样式

- V 1.0.0 发布时间 2022-04-07

  - 调整主题色，及部分组件样式微调
  - 从 0.6.x 版本可直接升级，更早版本需要将业务中 antd: 4.16.13 改为 4.19.4

- V 0.6.3 发布时间 2022-03-30

  - 修复
    - Tabs: card 类型样式

- V 0.6.2 发布时间 2022-03-30

  - 修复
    - Tabs: card 类型内部嵌套使用 Tabs 会错误出现的横线

- V 0.6.1 发布时间 2022-03-29

  - 修复
    - Input: limit 计数器
    - Tabs 异常

- V 0.6.0 发布时间 2022-03-29

  - antd 依赖版本升级 4.19.4
    - 升级后，旧代码可能会出现一些 ts 类型问题，此为 antd 版本升级后的伴生问题，需要自行调整兼容

- V 0.5.29 发布时间 2022-03-11

  - 新增
    - Table 字段设置: 兼容表格存在右侧固定列时，将字段设置列也固定在右侧
  - 修复
    - Table 字段设置功能: 错误展示 antd 图标

- V 0.5.28 发布时间 2022-01-21

  - 新增
    - Input.TextArea [disableEnter](/components/input#禁用换行的文本域): 通过配置 `disableEnter` 禁用换行

- V 0.5.26 发布时间 2022-01-14

  - 新增
    - Table 字段设置 onColumnSettingChange 函数: 支持 `options={onColumnSettingChange: (keys)=>{}}`

- V 0.5.24 发布时间 2021-12-15

  - 新增
    - Table 空状态: 支持 `image: 'simple'`
  - 调整
    - 全局配置: line-height-base 从 1.5715 改为 1.5
      - 兼容新版浏览器对于 px 小数的处理问题
  - 修复
    - Table 可展开: 图标展示错误

- V 0.5.21 发布时间 2021-11-29

  - 新增
    - Icon 图标: ExpandUp, ExpandDown

- V 0.5.16 发布时间 2021-11-25

  - 修复样式
    - Transfer 穿梭框: 类目禁用状态文字颜色错误

- V 0.5 版本 发布时间 2021-11-05
  - 修复样式
    - Button
    - Card
    - Tab
    - Tag
    - Input
    - Tree
    - Select
    - Alert
    - Modal
    - Notification
    - Popconfirm
    - Transfer
    - Radio
    - Empty
    - Drawer
    - Checkbox
    - Table
    - Pagination
    - Breadcrumb
    - Menu
    - Badge
  - 功能扩展
    - Drawer
      - [四种大小](/components/drawer#抽屉尺寸)
    - Modal
      - [四种大小](/components/modal#四种大小)
    - InputNumber
      - [左右布局模式](/components/input-number#控件位置)
    - Loading
      - [轻量加载](/components/loading#轻量加载)
    - Radio
      - [按钮下标模式](/components/radio#下标按钮)
    - Tab
      - [轻量模式](/components/tabs#简洁版-tabs)
    - Table
      - [操作列固定右侧](/components/table#操作列默认固定定位)
