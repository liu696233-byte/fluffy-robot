import { useEffect, useState } from 'react'

export default function Preloader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`preloader${done ? ' is-done' : ''}`}>
      <div className="preloader__inner">
        <div className="preloader__robot">🤖</div>
        <div className="preloader__bar">
          <span></span>
        </div>
      </div>
    </div>
  )
}
