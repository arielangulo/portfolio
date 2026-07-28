import { content } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const { about, ui } = content[lang];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">{ui.sections.profile}</span>
          <span className="section-rule" />
        </div>
        <div className="about__grid">
          <h2 className="about__lede">{about.lede}</h2>
          <div className="about__body">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
