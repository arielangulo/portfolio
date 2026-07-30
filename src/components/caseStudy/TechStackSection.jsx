import Section from "./Section";
import ProjectTechStack from "../project/ProjectTechStack";

export default function TechStackSection({ title, tech }) {
  if (!tech || tech.length === 0) return null;
  return (
    <Section title={title}>
      <ProjectTechStack tech={tech} />
    </Section>
  );
}
