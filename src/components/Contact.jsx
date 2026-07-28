import { meta, content } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { lang } = useLanguage();
  const { ui } = content[lang];

  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">{ui.sections.contact}</span>
          <span className="section-rule" />
        </div>
        <div className="contact__panel card">
          <h2 className="contact__title">{ui.contact.title}</h2>
          <p className="contact__text">{ui.contact.text}</p>
          <div className="contact__links">
            <a className="btn btn-solid" href={`mailto:${meta.email}`}>
              {meta.email}
            </a>
            <a className="btn" href={meta.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn" href={meta.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
