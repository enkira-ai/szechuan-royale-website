const ORDER_URL = "https://order.mealkeyway.com/merchant/697a4f754551584c38385230584f427631595a526e413d3d/main";

const menuItems = [
  { name: "Pan Fried Dumplings", price: 9.00, image: "cda83e56-8acf-467e-b60a-68db04ccd765.jpeg", tag: "Popular", category: "Appetizers" },
  { name: "Sesame Chicken", price: 15.00, image: "a12007c9-0c47-4219-9fd1-5b80644ed278.jpeg", tag: "Popular", category: "House Special" },
  { name: "General Tso's Chicken", price: 14.00, image: "2dcf23b3-1cda-41b1-bd31-d28c97dc82be.jpeg", tag: "Popular", category: "House Special" },
  { name: "Boneless Spare Ribs", price: 12.50, image: "2c798a66-2764-4b77-b473-9dcd71f0e03d.jpeg", tag: "Popular", category: "Appetizers" },
  { name: "Happy Family", price: 15.00, image: "dab21f61-e367-484f-bef9-68cdc7b9161f.jpeg", category: "House Special" },
  { name: "Moo Goo Gai Pan", price: 13.50, image: "53d62e21-83b6-41ef-aceb-342dae1a1082.jpeg", category: "Poultry" },
  { name: "Sliced Chicken w. Broccoli", price: 13.50, image: "42901bd9-9bfc-4941-bf28-a813e69c1905-2.jpeg", tag: "Popular", category: "Poultry" },
  { name: "Chicken Mixed Vegetable", price: 13.50, image: "792a6991-942b-4395-add0-3580b5640b1e.jpeg", category: "Poultry" },
  { name: "General Tso's Tofu", price: 13.00, image: "85b7af50-058b-4aea-8b00-68c860cc5bbd.jpeg", category: "Vegetable" },
  { name: "Hunan Prawn", price: 15.00, image: "9682892b-d774-4772-b2a7-186be4e46035.jpeg", category: "Seafood" },
  { name: "Sautéed String Beans", price: 12.00, image: "d23e3903-fe25-417b-bfa9-90e4be70ef4f.jpeg", category: "Vegetable" },
  { name: "House Special Lo Mein", price: 12.00, image: "bb73a62e-ef65-43c2-9ecb-8067968ea2a1.jpg", tag: "Popular", category: "Noodles" },
];

export default function PhotoMenuGallery() {
  return (
    <section id="menu" className="py-24 bg-ink-warm">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="section-eyebrow">Our Cuisine</span>
          <h2 className="section-title text-4xl md:text-5xl mb-4">The Menu</h2>
          <div className="section-rule section-rule-center" />
          <p style={{
            color: '#8A7968',
            fontSize: '0.9rem',
            marginTop: '1.25rem',
            letterSpacing: '0.03em',
          }}>
            Tap any dish to order online
          </p>
        </div>

        {/* Photo Menu Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="photo-menu-card"
              style={{
                display: 'block',
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '4/3',
                border: '1px solid rgba(212,175,55,0.12)',
                textDecoration: 'none',
              }}
            >
              {/* Dish Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/${item.image}`}
                alt={item.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
                loading={i < 6 ? 'eager' : 'lazy'}
              />

              {/* Category pill */}
              <span style={{
                position: 'absolute',
                top: '0.75rem',
                left: '0.75rem',
                background: 'rgba(13,8,6,0.75)',
                backdropFilter: 'blur(8px)',
                color: '#8A7968',
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '0.25rem 0.625rem',
                border: '1px solid rgba(212,175,55,0.12)',
              }}>
                {item.category}
              </span>

              {/* Popular badge */}
              {item.tag && (
                <span style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  background: 'rgba(155,15,0,0.85)',
                  color: '#F0C040',
                  fontSize: '0.58rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.2rem 0.5rem',
                  fontWeight: 600,
                }}>
                  {item.tag}
                </span>
              )}

              {/* Bottom overlay with name + price */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(13,8,6,0.92) 0%, rgba(13,8,6,0.6) 60%, transparent 100%)',
                padding: '3rem 1rem 1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    fontSize: '1.0625rem',
                    color: '#F5E6C8',
                    lineHeight: 1.3,
                    marginBottom: '0.15rem',
                  }}>
                    {item.name}
                  </p>
                  <span className="photo-menu-cta" style={{
                    fontSize: '0.65rem',
                    color: '#D4AF37',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}>
                    Order Now →
                  </span>
                </div>
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: 'italic',
                  color: '#D4AF37',
                  fontSize: '1.125rem',
                  flexShrink: 0,
                  marginLeft: '0.75rem',
                }}>
                  ${item.price.toFixed(2)}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Full Menu CTA */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-crimson"
            style={{ padding: '0.9rem 2.5rem', fontSize: '0.875rem' }}
          >
            View Full Menu & Order
          </a>
          <p style={{
            color: '#8A7968',
            fontSize: '0.8rem',
            marginTop: '1rem',
            letterSpacing: '0.03em',
          }}>
            50+ dishes available on our full online menu
          </p>
        </div>
      </div>
    </section>
  );
}
