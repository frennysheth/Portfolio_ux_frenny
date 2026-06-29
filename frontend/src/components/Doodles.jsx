import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Hand-drawn squiggly arrow (curves down-right). Drawn-in on view.
export function DoodleArrow({ className, color = "#9E182B", direction = "se", size = 90 }) {
  // direction: "se" | "sw" | "down" | "right"
  const paths = {
    se: "M5 8 C 30 4, 70 12, 78 60",
    sw: "M85 8 C 60 4, 20 12, 12 60",
    down: "M45 5 C 40 30, 50 50, 45 80",
    right: "M5 30 C 30 20, 60 40, 80 28",
  };
  const heads = {
    se: "M62 50 L78 60 L70 44",
    sw: "M28 50 L12 60 L20 44",
    down: "M30 65 L45 80 L60 65",
    right: "M68 18 L80 28 L66 38",
  };
  return (
    <svg
      width={size}
      height={size * 0.85}
      viewBox="0 0 90 80"
      fill="none"
      className={cn("pointer-events-none", className)}
      aria-hidden
    >
      <motion.path
        d={paths[direction]}
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
      <motion.path
        d={heads[direction]}
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.85 }}
      />
    </svg>
  );
}

// Tiny doodle star
export function DoodleStar({ className, color = "#9E182B", size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={cn("pointer-events-none", className)} aria-hidden>
      <motion.path
        d="M16 3 C 17 11, 21 15, 29 16 C 21 17, 17 21, 16 29 C 15 21, 11 17, 3 16 C 11 15, 15 11, 16 3 Z"
        fill={color}
        initial={{ scale: 0, rotate: -45 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
        style={{ transformOrigin: "16px 16px" }}
      />
    </svg>
  );
}

// Tiny heart doodle
export function DoodleHeart({ className, color = "#9E182B", size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={cn("pointer-events-none", className)} aria-hidden>
      <motion.path
        d="M12 21s-7-4.5-7-10.5C5 7 7.5 5 10 5c1.5 0 2.5.8 2 2 .5-1.2 1.5-2 3-2 2.5 0 5 2 5 5.5 0 6-8 10.5-8 10.5z"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
    </svg>
  );
}

// Loose hand-drawn circle to call out a word
export function DoodleCircle({ className, color = "#9E182B", w = 140, h = 60 }) {
  return (
    <svg width={w} height={h} viewBox="0 0 140 60" fill="none" className={cn("pointer-events-none", className)} aria-hidden>
      <motion.path
        d="M70 4 C 25 4, 6 22, 8 36 C 10 50, 50 58, 90 56 C 130 54, 138 38, 132 26 C 126 14, 100 6, 70 4 Z"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
    </svg>
  );
}

// Rubber stamp
export function Stamp({ children, className, rotate = "-rotate-6" }) {
  return (
    <motion.span
      initial={{ scale: 0.6, opacity: 0, rotate: 0 }}
      whileInView={{ scale: 1, opacity: 0.9 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 14 }}
      className={cn("stamp", rotate, className)}
    >
      {children}
    </motion.span>
  );
}

// Coffee ring stain
export function CoffeeRing({ className, small = false, style }) {
  return (
    <div
      aria-hidden
      className={cn("coffee-ring", small && "coffee-ring-sm", "absolute", className)}
      style={style}
    />
  );
}
