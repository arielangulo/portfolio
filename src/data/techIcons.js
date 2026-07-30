import {
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiGit,
  SiVite,
  SiGithubactions,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { FiActivity, FiTerminal, FiGlobe, FiLayers } from "react-icons/fi";

// Mapa de nombre de tecnología (tal como aparece en content.js) a ícono.
// Si una tecnología no está acá, la card/case study muestra el texto solo,
// sin ícono — no rompe nada, solo agregá una línea nueva si querés su ícono.
export const techIcons = {
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "PostgreSQL": SiPostgresql,
  "TailwindCSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "Git": SiGit,
  "Vite": SiVite,
  "AWS": FaAws,
  "CI/CD": SiGithubactions,
  "Networking": FiGlobe,
  "Akvorado": FiActivity,
  "Scripting": FiTerminal,
  "Automatización": FiTerminal,
  "Automation": FiTerminal,
  "Frontend": FiLayers,
};

export function getTechIcon(name) {
  return techIcons[name] || null;
}
