import { content } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { lang } = useLanguage();
  const { skills, certifications, ui } = content[lang];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">{ui.sections.skills}</span>
          <span className="section-rule" />
        </div>
        <div className="skills__grid">
          {skills.groups.map((g) => (
            <div className="card skills__card" key={g.key}>
              <h3 className="skills__label">{g.label}</h3>
              <div className="tag-row">
                {g.items.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certs">
          <h3 className="skills__label">{ui.sections.certifications}</h3>
          <ul className="certs__list">
            {certifications.map((c) => (
              <li key={c.name} className="certs__item">
                <span className="certs__dot" aria-hidden="true" />
                <span>{c.name}</span>
                <span className="tag">{c.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
