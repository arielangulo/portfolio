// Primitivo compartido por todas las secciones del Case Study:
// título + regla horizontal + contenido. Evita repetir ese patrón
// en ArchitectureSection, ContributionSection, etc.
export default function Section({ title, children, id }) {
  if (!children) return null;
  return (
    <section className="case-section" id={id}>
      <div className="section-head">
        <span className="section-tag">{title}</span>
        <span className="section-rule" />
      </div>
      <div className="case-section__body">{children}</div>
    </section>
  );
}
