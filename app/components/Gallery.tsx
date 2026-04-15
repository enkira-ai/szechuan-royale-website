const photos = [
  { src: 'new01.jpg', alt: 'Szechuan Royale dining room with traditional Chinese murals' },
  { src: 'new02.jpg', alt: 'Szechuan Royale interior with red lantern lighting' },
  { src: 'new03.jpg', alt: 'Szechuan Royale elegant booth seating area' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-ink">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="section-eyebrow">Step Inside</span>
          <h2 className="section-title text-4xl md:text-5xl mb-4">Our Restaurant</h2>
          <div className="section-rule section-rule-center" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.75rem',
        }}>
          {photos.map((photo, i) => (
            <div
              key={i}
              className="gallery-item gallery-frame"
              style={{ aspectRatio: '4/3' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/${photo.src}`}
                alt={photo.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="gallery-overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
