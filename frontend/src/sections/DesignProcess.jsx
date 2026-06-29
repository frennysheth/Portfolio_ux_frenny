import { motion } from "framer-motion";
import { PROCESS } from "@/constants/testIds";
import { Annotation, StickyNote } from "@/components/Scrapbook";

const STEPS = [
  { key: "discover", title: "Discover", note: "interview, observe, eavesdrop kindly", color: "#FCE3E8" },
  { key: "define", title: "Define", note: "ruthlessly name the real problem", color: "#FDF8E2" },
  { key: "ideate", title: "Ideate", note: "100 ideas. keep 3. love 1.", color: "#F9CBD6" },
  { key: "prototype", title: "Prototype", note: "build it crappy, build it tomorrow", color: "#F2E0D2" },
  { key: "test", title: "Test", note: "watch hands, not just words", color: "#FCE3E8" },
  { key: "iterate", title: "Iterate", note: "kill darlings · keep kindness", color: "#FDF8E2" },
];

export default function DesignProcess() {
  return (
    <section
      id="process"
      data-testid={PROCESS.root}
      className="relative bg-paper-grain py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.4em] text-wine font-medium">
            Chapter Four · How I work
          </span>
          <h2 className="mt-3 font-display text-5xl md:text-7xl text-ink leading-[0.95]">
            The <span className="italic text-wine">long way</span> round.
          </h2>
          <p className="mt-4 font-serif text-lg text-ink/70 max-w-2xl">
            My process isn't tidy — it's a walk, not a map. But it always starts in the
            same place (people) and ends in the same place (kinder products).
          </p>
        </div>

        {/* Wavy path */}
        <div className="relative mt-20">
          <svg
            viewBox="0 0 1200 220"
            className="w-full hidden md:block"
            preserveAspectRatio="none"
            aria-hidden
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M40 110 C 180 30, 320 190, 480 110 S 760 30, 920 110 S 1160 190, 1200 110"
              stroke="#9E182B"
              strokeWidth="3"
              strokeDasharray="8 8"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          <ul className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4 md:-mt-44 relative">
            {STEPS.map((s, i) => (
              <motion.li
                key={s.key}
                data-testid={PROCESS.step(s.key)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={
                  "flex flex-col items-center text-center " +
                  (i % 2 === 0 ? "md:mt-0" : "md:mt-20")
                }
              >
                <StickyNote color={s.color} rotate={i % 2 === 0 ? "-rotate-3" : "rotate-2"} className="w-full">
                  <div className="font-display text-2xl text-ink leading-none">
                    0{i + 1}
                  </div>
                  <div className="font-serif text-xl text-ink mt-1">{s.title}</div>
                  <div className="text-sm text-ink/70 font-sans mt-2">{s.note}</div>
                </StickyNote>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-16 text-center">
          <Annotation>↑ the loop never really ends</Annotation>
        </div>
      </div>
    </section>
  );
}
