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
      streetAddress: "123 Szechuan Street",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
    telephone: "(555) 123-4567",
    url: "https://szechuanroyale.com",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "11:00", closes: "21:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "11:00", closes: "22:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "12:00", closes: "21:30" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}