import { motion } from "framer-motion";

export default function GridOverlay() {
  return (
    <motion.div
      animate={{
        opacity: [0.012, 0.02, 0.012],
        backgroundPositionY: ["0px", "120px"],
      }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      }}
      className='
        pointer-events-none
        fixed inset-0
      '
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(68,202,187,0.18) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(68,202,187,0.18) 1px, transparent 1px)
        `,
        backgroundSize: "120px 120px",
      }}
    />
  );
}
