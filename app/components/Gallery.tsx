const photos = [
  'cda83e56-8acf-467e-b60a-68db04ccd765.jpeg',
  'd23e3903-fe25-417b-bfa9-90e4be70ef4f.jpeg',
  'dab21f61-e367-484f-bef9-68cdc7b9161f.jpeg',
  '2c798a66-2764-4b77-b473-9dcd71f0e03d.jpeg',
  '2dcf23b3-1cda-41b1-bd31-d28c97dc82be.jpeg',
  '53d62e21-83b6-41ef-aceb-342dae1a1082.jpeg',
  '85b7af50-058b-4aea-8b00-68c860cc5bbd.jpeg',
  '792a6991-942b-4395-add0-3580b5640b1e.jpeg',
  '42901bd9-9bfc-4941-bf28-a813e69c1905-2.jpeg',
  '9682892b-d774-4772-b2a7-186be4e46035.jpeg',
  'a12007c9-0c47-4219-9fd1-5b80644ed278.jpeg',
  'bb73a62e-ef65-43c2-9ecb-8067968ea2a1.jpg',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-ink">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="section-eyebrow">From Our Kitchen</span>
          <h2 className="section-title text-4xl md:text-5xl mb-4">Gallery</h2>
          <div className="section-rule section-rule-center" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.5rem',
        }}>
          {photos.map((photo, i) => (
            <div
              key={i}
              className="gallery-item gallery-frame"
              style={{ aspectRatio: '4/3' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/${photo}`}
                alt={`Szechuan Royale dish ${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading={i < 8 ? 'eager' : 'lazy'}
              />
              <div className="gallery-overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
