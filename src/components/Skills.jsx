import { useEffect, useRef, useState } from 'react'

const SKILLS = [
  { icon: '⚡', title: '前端工程', w: '92%', desc: 'React · TypeScript · Vite · 动效与性能优化' },
  { icon: '🎨', title: '产品设计', w: '88%', desc: 'Figma · 设计系统 · 交互原型 · 可用性' },
  { icon: '🧠', title: '体验策略', w: '80%', desc: '信息架构 · 用户旅程 · 数据驱动迭代' },
  { icon: '🔧', title: '工程化', w: '76%', desc: 'Node · CI/CD · 组件库 · 文档体系' },
]

export default function Skills() {
  const [filled, setFilled] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setFilled(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setFilled(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="section skills" id="skills" ref={ref}>
      <div className="section__head reveal">
        <span className="section__index">02</span>
        <h2 className="section__title">技能栈</h2>
        <p className="section__lead">不追求全栈通才，只把擅长的事做到顺手。</p>
      </div>

      <div className="skills__grid">
        {SKILLS.map((s) => (
          <article className="skill glass reveal" key={s.title}>
            <header>
              <span className="skill__icon">{s.icon}</span>
              <h3>{s.title}</h3>
            </header>
            <div className="bar">
              <span style={{ width: filled ? s.w : 0 }}></span>
            </div>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
