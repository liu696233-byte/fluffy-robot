export default function Journey({ data }) {
  return (
    <section className="section journey" id="journey">
      <div className="section__head reveal">
        <span className="section__index">{data.index}</span>
        <h2 className="section__title">{data.title}</h2>
        <p className="section__lead">{data.lead}</p>
      </div>

      <ol className="timeline">
        {data.items.map((item) => (
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
