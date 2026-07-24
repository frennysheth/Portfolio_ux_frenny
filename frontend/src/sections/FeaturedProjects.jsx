import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { PROJECTS as TIDS } from "@/constants/testIds";
import { TapeStrip, Annotation } from "@/components/Scrapbook";

export default function FeaturedProjects() {
  const projects = [...PROJECTS].sort(
    (a, b) => parseInt(b.year, 10) - parseInt(a.year, 10)
  );
  return (
    <section
      id="projects"
      data-testid={TIDS.root}
      className="relative bg-paper-cream py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-wine font-medium">
              Chapter One · Featured Case Studies
            </span>
            <h2 className="mt-3 font-display text-5xl md:text-7xl text-ink leading-[0.95]">
              Four projects, <span className="italic text-wine">one obsession</span>.
            </h2>
            <p className="mt-4 font-serif text-lg text-ink/70 max-w-xl">
              Calm interfaces for chaotic moments — campus life, weeknight cooking, two-minute games,
              and quiet wellness.
            </p>
          </div>
          <Annotation className="hidden md:block">click any card → full case study</Annotation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              data-testid={TIDS.card(p.slug)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: i * 0.06 }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              className={"relative bg-paper polaroid-shadow p-4 md:p-6 " + (i % 2 === 0 ? "md:mt-0" : "md:mt-16")}
            >
              <TapeStrip
                className="-top-4 left-8 rotate-[-6deg]"
                color={i % 2 === 0 ? "rgba(249,203,214,0.9)" : "rgba(242,224,210,0.9)"}
              />
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "16/11", background: p.palette + "33" }}
              >
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.3em] px-2 py-1 rounded-full"
                  style={{ background: "#FAF7F2", color: "#9E182B" }}
                >
                  case study · 0{i + 1}
                </span>
                {p.context ? (
                  <span
                    className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.25em] px-3 py-1 rounded-full font-medium"
                    style={{ background: "#9E182B", color: "#FAF7F2" }}
                  >
                    {p.context}
                  </span>
                ) : null}
              </div>
              <div className="mt-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-3xl md:text-4xl text-ink leading-tight">
                    {p.title}
                  </h3>
                  <span className="font-hand text-xl text-wine">{p.year}</span>
                </div>
                <p className="mt-2 font-serif italic text-ink/80 text-lg">{p.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tools.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-[0.2em] px-2 py-1 border border-ink/30 rounded-full text-ink/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-5">
                  <Link
                    to={`/work/${p.slug}`}
                    data-testid={TIDS.open(p.slug)}
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-wine hover:text-wine_deep group"
                  >
                    Read case study
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                  <a
                    href={p.behance}
                    target="_blank"
                    rel="noreferrer"
                    data-testid={TIDS.behance(p.slug)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink/60 hover:text-ink"
                  >
                    <ExternalLink size={14} /> on Behance
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
