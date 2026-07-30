import { useEffect, useState } from "react";
import { meta, content } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const t = content[lang].ui;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#about", label: t.nav.profile },
    { href: "/#experience", label: t.nav.experience },
    { href: "/#projects", label: t.nav.projects },
    { href: "/#skills", label: t.nav.skills },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <nav className="nav__links" aria-label="Navegación principal">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav__actions">
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLang}
            aria-label="Cambiar idioma / Switch language"
          >
            <span className={lang === "es" ? "is-active" : ""}>ES</span>
            <span className="lang-toggle__sep">/</span>
            <span className={lang === "en" ? "is-active" : ""}>EN</span>
          </button>
          <a className="btn nav__cta" href={meta.cvUrl}>
            {t.nav.cv}
          </a>
        </div>
      </div>
    </header>
  );
}
