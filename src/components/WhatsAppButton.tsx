import React from "react";
import { motion } from "framer-motion";

interface Props {
  phone?: string;
  message?: string;
}

const WhatsAppButton: React.FC<Props> = ({
  phone = "919952636921",
  message = "Hi, I need help with Yarih Group",
}) => {
  const encodedMessage = encodeURIComponent(message || "Hello!");
  const phoneClean = (phone || "").replace(/\D+/g, "");
  const whatsappUrl = phoneClean
    ? `https://wa.me/${phoneClean}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;

  const buttonStyle: React.CSSProperties = {
    position: "fixed",
    right: "1rem",
    bottom: "1rem",
    zIndex: 9999,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: "50%",
    background: "#25D366",
    color: "#fff",
    boxShadow: "0 6px 18px rgba(37,211,102,0.3)",
    cursor: "pointer",
    textDecoration: "none",
  };

  const svgStyle: React.CSSProperties = {
    width: 28,
    height: 28,
    fill: "white",
    pointerEvents: "none",
  };

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      role="button"
      style={buttonStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 12px 25px rgba(37,211,102,0.6)",
        transition: { type: "spring", stiffness: 300 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={svgStyle}
        aria-hidden="true"
        focusable="false"
      >
        <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.38 0 .02 5.36.02 12c0 2.12.55 4.18 1.6 6.02L0 24l6.17-1.61A11.96 11.96 0 0012 24c6.62 0 12-5.38 12-12 0-3.18-1.24-6.17-3.48-8.52zM12 22a9.88 9.88 0 01-5.03-1.38l-.36-.21-3.67.96.98-3.57-.24-.37A9.93 9.93 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.47-7.37c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.48-.9-.8-1.51-1.8-1.69-2.1-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.5-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.07 4.48 1.78.77 2.47.83 3.36.7.55-.08 1.77-.72 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.13-.27-.2-.57-.35z" />
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
