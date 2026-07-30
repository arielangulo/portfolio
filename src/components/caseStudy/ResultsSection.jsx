import Section from "./Section";

export default function ResultsSection({ title, text }) {
  if (!text) return null;
  return (
    <Section title={title}>
      <p>{text}</p>
    </Section>
  );
}
