import NetworkField from "./NetworkField";
import { meta, content } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();
  const { profile, ui } = content[lang];

  return (
    <section id="top" className="hero">
      <NetworkField />
      <div className="hero__scanline" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="eyebrow">
          {meta.location} · {ui.hero.eyebrowSuffix}
        </p>
        <div className="hero__identity">
          {meta.photo && (
            <div className="hero__photo">
              <img src={meta.photo} alt={meta.name} />
            </div>
          )}
          <h1 className="hero__title">{meta.name}</h1>
        </div>
        <p className="hero__role">{profile.role}</p>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn-solid" href="#projects">
            {ui.hero.viewProjects}
          </a>
          <a className="btn" href="#contact">
            {ui.hero.contactMe}
          </a>
        </div>
      </div>
    </section>
  );
}
