import { motion } from "framer-motion";
import { Polaroid, PullQuote, StickyNote, Annotation } from "@/components/Scrapbook";
import { ABOUT } from "@/constants/testIds";

export default function About() {
  return (
    <section id="about" data-testid={ABOUT.root} className="relative bg-paper-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-14">
        <div className="col-span-12 md:col-span-7">
          <span className="text-xs uppercase tracking-[0.4em] text-wine font-medium">
            Chapter Two · The story so far
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-4 font-display text-5xl md:text-7xl leading-[0.95] text-ink"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 80, "WONK" 1' }}
          >
            I came in through the{" "}
            <span className="italic text-wine" style={{ fontFamily: '"Instrument Serif", serif' }}>side door</span>
            .
          </motion.h2>

          <div data-testid={ABOUT.body} className="mt-8 space-y-6 font-serif text-lg md:text-xl leading-relaxed text-ink/90">
            <p>
              I trained as a computer engineer at Gujarat Technological University —
              first a diploma, then a bachelor's degree. For years I wrote code that worked
              and never asked whether anyone enjoyed using it. Then, somewhere between a
              dropped requirement and a confused user, I realised I'd been studying the
              wrong half of the problem.
            </p>
            <p>
              I crossed over into UX the way most people fall in love — quietly, and
              all at once. Suddenly the people <em>using</em> the system became more
              interesting than the system itself. I started reading about psychology,
              behavioural economics, editorial design. I filled notebooks with
              interviews. I learned to listen on purpose.
            </p>
            <p>
              Today I design for the moments most people don't notice — the second pause
              before a tap, the relief of a kind error message, the way a product can
              feel like a friend instead of a form. I work at the intersection of
              <span className="wiggly-underline mx-1">research, story, and craft</span>,
              and I'm building toward a life of making products that are, above all
              else, <em className="text-wine">kind</em>.
            </p>
          </div>

          <PullQuote by="frenny · journal entry">
            Great design isn't pretty. It's pretty <em>useful</em>, and pretty <em>human</em>.
          </PullQuote>
        </div>

        <div className="col-span-12 md:col-span-5 relative">
          <div className="sticky top-28 space-y-8">
            <Polaroid
              src="https://customer-assets.emergentagent.com/job_frenny-ux-magazine/artifacts/qylu1ivo_WhatsApp%20Image%202026-06-29%20at%208.28.24%20PM.jpeg"
              alt="Frenny on the lawn"
              caption="weekends, mostly"
              rotate="rotate-3"
            />
            <div className="relative">
              <StickyNote color="#FCE3E8" rotate="-rotate-3">
                <p>
                  engineering taught me how things work.
                  <br />
                  design taught me <em>why</em> they matter.
                </p>
              </StickyNote>
              <div className="absolute -top-6 -right-2">
                <Annotation>← exhibit A</Annotation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
