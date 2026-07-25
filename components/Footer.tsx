import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { hotel, rooms } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-gold/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col gap-4">
          <span className="font-display text-3xl text-ivory">
            The Royal <span className="text-gold">Hotel</span>
          </span>
          <p className="font-body text-sm text-ivory/60 leading-relaxed">
            Dhamtari&rsquo;s address for refined stays — premium rooms, warm
            hospitality, and a prime location opposite Ratnabandha Talab.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-display text-xl text-gold-light">Quick Links</h4>
          <ul className="flex flex-col gap-2 font-body text-sm text-ivory/60">
            {[
              { href: "/", label: "Home" },
              { href: "/rooms", label: "Rooms" },
              { href: "/gallery", label: "Gallery" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
              { href: "/booking", label: "Book Now" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold transition-colors focus-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-display text-xl text-gold-light">Room Categories</h4>
          <ul className="flex flex-col gap-2 font-body text-sm text-ivory/60">
            {rooms.map((r) => (
              <li key={r.slug}>
                <Link href={`/rooms/${r.slug}`} className="hover:text-gold transition-colors focus-gold">
                  {r.name} — ₹{r.price}/Night
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-display text-xl text-gold-light">Contact Us</h4>
          <a href={hotel.mapLink} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-sm text-ivory/60 hover:text-gold transition-colors">
            <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
            {hotel.address}
          </a>
          <a href={hotel.phoneHref} className="flex gap-3 text-sm text-ivory/60 hover:text-gold transition-colors">
            <Phone size={18} className="text-gold shrink-0" />
            {hotel.phone}
          </a>
          <a href={hotel.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-sm text-ivory/60 hover:text-gold transition-colors">
            <MessageCircle size={18} className="text-gold shrink-0" />
            WhatsApp Us
          </a>
          <a href={`mailto:${hotel.email}`} className="flex gap-3 text-sm text-ivory/60 hover:text-gold transition-colors">
            <Mail size={18} className="text-gold shrink-0" />
            {hotel.email}
          </a>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 pb-12">
        <div className="w-full h-64 rounded-sm overflow-hidden border border-gold/20">
          <iframe
            title="The Royal Hotel Dhamtari Location"
            src={hotel.mapEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="border-t border-gold/10 px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-ivory/40 font-body">
        <span>© {year} The Royal Hotel, Dhamtari. All rights reserved.</span>
        <span>Opposite Ratnabandha Talab, Dhamtari, Chhattisgarh 493773</span>
      </div>
    </footer>
  );
}
