const photos = [
  { src: 'store-front.jpg', alt: 'Szechuan Royale storefront entrance', span: false },
  { src: 'table.jpg', alt: 'Table full of signature dishes at Szechuan Royale', span: true },
  { src: 'party-1.jpg', alt: 'Family enjoying dinner at Szechuan Royale', span: false },
  { src: 'party-2.jpg', alt: 'Friends celebrating at Szechuan Royale', span: false },
  { src: 'new03.jpg', alt: 'Szechuan Royale elegant booth seating area', span: false },
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
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridAutoFlow: 'dense',
          gap: '0.75rem',
        }}>
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="gallery-item gallery-frame"
              style={{
                aspectRatio: photo.span ? '2/1' : '4/3',
                gridColumn: photo.span ? 'span 2' : 'span 1',
              }}
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
