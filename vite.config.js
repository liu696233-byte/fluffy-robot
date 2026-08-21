import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 部署到 GitHub Pages 子路径 /fluffy-robot/，本地 dev 不受影响
export default defineConfig({
  plugins: [react()],
  base: '/fluffy-robot/',
})
