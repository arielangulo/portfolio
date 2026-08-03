import Section from "./Section";

export default function ArchitectureSection({ title, text, diagram }) {
  if (!text) return null;
  return (
    <Section title={title}>
      <p>{text}</p>
      {diagram && (
        <div className="architecture-diagram">
          <img src={diagram} alt="" loading="lazy" />
        </div>
      )}
    </Section>
  );
}