import { ArrowUpRight } from "lucide-react";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1599387737888-d35cc71c47a5?auto=format&fit=crop&w=900&q=80",
    alt: "Herrenschnitt mit präzisem Übergang",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80",
    alt: "Bartpflege und Konturen",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    alt: "Salon-Atmosphäre",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80",
    alt: "Werkzeuge des Handwerks",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=900&q=80",
    alt: "Damenschnitt — moderner Bob",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
    alt: "Styling-Detail",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1631559289538-93eb4caaf76a?auto=format&fit=crop&w=900&q=80",
    alt: "Coloration",
    span: "",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-28 lg:py-36 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-gold">
              <span className="h-px w-10 bg-gold-dim" />
              Unsere Arbeit
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-5 leading-[1.05]">
              Handwerk, das man sieht.
            </h2>
            <p className="mt-5 text-ink-soft text-lg leading-relaxed">
              Ein kleiner Einblick in den Salon und unsere Kundenarbeiten.
            </p>
          </div>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 text-sm text-gold-soft hover:text-gold transition self-start lg:self-end"
          >
            <span className="font-display italic">Jetzt deinen Termin sichern</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] lg:auto-rows-[220px] gap-3 lg:gap-4">
          {IMAGES.map((img) => (
            <figure
              key={img.src}
              className={`group relative overflow-hidden rounded-lg border border-line bg-bg-soft ${img.span}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 ring-1 ring-inset ring-line group-hover:ring-gold/40 transition" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 lg:p-5 flex items-end justify-between gap-3">
                <span className="font-display text-sm lg:text-base text-ink leading-tight">
                  {img.alt}
                </span>
                <ArrowUpRight size={14} className="text-gold opacity-0 group-hover:opacity-100 transition" />
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-xs text-ink-dim text-center">
          Beispielbilder — echte Salon-Fotos werden in Kürze ergänzt.
        </p>
      </div>
    </section>
  );
}
