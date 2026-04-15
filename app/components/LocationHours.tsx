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
              <span style={{ color: '#8A7968', margin: '0 0.5rem' }}>/</span>
              <a href="tel:+19088506062" className="link-phone" style={{ fontSize: '1rem', letterSpacing: '0.05em' }}>
                (908) 850-6062
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

          {/* Right column: Google Maps embed */}
          <div className="highlight-card" style={{
            minHeight: '320px',
            overflow: 'hidden',
            padding: 0,
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.8!2d-74.8378!3d40.8527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3783b0a5f6b8d%3A0x1234567890abcdef!2s470%20Schooleys%20Mountain%20Rd%2C%20Hackettstown%2C%20NJ%2007840!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Szechuan Royale location on Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
