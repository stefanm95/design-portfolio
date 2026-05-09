import { motion } from "framer-motion";

export default function GridOverlay() {
  return (
    <div className='pointer-events-none fixed inset-0 overflow-hidden'>
      <motion.div
        animate={{
          y: [0, 120],
          opacity: [0.012, 0.02, 0.012],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className='absolute inset-[-120px]'
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(68,202,187,0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(68,202,187,0.18) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />
    </div>
  );
}
