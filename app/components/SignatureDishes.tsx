import { ORDER_URL } from '../config';

const dishes = [
  {
    name: "Sesame Chicken",
    price: 15.00,
    image: "a12007c9-0c47-4219-9fd1-5b80644ed278.jpeg",
    description: "Our most-loved dish. Tender chicken glazed in our chef's signature sesame sauce, finished with toasted sesame seeds over fresh broccoli.",
    badge: "#1 Most Ordered",
  },
  {
    name: "General Tso's Chicken",
    price: 14.00,
    image: "2dcf23b3-1cda-41b1-bd31-d28c97dc82be.jpeg",
    description: "Golden-fried chicken chunks tossed in our legendary sweet-heat sauce with dried chilies. A Szechuan Royale classic since day one.",
    badge: "Chef's Pick",
  },
];

export default function SignatureDishes() {
  return (
    <section className="py-20 bg-ink" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Subtle pattern */}
      <div
        className="pattern-lattice"
        style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }}
      />

      <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-eyebrow">Must Try</span>
          <h2 className="section-title text-4xl md:text-5xl mb-4">Signature Dishes</h2>
          <div className="section-rule section-rule-center" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          {dishes.map((dish, i) => (
            <a
              key={dish.name}
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="signature-card"
              style={{ display: 'block', textDecoration: 'none' }}
            >
              {/* Image */}
              <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/${dish.image}`}
                  alt={dish.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                />
                {/* Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(155,15,0,0.9)',
                  backdropFilter: 'blur(8px)',
                  color: '#F0C040',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '0.35rem 0.75rem',
                  border: '1px solid rgba(204,17,0,0.5)',
                }}>
                  {dish.badge}
                </div>
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'linear-gradient(to top, rgba(13,8,6,1) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }} />
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem 1.75rem 1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    color: '#F5E6C8',
                    letterSpacing: '0.01em',
                  }}>
                    {dish.name}
                  </h3>
                  <span style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: 'italic',
                    color: '#D4AF37',
                    fontSize: '1.25rem',
                    flexShrink: 0,
                    marginLeft: '1rem',
                  }}>
                    ${dish.price.toFixed(2)}
                  </span>
                </div>

                <p style={{
                  color: '#8A7968',
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                  marginBottom: '1.25rem',
                }}>
                  {dish.description}
                </p>

                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#D4AF37',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}>
                  Order Now
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
