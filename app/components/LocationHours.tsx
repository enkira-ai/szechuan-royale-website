export default function LocationHours() {
  const hours = [
    { day: "Monday", time: "Closed" },
    { day: "Tue – Sun", time: "11:30 am – 9:00 pm" },
  ];
  const mapsUrl = "https://maps.google.com/?q=470+Schooleys+Mountain+Rd+Hackettstown+NJ+07840";

  return (
    <section id="location" className="py-24 bg-ink-warm">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-eyebrow">Visit Us</span>
          <h2 className="section-title text-4xl md:text-5xl mb-4">Find Us</h2>
          <div className="section-rule section-rule-center" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

          {/* Left column: info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Location card */}
            <div className="highlight-card" style={{ padding: '1.75rem 2rem' }}>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: '1.125rem',
                color: '#D4AF37',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
              }}>
                Location
              </h3>
              <p style={{ color: '#F5E6C8', fontSize: '1rem', lineHeight: 1.7, marginBottom: '0.25rem' }}>
                470 Schooleys Mountain Rd
              </p>
              <p style={{ color: '#F5E6C8', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Hackettstown, NJ 07840
              </p>
              <a href="tel:+19088504558" className="link-phone" style={{ fontSize: '1rem', letterSpacing: '0.05em' }}>
                (908) 850-4558
              </a>
            </div>

            {/* Hours card */}
            <div className="highlight-card" style={{ padding: '1.75rem 2rem' }}>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: '1.125rem',
                color: '#D4AF37',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
              }}>
                Hours
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {hours.map((h, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#B8A897', fontSize: '0.9375rem' }}>{h.day}</span>
                    <span style={{
                      color: h.time === 'Closed' ? '#8A7968' : '#F5E6C8',
                      fontSize: '0.9375rem',
                      fontStyle: h.time === 'Closed' ? 'italic' : 'normal',
                    }}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Directions */}
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-directions">
              Get Directions
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right column: map panel */}
          <div className="highlight-card" style={{
            minHeight: '320px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem 2rem',
            gap: '1.5rem',
            textAlign: 'center',
          }}>
            {/* Pin icon */}
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(204,17,0,0.1)',
              border: '1px solid rgba(204,17,0,0.28)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="22" height="22" fill="none" stroke="#CC1100" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>

            <div>
              <p style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: '1.25rem',
                color: '#D4AF37',
                marginBottom: '0.5rem',
              }}>
                Szechuan Royale
              </p>
              <p style={{ color: '#8A7968', fontSize: '0.875rem', lineHeight: 1.7 }}>
                470 Schooleys Mountain Rd<br />Hackettstown, NJ 07840
              </p>
            </div>

            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-crimson" style={{ fontSize: '0.8rem', padding: '0.6rem 1.5rem' }}>
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
