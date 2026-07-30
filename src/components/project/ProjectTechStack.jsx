import TechBadge from "./TechBadge";

export default function ProjectTechStack({ tech }) {
  if (!tech || tech.length === 0) return null;
  return (
    <div className="tag-row">
      {tech.map((t) => (
        <TechBadge key={t} name={t} />
      ))}
    </div>
  );
}
