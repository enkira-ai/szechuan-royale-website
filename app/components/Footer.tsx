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
            鴻園
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
          <a href="tel:+19088504558" className="footer-link">
            (908) 850-4558
          </a>
          <span style={{ color: '#8A7968' }}>/</span>
          <a href="tel:+19088506062" className="footer-link">
            (908) 850-6062
          </a>
        </div>

        {/* Social Links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginTop: '1.5rem' }}>
          <a
            href="https://www.facebook.com/szechuanroyale/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid rgba(212,175,55,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8A7968',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
            }}
            className="social-link"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="https://www.yelp.com/biz/szechuan-royale-hackettstown-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Yelp"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid rgba(212,175,55,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8A7968',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
            }}
            className="social-link"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206l2.99 2.765c.635.587.27 1.63-.56 1.812l-.76.134zm-7.042 5.13l1.207-5.072c.228-.96 1.532-1.088 1.932-.19l2.06 4.636c.274.615-.2 1.312-.878 1.312h-3.267c-.776 0-1.282-.81-1.054-1.548v-.138zM11.2 2.89c0-.765.696-1.348 1.436-1.198l.077.018c.638.162 1.048.785.948 1.437l-1.937 8.714c-.214.96-1.6.96-1.814 0L8.062 3.147a1.073 1.073 0 01.948-1.437l.077-.018c.74-.15 1.436.433 1.436 1.198h.677zm-5.55 6.535l4.308 2.905c.83.564.474 1.84-.428 1.932h-.058l-5.21.526A1.072 1.072 0 013.1 13.46l.906-3.43c.166-.634 1.1-.87 1.644-.606zm.66 8.392l4.636-2.06c.898-.4 1.756.584 1.296 1.48l-.018.04-2.37 4.266c-.346.62-1.27.62-1.548-.06l-2.266-2.206c-.474-.462-.304-1.228.27-1.46z"/>
            </svg>
          </a>
        </div>

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
