import { meta, content } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const { ui } = content[lang];

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {meta.name}
        </span>
        <span className="footer__mono">{ui.footer.built}</span>
      </div>
    </footer>
  );
}
