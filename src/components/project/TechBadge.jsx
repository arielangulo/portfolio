import { getTechIcon } from "../../data/techIcons";

export default function TechBadge({ name }) {
  const Icon = getTechIcon(name);
  return (
    <span className="tech-badge">
      {Icon && <Icon className="tech-badge__icon" aria-hidden="true" />}
      {name}
    </span>
  );
}
