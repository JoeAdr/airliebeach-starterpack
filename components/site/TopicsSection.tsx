import { topics } from "@/lib/site-content";

export function TopicsSection() {
  return (
    <section className="topics section">
      <div className="shell">
        <div className="section-heading">
          <p className="section-index">02 — Practical, not generic</p>
          <h2>
            Everything I wish I knew
            <br />
            <em>before moving to Airlie.</em>
          </h2>
        </div>
        <div className="topic-grid">
          {topics.map(({ icon: Icon, title, text }, index) => (
            <article className={`topic topic-${index + 1}`} key={title}>
              <Icon aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
