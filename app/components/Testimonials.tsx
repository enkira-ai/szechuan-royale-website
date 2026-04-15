const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Szechuan+Royale/@40.8293369,-74.8218676,17z";

const reviews = [
  {
    name: "David T.",
    rating: 5,
    text: "Szechuan Royale offers a fantastic dining experience. The food is consistently delicious, and the staff is always attentive and helpful. A must-visit for anyone who loves Szechuan cuisine!",
    timeAgo: "2 months ago",
    initial: "D",
    color: "#4285F4",
  },
  {
    name: "Amanda J.",
    rating: 5,
    text: "Szechuan Royale is amazing! The Spicy Kung Pao Chicken was perfectly balanced with just the right amount of heat. The service was fantastic, and the atmosphere was welcoming.",
    timeAgo: "3 months ago",
    initial: "A",
    color: "#EA4335",
  },
  {
    name: "Robert M.",
    rating: 5,
    text: "I love the flavors at Szechuan Royale! The Mapo Tofu was incredibly flavorful, and the staff was very friendly. This place has become my go-to for Szechuan food!",
    timeAgo: "4 months ago",
    initial: "R",
    color: "#34A853",
  },
  {
    name: "Lisa K.",
    rating: 5,
    text: "Great Szechuan food! The dishes are authentic and full of flavor. The service is top-notch, and the ambiance is perfect for a night out. Highly recommend!",
    timeAgo: "5 months ago",
    initial: "L",
    color: "#FBBC04",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '1px' }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i <= count ? '#F0C040' : 'rgba(240,192,64,0.15)'}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-ink-warm">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="section-eyebrow">Customer Reviews</span>
          <h2 className="section-title text-4xl md:text-5xl mb-4">What Guests Say</h2>
          <div className="section-rule section-rule-center" />

          {/* Overall rating */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginTop: '1.5rem',
          }}>
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#F5E6C8',
              lineHeight: 1,
            }}>
              4.8
            </span>
            <div>
              <Stars count={5} />
              <p style={{ color: '#8A7968', fontSize: '0.7rem', marginTop: '0.2rem', letterSpacing: '0.03em' }}>
                Based on Google Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {reviews.map((review, i) => (
            <a
              key={i}
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="review-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                textDecoration: 'none',
              }}
            >
              {/* Header: avatar + name + time */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {/* Google-style avatar */}
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: review.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  fontFamily: "'Noto Sans SC', sans-serif",
                  flexShrink: 0,
                }}>
                  {review.initial}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{
                    color: '#F5E6C8',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    lineHeight: 1.3,
                  }}>
                    {review.name}
                  </p>
                  <p style={{
                    color: '#8A7968',
                    fontSize: '0.7rem',
                    letterSpacing: '0.02em',
                  }}>
                    {review.timeAgo}
                  </p>
                </div>
                {/* Google "G" icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: 0.4 }}>
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>

              {/* Stars */}
              <Stars count={review.rating} />

              {/* Review text */}
              <p style={{
                color: '#B8A897',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                flex: 1,
              }}>
                &ldquo;{review.text}&rdquo;
              </p>
            </a>
          ))}
        </div>

        {/* View all on Google */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#8A7968',
              fontSize: '0.8rem',
              letterSpacing: '0.05em',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            className="link-stone"
          >
            See all reviews on Google Maps
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
