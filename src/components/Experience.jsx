import { content } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
  const { lang } = useLanguage();
  const { experience, ui } = content[lang];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">{ui.sections.experience}</span>
          <span className="section-rule" />
        </div>
        <ul className="timeline">
          {experience.map((item, i) => (
            <li className="timeline__item" key={i}>
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <div className="timeline__head">
                  <h3>{item.role}</h3>
                  <span className="timeline__period">{item.period}</span>
                </div>
                <p className="timeline__org">{item.org}</p>
                <p>{item.description}</p>
                <div className="tag-row">
                  {item.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
