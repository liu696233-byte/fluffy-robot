export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__brand">🤖 FLUFFY ROBOT</span>
        <p>
          用 💛 与 ☕ 手写于地球某处 · {year}
        </p>
      </div>
    </footer>
  )
}
