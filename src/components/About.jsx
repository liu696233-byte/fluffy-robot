export default function About({ data }) {
  return (
    <section className="section about" id="about">
      <div className="section__head reveal">
        <span className="section__index">{data.index}</span>
        <h2 className="section__title">{data.title}</h2>
        <p className="section__lead">{data.lead}</p>
      </div>

      <div className="about__grid">
        <div className="about__card glass reveal">
          <div className="about__avatar">{data.card.emoji}</div>
          <h3>{data.card.name}</h3>
          <p>{data.card.desc}</p>
          <ul className="about__tags">
            {data.card.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="about__text reveal">
          {data.text.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="about__facts">
            {data.facts.map((f) => (
              <div key={f.value}>
                <span>{f.icon}</span>
                <b>{f.value}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
