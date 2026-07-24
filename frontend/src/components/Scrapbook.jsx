import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Soft tape strip used to "stick" elements down.
export function TapeStrip({ className, style, color = "rgba(249,203,214,0.7)" }) {
  return (
    <span
      aria-hidden
      className={cn("tape", className)}
      style={{
        background: color,
        ...style,
      }}
    />
  );
}

// Polaroid card with intentional tilt, hover-straighten, optional caption.
export function Polaroid({ src, alt, caption, rotate = "-rotate-3", className, testId, scale = 1, noTape = false }) {
  return (
    <motion.figure
      data-testid={testId}
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ rotate: 0, scale: scale * 1.04, zIndex: 30 }}
      transition={{ type: "spring", stiffness: 140, damping: 18 }}
      className={cn(
        "relative bg-paper polaroid-shadow p-3 pb-10 transform",
        rotate,
        className
      )}
      style={{ background: "#FAF7F2" }}
    >
      {noTape ? null : (
        <TapeStrip
          className="-top-3 left-1/2 -translate-x-1/2 rotate-[-4deg]"
          color="rgba(255,255,255,0.55)"
        />
      )}
      <div className="overflow-hidden bg-oat">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover aspect-[4/5]"
          draggable={false}
        />
      </div>
      {caption ? (
        <figcaption className="font-hand text-[#2A2626] text-xl mt-3 text-center leading-none">
          {caption}
        </figcaption>
      ) : null}
    </motion.figure>
  );
}

// Sticky note with peel-on-hover.
export function StickyNote({ children, color = "#FDF8E2", rotate = "rotate-2", className, testId }) {
  return (
    <motion.div
      data-testid={testId}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ rotate: 0, y: -4 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className={cn(
        "relative sticky-shadow p-5 font-hand text-[#2A2626] text-xl leading-snug",
        rotate,
        className
      )}
      style={{ background: color }}
    >
      <TapeStrip className="-top-3 left-1/2 -translate-x-1/2 rotate-[3deg]" />
      {children}
    </motion.div>
  );
}

// Handwritten annotation that fades in.
export function Annotation({ children, className, color = "#9E182B" }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn("font-hand text-2xl md:text-3xl", className)}
      style={{ color }}
    >
      {children}
    </motion.span>
  );
}

// Torn-paper section divider.
export function TornDivider({ color = "#FAF7F2", flip = false }) {
  return (
    <div
      aria-hidden
      className={cn("torn-edge-top h-10 w-full", flip && "rotate-180")}
      style={{ background: color }}
    />
  );
}

// Editorial pull-quote.
export function PullQuote({ children, by }) {
  return (
    <motion.figure
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="my-12 md:my-16 border-l-4 border-wine pl-6 md:pl-10"
    >
      <blockquote className="font-display italic text-3xl md:text-5xl leading-tight text-wine">
        “{children}”
      </blockquote>
      {by ? (
        <figcaption className="mt-3 text-xs uppercase tracking-[0.25em] text-ink/60">
          — {by}
        </figcaption>
      ) : null}
    </motion.figure>
  );
}
