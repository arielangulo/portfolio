import Section from "./Section";

export default function ProjectGallery({ title, images }) {
  if (!images || images.length === 0) return null;
  return (
    <Section title={title}>
      <div className="gallery-grid">
        {images.map((src) => (
          <div className="gallery-grid__item" key={src}>
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </Section>
  );
}
