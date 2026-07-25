// ============================================================================
// THE ROYAL HOTEL — CENTRAL DATA FILE
// ----------------------------------------------------------------------------
// All images below are the hotel's own photographs, stored in
// /public/images/<category>/. To add or swap a photo, drop the file into
// the matching folder and reference it here — nothing else in the codebase
// needs to change.
// ============================================================================

export const hotel = {
  name: "The Royal Hotel",
  tagline: "Dhamtari's Address for Refined Stays",
  city: "Dhamtari",
  state: "Chhattisgarh",
  country: "India",
  pincode: "493773",
  address:
    "Avenue Tower, Ratnabandha Road, Opposite Ratnabandha Talab, Behind Vivekanand Statue, Near P.G. College Mod, Dhamtari, Chhattisgarh 493773, India",
  phone: "+91 7024803620",
  phoneHref: "tel:+917024803620",
  whatsappHref:
    "https://wa.me/917024803620?text=Hello%20The%20Royal%20Hotel%2C%20I%27d%20like%20to%20enquire%20about%20a%20booking.",
  email: "reservations@theroyalhoteldhamtari.com",
  mapEmbedSrc:
    "https://www.google.com/maps?q=The+Royal+Hotel+Avenue+Tower+Ratnabandha+Road+Dhamtari+Chhattisgarh&output=embed",
  mapLink:
    "https://www.google.co.in/travel/hotels/entity/ChoI97GExou928avARoNL2cvMTFwXzhoMjI0dBAB",
  checkIn: "12:00 PM",
  checkOut: "11:00 AM",
};

export const heroVideo = "/videos/exterior-loop.mp4";
export const heroVideoPoster = "/images/exterior/exterior-loop-poster.jpg";

export const heroImages = [
  "/images/exterior/exterior-night.jpg",
  "/images/suite/suite-2.jpg",
  "/images/interiors/corridor.jpg",
  "/images/super-deluxe/super-deluxe-2.jpg",
];

export const videoGallery = [
  {
    src: "/videos/hotel-tour.mp4",
    title: "Full Room & Property Walkthrough",
    vertical: true,
  },
  {
    src: "/videos/exterior-loop.mp4",
    title: "The Royal Hotel — Avenue Tower Exterior",
    vertical: false,
  },
];

export type Room = {
  slug: string;
  name: string;
  price: number;
  size: string;
  occupancy: string;
  bed: string;
  description: string;
  longDescription: string;
  amenities: string[];
  images: string[];
};

export const rooms: Room[] = [
  {
    slug: "mini-deluxe",
    name: "Mini Deluxe Room",
    price: 1500,
    size: "180 sq.ft",
    occupancy: "2 Guests",
    bed: "Queen Bed",
    description:
      "A smartly designed, comfortable room for the value-conscious traveller who still expects premium touches.",
    longDescription:
      "The Mini Deluxe Room is thoughtfully laid out to make the most of every square foot, pairing a plush queen bed with warm lighting and clean, contemporary furnishings. It's an ideal choice for solo travellers or couples visiting Dhamtari who want a restful, well-appointed base without unnecessary frills — every essential is covered, from air conditioning to round-the-clock hot water.",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Smart TV",
      "24×7 Hot Water",
      "Premium Bedding",
      "Modern Bathroom",
    ],
    images: [
      "/images/mini-deluxe/mini-deluxe-1.jpg",
      "/images/mini-deluxe/mini-deluxe-2.jpg",
      "/images/mini-deluxe/mini-deluxe-bath-1.jpg",
    ],
  },
  {
    slug: "deluxe",
    name: "Deluxe Room",
    price: 2000,
    size: "220 sq.ft",
    occupancy: "2–3 Guests",
    bed: "King Bed",
    description:
      "Generously proportioned comfort with a king bed, a dedicated work corner, and richer interior detailing.",
    longDescription:
      "Step up into more space and a more refined finish. The Deluxe Room offers a king-sized bed dressed in premium linen, a dedicated seating and work corner, and a modern en-suite bathroom finished in warm stone tones. Large windows bring in natural light by day, while soft gold-toned lighting sets a calm, elegant mood after dark — a favourite with both business travellers and small families.",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Smart TV",
      "24×7 Hot Water",
      "Room Service",
      "Premium Bedding",
      "Housekeeping",
      "Family Friendly",
    ],
    images: [
      "/images/deluxe/deluxe-1.jpg",
      "/images/deluxe/deluxe-2.jpg",
      "/images/deluxe/deluxe-bath-1.jpg",
    ],
  },
  {
    slug: "super-deluxe",
    name: "Super Deluxe Room",
    price: 2400,
    size: "260 sq.ft",
    occupancy: "3 Guests",
    bed: "King Bed + Extra Bed Option",
    description:
      "Our most popular category — extra living space, upgraded furnishings, and thoughtful family-friendly touches.",
    longDescription:
      "Designed for guests who want a little extra of everything, the Super Deluxe Room adds breathing room to the Deluxe experience with an enlarged seating area, upgraded furnishings, and the flexibility of an additional bed on request. Marble-finish flooring, a rain-style shower, and premium bedding round out a stay that feels genuinely indulgent — without leaving Dhamtari.",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Smart TV",
      "24×7 Hot Water",
      "Room Service",
      "Housekeeping",
      "Modern Bathroom",
      "Premium Bedding",
      "Family Friendly",
      "Parking",
    ],
    images: [
      "/images/super-deluxe/super-deluxe-1.jpg",
      "/images/super-deluxe/super-deluxe-2.jpg",
      "/images/super-deluxe/super-deluxe-3.jpg",
      "/images/super-deluxe/super-deluxe-4.jpg",
      "/images/super-deluxe/super-deluxe-bath-1.jpg",
      "/images/super-deluxe/super-deluxe-bath-2.jpg",
    ],
  },
  {
    slug: "suite-room",
    name: "Suite Room",
    price: 3000,
    size: "340 sq.ft",
    occupancy: "4 Guests",
    bed: "King Bed + Separate Living Area",
    description:
      "The Royal Hotel's signature category — a separate living area, premium furnishings, and elevated comfort throughout.",
    longDescription:
      "Our flagship accommodation. The Suite Room separates the bedroom from a distinct living area, ideal for longer stays, family visits, or simply travelling in comfort. Expect the finest furnishings in the house, a spacious modern bathroom, generous natural light, and refined gold-and-charcoal styling throughout — a genuinely five-star feel at a four-star address.",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Smart TV",
      "24×7 Hot Water",
      "Room Service",
      "Housekeeping",
      "Modern Bathroom",
      "Premium Bedding",
      "Family Friendly",
      "Parking",
      "Separate Living Area",
      "Priority Housekeeping",
    ],
    images: [
      "/images/suite/suite-1.jpg",
      "/images/suite/suite-2.jpg",
      "/images/suite/suite-bath-1.jpg",
      "/images/suite/suite-bath-2.jpg",
      "/images/suite/suite-balcony.jpg",
    ],
  },
];

export type Facility = {
  name: string;
  description: string;
};

export const facilities: Facility[] = [
  { name: "Free WiFi", description: "High-speed connectivity throughout the property." },
  { name: "Air Conditioning", description: "Climate-controlled comfort in every room." },
  { name: "Smart TV", description: "In-room entertainment with streaming access." },
  { name: "24×7 Hot Water", description: "Round-the-clock hot water, every day of the year." },
  { name: "Parking", description: "Secure on-premises parking for guests." },
  { name: "Room Service", description: "Attentive in-room dining and service." },
  { name: "Housekeeping", description: "Daily housekeeping to a meticulous standard." },
  { name: "Modern Bathrooms", description: "Contemporary fittings and warm-toned finishes." },
  { name: "Premium Bedding", description: "Plush linen for a genuinely restful night." },
  { name: "Family Friendly", description: "Thoughtful touches that welcome guests of all ages." },
  { name: "Food Service", description: "Breakfast, lunch & dinner available on request." },
  { name: "Taxi Pickup & Drop", description: "Airport & station transfers arranged for guests." },
  { name: "Local Sightseeing Taxi", description: "Taxi available for local sightseeing (chargeable, on request)." },
  { name: "Scooty Rental", description: "Scooty available on rent for local travel (chargeable, on request)." },
];

export type Review = {
  name: string;
  rating: number;
  text: string;
  stayType: string;
};

export const reviews: Review[] = [
  {
    name: "Ankit Verma",
    rating: 5,
    text: "Easily the most comfortable stay we've had in Dhamtari. The Suite Room was spacious, spotlessly clean, and the staff were genuinely warm from check-in to check-out.",
    stayType: "Family Stay",
  },
  {
    name: "Priya Sahu",
    rating: 5,
    text: "Booked the Deluxe Room for a work trip — quiet, well-furnished, and the location near Ratnabandha Talab made evening walks lovely. Highly recommend.",
    stayType: "Business Trip",
  },
  {
    name: "Rohit Dewangan",
    rating: 4,
    text: "Great value for a Super Deluxe Room. Hot water and housekeeping were consistent throughout our stay, and parking was hassle-free.",
    stayType: "Weekend Getaway",
  },
  {
    name: "Sneha Chandrakar",
    rating: 5,
    text: "The Royal Hotel felt genuinely premium — gold-and-black interiors, comfortable beds, and a front desk that answered every question with a smile.",
    stayType: "Family Stay",
  },
];

// Full gallery — organised by category for the Gallery page.
export const galleryImages: { src: string; alt: string; category: string }[] = [
  { src: "/images/exterior/exterior-night.jpg", alt: "The Royal Hotel — Avenue Tower exterior at night", category: "Exterior" },
  { src: "/images/interiors/corridor.jpg", alt: "Guest room corridor", category: "Interiors" },
  { src: "/images/suite/suite-2.jpg", alt: "Suite Room bedroom and seating area", category: "Suite Room" },
  { src: "/images/suite/suite-1.jpg", alt: "Suite Room living area with sofas", category: "Suite Room" },
  { src: "/images/suite/suite-balcony.jpg", alt: "Suite Room private balcony", category: "Suite Room" },
  { src: "/images/suite/suite-bath-1.jpg", alt: "Suite Room marble bathroom vanity", category: "Bathrooms" },
  { src: "/images/suite/suite-bath-2.jpg", alt: "Suite Room rain shower", category: "Bathrooms" },
  { src: "/images/super-deluxe/super-deluxe-1.jpg", alt: "Super Deluxe Room bed and wardrobe", category: "Super Deluxe" },
  { src: "/images/super-deluxe/super-deluxe-2.jpg", alt: "Super Deluxe Room with feature headboard", category: "Super Deluxe" },
  { src: "/images/super-deluxe/super-deluxe-3.jpg", alt: "Super Deluxe Room seating corner", category: "Super Deluxe" },
  { src: "/images/super-deluxe/super-deluxe-4.jpg", alt: "Super Deluxe Room evening view", category: "Super Deluxe" },
  { src: "/images/super-deluxe/super-deluxe-bath-1.jpg", alt: "Super Deluxe Room bathroom", category: "Bathrooms" },
  { src: "/images/super-deluxe/super-deluxe-bath-2.jpg", alt: "Super Deluxe Room bathroom fittings", category: "Bathrooms" },
  { src: "/images/deluxe/deluxe-1.jpg", alt: "Deluxe Room with smart TV", category: "Deluxe Room" },
  { src: "/images/deluxe/deluxe-2.jpg", alt: "Deluxe Room bed and AC", category: "Deluxe Room" },
  { src: "/images/deluxe/deluxe-bath-1.jpg", alt: "Deluxe Room bathroom with water heater", category: "Bathrooms" },
  { src: "/images/mini-deluxe/mini-deluxe-1.jpg", alt: "Mini Deluxe Room bed", category: "Mini Deluxe" },
  { src: "/images/mini-deluxe/mini-deluxe-2.jpg", alt: "Mini Deluxe Room wardrobe and headboard", category: "Mini Deluxe" },
  { src: "/images/mini-deluxe/mini-deluxe-bath-1.jpg", alt: "Mini Deluxe Room bathroom", category: "Bathrooms" },
];
