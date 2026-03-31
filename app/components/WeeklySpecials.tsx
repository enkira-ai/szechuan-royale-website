const SPECIALS = [
  { name: 'Kung Pao Chicken', price: 14.95, description: 'Wok-tossed chicken with roasted peanuts, dried chilies, and Szechuan peppercorns.' },
  { name: 'Szechuan Beef', price: 16.95, description: 'Tender beef with bold Szechuan spices, crisp vegetables, and chili bean sauce.' },
  { name: 'Mapo Tofu', price: 12.95, description: 'Silken tofu in a fiery, numbing broth of fermented black beans and ground pork.' },
];

export default function WeeklySpecials() {
  return (
    <section className="py-20 bg-ink" style={{ borderTop: '1px solid rgba(212,175,55,0.1)', borderBottom: '1px solid rgba(212,175,55,0.1)' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-eyebrow">Limited Time</span>
          <h2 className="section-title text-4xl md:text-5xl mb-4">Weekly Specials</h2>
          <div className="section-rule section-rule-center" />
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          {SPECIALS.map((item) => (
            <div
              key={item.name}
              style={{
                background: 'linear-gradient(135deg, #1e1208 0%, #241508 100%)',
                border: '1px solid rgba(212,175,55,0.25)',
                borderRadius: '2px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  color: '#F5E6C8',
                  lineHeight: 1.3,
                }}>
                  {item.name}
                </h3>
                <span className="price-tag" style={{ flexShrink: 0 }}>
                  ${item.price.toFixed(2)}
                </span>
              </div>

              <p style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: '0.8rem',
                color: '#8A7968',
                lineHeight: 1.6,
                margin: 0,
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
