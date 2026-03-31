const SPECIALS = [
  {
    name: 'Kung Pao Chicken',
    chineseName: '宫保鸡丁',
    description: 'Wok-seared chicken with roasted peanuts, dried chilies, and scallions in our house spicy-sweet sauce.',
    price: 14.95,
    spice: 2,
    badge: 'Chef\'s Pick',
  },
  {
    name: 'Szechuan Beef',
    chineseName: '四川牛肉',
    description: 'Tender sliced beef with crisp vegetables in a fiery Szechuan peppercorn and chili broad-bean sauce.',
    price: 16.95,
    spice: 3,
    badge: 'Signature',
  },
  {
    name: 'Mapo Tofu',
    chineseName: '麻婆豆腐',
    description: 'Silken tofu in a bold, numbing broth of fermented black bean, ground pork, and fragrant chili oil.',
    price: 12.95,
    spice: 3,
    badge: 'House Favorite',
  },
];

function SpiceIndicator({ level }: { level: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: '3px', alignItems: 'center' }}>
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: i <= level ? '#CC1100' : 'rgba(204,17,0,0.15)',
            boxShadow: i <= level ? '0 0 4px rgba(204,17,0,0.5)' : 'none',
            transition: 'all 0.2s ease',
          }}
        />
      ))}
    </span>
  );
}

export default function WeeklySpecials() {
  return (
    <section
      id="specials"
      style={{
        background: 'linear-gradient(180deg, #0d0806 0%, #120a05 50%, #0d0806 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '5rem 0',
      }}
    >
      {/* Subtle background lattice */}
      <div
        className="pattern-diamond"
        style={{ position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none' }}
      />

      {/* Crimson glow top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(204,17,0,0.4), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12" style={{ position: 'relative', zIndex: 1 }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-eyebrow">Limited Time</span>
          <h2
            className="section-title"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.5rem' }}
          >
            Weekly Specials
          </h2>
          <div className="section-rule section-rule-center" />
          <p
            style={{
              fontFamily: "'Noto Serif SC', serif",
              color: 'rgba(138,121,104,0.75)',
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginTop: '1rem',
            }}
          >
            本周特价
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {SPECIALS.map((special, idx) => (
            <div
              key={special.name}
              className="highlight-card"
              style={{
                padding: '1.75rem',
                borderRadius: '2px',
                animationDelay: `${idx * 0.15}s`,
              }}
            >
              {/* Top row: badge + spice */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <span
                  style={{
                    background: 'rgba(204,17,0,0.18)',
                    border: '1px solid rgba(204,17,0,0.35)',
                    color: '#F0C040',
                    fontSize: '0.6rem',
                    padding: '2px 8px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontFamily: "'Noto Sans SC', sans-serif",
                  }}
                >
                  {special.badge}
                </span>
                <SpiceIndicator level={special.spice} />
              </div>

              {/* Dish name */}
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  color: '#F5E6C8',
                  lineHeight: 1.2,
                  marginBottom: '0.25rem',
                }}
              >
                {special.name}
              </h3>

              {/* Chinese name */}
              <p
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  color: 'rgba(212,175,55,0.55)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.25em',
                  marginBottom: '0.875rem',
                }}
              >
                {special.chineseName}
              </p>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  background: 'linear-gradient(to right, rgba(212,175,55,0.2), transparent)',
                  marginBottom: '0.875rem',
                }}
              />

              {/* Description */}
              <p
                style={{
                  color: '#8A7968',
                  fontSize: '0.8125rem',
                  lineHeight: 1.65,
                  marginBottom: '1.5rem',
                }}
              >
                {special.description}
              </p>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.375rem' }}>
                <span
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    color: 'rgba(138,121,104,0.6)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  This week
                </span>
                <span
                  className="price-tag"
                  style={{ fontSize: '1.375rem', fontWeight: 600 }}
                >
                  ${special.price.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          style={{
            textAlign: 'center',
            marginTop: '2.5rem',
            color: 'rgba(138,121,104,0.5)',
            fontSize: '0.72rem',
            letterSpacing: '0.08em',
            fontFamily: "'Noto Sans SC', sans-serif",
          }}
        >
          Specials rotate weekly · Available for dine-in &amp; takeout
        </p>
      </div>

      {/* Crimson glow bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(204,17,0,0.4), transparent)',
        }}
      />
    </section>
  );
}
