export default function LocationHours() {
  const location = {
    address: "470 Schooleys Mountain Rd",
    city: "Hackettstown, NJ 07840",
    phone: "(908) 850-4558",
    hours: [
      { day: "Monday", time: "Closed" },
      { day: "Tue–Sun", time: "11:30am – 9:00pm" },
    ],
  };

  const mapsUrl = "https://maps.google.com/maps?q=470+Schooleys+Mountain+Rd,+Hackettstown,+NJ+07840";

  return (
    <section id="location" className="py-16 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">
            FIND US
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
              
              <div className="flex items-center space-x-2">
                <span className="text-xl"></span>
                <a href={`tel:${location.phone}`} className="text-bright-gold hover:text-gold">
                  {location.phone}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-ink rounded-lg p-6 text-white">
              <h3 className="font-serif text-2xl text-gold mb-4">Hours</h3>
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

          {/* Google Maps Link */}
          <div className="bg-ink-warm rounded-lg overflow-hidden border-2 border-gold flex flex-col items-center justify-center p-10 gap-6" style={{ minHeight: "300px" }}>
            <p className="font-serif text-2xl text-gold text-center">Szechuan Royale</p>
            <p className="text-cream/70 text-center">470 Schooleys Mountain Rd<br/>Hackettstown, NJ 07840</p>
            <a
              href="https://maps.google.com/?q=470+Schooleys+Mountain+Rd+Hackettstown+NJ+07840"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-ink px-6 py-3 rounded-lg font-medium hover:bg-bright-gold transition-all duration-200"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}