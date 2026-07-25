import { MapPin, Clock, Phone } from "lucide-react";
import { hotel } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function LocationMap() {
  return (
    <section className="section-pad bg-charcoal">
      <SectionHeading
        eyebrow="Find Us"
        title="A Prime Dhamtari Address"
        description="Opposite Ratnabandha Talab and just steps from PG College Mod — easy to find, easy to return to."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-14">
        <FadeIn className="lg:col-span-3 h-[420px] border border-gold/20 overflow-hidden">
          <iframe
            title="The Royal Hotel Dhamtari Map"
            src={hotel.mapEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </FadeIn>

        <FadeIn delay={0.15} className="lg:col-span-2 glass-gold p-8 flex flex-col gap-6 justify-center">
          <div className="flex gap-4">
            <MapPin className="text-gold shrink-0" size={22} />
            <div>
              <h4 className="font-display text-xl text-ivory">Address</h4>
              <p className="font-body text-sm text-ivory/60 mt-1 leading-relaxed">{hotel.address}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone className="text-gold shrink-0" size={22} />
            <div>
              <h4 className="font-display text-xl text-ivory">Phone</h4>
              <a href={hotel.phoneHref} className="font-body text-sm text-ivory/60 hover:text-gold transition-colors mt-1 inline-block">
                {hotel.phone}
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock className="text-gold shrink-0" size={22} />
            <div>
              <h4 className="font-display text-xl text-ivory">Check-in / Check-out</h4>
              <p className="font-body text-sm text-ivory/60 mt-1">
                {hotel.checkIn} &middot; {hotel.checkOut}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
