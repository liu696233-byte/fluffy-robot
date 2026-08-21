# 🤖 FLUFFY ROBOT · 个人主页

一个有温度的创造者主页 —— 设计、工程与一点点温柔的科技。
基于 **Vite + React 18** 构建，深色极光 + 玻璃拟态 + 柔和发光的高级质感。

所有可编辑内容都抽离到 `public/content.json`，并提供独立的 **可视化后台** `/admin`，
**不改代码、不重新构建**就能随时改文字、技能、项目、联系方式 —— 保存后自动提交到 GitHub 并触发 Pages 重建。

## ✨ 特性

- 🌌 **极光动态背景**（多色光斑漂浮 + 网格 + 噪点）
- 🪟 **玻璃拟态卡片**（backdrop-filter 毛玻璃）
- ⌨️ **打字机 Hero**（循环展示身份标语）
- 📜 **滚动渐显**（IntersectionObserver）
- 🔢 **数字计数动画**（进入视口才启动）
- 📊 **技能进度条**（滚动到区块自动填充）
- 🃏 **项目卡片 3D 悬浮**（鼠标跟随透视旋转）
- 🌗 **深浅色主题切换**（记忆到 localStorage）
- 📝 **内容可视化后台**（静态页面，用 GitHub PAT 直接写回仓库）
- 📱 **移动端自适应** + 汉堡菜单
- ♿ 尊重 `prefers-reduced-motion`（关闭动画）

## 🧱 技术栈

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- 纯 CSS（无 UI 框架），变量驱动主题
- GitHub REST API（内容后台直接提交 `content.json`）
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

后台地址：`https://<用户名>.github.io/fluffy-robot/admin/`

### 首次使用

1. 准备一个 GitHub Personal Access Token：
   - GitHub → 头像 → **Settings → Developer settings → Personal access tokens → Tokens (classic)**
   - 生成 classic token，勾选 **`repo`** 权限
   - 或者使用 fine-grained token，给本仓库 **Contents 读写** 权限
2. 打开后台地址，粘贴 Token 登录
3. 修改字段后点「保存并提交」，即可写回 `main` 分支
4. GitHub Actions 会自动重新部署，1-2 分钟后线上更新

> Token 只保存在浏览器 localStorage 中，不会上传到我方服务器。
> 如果公用电脑，用完后点「退出登录」即可清除。

### 直接改文件

不想用后台也可以直接编辑 `public/content.json`，提交后同样会触发 Pages 重建。

## 🎨 自定义

- **配色 / 主题变量**：`src/styles/style.css` 顶部的 `:root` 与 `[data-theme="light"]`
- **文案 / 内容**：优先改 `public/content.json`（或通过后台）
- **动效参数**：打字机速度在 `src/hooks/useTypewriter.js`，渐显阈值在 `src/hooks/useScrollReveal.js`
- **想加字段**：先在 `content.json` 加键，再在对应组件里读取，后台表单会自动识别（对象 / 数组 / 字符串）

## 📁 目录结构

```
.
├── index.html              # Vite 入口
├── vite.config.js          # 含 base（GitHub Pages 子路径）
├── package.json
├── .github/workflows/      # 自动部署到 Pages
├── public
│   ├── content.json        # ⭐ 全部可编辑内容（后台即改这个文件）
│   └── admin/              # 可视化后台（纯静态，调用 GitHub API）
│       └── index.html
└── src
    ├── main.jsx
    ├── App.jsx             # 运行时 fetch content.json 并下发
    ├── styles/style.css
    ├── hooks/              # useTheme / useTypewriter / useScrollReveal / useTilt
    └── components/         # 各页面区块组件（数据由 props 传入）
```

---

用 💛 与 ☕ 手写 · FLUFFY ROBOT
