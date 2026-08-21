import useTypewriter from '../hooks/useTypewriter'
import CountUp from './CountUp'

export default function Hero({ data }) {
  const typed = useTypewriter(data.phrases)

  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <p className="hero__eyebrow reveal">{data.eyebrow}</p>
        <h1 className="hero__title">
          <span className="hero__line reveal">{data.titleLine}</span>
          <span className="hero__line hero__line--accent">
            <span className="typed">{typed}</span>
            <span className="caret">|</span>
          </span>
        </h1>
        <p className="hero__sub reveal">{data.subtitle}</p>
        <div className="hero__cta reveal">
          <a href={data.ctaPrimary.href} className="btn btn--primary">
            {data.ctaPrimary.text} <span>→</span>
          </a>
          <a href={data.ctaSecondary.href} className="btn btn--ghost">
            {data.ctaSecondary.text}
          </a>
        </div>
        <div className="hero__stats reveal">
          {data.stats.map((s) => (
            <div className="stat" key={s.label}>
              <CountUp end={s.value} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <a href="#about" className="hero__scroll" aria-label="向下滚动">
        <span className="hero__scroll-dot"></span>
      </a>
    </section>
  )
}
