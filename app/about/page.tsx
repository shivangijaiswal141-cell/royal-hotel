import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Users, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { hotel } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about The Royal Hotel, Dhamtari — a premium 4-star property opposite Ratnabandha Talab offering refined rooms and warm Chhattisgarhi hospitality.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Sparkles,
    title: "Considered Comfort",
    text: "Every room is finished with premium bedding, modern bathrooms, and thoughtful lighting — comfort that's felt, not just claimed.",
  },
  {
    icon: Users,
    title: "Warm Hospitality",
    text: "Our team treats every guest — solo traveller, couple, or family — with the same genuine attentiveness, start to finish.",
  },
  {
    icon: ShieldCheck,
    title: "Consistent Standards",
    text: "Daily housekeeping, round-the-clock hot water, and reliable service, every single day of your stay.",
  },
  {
    icon: MapPin,
    title: "A Address That Works",
    text: "Opposite Ratnabandha Talab and near PG College Mod — central, easy to find, and quiet enough to rest.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-obsidian">
      <div className="section-pad pt-0">
        <SectionHeading
          eyebrow="About The Royal Hotel"
          title="Dhamtari's Address for Refined Stays"
          description="The Royal Hotel was built on a simple idea — that a stay in Dhamtari should feel considered, comfortable, and genuinely welcoming, without needing to travel to a bigger city for it."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 items-center">
          <FadeIn className="relative h-[420px] overflow-hidden border border-gold/20">
            <Image
              src="/images/suite/suite-1.jpg"
              alt="The Royal Hotel Dhamtari suite living area"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
          <FadeIn delay={0.15} className="flex flex-col gap-5">
            <h2 className="font-display text-3xl text-ivory">Our Story</h2>
            <p className="font-body text-ivory/60 leading-relaxed">
              Located directly opposite Ratnabandha Talab and behind the Vivekanand Statue, The
              Royal Hotel was designed for guests who want more than a place to sleep — a place
              that feels like it was built with care. From the marble-finished bathrooms to the
              gold-and-charcoal interiors, every detail reflects a four-star standard held with
              genuine Chhattisgarhi warmth.
            </p>
            <p className="font-body text-ivory/60 leading-relaxed">
              Whether you&rsquo;re here for business near PG College Mod, a family visit, or a
              quiet weekend by the lake, our four room categories — Mini Deluxe through Suite
              Room — are built to make Dhamtari feel like a destination worth returning to.
            </p>
            <Link href="/rooms" className="btn-gold w-fit mt-2">
              Explore Our Rooms <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {values.map((v, i) => (
            <FadeIn
              key={v.title}
              delay={i * 0.1}
              className="flex flex-col gap-4 p-8 border border-gold/10 hover:border-gold/40 transition-colors duration-500"
            >
              <v.icon size={28} className="text-gold" />
              <h3 className="font-display text-xl text-ivory">{v.title}</h3>
              <p className="font-body text-sm text-ivory/60 leading-relaxed">{v.text}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-24 glass-gold p-10 md:p-14 text-center flex flex-col items-center gap-4">
          <span className="eyebrow">Visit Us</span>
          <p className="font-display text-2xl md:text-3xl text-ivory max-w-2xl">
            {hotel.address}
          </p>
          <Link href="/contact" className="btn-outline mt-2">
            Get Directions <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
