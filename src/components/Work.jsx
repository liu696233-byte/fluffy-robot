const PROJECTS = [
  {
    title: 'Aurora UI',
    emoji: '🌌',
    variant: 'a',
    desc: '一套以「光」为灵感的玻璃拟态组件库，开箱即用的动效与主题。',
    tags: ['React', 'CSS', 'Design System'],
  },
  {
    title: 'Pulse',
    emoji: '📈',
    variant: 'b',
    desc: '面向独立开发者的轻量分析面板，把数据讲成一个好懂的故事。',
    tags: ['TypeScript', 'Charts', 'SaaS'],
  },
  {
    title: 'Fluffy Bot',
    emoji: '🤖',
    variant: 'c',
    desc: '一个有点话痨、但很会安慰人的桌面小机器人（本站的吉祥物）。',
    tags: ['Electron', 'AI', 'Fun'],
  },
  {
    title: 'Inkwell',
    emoji: '✍️',
    variant: 'd',
    desc: '极简写作工具，去掉一切干扰，只留下你和文字。',
    tags: ['Next.js', 'Local-first'],
  },
]

export default function Work() {
  return (
    <section className="section work" id="work">
      <div className="section__head reveal">
        <span className="section__index">03</span>
        <h2 className="section__title">精选作品</h2>
        <p className="section__lead">一些我乐意拿出来讲的项目。</p>
      </div>

      <div className="work__grid">
        {PROJECTS.map((p) => (
          <article className="project glass reveal" data-tilt key={p.title}>
            <div className={`project__thumb project__thumb--${p.variant}`}>
              <span>{p.emoji}</span>
            </div>
            <div className="project__body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project__tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
            <a href="#" className="project__link" aria-label={`查看 ${p.title}`}></a>
          </article>
        ))}
      </div>
    </section>
  )
}
