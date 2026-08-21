import { useEffect, useRef, useState } from 'react'

// 数字计数动画：进入视口后从 0 缓动到 end
export default function CountUp({ end, duration = 1400 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    let t0 = null
    let started = false

    const step = (t) => {
      if (!t0) t0 = t
      const p = Math.min((t - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(end * eased))
      if (p < 1) raf = requestAnimationFrame(step)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && !started) {
            started = true
            raf = requestAnimationFrame(step)
            io.disconnect()
          }
        })
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [end, duration])

  return <b ref={ref}>{val}</b>
}
