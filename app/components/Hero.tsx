import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1920&h=1080&fit=crop&crop=center"
          alt="Szechuan Cuisine"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        {/* Subtle red vignette at edges */}
        <div className="absolute inset-0 rounded-[50%] bg-imperial/20 blur-3xl transform scale-125" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="bg-ink/80 backdrop-blur-sm border-2 border-gold rounded-lg p-8 md:p-12 fade-in">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4">
            🏮 SZECHUAN ROYALE 🏮
          </h1>
          <p className="font-sans text-xl md:text-2xl text-stone mb-2">
            Authentic Chinese Restaurant
          </p>
          <p className="font-fell italic text-lg md:text-xl text-bright-gold mb-8">
            Bold Flavors. Royal Taste.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#order"
              className="bg-imperial text-white px-8 py-3 rounded-lg font-medium hover:bg-imperial/90 transition-all duration-200 transform hover:scale-105"
            >
              Order Online
            </a>
            <a
              href="#menu"
              className="border-2 border-gold text-gold px-8 py-3 rounded-lg font-medium hover:bg-gold hover:text-ink transition-all duration-200 transform hover:scale-105"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 left-4 float-animation">
        <span className="text-2xl">🏮</span>
      </div>
      <div className="absolute bottom-4 right-4 float-animation" style={{ animationDelay: '1.5s' }}>
        <span className="text-2xl">🏮</span>
      </div>
    </section>
  );
}