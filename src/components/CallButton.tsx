import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  phone?: string; // international format without '+' e.g. "919952636921"
  size?: number; // base diameter in px (desktop)
  bgColor?: string;
  iconColor?: string;
  bottom?: string | number;
  right?: string | number;
  hideOnMobile?: boolean; // hide completely on small screens
}

const CallButton: React.FC<Props> = ({
  phone = "919952636921",
  size = 56,
  bgColor = "#0ea5e9",
  iconColor = "#fff",
  bottom = "5.25rem",
  right = "1rem",
  hideOnMobile = false,
}) => {
  const phoneClean = (phone || "").replace(/\D+/g, "");
  const telHref = phoneClean ? `tel:+${phoneClean}` : "tel:";

  // Responsive size
  const [computedSize, setComputedSize] = useState<number>(size);
  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      if (w < 420) setComputedSize(Math.max(42, Math.round(size * 0.75)));
      else if (w < 640) setComputedSize(Math.max(48, Math.round(size * 0.85)));
      else setComputedSize(size);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [size]);

  // Responsive visibility
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    setIsMobile(mq.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  const visible = !(hideOnMobile && isMobile);

  const style = useMemo<React.CSSProperties>(() => ({
    position: "fixed",
    right: typeof right === "number" ? `${right}px` : right,
    bottom: typeof bottom === "number" ? `${bottom}px` : bottom,
    zIndex: 9999,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: computedSize,
    height: computedSize,
    borderRadius: "50%",
    background: bgColor,
    color: iconColor,
    boxShadow: "0 6px 18px rgba(14,165,233,0.28)",
    textDecoration: "none",
    WebkitTapHighlightColor: "transparent",
    cursor: "pointer",
  }), [computedSize, bgColor, iconColor, bottom, right]);

  const svgStyle: React.CSSProperties = {
    width: Math.round(computedSize * 0.45),
    height: Math.round(computedSize * 0.45),
    fill: iconColor,
    pointerEvents: "none",
    display: "block",
  };

  if (!visible) return null;

  return (
    <motion.a
      href={telHref}
      aria-label="Call us"
      role="button"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      style={style}
    >
      <svg viewBox="0 0 24 24" style={svgStyle} aria-hidden="true" focusable="false">
        <path d="M21 16.5l-4.2-.6a1 1 0 0 0-1 .3l-2 2a16 16 0 0 1-7.7-7.7l2-2a1 1 0 0 0 .3-1L7.5 3A1 1 0 0 0 6.6 2H3a1 1 0 0 0-1 1C2 15.5 8.5 22 21 22a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-.9-1z" />
      </svg>
    </motion.a>
  );
};

export default CallButton;
