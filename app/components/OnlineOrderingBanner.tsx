const MEALKEYWAY_URL = "https://order.mealkeyway.com/merchant/697a4f754551584c38385230584f427631595a526e413d3d/main";
const GRUBHUB_URL = "https://www.grubhub.com/restaurant/szechuan-royale-470-schooleys-mountain-rd-ste-3-hackettstown/402532";
const SEAMLESS_URL = "https://www.seamless.com/menu/szechuan-royale-470-schooleys-mountain-rd-ste-3-hackettstown/402532";

export default function OnlineOrderingBanner() {
  return (
    <section
      id="order"
      style={{
        padding: '5rem 1.5rem',
        background: 'linear-gradient(135deg, #8B0000 0%, #CC1100 40%, #9B0F00 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle pattern overlay */}
      <div
        className="pattern-diamond"
        style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }}
      />
      {/* Radial vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(0,0,0,0.35) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        {/* Eyebrow */}
        <p style={{
          fontFamily: "'Noto Serif SC', serif",
          color: 'rgba(245,230,200,0.7)',
          fontSize: '0.6rem',
          letterSpacing: '0.5em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          Pickup &amp; Delivery
        </p>

        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 900,
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: '#F5E6C8',
          letterSpacing: '0.04em',
          lineHeight: 1.1,
          marginBottom: '0.75rem',
        }}>
          Order Online
        </h2>

        <p style={{
          color: 'rgba(245,230,200,0.7)',
          fontSize: '1rem',
          lineHeight: 1.6,
          marginBottom: '2.25rem',
        }}>
          Authentic Szechuan delivered to your door — or ready for pickup.
        </p>

        {/* Primary CTA */}
        <div style={{ marginBottom: '1.5rem' }}>
          <a
            href={MEALKEYWAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-banner-primary"
          >
            Order on MealKeyway
          </a>
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ flex: 1, maxWidth: '60px', height: '1px', background: 'rgba(245,230,200,0.2)' }} />
          <span style={{ color: 'rgba(245,230,200,0.4)', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            Also on
          </span>
          <div style={{ flex: 1, maxWidth: '60px', height: '1px', background: 'rgba(245,230,200,0.2)' }} />
        </div>

        {/* Secondary platforms */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
          <a href={GRUBHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-banner-secondary">Grubhub</a>
          <a href={SEAMLESS_URL} target="_blank" rel="noopener noreferrer" className="btn-banner-secondary">Seamless</a>
          <a href="tel:+19088504558" className="btn-banner-secondary">Call: (908) 850-4558 / 850-6062</a>
        </div>
      </div>
    </section>
  );
}
