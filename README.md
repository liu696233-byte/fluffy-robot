# 🤖 FLUFFY ROBOT · 个人主页

一个有温度的创造者主页 —— 设计、工程与一点点温柔的科技。
基于 **Vite + React 18** 构建，深色极光 + 玻璃拟态 + 柔和发光的高级质感。

所有可编辑内容都抽离到 `public/content.json`，并用 **Decap CMS** 提供可视化后台，
**不改代码、不重新构建**就能随时改文字、技能、项目、联系方式 —— 保存后自动触发 Pages 重建。

## ✨ 特性

- 🌌 **极光动态背景**（多色光斑漂浮 + 网格 + 噪点）
- 🪟 **玻璃拟态卡片**（backdrop-filter 毛玻璃）
- ⌨️ **打字机 Hero**（循环展示身份标语）
- 📜 **滚动渐显**（IntersectionObserver）
- 🔢 **数字计数动画**（进入视口才启动）
- 📊 **技能进度条**（滚动到区块自动填充）
- 🃏 **项目卡片 3D 悬浮**（鼠标跟随透视旋转）
- 🌗 **深浅色主题切换**（记忆到 localStorage）
- 📝 **内容可视化后台**（Decap CMS，GitHub 登录即可改）
- 📱 **移动端自适应** + 汉堡菜单
- ♿ 尊重 `prefers-reduced-motion`（关闭动画）

## 🧱 技术栈

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- 纯 CSS（无 UI 框架），变量驱动主题
- [Decap CMS](https://decapcms.org/) 内容后台（静态、无服务器）
- GitHub Actions 自动构建并部署到 GitHub Pages

## 🚀 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 生产构建（产物在 dist/）
npm run build

# 本地预览构建产物
npm run preview
```

## ☁️ 部署到 GitHub Pages

仓库已配置 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)：
推送 `main` 分支会自动构建并发布到 GitHub Pages。

首次启用：

1. 仓库 → **Settings → Pages**
2. **Build and deployment → Source** 选择 **GitHub Actions**
3. 推送代码后，Actions 会自动跑；完成后页面地址为
   `https://<用户名>.github.io/fluffy-robot/`

> 部署路径由 `vite.config.js` 的 `base: '/fluffy-robot/'` 决定，
> 如果改了仓库名，记得同步修改这个 base。

## 📝 随时改内容（可视化后台）

站点内容由 `public/content.json` 驱动，React 在运行时读取并渲染。
配合 `public/admin/` 下的 **Decap CMS**，你可以用 GitHub 账号登录，
在 `https://<用户名>.github.io/fluffy-robot/admin/` 直接可视化编辑并保存 ——
保存即向 `main` 提交，触发 Pages 重建，几秒后线上更新。

### 首次启用（一次性，约 2 分钟）

1. 打开 GitHub → 头像 → **Settings → Developer settings → OAuth Apps → New OAuth App**
2. 填写：
   - **Application name**：`fluffy-robot-cms`（随意）
   - **Homepage URL**：`https://<用户名>.github.io/fluffy-robot/`
   - **Authorization callback URL**：`https://<用户名>.github.io/fluffy-robot/admin/`
   - 点 **Register application**
3. 复制生成的 **Client ID**
4. 打开 [`public/admin/config.yml`](public/admin/config.yml)，把
   `client_id: REPLACE_WITH_OAUTH_CLIENT_ID` 替换成你的 Client ID
5. 提交并推送，Pages 重建后即可使用后台

> 后台本身不存储任何密码：登录走 GitHub OAuth，编辑内容直接写回仓库，
> 全程无需任何后端服务器或数据库（这就是不用 Flask 的原因）。

### 日常使用

- 访问 `<站点地址>/admin` → 用 GitHub 登录 → 选「主页内容」→ 改完点「Publish changes」
- 想直接改文件也行：编辑 `public/content.json` 后提交即可

## 🎨 自定义

- **配色 / 主题变量**：`src/styles/style.css` 顶部的 `:root` 与 `[data-theme="light"]`
- **文案 / 内容**：优先改 `public/content.json`（或通过后台）；结构由
  [`public/admin/config.yml`](public/admin/config.yml) 定义
- **动效参数**：打字机速度在 `src/hooks/useTypewriter.js`，渐显阈值在 `src/hooks/useScrollReveal.js`
- **想加字段**：先在 `content.json` 加键，再在 `config.yml` 对应 `fields` 里加一项，最后在组件里读取

## 📁 目录结构

```
.
├── index.html              # Vite 入口
├── vite.config.js          # 含 base（GitHub Pages 子路径）
├── package.json
├── .github/workflows/      # 自动部署到 Pages
├── public
│   ├── content.json        # ⭐ 全部可编辑内容（后台即改这个文件）
│   └── admin/              # Decap CMS 可视化后台
│       ├── index.html
│       └── config.yml      # 字段定义 + GitHub OAuth 配置
└── src
    ├── main.jsx
    ├── App.jsx             # 运行时 fetch content.json 并下发
    ├── styles/style.css
    ├── hooks/              # useTheme / useTypewriter / useScrollReveal / useTilt
    └── components/         # 各页面区块组件（数据由 props 传入）
```

---

用 💛 与 ☕ 手写 · FLUFFY ROBOT
