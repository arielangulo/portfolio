import { Link } from "react-router-dom";
import ProjectStatus from "../project/ProjectStatus";
import ProjectTechStack from "../project/ProjectTechStack";
import ProjectButtons from "../project/ProjectButtons";
import ArchitectureSection from "./ArchitectureSection";
import ContributionSection from "./ContributionSection";
import ChallengeSection from "./ChallengeSection";
import ResultsSection from "./ResultsSection";
import LessonsSection from "./LessonsSection";
import TechStackSection from "./TechStackSection";
import ProjectGallery from "./ProjectGallery";
import Section from "./Section";

export default function CaseStudyLayout({ project, labels }) {
  const { title, status, summary, tech, links, slug, caseStudy } = project;

  return (
    <article className="case-study">
      <div className="container">
        <Link to="/#projects" className="case-study__back">
          {labels.back}
        </Link>

        <header className="case-study__hero">
          <div className="case-study__head">
            <h1>{title}</h1>
            <ProjectStatus status={status} />
          </div>
          <p className="case-study__summary">{summary}</p>
          <ProjectTechStack tech={tech} />
          <ProjectButtons slug={slug} links={links} labels={labels} variant="hero" />
        </header>

        <Section title={labels.objective}>
          <p>{caseStudy.objective}</p>
        </Section>

        <ArchitectureSection title={labels.architecture} text={caseStudy.architecture} />
        <TechStackSection title={labels.techStack} tech={tech} />
        <ContributionSection title={labels.contribution} text={caseStudy.contribution} />
        <ChallengeSection
          title={labels.challenges}
          challenges={caseStudy.challenges}
          labels={labels}
        />
        <ResultsSection title={labels.results} text={caseStudy.results} />
        <ProjectGallery title={labels.gallery} images={caseStudy.gallery} />
        <LessonsSection title={labels.lessons} text={caseStudy.lessons} />
      </div>
    </article>
  );
}
