import Section from "./Section";

export default function ContributionSection({ title, text }) {
  if (!text) return null;
  return (
    <Section title={title}>
      <p>{text}</p>
    </Section>
  );
}
