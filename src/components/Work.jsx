export default function Work({ data }) {
  return (
    <section className="section work" id="work">
      <div className="section__head reveal">
        <span className="section__index">{data.index}</span>
        <h2 className="section__title">{data.title}</h2>
        <p className="section__lead">{data.lead}</p>
      </div>

      <div className="work__grid">
        {data.items.map((p) => (
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
            <a href={p.href} className="project__link" aria-label={`查看 ${p.title}`}></a>
          </article>
        ))}
      </div>
    </section>
  )
}
