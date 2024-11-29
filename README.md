# common-icons

### Command

```bash
$ pnpm install # 安装所有包依赖
$ pnpm start:demo # 本地启动demo
$ pnpm start:doc # 本地启动文档
$ pnpm run clean:all # 清空所有的node_modules
$ pnpm run icons:pull # 拉取最新图标库到icons-svg目录
$ pnpm run icons:generate # 生成inline svg，最终生成icons-svg/inline-svg 目录和icons-svg/inline-namespaced-svg 目录
$ pnpm run build:all # 编译所有包，最终生成icons-svg/es 目录，icons-svg/lib 目录和icons-react/dist目录
```

### 发布tag

```bash
$ pnpm changeset tag
$ git push --follow-tags

```

### 查看远程tag

```bash
$ git ls-remote --tags origin
```
