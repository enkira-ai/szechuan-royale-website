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

export default function MenuHighlights() {
  const featured = menuData.categories.filter(c => FEATURED_CATEGORIES.includes(c.name));

  return (
    <section id="menu" className="py-20 bg-ink-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">Our Cuisine</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            The Full Menu
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <span className="text-imperial text-xl">🌶</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold"></div>
          </div>
          <p className="text-stone mt-4 text-sm">
            <a href={menuData.restaurant.orderUrl} target="_blank" rel="noopener noreferrer"
               className="text-gold hover:text-gold-bright underline transition-colors">
              Order online for pickup →
            </a>
          </p>
        </div>

        <div className="space-y-12">
          {featured.map((category) => (
            <div key={category.name}>
              <h3 className="font-serif text-2xl text-gold border-b border-gold/30 pb-2 mb-6">
                {category.name}
                {category.note && <span className="text-sm text-stone ml-3 font-sans font-normal">— {category.note}</span>}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {category.items.map((item) => (
                  <div key={item.name}
                    className={`flex justify-between items-start p-4 rounded border transition-all duration-200 hover:border-gold/60 ${
                      item.popular
                        ? 'bg-imperial/10 border-imperial/40'
                        : 'bg-ink/40 border-white/10'
                    }`}
                  >
                    <div className="flex-1 min-w-0 pr-3">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium text-sm leading-tight">{item.name}</span>
                        {item.popular && (
                          <span className="shrink-0 bg-imperial text-white text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wide">Popular</span>
                        )}
                      </div>
                      {'description' in item && item.description && (
                        <p className="text-stone text-xs mt-1 leading-relaxed">{item.description}</p>
                      )}
                    </div>
                    <span className="text-gold font-semibold text-sm whitespace-nowrap">${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={menuData.restaurant.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-imperial text-white px-10 py-4 rounded font-medium text-lg hover:bg-red-700 transition-colors border-2 border-gold/50 hover:border-gold"
          >
            Order Online Now →
          </a>
          <div className="mt-4 flex gap-4 justify-center">
            <a href={menuData.restaurant.grubhubUrl} target="_blank" rel="noopener noreferrer"
               className="text-stone hover:text-gold text-sm transition-colors">Grubhub</a>
            <span className="text-stone/30">|</span>
            <a href={menuData.restaurant.seamlessUrl} target="_blank" rel="noopener noreferrer"
               className="text-stone hover:text-gold text-sm transition-colors">Seamless</a>
          </div>
        </div>
      </div>
    </section>
  );
}
