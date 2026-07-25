import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { galleryImages } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="section-pad bg-obsidian">
      <SectionHeading
        eyebrow="A Closer Look"
        title="Inside The Royal Hotel"
        description="A glimpse of the rooms and interiors waiting for you."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14">
        {preview.map((img, i) => (
          <FadeIn
            key={img.src}
            delay={i * 0.08}
            className={`relative overflow-hidden group ${i === 0 ? "col-span-2 row-span-2 h-[420px]" : "h-[200px]"}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/40 transition-colors duration-500 flex items-end p-4">
              <span className="font-body text-xs tracking-widest2 uppercase text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {img.category}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <Link href="/gallery" className="btn-outline">
          View Full Gallery <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
