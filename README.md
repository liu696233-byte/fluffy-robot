# 🤖 FLUFFY ROBOT · 个人主页

一个有温度的创造者主页 —— 设计、工程与一点点温柔的科技。
基于 **Vite + React 18** 构建，深色极光 + 玻璃拟态 + 柔和发光的高级质感。

## ✨ 特性

- 🌌 **极光动态背景**（多色光斑漂浮 + 网格 + 噪点）
- 🪟 **玻璃拟态卡片**（backdrop-filter 毛玻璃）
- ⌨️ **打字机 Hero**（循环展示身份标语）
- 📜 **滚动渐显**（IntersectionObserver）
- 🔢 **数字计数动画**（进入视口才启动）
- 📊 **技能进度条**（滚动到区块自动填充）
- 🃏 **项目卡片 3D 悬浮**（鼠标跟随透视旋转）
- 🌗 **深浅色主题切换**（记忆到 localStorage）
- 📱 **移动端自适应** + 汉堡菜单
- ♿ 尊重 `prefers-reduced-motion`（关闭动画）

## 🧱 技术栈

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- 纯 CSS（无 UI 框架），变量驱动主题
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

## 🎨 自定义

- **配色 / 主题变量**：`src/styles/style.css` 顶部的 `:root` 与 `[data-theme="light"]`
- **文案 / 内容**：各区块组件在 `src/components/` 下（Hero、About、Skills、Work、Journey、Contact）
- **数据驱动**：技能、项目、历程均用组件内的数组定义，改数组即可
- **动效参数**：打字机速度在 `src/hooks/useTypewriter.js`，渐显阈值在 `src/hooks/useScrollReveal.js`

## 📁 目录结构

```
.
├── index.html              # Vite 入口
├── vite.config.js          # 含 base（GitHub Pages 子路径）
├── package.json
├── .github/workflows/      # 自动部署到 Pages
└── src
    ├── main.jsx
    ├── App.jsx
    ├── styles/style.css
    ├── hooks/              # useTheme / useTypewriter / useScrollReveal / useTilt
    └── components/         # 各页面区块组件
```

---

用 💛 与 ☕ 手写 · FLUFFY ROBOT
