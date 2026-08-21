import { useState } from 'react'

export default function Contact() {
  const [hint, setHint] = useState({ text: '', type: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const msg = form.msg.value.trim()

    if (!name || !email || !msg) {
      setHint({ text: '请把上面的三项都填一下 🙏', type: 'error' })
      return
    }

    const subject = encodeURIComponent(`来自主页的留言 · ${name}`)
    const body = encodeURIComponent(`称呼：${name}\n邮箱：${email}\n\n${msg}`)
    window.location.href = `mailto:hi@fluffyrobot.dev?subject=${subject}&body=${body}`

    setHint({ text: '已为你打开邮件客户端 ✉️ 没弹出来？直接发到 hi@fluffyrobot.dev 就行。', type: 'ok' })
    form.reset()
  }

  return (
    <section className="section contact" id="contact">
      <div className="section__head reveal">
        <span className="section__index">05</span>
        <h2 className="section__title">一起聊聊</h2>
        <p className="section__lead">有想法、有合作，或者只是想打个招呼？我都在。</p>
      </div>

      <div className="contact__wrap reveal">
        <form className="contact__form glass" id="contactForm" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">称呼</label>
            <input id="name" name="name" type="text" placeholder="怎么称呼你？" required />
          </div>
          <div className="field">
            <label htmlFor="email">邮箱</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="field">
            <label htmlFor="msg">想说的</label>
            <textarea id="msg" name="msg" rows="4" placeholder="随便写点什么…" required></textarea>
          </div>
          <button type="submit" className="btn btn--primary btn--block">
            发送 <span>→</span>
          </button>
          <p className={`contact__hint${hint.type ? ` is-${hint.type}` : ''}`} id="formHint">
            {hint.text}
          </p>
        </form>

        <aside className="contact__side">
          <a className="chip" href="mailto:hi@fluffyrobot.dev">
            ✉️ hi@fluffyrobot.dev
          </a>
          <a className="chip" href="https://github.com/liu696233-byte" target="_blank" rel="noopener">
            🐙 GitHub
          </a>
          <a className="chip" href="#" target="_blank" rel="noopener">
            𝕏 Twitter / X
          </a>
          <a className="chip" href="#" target="_blank" rel="noopener">
            💼 领英
          </a>
        </aside>
      </div>
    </section>
  )
}
