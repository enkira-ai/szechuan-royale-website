const testimonials = [
  {
    name: "David T.",
    text: "Szechuan Royale offers a fantastic dining experience. The food is consistently delicious, and the staff is always attentive and helpful. A must-visit for anyone who loves Szechuan cuisine!",
  },
  {
    name: "Amanda J.",
    text: "Szechuan Royale is amazing! The Spicy Kung Pao Chicken was perfectly balanced with just the right amount of heat. The service was fantastic, and the atmosphere was welcoming.",
  },
  {
    name: "Robert M.",
    text: "I love the flavors at Szechuan Royale! The Mapo Tofu was incredibly flavorful, and the staff was very friendly. This place has become my go-to for Szechuan food!",
  },
  {
    name: "Lisa K.",
    text: "Great Szechuan food! The dishes are authentic and full of flavor. The service is top-notch, and the ambiance is perfect for a night out. Highly recommend!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-ink-warm">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="section-eyebrow">What People Say</span>
          <h2 className="section-title text-4xl md:text-5xl mb-4">Reviews</h2>
          <div className="section-rule section-rule-center" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="highlight-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {/* Quote mark */}
              <span style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '3rem',
                lineHeight: 1,
                color: 'rgba(212,175,55,0.3)',
              }}>
                &ldquo;
              </span>

              <p style={{
                color: '#B8A897',
                fontSize: '0.9375rem',
                lineHeight: 1.75,
                fontStyle: 'italic',
                flex: 1,
              }}>
                {t.text}
              </p>

              {/* Divider */}
              <div style={{
                width: '32px',
                height: '1px',
                background: 'rgba(212,175,55,0.25)',
              }} />

              <p style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: '0.9375rem',
                color: '#D4AF37',
                letterSpacing: '0.04em',
              }}>
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
