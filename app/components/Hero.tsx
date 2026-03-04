import Image from "next/image";

// Use first food photo from gallery as hero
const HERO_IMAGE = "/images/cda83e56-8acf-467e-b60a-68db04ccd765.jpeg";

export default function Hero() {
  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image — local food photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Szechuan Royale signature dish"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-ink/70" />
        {/* Warm gradient vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, rgba(13,8,6,0.7) 100%)',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Decorative rule */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gold opacity-60" />
          <span className="text-gold text-sm tracking-[0.4em] font-serif uppercase">
            Hackettstown, New Jersey
          </span>
          <div className="h-px w-16 bg-gold opacity-60" />
        </div>

        {/* Restaurant name — no emoji */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-wider">
          SZECHUAN ROYALE
        </h1>

        <p className="font-serif text-xl md:text-2xl text-gold mb-2 tracking-wide">
          Authentic Chinese Restaurant
        </p>
        <p className="font-serif italic text-lg md:text-xl text-stone mb-10">
          Bold Flavors. Royal Taste.
        </p>

        {/* Bottom decorative rule */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-12 bg-gold opacity-40" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold opacity-60" />
          <div className="h-px w-12 bg-gold opacity-40" />
        </div>

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
    </section>
  );
}
