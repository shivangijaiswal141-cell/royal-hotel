import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { hotel } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The Royal Hotel, Dhamtari. Call, WhatsApp, or find us opposite Ratnabandha Talab, Chhattisgarh 493773.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 bg-obsidian">
      <div className="section-pad pt-0">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact The Royal Hotel"
          description="Have a question before you book? Reach us directly — we typically reply within minutes during the day."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-14">
          <FadeIn className="lg:col-span-3 h-[420px] lg:h-auto border border-gold/20 overflow-hidden">
            <iframe
              title="The Royal Hotel Dhamtari Map"
              src={hotel.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-2 flex flex-col gap-4">
            <div className="glass-gold p-6 flex gap-4">
              <MapPin className="text-gold shrink-0" size={22} />
              <div>
                <h4 className="font-display text-lg text-ivory">Address</h4>
                <p className="font-body text-sm text-ivory/60 mt-1 leading-relaxed">{hotel.address}</p>
              </div>
            </div>

            <a href={hotel.phoneHref} className="glass-gold p-6 flex gap-4 hover:border-gold/50 transition-colors">
              <Phone className="text-gold shrink-0" size={22} />
              <div>
                <h4 className="font-display text-lg text-ivory">Call Us</h4>
                <p className="font-body text-sm text-ivory/60 mt-1">{hotel.phone}</p>
              </div>
            </a>

            <a
              href={hotel.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-gold p-6 flex gap-4 hover:border-gold/50 transition-colors"
            >
              <MessageCircle className="text-gold shrink-0" size={22} />
              <div>
                <h4 className="font-display text-lg text-ivory">WhatsApp</h4>
                <p className="font-body text-sm text-ivory/60 mt-1">Chat with us instantly</p>
              </div>
            </a>

            <a href={`mailto:${hotel.email}`} className="glass-gold p-6 flex gap-4 hover:border-gold/50 transition-colors">
              <Mail className="text-gold shrink-0" size={22} />
              <div>
                <h4 className="font-display text-lg text-ivory">Email</h4>
                <p className="font-body text-sm text-ivory/60 mt-1">{hotel.email}</p>
              </div>
            </a>

            <div className="glass-gold p-6 flex gap-4">
              <Clock className="text-gold shrink-0" size={22} />
              <div>
                <h4 className="font-display text-lg text-ivory">Check-in / Check-out</h4>
                <p className="font-body text-sm text-ivory/60 mt-1">
                  {hotel.checkIn} &middot; {hotel.checkOut}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
