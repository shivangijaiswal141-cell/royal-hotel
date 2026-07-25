"use client";

import {
  Wifi,
  Snowflake,
  Tv,
  Droplets,
  ParkingSquare,
  BellRing,
  Sparkles,
  ShowerHead,
  BedDouble,
  Users,
  UtensilsCrossed,
  Car,
  Compass,
  Bike,
} from "lucide-react";
import { facilities } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

const icons: Record<string, React.ElementType> = {
  "Free WiFi": Wifi,
  "Air Conditioning": Snowflake,
  "Smart TV": Tv,
  "24×7 Hot Water": Droplets,
  Parking: ParkingSquare,
  "Room Service": BellRing,
  Housekeeping: Sparkles,
  "Modern Bathrooms": ShowerHead,
  "Premium Bedding": BedDouble,
  "Family Friendly": Users,
  "Food Service": UtensilsCrossed,
  "Taxi Pickup & Drop": Car,
  "Local Sightseeing Taxi": Compass,
  "Scooty Rental": Bike,
};

export default function Facilities() {
  return (
    <section className="section-pad bg-charcoal">
      <SectionHeading
        eyebrow="Amenities"
        title="Every Comfort, As Standard"
        description="No upsells, no fine print — these facilities come with every room, every night."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-14">
        {facilities.map((f, i) => {
          const Icon = icons[f.name] ?? Sparkles;
          return (
            <FadeIn
              key={f.name}
              delay={i * 0.05}
              className="group flex flex-col items-center text-center gap-4 p-6 border border-gold/10 hover:border-gold/40 hover:bg-obsidian/40 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:shadow-gold transition-all duration-500">
                <Icon size={24} className="text-gold group-hover:text-obsidian transition-colors duration-500" />
              </div>
              <h3 className="font-display text-lg text-ivory">{f.name}</h3>
              <p className="font-body text-xs text-ivory/50 leading-relaxed">{f.description}</p>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
