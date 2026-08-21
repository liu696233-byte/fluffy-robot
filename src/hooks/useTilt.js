import { useEffect } from 'react'

// 项目卡片 3D 倾斜：鼠标在卡片上移动时产生透视旋转（仅 hover 设备）
export default function useTilt() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return
    const cards = document.querySelectorAll('[data-tilt]')
    const cleanups = []

    cards.forEach((card) => {
      const onMove = (e) => {
        const r = card.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width - 0.5
        const y = (e.clientY - r.top) / r.height - 0.5
        card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`
      }
      const onLeave = () => {
        card.style.transform = ''
      }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      cleanups.push(() => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
      })
    })

    return () => cleanups.forEach((fn) => fn())
  }, [])
}
