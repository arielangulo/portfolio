import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { content } from "../data/content";
import { useLanguage } from "../context/LanguageContext";
import CaseStudyLayout from "../components/caseStudy/CaseStudyLayout";

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const { projects, ui } = content[lang];
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="container case-study__not-found">
        <h1>{ui.project.notFoundTitle}</h1>
        <p>{ui.project.notFoundText}</p>
        <Link to="/" className="btn btn-solid">
          {ui.project.back}
        </Link>
      </div>
    );
  }

  return <CaseStudyLayout project={project} labels={ui.project} />;
}
