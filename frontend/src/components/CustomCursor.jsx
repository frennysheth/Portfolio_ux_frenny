import { useEffect, useRef, useState } from "react";

// Soft follower cursor with a small dot and a bigger ring.
export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const isCoarse = window.matchMedia("(hover: none)").matches;
    if (isCoarse) {
      setEnabled(false);
      return;
    }
    document.documentElement.classList.add("has-custom-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onOver = (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      const interactive = t.closest("a, button, [data-cursor='hover'], input, textarea, label");
      setHovering(!!interactive);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 36,
          height: 36,
          borderRadius: 999,
          border: `1.5px solid ${hovering ? "#9E182B" : "#2A2626"}`,
          background: hovering ? "rgba(242,175,188,0.35)" : "transparent",
          transition: "background 200ms ease, border-color 200ms ease, width 200ms ease, height 200ms ease",
          pointerEvents: "none",
          zIndex: 9998,
          mixBlendMode: "normal",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 8,
          height: 8,
          borderRadius: 999,
          background: "#9E182B",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}
