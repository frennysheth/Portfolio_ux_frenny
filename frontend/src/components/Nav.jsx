import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "@/constants/testIds";
import MagneticButton from "@/components/MagneticButton";

const LINKS = [
  { key: "about", label: "About" },
  { key: "projects", label: "Projects" },
  { key: "process", label: "Process" },
  { key: "hobbies", label: "Hobbies" },
  { key: "skills", label: "Skills" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (key) => (e) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(key);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      data-testid={NAV.root}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className={
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-500 " +
        (scrolled ? "backdrop-blur-md bg-oat/70 border-b border-wine/10" : "bg-transparent")
      }
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" data-testid={NAV.logo} className="flex items-baseline gap-2">
          <span className="font-display text-2xl md:text-3xl text-wine leading-none">frenny.</span>
          <span className="font-hand text-xl text-ink/70 leading-none">studio</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.key}
              href={`#${l.key}`}
              onClick={goTo(l.key)}
              data-testid={NAV.link(l.key)}
              className="text-sm tracking-wide text-ink/80 hover:text-wine transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-wine transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={goTo("contact")}
            data-testid={NAV.cta}
            className="text-sm font-medium text-paper bg-wine hover:bg-wine_deep px-4 py-2 rounded-full transition-colors"
          >
            Write me a letter
          </a>
        </nav>

        <button
          data-testid={NAV.menuToggle}
          aria-label="Open menu"
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-paper border-b border-wine/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {LINKS.map((l) => (
                <a
                  key={l.key}
                  href={`#${l.key}`}
                  onClick={goTo(l.key)}
                  data-testid={NAV.link(l.key)}
                  className="text-lg font-serif text-ink hover:text-wine"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={goTo("contact")}
                data-testid={NAV.cta}
                className="inline-block self-start text-sm font-medium text-paper bg-wine px-4 py-2 rounded-full"
              >
                Write me a letter
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
