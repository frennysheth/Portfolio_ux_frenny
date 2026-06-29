import { motion } from "framer-motion";
import { EDUCATION_ITEMS } from "@/data/portfolio";
import { EDUCATION } from "@/constants/testIds";
import { Annotation } from "@/components/Scrapbook";

export default function Education() {
  return (
    <section
      id="education"
      data-testid={EDUCATION.root}
      className="relative bg-paper-grain py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-wine font-medium">
              Chapter Two · A short timeline
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl text-ink leading-tight">
              Where I've been learning.
            </h2>
          </div>
          <Annotation className="mb-2">not a resume, more a map</Annotation>
        </div>

        <div className="relative mt-16">
          {/* connecting wavy line */}
          <svg
            className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-0 h-full"
            width="36"
            height="100%"
            viewBox="0 0 36 1000"
            preserveAspectRatio="none"
            aria-hidden
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              d="M18 0 Q 4 100 18 200 Q 32 300 18 400 Q 4 500 18 600 Q 32 700 18 800 Q 4 900 18 1000"
              fill="none"
              stroke="#9E182B"
              strokeWidth="2"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
          </svg>

          <ul className="relative space-y-12">
            {EDUCATION_ITEMS.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={item.title}
                  data-testid={EDUCATION.item(i)}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={
                    "relative pl-10 md:pl-0 md:w-1/2 " +
                    (isLeft ? "md:pr-10 md:text-right md:ml-0" : "md:pl-10 md:ml-auto")
                  }
                >
                  {/* dot */}
                  <span
                    className="absolute left-0 md:left-auto top-2 w-4 h-4 rounded-full bg-wine ring-4 ring-paper md:right-[-9px]"
                    style={isLeft ? { right: "-9px", left: "auto" } : { left: "-9px" }}
                  />
                  <span className="font-hand text-xl text-wine">{item.year}</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-ink mt-1">{item.title}</h3>
                  <p className="text-sm uppercase tracking-[0.18em] text-ink/60 mt-1">{item.place}</p>
                  <p className="mt-3 font-serif italic text-ink/70">{item.note}</p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
