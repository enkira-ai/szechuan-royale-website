import Image from "next/image";

export default function MenuHighlights() {
  const dishes = [
    {
      name: "Mapo Tofu",
      price: "$14",
      description: "Silken tofu in fiery Szechuan sauce with ground pork",
      spice: 3,
      image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop",
    },
    {
      name: "Dan Dan Noodles",
      price: "$13",
      description: "Spicy sesame noodles with preserved vegetables",
      spice: 2,
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop",
    },
    {
      name: "Kung Pao Chicken",
      price: "$15",
      description: "Chicken with peanuts, vegetables in spicy garlic sauce",
      spice: 2,
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
    },
    {
      name: "Twice Cooked Pork",
      price: "$16",
      description: "Stir-fried pork belly with bell peppers and onions",
      spice: 3,
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
    },
    {
      name: "Hot Pot",
      price: "$18",
      description: "Rich broth with assorted meats and vegetables",
      spice: 3,
      image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop",
    },
    {
      name: "Szechuan Beef",
      price: "$17",
      description: "Tender beef with green beans in spicy sauce",
      spice: 3,
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section id="menu" className="py-16 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 fade-in">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">
            SIGNATURE DISHES
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-2xl text-gold">✦</span>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <span className="text-2xl text-gold">✦</span>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-ink rounded-lg overflow-hidden border-2 border-gold hover-glow transition-all duration-300 transform hover:scale-105 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Dish Image */}
              <div className="relative h-48">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-imperial text-white px-2 py-1 rounded-full text-xs font-medium">
                  {dish.spice > 2 && "🌶"} {dish.spice > 1 && "🌶"} {dish.spice > 0 && "🌶"}
                </div>
              </div>

              {/* Dish Info */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-white mb-2">{dish.name}</h3>
                <p className="text-stone text-sm mb-3">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-gold text-lg font-medium">
                    {dish.price}
                  </span>
                  <a
                    href="#order"
                    className="text-gold hover:text-bright-gold text-sm font-medium"
                  >
                    Order Now →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-12 fade-in">
          <a
            href="#order"
            className="inline-flex items-center bg-gold text-ink px-8 py-3 rounded-lg font-medium hover:bg-bright-gold transition-all duration-200 transform hover:scale-105"
          >
            View Full Menu
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}