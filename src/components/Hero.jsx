import useTypewriter from '../hooks/useTypewriter'
import CountUp from './CountUp'

const PHRASES = ['有温度的产品', '顺滑的体验', '会发光的交互', '温柔的科技']

export default function Hero() {
  const typed = useTypewriter(PHRASES)

  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <p className="hero__eyebrow reveal">// 你好，我是 Yuan</p>
        <h1 className="hero__title">
          <span className="hero__line reveal">我用代码与设计并存</span>
          <span className="hero__line hero__line--accent">
            <span className="typed">{typed}</span>
            <span className="caret">|</span>
          </span>
        </h1>
        <p className="hero__sub reveal">
          一个有温度的创造者。在 <strong>产品体验</strong>、<strong>前端工程</strong> 与{' '}
          <strong>交互设计</strong> 之间，造一些让人会心一笑的、温柔的科技。
        </p>
        <div className="hero__cta reveal">
          <a href="#work" className="btn btn--primary">
            看看作品 <span>→</span>
          </a>
          <a href="#contact" className="btn btn--ghost">
            一起聊聊
          </a>
        </div>
        <div className="hero__stats reveal">
          <div className="stat">
            <CountUp end={6} />
            <span>年经验</span>
          </div>
          <div className="stat">
            <CountUp end={42} />
            <span>个项目</span>
          </div>
          <div className="stat">
            <CountUp end={18} />
            <span>开源库</span>
          </div>
          <div className="stat">
            <CountUp end={99} />
            <span>% 咖啡驱动</span>
          </div>
        </div>
      </div>
      <a href="#about" className="hero__scroll" aria-label="向下滚动">
        <span className="hero__scroll-dot"></span>
      </a>
    </section>
  )
}
