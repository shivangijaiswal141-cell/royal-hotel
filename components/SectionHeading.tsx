import FadeIn from "./FadeIn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <FadeIn className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={`font-display text-4xl md:text-5xl leading-tight ${
          light ? "text-obsidian" : "text-ivory"
        }`}
      >
        {title}
      </h2>
      <div className="divider-gold" />
      {description && (
        <p
          className={`font-body text-base md:text-lg leading-relaxed ${
            light ? "text-obsidian/70" : "text-ivory/60"
          }`}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
