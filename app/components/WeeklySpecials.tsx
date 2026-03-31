const SPECIALS = [
  {
    name: 'Kung Pao Chicken',
    price: 14.95,
    description: 'Wok-tossed chicken with roasted peanuts, dried chilies, and Szechuan peppercorns in a bold savory-sweet sauce.',
    spice: 2,
    chinese: '宫保鸡丁',
  },
  {
    name: 'Szechuan Beef',
    price: 16.95,
    description: 'Tender sliced beef stir-fried with fresh vegetables in our house Szechuan chili sauce — deeply aromatic and fiery.',
    spice: 3,
    chinese: '四川牛肉',
  },
  {
    name: 'Mapo Tofu',
    price: 12.95,
    description: 'Silken tofu and ground pork simmered in a rich, numbing chili-bean broth with fragrant Szechuan peppercorn oil.',
    spice: 3,
    chinese: '麻婆豆腐',
  },
];

function SpiceDots({ level }: { level: number }) {
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
        padding: '6rem 0',
        background: 'linear-gradient(180deg, #0d0806 0%, #130a06 50%, #0d0806 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background lattice */}
      <div
        className="pattern-lattice"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.6,
          pointerEvents: 'none',
        }}
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
          background: 'linear-gradient(to right, transparent, rgba(204,17,0,0.45), transparent)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12" style={{ position: 'relative' }}>

        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(204,17,0,0.18)',
                border: '1px solid rgba(204,17,0,0.4)',
                color: '#F0C040',
                fontSize: '0.58rem',
                padding: '3px 10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontFamily: "'Noto Sans SC', sans-serif",
                fontWeight: 500,
              }}
            >
              Limited Time
            </span>
          </div>
          <h2
            className="section-title"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.5rem' }}
          >
            Weekly Specials
          </h2>
          <div className="section-rule section-rule-center" />
          <p
            style={{
              color: '#8A7968',
              fontSize: '0.8125rem',
              letterSpacing: '0.05em',
              marginTop: '1rem',
              fontFamily: "'Noto Serif SC', serif",
            }}
          >
            Chef&rsquo;s selections — available this week only
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {SPECIALS.map((item, idx) => (
            <div
              key={item.name}
              className="highlight-card"
              style={{
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                animationDelay: `${idx * 0.15}s`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '1.75rem',
                  right: '1.75rem',
                  height: '1px',
                  background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)',
                }}
              />

              {/* Chinese character watermark */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-0.5rem',
                  right: '1rem',
                  fontFamily: "'Noto Serif SC', serif",
                  fontSize: '5rem',
                  color: 'rgba(212,175,55,0.04)',
                  fontWeight: 700,
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >
                {item.chinese}
              </div>

              {/* Header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
                    <SpiceDots level={item.spice} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      color: '#F5E6C8',
                      lineHeight: 1.2,
                    }}
                  >
                    {item.name}
                  </h3>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: "'Noto Serif SC', serif",
                      fontSize: '0.75rem',
                      color: '#8A7968',
                      letterSpacing: '0.08em',
                      marginTop: '0.2rem',
                    }}
                  >
                    {item.chinese}
                  </span>
                </div>

                {/* Price */}
                <div
                  style={{
                    flexShrink: 0,
                    textAlign: 'right',
                  }}
                >
                  <span
                    className="price-tag"
                    style={{
                      fontSize: '1.375rem',
                      display: 'block',
                    }}
                  >
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  background: 'rgba(212,175,55,0.1)',
                }}
              />

              {/* Description */}
              <p
                style={{
                  color: '#8A7968',
                  fontSize: '0.8125rem',
                  lineHeight: 1.65,
                  fontFamily: "'Noto Sans SC', sans-serif",
                  flex: 1,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <p
            style={{
              color: 'rgba(138,121,104,0.55)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            Specials rotate weekly &nbsp;·&nbsp; Dine in &amp; takeout
          </p>
        </div>
      </div>
    </section>
  );
}
