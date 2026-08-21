export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section__head reveal">
        <span className="section__index">01</span>
        <h2 className="section__title">关于我</h2>
        <p className="section__lead">相信技术应当温柔，复杂应当被化简。</p>
      </div>

      <div className="about__grid">
        <div className="about__card glass reveal">
          <div className="about__avatar">🤖</div>
          <h3>Yuan · 创造者</h3>
          <p>
            从一行 CSS 到一整套设计系统，我享受把模糊的想法打磨成顺滑体验的全过程。白天写工程，夜里画草图。
          </p>
          <ul className="about__tags">
            <li>产品思维</li>
            <li>前端工程</li>
            <li>动效设计</li>
            <li>设计系统</li>
          </ul>
        </div>

        <div className="about__text reveal">
          <p>
            我喜欢把「难用」变成「理所应当」。过去几年里，我做过{' '}
            <em>消费级 App</em>、<em>开发者工具</em> 和一堆奇怪但可爱的周末项目。
          </p>
          <p>
            现在，我把大部分精力放在 <strong>Fluffy Robot</strong> ——
            一个关于「让科技更靠近人」的小实验场。
          </p>
          <div className="about__facts">
            <div>
              <span>🌍 坐标</span>
              <b>地球 · 远程优先</b>
            </div>
            <div>
              <span>🛠 常用</span>
              <b>TypeScript · React · Figma</b>
            </div>
            <div>
              <span>💡 信条</span>
              <b>少即是多，慢即是快</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
