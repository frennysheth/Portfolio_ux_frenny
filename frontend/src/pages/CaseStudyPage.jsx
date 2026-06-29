import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { CASE_STUDY } from "@/constants/testIds";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Annotation, PullQuote, StickyNote, TapeStrip } from "@/components/Scrapbook";

const Section = ({ num, kicker, title, children, italicWord, color = "bg-paper-grain" }) => {
  const renderTitle = () => {
    if (!italicWord || !title.includes(italicWord)) return title;
    const [a, b] = title.split(italicWord);
    return (
      <>
        {a}
        <span className="italic text-wine" style={{ fontFamily: '"Instrument Serif", serif' }}>
          {italicWord}
        </span>
        {b}
      </>
    );
  };
  return (
    <section className={"py-16 sm:py-20 md:py-28 " + color}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-20 items-start">
        <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28">
          <div className="flex items-baseline gap-4">
            <span
              className="font-display text-6xl md:text-7xl text-wine/30 leading-none"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
            >
              {String(num).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-wine font-medium">
                {kicker}
              </div>
              <div className="mt-1 h-px w-12 bg-wine/40" />
            </div>
          </div>
          <h2
            className="mt-5 sm:mt-6 font-display text-[2.5rem] leading-[0.95] sm:text-5xl md:text-6xl xl:text-7xl text-ink"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 80, "WONK" 1' }}
          >
            {renderTitle()}
          </h2>
        </div>
        <div className="lg:col-span-7 xl:col-span-8 font-serif text-[17px] sm:text-lg md:text-xl text-ink/90 leading-[1.65] [&>p:first-of-type::first-letter]:font-display [&>p:first-of-type::first-letter]:text-6xl [&>p:first-of-type::first-letter]:md:text-7xl [&>p:first-of-type::first-letter]:float-left [&>p:first-of-type::first-letter]:mr-3 [&>p:first-of-type::first-letter]:mt-2 [&>p:first-of-type::first-letter]:leading-none [&>p:first-of-type::first-letter]:text-wine">
          {children}
        </div>
      </div>
    </section>
  );
};

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <>
      <Nav />
      <main data-testid={CASE_STUDY.root}>
        {/* Cover */}
        <section className="relative bg-paper-grain pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
            <Link
              to="/#projects"
              data-testid={CASE_STUDY.back}
              className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.25em] text-ink/70 hover:text-wine"
            >
              <ArrowLeft size={16} /> Back to the journal
            </Link>

            <div className="mt-6 sm:mt-8 grid grid-cols-12 gap-6 sm:gap-8 items-end">
              <div className="col-span-12 md:col-span-7">
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-wine">
                  Case Study · {project.year}
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="mt-3 font-display text-5xl sm:text-6xl md:text-8xl text-ink leading-[0.92]"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
                >
                  {project.title}
                </motion.h1>
                <p
                  className="mt-4 text-2xl sm:text-3xl text-wine leading-snug"
                  style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "italic" }}
                >
                  {project.subtitle}
                </p>
              </div>
              <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-4 text-sm font-sans">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-ink/50">Role</div>
                  <div className="mt-1 text-ink">{project.role}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-ink/50">Duration</div>
                  <div className="mt-1 text-ink">{project.duration}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-ink/50">Tools</div>
                  <div className="mt-1 text-ink">{project.tools.join(" · ")}</div>
                </div>
              </div>
            </div>

            <div className="relative mt-10 sm:mt-12">
              <TapeStrip className="-top-3 left-8 sm:left-12 rotate-[-4deg]" color="rgba(249,203,214,0.9)" />
              <div className="relative overflow-hidden polaroid-shadow aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/8]">
                <img src={project.cover} alt={project.title} className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <Section num={1} kicker="Overview" title="The story, in one breath." italicWord="story" color="bg-paper-cream">
          <p>{project.summary}</p>
          <PullQuote by={project.title}>{project.subtitle}</PullQuote>
        </Section>

        {/* Problem */}
        <Section num={2} kicker="Problem" title="What was broken." italicWord="broken">
          <p>{project.problem}</p>
        </Section>

        {/* Research */}
        <Section num={3} kicker="Research" title="Listening, on purpose." italicWord="Listening" color="bg-paper-cream">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-1 md:col-span-7">
              <ul className="space-y-3 list-disc pl-5">
                {project.research.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
            <div className="col-span-1 md:col-span-5 space-y-6">
              {project.insights.map((ins, i) => (
                <StickyNote key={i} color={["#FDF8E2", "#FCE3E8", "#F9CBD6", "#F2E0D2"][i % 4]} rotate={i % 2 === 0 ? "-rotate-2" : "rotate-2"}>
                  {ins}
                </StickyNote>
              ))}
            </div>
          </div>
        </Section>

        {/* Personas */}
        <Section num={4} kicker="Personas" title="The people I was designing for." italicWord="people">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.personas.map((p) => (
              <div key={p.name} className="bg-paper polaroid-shadow p-6 -rotate-1">
                <div
                  className="font-display text-3xl sm:text-4xl text-ink"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 80, "WONK" 1' }}
                >
                  {p.name}
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-wine mt-1">{p.archetype}</div>
                <div className="mt-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-ink/50">Goal</div>
                  <div className="font-serif text-lg mt-1">{p.goal}</div>
                </div>
                <div className="mt-3">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-ink/50">Pain</div>
                  <div
                    className="text-lg mt-1 text-wine italic"
                    style={{ fontFamily: '"Instrument Serif", serif' }}
                  >
                    {p.pain}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Flows */}
        <Section num={5} kicker="User Flows · IA" title="Key moments, mapped." italicWord="moments" color="bg-paper-cream">
          <ol className="space-y-3 list-decimal pl-5">
            {project.flows.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ol>
        </Section>

        {/* Explorations */}
        <Section num={6} kicker="Design Exploration" title="Three directions, one winner." italicWord="one winner">
          <p>{project.explorations}</p>
          <Annotation className="mt-6 block">↑ usability over personality? never. both, always.</Annotation>
        </Section>

        {/* Iterations */}
        <Section num={7} kicker="Iterations" title="What changed, and why." italicWord="why" color="bg-paper-cream">
          <ul className="space-y-3 list-disc pl-5">
            {project.iterations.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </Section>

        {/* Testing */}
        <Section num={8} kicker="Usability Testing" title="What the users actually did." italicWord="actually">
          <p>{project.testing}</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-paper polaroid-shadow p-5 text-center -rotate-1">
                <div
                  className="font-display text-5xl sm:text-6xl text-wine leading-none"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
                >
                  {m.value}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ink/60 mt-3">{m.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Reflection */}
        <Section num={9} kicker="Reflection" title="What I'd carry forward." italicWord="carry forward" color="bg-paper-cream">
          <p className="italic">{project.reflection}</p>
        </Section>

        {/* Design Showcase — the actual Behance project artwork */}
        {project.behanceImage ? (
          <section className="bg-paper-grain py-16 sm:py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-wine">Design Showcase</div>
              <h2
                className="mt-2 font-display text-[2.5rem] leading-[0.95] sm:text-5xl md:text-6xl xl:text-7xl text-ink"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 80, "WONK" 1' }}
              >
                The actual{" "}
                <span className="italic text-wine" style={{ fontFamily: '"Instrument Serif", serif' }}>
                  artwork
                </span>
                .
              </h2>
              <p className="mt-3 font-serif text-base sm:text-lg text-ink/70 max-w-2xl leading-[1.65]">
                Every wireframe, screen, and final composition — pulled straight from the case
                study. Tap to open full-size on Behance.
              </p>

              <motion.a
                href={project.behance}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="relative block mt-10 group cursor-pointer"
                data-testid="case-study-design-image"
              >
                <TapeStrip
                  className="-top-4 left-10 rotate-[-4deg] z-10"
                  color="rgba(249,203,214,0.9)"
                />
                <TapeStrip
                  className="-top-4 right-10 rotate-[5deg] z-10"
                  color="rgba(242,224,210,0.9)"
                />
                <div className="relative bg-paper polaroid-shadow overflow-hidden">
                  <div className="max-h-[80vh] overflow-y-auto" data-lenis-prevent>
                    <img
                      src={project.behanceImage}
                      alt={`${project.title} — full case study design`}
                      className="w-full block transition-transform duration-700 group-hover:scale-[1.005]"
                      loading="lazy"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-paper to-transparent" />
                  <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-wine text-paper px-4 py-2 rounded-full text-xs uppercase tracking-[0.25em] shadow-lg">
                    Open on Behance <ExternalLink size={14} />
                  </div>
                </div>
                <Annotation className="block mt-4 text-center">↑ scroll inside the frame to flip through</Annotation>
              </motion.a>
            </div>
          </section>
        ) : null}

        {/* CTA */}
        <section className="bg-paper-grain py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-10 text-center">
            <h3
              className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-tight"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
            >
              Want the{" "}
              <span className="italic text-wine" style={{ fontFamily: '"Instrument Serif", serif' }}>
                long
              </span>
              , image-heavy version?
            </h3>
            <p className="mt-4 font-serif text-lg text-ink/70">
              The full visual case study (with every wireframe and screen) lives on Behance.
            </p>
            <a
              href={project.behance}
              target="_blank"
              rel="noreferrer"
              data-testid={CASE_STUDY.behance}
              className="inline-flex items-center gap-2 mt-8 bg-wine hover:bg-wine_deep text-paper px-7 py-3 rounded-full text-sm uppercase tracking-[0.25em]"
            >
              Open on Behance <ExternalLink size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
