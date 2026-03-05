import menuData from '../../data/menu.json';

const FEATURED_CATEGORIES = ['House Special', 'Appetizers', 'Poultry', 'Seafood', 'Noodle / Fried Rice / Chow Mein'];

const SPICE_MAP: Record<string, number> = {
  'Sesame Chicken': 1,
  "General Tso's Chicken": 2,
  'Orange Flavored Chicken': 1,
  'Hunan Chicken': 3,
  'Szechuan Chicken': 3,
  'Hot & Sour Soup': 2,
  'Hunan Beef': 3,
  'Pepper Steak': 1,
};

function SpiceDots({ level }: { level: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: '2px', alignItems: 'center', marginLeft: '4px' }}>
      {[1,2,3].map(i => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: i <= level ? '#CC1100' : 'rgba(204,17,0,0.15)',
          }}
        />
      ))}
    </span>
  );
}

export default function MenuHighlights() {
  const featured = menuData.categories.filter(c => FEATURED_CATEGORIES.includes(c.name));

  return (
    <section id="menu" className="py-24 bg-ink-warm">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-eyebrow">Our Cuisine</span>
          <h2 className="section-title text-4xl md:text-5xl mb-4">The Menu</h2>
          <div className="section-rule section-rule-center" />
          <p className="text-stone text-sm mt-6" style={{ letterSpacing: '0.05em' }}>
            <a href={menuData.restaurant.orderUrl} target="_blank" rel="noopener noreferrer" className="link-gold">
              Order online for pickup →
            </a>
          </p>
        </div>

        {/* Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {featured.map((category) => (
            <div key={category.name}>
              {/* Category header */}
              <div style={{ marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(212,175,55,0.15)' }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: '1.375rem',
                  color: '#D4AF37',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.75rem',
                }}>
                  {category.name}
                  {category.note && (
                    <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: '0.75rem', color: '#8A7968', fontWeight: 400, letterSpacing: '0.03em' }}>
                      {category.note}
                    </span>
                  )}
                </h3>
              </div>

              {/* Items grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '0.625rem' }}>
                {category.items.map((item) => {
                  const spice = SPICE_MAP[item.name] ?? 0;
                  const isPopular = item.popular;
                  return (
                    <div
                      key={item.name}
                      className={isPopular ? 'menu-card menu-card-popular' : 'menu-card'}
                      style={{ padding: '0.875rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem' }}
                    >
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                          <span style={{
                            fontFamily: "'Noto Sans SC', sans-serif",
                            fontWeight: 500,
                            fontSize: '0.875rem',
                            color: '#F5E6C8',
                            lineHeight: 1.4,
                          }}>
                            {item.name}
                          </span>
                          {spice > 0 && <SpiceDots level={spice} />}
                          {isPopular && (
                            <span style={{
                              background: 'rgba(204,17,0,0.22)',
                              border: '1px solid rgba(204,17,0,0.38)',
                              color: '#F0C040',
                              fontSize: '0.58rem',
                              padding: '1px 6px',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              fontFamily: "'Noto Sans SC', sans-serif",
                              flexShrink: 0,
                            }}>
                              Popular
                            </span>
                          )}
                        </div>
                        {'description' in item && item.description && (
                          <p style={{ color: '#8A7968', fontSize: '0.75rem', marginTop: '0.25rem', lineHeight: 1.5 }}>
                            {item.description}
                          </p>
                        )}
                      </div>
                      <span className="price-tag" style={{ flexShrink: 0 }}>
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
          <a
            href={menuData.restaurant.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-crimson"
            style={{ padding: '0.9rem 2.5rem', fontSize: '0.875rem' }}
          >
            Order Online Now
          </a>
          <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
            <a href={menuData.restaurant.grubhubUrl} target="_blank" rel="noopener noreferrer" className="link-stone" style={{ fontSize: '0.8rem' }}>
              Grubhub
            </a>
            <span style={{ color: 'rgba(138,121,104,0.3)', fontSize: '0.6rem' }}>◆</span>
            <a href={menuData.restaurant.seamlessUrl} target="_blank" rel="noopener noreferrer" className="link-stone" style={{ fontSize: '0.8rem' }}>
              Seamless
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
