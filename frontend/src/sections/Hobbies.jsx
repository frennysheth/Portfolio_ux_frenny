import { motion } from "framer-motion";
import { Camera, Book, Coffee, MapPin, Film, Music, Pencil, Sparkles } from "lucide-react";
import { HOBBIES as HOBBY_DATA } from "@/data/portfolio";
import { HOBBIES as TIDS } from "@/constants/testIds";
import { Polaroid, Annotation } from "@/components/Scrapbook";

const ICONS = {
  photography: Camera,
  reading: Book,
  coffee: Coffee,
  travel: MapPin,
  movies: Film,
  pinterest: Sparkles,
  journals: Pencil,
  writing: Pencil,
};

const COLLAGE = [
  "https://customer-assets.emergentagent.com/job_frenny-ux-magazine/artifacts/w2vz3omq_WhatsApp%20Image%202026-06-29%20at%208.21.52%20PM.jpeg",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=700&q=80",
];

export default function Hobbies() {
  return (
    <section
      id="hobbies"
      data-testid={TIDS.root}
      className="relative bg-paper-cream py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-wine font-medium">
              Chapter Five · Outside the pixels
            </span>
            <h2 className="mt-3 font-display text-5xl md:text-7xl text-ink leading-[0.95]">
              When I'm <span className="italic text-wine">not designing</span>.
            </h2>
          </div>
          <Annotation>↘ small joys, mostly</Annotation>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Tag cloud */}
          <ul className="col-span-12 lg:col-span-7 flex flex-wrap gap-3 md:gap-4">
            {HOBBY_DATA.map((h, i) => {
              const Icon = ICONS[h.key] || Sparkles;
              const rotate = [-3, 2, -1, 4, -2, 3, -4, 1][i % 8];
              return (
                <motion.li
                  key={h.key}
                  data-testid={TIDS.item(h.key)}
                  initial={{ opacity: 0, y: 20, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ rotate: 0, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 160, damping: 18, delay: i * 0.03 }}
                  className="bg-paper px-4 py-3 border border-ink/15 polaroid-shadow flex items-center gap-3"
                >
                  <Icon size={18} className="text-wine" />
                  <div>
                    <div className="font-serif text-lg text-ink leading-none">{h.label}</div>
                    <div className="font-hand text-base text-ink/60 leading-none mt-1">{h.note}</div>
                  </div>
                </motion.li>
              );
            })}
          </ul>

          {/* Image collage */}
          <div className="col-span-12 lg:col-span-5 relative min-h-[420px]">
            <div className="absolute top-0 left-0 w-44 md:w-52 z-30">
              <Polaroid src={COLLAGE[0]} alt="self portrait" caption="behind the lens" rotate="-rotate-6" />
            </div>
            <div className="absolute top-20 right-0 w-40 md:w-48 z-20">
              <Polaroid src={COLLAGE[1]} alt="books" caption="weekend read" rotate="rotate-3" />
            </div>
            <div className="absolute bottom-0 left-10 w-44 md:w-52 z-40">
              <Polaroid src={COLLAGE[2]} alt="coffee" caption="oat milk, no sugar" rotate="rotate-2" />
            </div>
            <div className="absolute bottom-12 right-12 w-32 md:w-40 z-10">
              <Polaroid src={COLLAGE[3]} alt="film" caption="35mm · pentax" rotate="-rotate-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
