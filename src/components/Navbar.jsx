import { useEffect, useRef, useState } from 'react'

const LINKS = [
  { href: '#home', label: '首页' },
  { href: '#about', label: '关于' },
  { href: '#skills', label: '技能' },
  { href: '#work', label: '作品' },
  { href: '#journey', label: '历程' },
  { href: '#contact', label: '联系' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 滚动时高亮当前区块对应的导航项
  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
    const links = navRef.current?.querySelectorAll('.nav__link')
    if (!('IntersectionObserver' in window) || !sections.length || !links) return
    const so = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const id = en.target.id
            links.forEach((l) =>
              l.classList.toggle('is-active', l.getAttribute('href') === `#${id}`),
            )
          }
        })
      },
      { threshold: 0.4, rootMargin: '-20% 0px -40% 0px' },
    )
    sections.forEach((s) => so.observe(s))
    return () => so.disconnect()
  }, [])

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`} id="nav" ref={navRef}>
      <a href="#home" className="nav__brand">
        <span className="nav__logo">🤖</span>
        <span className="nav__brand-text">
          FLUFFY<span>ROBOT</span>
        </span>
      </a>

      <nav className={`nav__links${open ? ' is-open' : ''}`} id="navLinks">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="nav__link"
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <div className="nav__actions">
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="切换主题"
          title="切换深浅色"
        >
          <span className="theme-toggle__icon">{theme === 'dark' ? '🌙' : '☀️'}</span>
        </button>
        <button
          className={`nav__burger${open ? ' is-open' : ''}`}
          aria-label="菜单"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
