export default function LocationHours() {
  const location = {
    address: "123 Szechuan Street, Downtown",
    city: "New York, NY 10001",
    phone: "(555) 123-4567",
    email: "info@szechuanroyale.com",
    hours: [
      { day: "Mon–Thu", time: "11am – 9:30pm" },
      { day: "Fri–Sat", time: "11am – 10:30pm" },
      { day: "Sunday", time: "12pm – 9:30pm" },
    ],
  };

  const mapsUrl = "https://maps.google.com/maps?q=123+Szechuan+Street,+New+York,+NY+10001";

  return (
    <section id="location" className="py-16 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">
            📍 FIND US
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-2xl text-gold">✦</span>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <span className="text-2xl text-gold">✦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location Info */}
          <div className="space-y-6">
            <div className="bg-ink rounded-lg p-6 text-white">
              <h3 className="font-serif text-2xl text-gold mb-4">Location</h3>
              <p className="font-sans text-lg mb-2">{location.address}</p>
              <p className="font-sans text-lg mb-4">{location.city}</p>
              
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl">📞</span>
                <a href={`tel:${location.phone}`} className="text-bright-gold hover:text-gold">
                  {location.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-xl">✉️</span>
                <a href={`mailto:${location.email}`} className="text-bright-gold hover:text-gold">
                  {location.email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-ink rounded-lg p-6 text-white">
              <h3 className="font-serif text-2xl text-gold mb-4">⏰ Hours</h3>
              <div className="space-y-2">
                {location.hours.map((hour, index) => (
                  <div key={index} className="flex justify-between font-sans text-lg">
                    <span>{hour.day}</span>
                    <span className="text-bright-gold">{hour.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gold text-ink px-6 py-3 rounded-lg font-medium hover:bg-bright-gold transition-all duration-200 transform hover:scale-105"
            >
              Get Directions
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-white rounded-lg overflow-hidden border-2 border-gold">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.241267509699!2d-74.00369308459418!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Szechuan Royale Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}