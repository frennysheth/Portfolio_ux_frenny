import { motion } from "framer-motion";
import { FUN_FACTS } from "@/data/portfolio";
import { FUNFACTS as TIDS } from "@/constants/testIds";
import { StickyNote } from "@/components/Scrapbook";

const COLORS = ["#FDF8E2", "#FCE3E8", "#F9CBD6", "#F2E0D2", "#E8F0E2", "#FDF8E2"];

export default function FunFacts() {
  return (
    <section
      id="funfacts"
      data-testid={TIDS.root}
      className="relative bg-paper-cream py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div>
          <span className="text-xs uppercase tracking-[0.4em] text-wine font-medium">
            Chapter Seven · The fine print
          </span>
          <h2 className="mt-3 font-display text-5xl md:text-7xl text-ink leading-[0.95]">
            Small <span className="italic text-wine">honesties</span>.
          </h2>
        </div>

        <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {FUN_FACTS.map((f, i) => {
            const rot = ["-rotate-2", "rotate-1", "-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-4", "rotate-1"][i % 8];
            return (
              <motion.li
                key={f.key}
                data-testid={TIDS.note(f.key)}
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className={"min-h-[160px]"}
              >
                <StickyNote color={COLORS[i % COLORS.length]} rotate={rot}>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-sans text-wine">
                    {f.label}
                  </div>
                  <div className="mt-2 font-hand text-2xl leading-snug text-ink">{f.value}</div>
                </StickyNote>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
