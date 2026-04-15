import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-ink">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-eyebrow">Heritage &amp; Craft</span>
          <h2 className="section-title text-4xl md:text-5xl mb-4">Our Story</h2>
          <div className="section-rule section-rule-center" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            {/* Pull quote */}
            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '1.3rem',
              color: '#D4AF37',
              lineHeight: 1.5,
              marginBottom: '1.75rem',
              borderLeft: '2px solid rgba(204,17,0,0.5)',
              paddingLeft: '1.25rem',
            }}>
              &ldquo;Where tradition meets bold innovation&rdquo;
            </p>

            <p style={{ color: '#B8A897', fontSize: '1rem', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              Szechuan Royale brings the bold, fiery flavors of Szechuan Province to your table.
              Every dish is crafted with authentic ingredients and traditional techniques passed down
              through generations of master chefs.
            </p>
            <p style={{ color: '#B8A897', fontSize: '1rem', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              Our kitchen honors the art of Szechuan cuisine — the numbing heat of Szechuan
              peppercorns, the depth of doubanjiang, and the harmony of flavors that has made
              this cuisine beloved worldwide.
            </p>
            <p style={{ color: '#B8A897', fontSize: '1rem', lineHeight: 1.85 }}>
              From our signature dishes to hand-crafted noodles, every plate tells
              a story of heritage, passion, and the pursuit of bold, unforgettable taste.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Decorative outer border */}
            <div style={{
              position: 'absolute',
              inset: '-12px',
              border: '1px solid rgba(212,175,55,0.15)',
              pointerEvents: 'none',
              zIndex: 0,
            }} />
            <div style={{
              position: 'relative',
              height: '420px',
              overflow: 'hidden',
              border: '1px solid rgba(212,175,55,0.3)',
              zIndex: 1,
            }}>
              <Image
                src="/images/staff.jpg"
                alt="Szechuan Royale team"
                fill
                className="object-cover"
              />
              {/* Warm tint overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(204,17,0,0.06) 0%, transparent 60%)',
                pointerEvents: 'none',
              }} />
            </div>
            {/* Corner accent */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              width: '48px',
              height: '48px',
              borderRight: '2px solid rgba(212,175,55,0.4)',
              borderBottom: '2px solid rgba(212,175,55,0.4)',
              zIndex: 2,
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
