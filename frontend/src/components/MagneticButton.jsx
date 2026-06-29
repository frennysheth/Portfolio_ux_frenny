import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

// Magnetic button that subtly follows the cursor.
export default function MagneticButton({
  children,
  as: Tag = "button",
  className,
  strength = 18,
  testId,
  ...rest
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });
  const childX = useTransform(sx, (v) => v * 0.5);
  const childY = useTransform(sy, (v) => v * 0.5);

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className="inline-block"
    >
      <Tag
        data-testid={testId}
        className={cn("btn-magnetic", className)}
        {...rest}
      >
        <motion.span style={{ x: childX, y: childY }} className="inline-flex items-center gap-2">
          {children}
        </motion.span>
      </Tag>
    </motion.span>
  );
}
