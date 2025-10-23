import React from "react";
import { motion } from "framer-motion";

interface Props {
  phone?: string; // international format without '+' e.g. "919952636921"
  label?: string;
}

const CallButton: React.FC<Props> = ({ phone = "919952636921", label = "Call us" }) => {
  const phoneClean = (phone || "").replace(/\D+/g, "");
  const telHref = phoneClean ? `tel:+${phoneClean}` : "tel:";

  const style: React.CSSProperties = {
    position: "fixed",
    right: "1rem",
    bottom: "5.25rem", // sits above the WhatsApp button (adjust if needed)
    zIndex: 9999,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "#0ea5e9", // blue phone button
    color: "#fff",
    boxShadow: "0 6px 18px rgba(14,165,233,0.28)",
    textDecoration: "none",
    WebkitTapHighlightColor: "transparent",
    cursor: "pointer",
  };

  const svgStyle: React.CSSProperties = {
    width: 24,
    height: 24,
    fill: "white",
    pointerEvents: "none",
    display: "block",
  };

  return (
    <motion.a
      href={telHref}
      aria-label={label}
      title={label}
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