export default function OnlineOrderingBanner() {
  const orderUrl = process.env.NEXT_PUBLIC_ORDER_URL || "#order";

  return (
    <section className="py-12 bg-imperial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            🏮 ORDER ONLINE 🏮
          </h2>
          <p className="text-xl md:text-2xl text-stone mb-8">
            Authentic Szechuan delivered to your door
          </p>
          <p className="text-lg text-bright-gold mb-8">
            Pickup & Delivery Available
          </p>
          
          {/* Main CTA */}
          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-bright-gold text-ink px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold transition-all duration-200 transform hover:scale-105"
          >
            Order Now →
          </a>

          {/* Additional info */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-stone">
            <div className="flex items-center space-x-2">
              <span className="text-xl">⏰</span>
              <span className="text-sm md:text-base">Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">🍜</span>
              <span className="text-sm md:text-base">Authentic Recipes</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">🔥</span>
              <span className="text-sm md:text-base">Bold Flavors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}