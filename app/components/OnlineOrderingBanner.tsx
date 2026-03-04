const MEALKEYWAY_URL = "https://www.mealkeyway.com/restaurant/szechuan-royale";
const DOORDASH_URL = "https://www.doordash.com";

export default function OnlineOrderingBanner() {
  return (
    <section id="order" className="py-16 bg-imperial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Clean heading — no emoji */}
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-3 tracking-wide">
            ORDER ONLINE
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/30" />
            <span className="text-white/60 text-sm tracking-widest">PICKUP &amp; DELIVERY</span>
            <div className="h-px w-12 bg-white/30" />
          </div>
          <p className="text-lg text-white/80 mb-8">
            Authentic Szechuan delivered to your door
          </p>

          {/* Primary CTA — MealKeyway */}
          <a
            href={MEALKEYWAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-bright-gold text-ink px-10 py-4 rounded-lg font-bold text-lg hover:bg-gold transition-all duration-200 transform hover:scale-105 mb-6"
          >
            Order on MealKeyway →
          </a>

          {/* Secondary platforms */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <a
              href={DOORDASH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/40 text-white/80 hover:text-white hover:border-white px-6 py-2 rounded-lg text-sm transition-all duration-200"
            >
              DoorDash
            </a>
            <a
              href="tel:+19088504558"
              className="inline-block border border-white/40 text-white/80 hover:text-white hover:border-white px-6 py-2 rounded-lg text-sm transition-all duration-200"
            >
              Call to Order: (908) 850-4558
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
