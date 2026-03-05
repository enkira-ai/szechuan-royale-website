export default function Footer() {
  return (
    <footer
      className="bg-ink"
      style={{
        borderTop: '1px solid rgba(212,175,55,0.15)',
        padding: '3rem 1.5rem 2rem',
      }}
    >
      <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>

        {/* Logo */}
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 900,
            fontSize: '1.125rem',
            letterSpacing: '0.14em',
            color: '#F5E6C8',
            marginBottom: '0.25rem',
          }}>
            SZECHUAN ROYALE
          </p>
          <p style={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: '0.65rem',
            letterSpacing: '0.5em',
            color: '#D4AF37',
          }}>
            四川皇家
          </p>
        </div>

        {/* Ornament */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(212,175,55,0.25)' }} />
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(212,175,55,0.4)', flexShrink: 0 }} />
          <div style={{ width: '32px', height: '1px', background: 'rgba(212,175,55,0.25)' }} />
        </div>

        <p style={{ color: '#8A7968', fontSize: '0.8rem', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>
          470 Schooleys Mountain Rd, Hackettstown, NJ 07840
        </p>
        <a href="tel:+19088504558" className="footer-link">
          (908) 850-4558
        </a>

        <div style={{
          marginTop: '2rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid rgba(212,175,55,0.08)',
        }}>
          <p style={{ color: 'rgba(138,121,104,0.55)', fontSize: '0.7rem', letterSpacing: '0.06em' }}>
            © 2026 Szechuan Royale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
