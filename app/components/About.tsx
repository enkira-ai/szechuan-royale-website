import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 bg-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">OUR STORY</h2>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-2xl text-gold">✦</span>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <span className="text-2xl text-gold">✦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-fell italic text-xl text-bright-gold mb-6">
              &ldquo;Where tradition meets bold innovation&rdquo;
            </p>
            <p className="font-sans text-lg text-stone leading-relaxed mb-6">
              Szechuan Royale brings the bold, fiery flavors of Szechuan Province to your table. 
              Every dish is crafted with authentic ingredients and traditional techniques passed down 
              through generations of master chefs.
            </p>
            <p className="font-sans text-lg text-stone leading-relaxed mb-6">
              Our kitchen honors the art of Szechuan cuisine — the numbing heat of Szechuan 
              peppercorns, the depth of doubanjiang, and the harmony of flavors that has made 
              this cuisine beloved worldwide.
            </p>
            <p className="font-sans text-lg text-stone leading-relaxed">
              From our signature Mapo Tofu to our hand-pulled Dan Dan Noodles, every plate tells 
              a story of heritage, passion, and the pursuit of bold, unforgettable taste.
            </p>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden border-2 border-gold">
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop"
              alt="Szechuan Royale Restaurant Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}