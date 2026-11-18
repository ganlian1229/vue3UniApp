# 项目背景与目录

本规范适用于项目根目录及其所有子目录。

## 二、项目背景与目录

当前项目使用 Vue 3、TypeScript、uni-app、Vite、Pinia 和 uview-plus，支持 H5、微信小程序和 App 等平台。

- 包管理器使用 pnpm，`package.json` 指定 `pnpm@10.10.0`。
- 环境要求以 `package.json` 为准：Node.js >= 20、pnpm >= 9；Volta 配置为 Node.js 20.20.0、pnpm 10.10.0。README 中较低的版本要求不能作为环境依据。
- `src/pages/`：主包页面。
- `src/pages-sub/`：分包页面；分包目录配置见 `vite.config.ts`。
- `src/components/`：公共组件。
- `src/layouts/`：页面布局。
- `src/api/`：接口模块。
- `src/utils/`：请求封装、拦截器及工具函数。
- `src/store/`：Pinia 状态管理。
- `src/style/`、`src/uni.scss`：公共样式与样式变量。
- `src/static/`：静态资源。
- `env/`：环境配置目录。
- `pages.config.ts`、`manifest.config.ts`、`vite.config.ts`：页面、应用及构建配置。

涉及页面或应用配置时，先查看配置源文件和生成插件。

- **禁止直接修改 `src/pages.json`**，该文件由插件生成。全局页面配置、TabBar 和 easycom 应修改根目录 `pages.config.ts`；单页配置应修改对应 Vue 页面的 `definePage()`；分包扫描目录应修改 `vite.config.ts` 中的 `UniPages.subPackages`，再通过项目已有生成流程更新。
- **分包页面路由由 UniPages 自动生成**。只需在 `vite.config.ts` 的 `UniPages.subPackages` 中配置分包目录，UniPages 就会扫描并为该目录下的所有页面生成路由，无需在 `pages.config.ts` 或 `src/pages.json` 中逐页手动登记。向已配置的分包目录新增页面时，无需重复配置路由；新增分包目录时才需补充目录配置。扫描遵循现有 `exclude` 规则，`components` 目录中的组件不作为页面生成路由。
- **禁止直接修改 `src/manifest.json`**，该文件由插件生成。应用信息及各平台配置应修改根目录 `manifest.config.ts`；通过环境变量读取的配置应修改 `env/` 下对应的环境文件，再通过项目已有生成流程更新。
- 插件生成的类型文件应通过对应配置或生成流程更新，避免只修改生成结果而被覆盖。
- 不得直接修改 `node_modules/` 或 `dist/` 中的文件来实现业务修复。
