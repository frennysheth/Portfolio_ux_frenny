import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/data/portfolio";
import { SKILLS as TIDS } from "@/constants/testIds";
import { Annotation } from "@/components/Scrapbook";
import { DoodleArrow, DoodleStar, CoffeeRing, Stamp } from "@/components/Doodles";

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid={TIDS.root}
      className="relative bg-paper-grain py-24 md:py-32 overflow-hidden"
    >
      <CoffeeRing className="left-10 top-40 hidden md:block" small />
      <DoodleStar className="absolute right-1/4 top-20 hidden md:block" size={22} />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-wine font-medium">
              Chapter Six · The toolkit
            </span>
            <h2 className="mt-3 font-display text-5xl md:text-7xl text-ink leading-[0.95]">
              Things I'm <span className="italic text-wine">good</span> at, sort of.
            </h2>
            <p className="mt-4 font-serif text-lg text-ink/70 max-w-xl">
              A messy, magazine-cutout collection of skills. No progress bars. I find them
              dishonest.
            </p>
          </div>
          <Annotation>← cut out from a magazine, basically</Annotation>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.05 }}
              className={
                "col-span-12 md:col-span-6 lg:col-span-4 p-6 polaroid-shadow " +
                group.color +
                " " +
                group.rotation
              }
              style={{ background: undefined }}
            >
              <div className="text-xs uppercase tracking-[0.3em] text-wine font-bold">
                {group.label}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item, i) => {
                  const rot = [-2, 3, -1, 2, -3, 1][i % 6];
                  return (
                    <span
                      key={item}
                      data-testid={TIDS.chip(item.toLowerCase().replace(/\s+/g, "-"))}
                      style={{ transform: `rotate(${rot}deg)` }}
                      className="inline-block bg-paper text-ink font-serif text-base md:text-lg px-3 py-1 border border-ink/15 polaroid-shadow"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
