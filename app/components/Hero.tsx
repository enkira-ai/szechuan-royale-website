import Image from "next/image";

const HERO_IMAGE = "/images/cda83e56-8acf-467e-b60a-68db04ccd765.jpeg";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Szechuan Royale signature dish"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0" style={{ background: 'rgba(13,8,6,0.62)' }} />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 15%, rgba(13,8,6,0.75) 100%)',
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: 'linear-gradient(to top, #0d0806 0%, transparent 100%)' }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">

        {/* Location eyebrow */}
        <div className="animate-fade-up anim-d1 flex items-center justify-center gap-5 mb-10">
          <div style={{ width: '48px', height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.7))' }} />
          <span style={{
            fontFamily: "'Noto Serif SC', serif",
            color: '#D4AF37',
            fontSize: '0.6rem',
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
          }}>
            Hackettstown · New Jersey
          </span>
          <div style={{ width: '48px', height: '1px', background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.7))' }} />
        </div>

        {/* Restaurant Name */}
        <h1
          className="animate-fade-up anim-d2"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
            letterSpacing: '0.08em',
            color: '#F5E6C8',
            lineHeight: 1.0,
            marginBottom: '0.5rem',
          }}
        >
          SZECHUAN ROYALE
        </h1>

        {/* Chinese subtitle */}
        <p
          className="animate-fade-up anim-d3"
          style={{
            fontFamily: "'Noto Serif SC', serif",
            color: '#D4AF37',
            fontSize: '1.1rem',
            letterSpacing: '0.6em',
            marginBottom: '1.5rem',
          }}
        >
          鴻園
        </p>

        {/* Tagline */}
        <p
          className="animate-fade-up anim-d4"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 400,
            color: 'rgba(245,230,200,0.65)',
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            letterSpacing: '0.05em',
            marginBottom: '2.5rem',
          }}
        >
          Bold Flavors. Royal Taste.
        </p>

        {/* Ornament */}
        <div className="animate-fade-up anim-d4 flex items-center justify-center gap-4 mb-10">
          <div style={{ width: '32px', height: '1px', background: 'rgba(212,175,55,0.4)' }} />
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(212,175,55,0.6)', flexShrink: 0 }} />
          <div style={{ width: '32px', height: '1px', background: 'rgba(212,175,55,0.4)' }} />
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-up anim-d5 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://order.mealkeyway.com/merchant/697a4f754551584c38385230584f427631595a526e413d3d/main"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-crimson"
          >
            Order Online
          </a>
          <a href="#menu" className="btn-gold-outline">
            View Menu
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2"
        style={{ transform: 'translateX(-50%)', animation: 'fadeIn 2s ease 1.5s both' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <div style={{
            width: '1px',
            height: '36px',
            background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.5))',
          }} />
        </div>
      </div>
    </section>
  );
}
