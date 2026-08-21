import { useEffect, useState } from 'react'

// 打字机效果：循环展示 phrases 列表，逐字输入/删除
export default function useTypewriter(phrases, options = {}) {
  const { typeSpeed = 95, deleteSpeed = 55, hold = 1500, gap = 350 } = options
  const [text, setText] = useState('')

  useEffect(() => {
    let pi = 0
    let ci = 0
    let deleting = false
    let timer

    const tick = () => {
      const word = phrases[pi]
      ci += deleting ? -1 : 1
      setText(word.slice(0, ci))

      let delay = deleting ? deleteSpeed : typeSpeed
      if (!deleting && ci === word.length) {
        delay = hold
        deleting = true
      } else if (deleting && ci === 0) {
        deleting = false
        pi = (pi + 1) % phrases.length
        delay = gap
      }
      timer = setTimeout(tick, delay)
    }

    tick()
    return () => clearTimeout(timer)
  }, [phrases, typeSpeed, deleteSpeed, hold, gap])

  return text
}
