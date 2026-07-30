import { content } from "../data/content";
import { useLanguage } from "../context/LanguageContext";
import ProjectCard from "./project/ProjectCard";

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
            <ProjectCard key={p.slug} project={p} labels={ui.project} />
          ))}
        </div>
      </div>
    </section>
  );
}
