import { Link } from "react-router-dom";
import { FiBookOpen, FiGlobe, FiGithub, FiFileText } from "react-icons/fi";

// Botones reutilizables de proyecto. Cada uno aparece solo si aplica:
// - Caso de estudio: siempre (todo proyecto tiene su página de detalle)
// - Sitio web: solo si links.site existe
// - GitHub: solo si links.github existe
// - Documentación: solo si links.docs existe
export default function ProjectButtons({ slug, links, labels, variant = "card" }) {
  const size = variant === "hero" ? "btn" : "btn btn--sm";

  return (
    <div className="project-buttons">
      <Link to={`/projects/${slug}`} className={`${size} btn-solid`}>
        <FiBookOpen aria-hidden="true" />
        {labels.caseStudy}
      </Link>
      {links?.site && (
        <a href={links.site} target="_blank" rel="noreferrer" className={size}>
          <FiGlobe aria-hidden="true" />
          {labels.site}
        </a>
      )}
      {links?.github && (
        <a href={links.github} target="_blank" rel="noreferrer" className={size}>
          <FiGithub aria-hidden="true" />
          {labels.github}
        </a>
      )}
      {links?.docs && (
        <a href={links.docs} target="_blank" rel="noreferrer" className={size}>
          <FiFileText aria-hidden="true" />
          {labels.docs}
        </a>
      )}
    </div>
  );
}