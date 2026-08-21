import { useTheme } from './hooks/useTheme'
import useScrollReveal from './hooks/useScrollReveal'
import useTilt from './hooks/useTilt'
import Preloader from './components/Preloader'
import CursorGlow from './components/CursorGlow'
import Aurora from './components/Aurora'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  // 原 app.js 中的全局增强：滚动渐显 + 卡片 3D 倾斜
  useScrollReveal()
  useTilt()

  return (
    <>
      <Preloader />
      <CursorGlow />
      <Aurora />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
