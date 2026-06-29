import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { CASE_STUDY } from "@/constants/testIds";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Annotation, PullQuote, StickyNote, TapeStrip } from "@/components/Scrapbook";

const Section = ({ kicker, title, children, color = "bg-paper-grain" }) => (
  <section className={"py-16 md:py-24 " + color}>
    <div className="max-w-5xl mx-auto px-6 md:px-10">
      <div className="text-xs uppercase tracking-[0.4em] text-wine">{kicker}</div>
      <h2 className="mt-2 font-display text-4xl md:text-6xl text-ink leading-tight">{title}</h2>
      <div className="mt-8 font-serif text-lg md:text-xl text-ink/90 leading-relaxed">{children}</div>
    </div>
  </section>
);

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
        <section className="relative bg-paper-grain pt-28 md:pt-36 pb-16">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <Link
              to="/#projects"
              data-testid={CASE_STUDY.back}
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-ink/70 hover:text-wine"
            >
              <ArrowLeft size={16} /> Back to the journal
            </Link>

            <div className="mt-8 grid grid-cols-12 gap-8 items-end">
              <div className="col-span-12 md:col-span-7">
                <div className="text-xs uppercase tracking-[0.4em] text-wine">
                  Case Study · {project.year}
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="mt-3 font-display text-6xl md:text-8xl text-ink leading-[0.92]"
                >
                  {project.title}
                </motion.h1>
                <p className="mt-4 font-serif italic text-2xl text-wine">{project.subtitle}</p>
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

            <div className="relative mt-12">
              <TapeStrip className="-top-3 left-12 rotate-[-4deg]" color="rgba(249,203,214,0.9)" />
              <div className="relative overflow-hidden polaroid-shadow" style={{ aspectRatio: "16/8" }}>
                <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <Section kicker="Overview" title="The story, in one breath." color="bg-paper-cream">
          <p>{project.summary}</p>
          <PullQuote by={project.title}>{project.subtitle}</PullQuote>
        </Section>

        {/* Problem */}
        <Section kicker="Problem" title="What was broken.">
          <p>{project.problem}</p>
        </Section>

        {/* Research */}
        <Section kicker="Research" title="Listening, on purpose." color="bg-paper-cream">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-7">
              <ul className="space-y-3 list-disc pl-5">
                {project.research.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 md:col-span-5 space-y-6">
              {project.insights.map((ins, i) => (
                <StickyNote key={i} color={["#FDF8E2", "#FCE3E8", "#F9CBD6", "#F2E0D2"][i % 4]} rotate={i % 2 === 0 ? "-rotate-2" : "rotate-2"}>
                  {ins}
                </StickyNote>
              ))}
            </div>
          </div>
        </Section>

        {/* Personas */}
        <Section kicker="Personas" title="The people I was designing for.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.personas.map((p) => (
              <div key={p.name} className="bg-paper polaroid-shadow p-6 -rotate-1">
                <div className="font-display text-3xl text-ink">{p.name}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-wine mt-1">{p.archetype}</div>
                <div className="mt-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-ink/50">Goal</div>
                  <div className="font-serif text-lg mt-1">{p.goal}</div>
                </div>
                <div className="mt-3">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-ink/50">Pain</div>
                  <div className="font-serif text-lg mt-1 text-wine">{p.pain}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Flows */}
        <Section kicker="User Flows · IA" title="Key moments, mapped." color="bg-paper-cream">
          <ol className="space-y-3 list-decimal pl-5">
            {project.flows.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ol>
        </Section>

        {/* Explorations */}
        <Section kicker="Design Exploration" title="Three directions, one winner.">
          <p>{project.explorations}</p>
          <Annotation className="mt-6 block">↑ usability over personality? never. both, always.</Annotation>
        </Section>

        {/* Iterations */}
        <Section kicker="Iterations" title="What changed, and why." color="bg-paper-cream">
          <ul className="space-y-3 list-disc pl-5">
            {project.iterations.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </Section>

        {/* Testing */}
        <Section kicker="Usability Testing" title="What the users actually did.">
          <p>{project.testing}</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-paper polaroid-shadow p-5 text-center -rotate-1">
                <div className="font-display text-4xl text-wine">{m.value}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-ink/60 mt-2">{m.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Reflection */}
        <Section kicker="Reflection" title="What I'd carry forward." color="bg-paper-cream">
          <p className="italic">{project.reflection}</p>
        </Section>

        {/* Design Showcase — the actual Behance project artwork */}
        {project.behanceImage ? (
          <section className="bg-paper-grain py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
              <div className="text-xs uppercase tracking-[0.4em] text-wine">Design Showcase</div>
              <h2 className="mt-2 font-display text-4xl md:text-6xl text-ink leading-tight">
                The actual <span className="italic text-wine">artwork</span>.
              </h2>
              <p className="mt-3 font-serif text-lg text-ink/70 max-w-2xl">
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
        <section className="bg-paper-grain py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h3 className="font-display text-4xl md:text-5xl text-ink">
              Want the long, image-heavy version?
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
