import { useEffect, useRef, useState } from 'react'

export default function Skills({ data }) {
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
        <span className="section__index">{data.index}</span>
        <h2 className="section__title">{data.title}</h2>
        <p className="section__lead">{data.lead}</p>
      </div>

      <div className="skills__grid">
        {data.items.map((s) => (
          <article className="skill glass reveal" key={s.title}>
            <header>
              <span className="skill__icon">{s.icon}</span>
              <h3>{s.title}</h3>
            </header>
            <div className="bar">
              <span style={{ width: filled ? `${s.percent}%` : 0 }}></span>
            </div>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
