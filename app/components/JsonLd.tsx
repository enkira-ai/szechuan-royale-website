export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Szechuan Royale Chinese Restaurant",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1200&h=630&fit=crop",
    servesCuisine: "Chinese",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "470 Schooleys Mountain Rd",
      addressLocality: "Hackettstown",
      addressRegion: "NJ",
      postalCode: "07840",
      addressCountry: "US",
    },
    telephone: "(908) 850-4558",
    url: "https://szechuanroyalechinese.com",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "11:30", closes: "21:00" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}