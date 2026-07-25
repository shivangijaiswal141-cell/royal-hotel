import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-obsidian pt-24">
      <span className="eyebrow mb-6">Error 404</span>
      <h1 className="font-display text-7xl md:text-8xl text-gold-light mb-4">Lost?</h1>
      <p className="font-body text-ivory/60 max-w-md mb-10">
        The page you&rsquo;re looking for doesn&rsquo;t exist. Let&rsquo;s get you back to
        somewhere comfortable.
      </p>
      <Link href="/" className="btn-gold">
        Return Home <ArrowRight size={16} />
      </Link>
    </div>
  );
}
