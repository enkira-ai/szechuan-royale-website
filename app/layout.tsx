import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Szechuan Royale Chinese Restaurant",
  description: "Authentic Chinese Restaurant serving bold Szechuan flavors. Royal taste, fiery spices, traditional techniques.",
  keywords: "Szechuan Chinese restaurant, authentic cuisine, spicy food, royal flavors, traditional Chinese",
  openGraph: {
    title: "Szechuan Royale Chinese Restaurant",
    description: "Authentic Chinese Restaurant serving bold Szechuan flavors",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Szechuan Royale Chinese Restaurant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Szechuan Royale Chinese Restaurant',
    description: 'Authentic Chinese Restaurant serving bold Szechuan flavors',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-ink">
        {children}
      </body>
    </html>
  );
}
