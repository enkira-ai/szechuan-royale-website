'use client';
import Image from 'next/image';

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
    <section id="gallery" className="py-20 bg-ink">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-3">
            Our Kitchen
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-px bg-gold"></div>
            <span className="text-gold text-2xl">✦</span>
            <div className="w-20 h-px bg-gold"></div>
          </div>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {photos.map((photo, i) => (
            <div key={i} className="break-inside-avoid relative overflow-hidden rounded group border border-gold/20 hover:border-gold/60 transition-all duration-300">
              <Image
                src={`/images/${photo}`}
                alt={`Szechuan Royale dish ${i + 1}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-imperial/0 group-hover:bg-imperial/20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
