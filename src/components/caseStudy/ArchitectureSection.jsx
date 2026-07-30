import Section from "./Section";

export default function ArchitectureSection({ title, text }) {
  if (!text) return null;
  return (
    <Section title={title}>
      <p>{text}</p>
      {/* Espacio para diagrama: soltá una imagen o un componente acá cuando lo tengas */}
    </Section>
  );
}
