import { useEffect } from 'react'

// 滚动渐显：观察所有 .reveal 元素，进入视口后加 .is-in（对应 CSS 动画）
// deps：内容异步加载完成后需重新绑定，传 [content] 即可
export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('is-in')
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, deps)
}
