import { Link } from "react-router-dom";
import ProjectStatus from "./ProjectStatus";
import ProjectTechStack from "./ProjectTechStack";
import ProjectButtons from "./ProjectButtons";

// Card de vista rápida — solo lo esencial: título, estado, imagen,
// resumen corto, tecnologías principales y botones de acción.
// Todo el detalle técnico vive en el Case Study (/projects/:slug).
export default function ProjectCard({ project, labels }) {
  const { slug, title, status, image, imageFit, featured, summary, tech, links } = project;

  return (
    <article className={`card project-card ${featured ? "project-card--featured" : ""}`}>
      <div className="project-card__head">
        <Link to={`/projects/${slug}`} className="project-card__title-link">
          <h3>{title}</h3>
        </Link>
        <ProjectStatus status={status} />
      </div>

      {image && (
        <div
          className={`project-card__image ${
            imageFit === "cover" ? "project-card__image--cover" : ""
          }`}
        >
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}

      <p className="project-card__summary">{summary}</p>

      <ProjectTechStack tech={tech} />

      <ProjectButtons slug={slug} links={links} labels={labels} variant="card" />
    </article>
  );
}
