import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { hotel } from "@/lib/data";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://www.theroyalhoteldhamtari.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Royal Hotel Dhamtari | Premium 4-Star Stay in Chhattisgarh",
    template: "%s | The Royal Hotel Dhamtari",
  },
  description:
    "The Royal Hotel, Dhamtari — a premium 4-star hotel opposite Ratnabandha Talab, Chhattisgarh. Book Mini Deluxe, Deluxe, Super Deluxe & Suite Rooms starting ₹1500/night. Free WiFi, AC, 24×7 hot water & more.",
  keywords: [
    "The Royal Hotel Dhamtari",
    "hotels in Dhamtari",
    "Dhamtari Chhattisgarh hotel",
    "best hotel near Ratnabandha Talab",
    "luxury hotel Dhamtari",
    "budget hotel Dhamtari",
    "hotel booking Dhamtari",
  ],
  authors: [{ name: "The Royal Hotel Dhamtari" }],
  openGraph: {
    title: "The Royal Hotel Dhamtari | Premium 4-Star Stay in Chhattisgarh",
    description:
      "Refined rooms, warm hospitality, and a prime Dhamtari address opposite Ratnabandha Talab. Book direct for the best rates.",
    url: siteUrl,
    siteName: "The Royal Hotel Dhamtari",
    images: [{ url: "/images/suite/suite-2.jpg", width: 1600, height: 900 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Royal Hotel Dhamtari",
    description:
      "Premium 4-star hospitality in Dhamtari, Chhattisgarh. Book direct for the best rates.",
    images: ["/images/suite/suite-2.jpg"],
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: hotel.name,
  image: `${siteUrl}/images/suite/suite-2.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Avenue Tower, Ratnabandha Road, Opposite Ratnabandha Talab, Behind Vivekanand Statue, Near P.G. College Mod",
    addressLocality: hotel.city,
    addressRegion: hotel.state,
    postalCode: hotel.pincode,
    addressCountry: "IN",
  },
  telephone: hotel.phone,
  priceRange: "₹1500 - ₹3000",
  starRating: { "@type": "Rating", ratingValue: "4" },
  amenityFeature: [
    "Free WiFi",
    "Air Conditioning",
    "Smart TV",
    "24x7 Hot Water",
    "Parking",
    "Room Service",
    "Food Service (Breakfast, Lunch, Dinner)",
    "Taxi Pickup & Drop",
    "Local Sightseeing Taxi",
    "Scooty Rental",
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-obsidian text-ivory antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
