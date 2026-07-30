import Section from "./Section";

export default function ChallengeSection({ title, challenges, labels }) {
  if (!challenges || challenges.length === 0) return null;
  return (
    <Section title={title}>
      <div className="challenge-list">
        {challenges.map((c, i) => (
          <div className="challenge-item card" key={i}>
            <p className="challenge-item__label">{labels.problem}</p>
            <p>{c.problem}</p>
            <p className="challenge-item__label">{labels.solution}</p>
            <p>{c.solution}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
