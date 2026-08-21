export default function Footer({ data }) {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__brand">{data.brand}</span>
        <p>
          用 💛 与 ☕ 手写于地球某处 · {year}
        </p>
      </div>
    </footer>
  )
}
