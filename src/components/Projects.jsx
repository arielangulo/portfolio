import { content } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { lang } = useLanguage();
  const { projects, ui } = content[lang];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">{ui.sections.projects}</span>
          <span className="section-rule" />
        </div>
        <div className="projects__grid">
          {projects.map((p) => (
            <article
              className={`card project-card ${p.featured ? "project-card--featured" : ""}`}
              key={p.title}
            >
              <div className="project-card__head">
                <h3>{p.title}</h3>
                {p.status && <span className="tag tag--status">{p.status}</span>}
              </div>
              {p.image && (
                <div
                  className={`project-card__image ${
                    p.imageFit === "cover" ? "project-card__image--cover" : ""
                  }`}
                >
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
              )}
              <p>{p.description}</p>
              <div className="tag-row">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a className="project-card__link" href={p.link} target="_blank" rel="noreferrer">
                  {ui.projectLink}
                </a>
              )}
              {p.highlight && (
                <p className="project-card__highlight">
                  <span className="project-card__highlight-mark" aria-hidden="true" />
                  {p.highlight}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}