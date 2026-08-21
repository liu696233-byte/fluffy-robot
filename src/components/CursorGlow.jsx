import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return
    const move = (e) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`
        ref.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div className="cursor-glow" ref={ref} aria-hidden="true" />
}
