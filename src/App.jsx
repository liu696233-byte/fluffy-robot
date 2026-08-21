import { useEffect, useState } from 'react'
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
  const [content, setContent] = useState(null)

  // 内容抽离到 public/content.json，运行时读取，方便通过后台随时更改
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}content.json`, { cache: 'no-store' })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json()
      })
      .then(setContent)
      .catch((err) => {
        console.error('加载 content.json 失败：', err)
        setContent(null)
      })
  }, [])

  // 内容异步加载完成后，重新绑定滚动渐显与卡片倾斜
  useScrollReveal([content])
  useTilt([content])

  return (
    <>
      <Preloader />
      <CursorGlow />
      <Aurora />
      {content ? (
        <>
          <Navbar theme={theme} onToggleTheme={toggleTheme} nav={content.meta.nav} />
          <main>
            <Hero data={content.hero} />
            <About data={content.about} />
            <Skills data={content.skills} />
            <Work data={content.work} />
            <Journey data={content.journey} />
            <Contact data={content.contact} />
          </main>
          <Footer data={content.footer} />
        </>
      ) : (
        <div className="booting">正在加载内容…</div>
      )}
    </>
  )
}
