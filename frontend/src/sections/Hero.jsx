import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Polaroid, TapeStrip, Annotation } from "@/components/Scrapbook";
import { DoodleArrow, DoodleHeart, CoffeeRing } from "@/components/Doodles";
import MagneticButton from "@/components/MagneticButton";
import { HERO } from "@/constants/testIds";

const PORTRAITS = [
  "https://customer-assets.emergentagent.com/job_frenny-ux-magazine/artifacts/rabnkos2_WhatsApp%20Image%202026-06-29%20at%208.22.17%20PM.jpeg",
  "https://customer-assets.emergentagent.com/job_frenny-ux-magazine/artifacts/schg7m4n_WhatsApp%20Image%202026-06-29%20at%208.23.13%20PM.jpeg",
  "https://customer-assets.emergentagent.com/job_frenny-ux-magazine/artifacts/n4zp4moa_WhatsApp%20Image%202026-06-29%20at%208.27.58%20PM.jpeg",
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yC = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      data-testid={HERO.root}
      className="relative bg-paper-grain min-h-screen pt-28 md:pt-36 pb-24 overflow-hidden"
    >
      {/* Editorial masthead */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between text-[10px] md:text-xs uppercase tracking-[0.4em] text-ink/60">
          <span>The Frenny Journal</span>
          <span className="hidden md:block">Ahmedabad · India</span>
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wine opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-wine" />
            </span>
            Currently designing…
          </span>
        </div>
        <div className="mt-3 border-t border-ink/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-10 md:mt-14 grid grid-cols-12 gap-6 md:gap-10 items-start">
        {/* Title block */}
        <div className="col-span-12 lg:col-span-7 relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-hand text-2xl text-wine"
          >
            hello, lovely human —
          </motion.p>

          <motion.h1
            data-testid={HERO.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-3 font-display text-[14vw] md:text-[10vw] xl:text-[148px] leading-[0.92] tracking-tight text-ink"
          >
            <span className="block">Frenny</span>
            <span className="block italic text-wine -mt-2">Sheth</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 max-w-xl"
          >
            <p
              data-testid={HERO.subtitle}
              className="font-serif text-2xl md:text-3xl text-ink leading-snug"
            >
              I ask <em className="italic text-wine" style={{ fontFamily: '"Instrument Serif", serif' }}>"why?"</em> a little too often.
              <span className="block mt-2 text-ink/70 text-lg md:text-xl">
                Turns out, that's a useful UX skill.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              testId={HERO.ctaProjects}
              onClick={scrollToProjects}
              className="bg-wine text-paper px-7 py-3 rounded-full text-sm tracking-wider uppercase hover:bg-wine_deep"
            >
              Flip through my work <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton
              testId={HERO.ctaLetter}
              onClick={scrollToContact}
              className="border border-ink/40 text-ink px-7 py-3 rounded-full text-sm tracking-wider uppercase hover:bg-ink hover:text-paper transition-colors"
            >
              <Mail size={16} /> Write me a letter
            </MagneticButton>
          </motion.div>

          <div className="mt-12 hidden md:block relative">
            <Annotation>
              ↖ flip through my work
            </Annotation>
            <DoodleArrow className="absolute -top-16 left-44" direction="nw" size={90} />
          </div>

          {/* Stamps removed per request */}
        </div>

        {/* Polaroid collage */}
        <div className="col-span-12 lg:col-span-5 relative min-h-[520px] md:min-h-[640px]">
          <motion.div style={{ y: yA }} className="absolute top-0 right-6 w-44 md:w-56 z-30">
            <Polaroid
              testId={HERO.polaroid(1)}
              src={PORTRAITS[0]}
              alt="Frenny on the steps"
              caption="quiet moments"
              rotate="-rotate-6"
              noTape
            />
          </motion.div>

          <motion.div style={{ y: yB }} className="absolute top-44 left-2 w-40 md:w-52 z-20">
            <Polaroid
              testId={HERO.polaroid(2)}
              src={PORTRAITS[1]}
              alt="Frenny among flowers"
              caption="ahmedabad, dec"
              rotate="rotate-3"
              noTape
            />
          </motion.div>

          <motion.div style={{ y: yC }} className="absolute bottom-6 right-2 w-44 md:w-56 z-40">
            <Polaroid
              testId={HERO.polaroid(3)}
              src={PORTRAITS[2]}
              alt="Frenny smiling"
              caption="cousin's wedding"
              rotate="rotate-[7deg]"
              noTape
            />
          </motion.div>

          {/* Sticker / annotation */}
          <div className="absolute bottom-[15%] left-0 z-50 pointer-events-none">
            <motion.div
              initial={{ rotate: -8, scale: 0.6, opacity: 0 }}
              animate={{ rotate: -8, scale: 1, opacity: 1 }}
              transition={{ delay: 1.0, type: "spring", stiffness: 160, damping: 12 }}
              className="px-3 py-1 bg-wine text-paper font-hand text-xl rounded-sm shadow-md"
            >
              currently · ux + product
            </motion.div>
          </div>

          {/* Loose doodles around the polaroid stack */}
          <DoodleHeart className="absolute -top-2 left-4 -rotate-12" size={28} />
          <DoodleArrow className="absolute top-32 right-2 hidden md:block" direction="sw" size={70} />
        </div>
      </div>

      {/* Decorative scattered elements */}
      <CoffeeRing className="left-6 bottom-32 hidden md:block" />
      <DoodleStar className="absolute right-24 bottom-24 hidden md:block rotate-12" size={28} />

      {/* Bottom paper rip */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="torn-edge-top h-8 w-full" style={{ background: "#FAF7F2" }} />
      </div>
    </section>
  );
}
