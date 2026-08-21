const TIMELINE = [
  {
    year: '2024 — 至今',
    title: '独立创造者 · Fluffy Robot',
    desc: '做自己的产品，也帮别人把想法落地。自由、专注、可持续。',
  },
  {
    year: '2021 — 2024',
    title: '高级前端工程师 · 某科技公司',
    desc: '主导设计系统建设，把交付效率提升了一倍多。',
  },
  {
    year: '2019 — 2021',
    title: '产品设计师 · 初创团队',
    desc: '从 0 到 1 参与多款 App，学会在约束里跳舞。',
  },
]

export default function Journey() {
  return (
    <section className="section journey" id="journey">
      <div className="section__head reveal">
        <span className="section__index">04</span>
        <h2 className="section__title">历程</h2>
        <p className="section__lead">一路走来的几个路标。</p>
      </div>

      <ol className="timeline">
        {TIMELINE.map((item) => (
          <li className="timeline__item reveal" key={item.year}>
            <span className="timeline__dot"></span>
            <div className="timeline__card glass">
              <span className="timeline__year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
