import { motion } from "framer-motion";

import { grid } from "@/theme";

export default function GridOverlay() {
  return (
    <div className='pointer-events-none fixed inset-0 overflow-hidden'>
      <motion.div
        animate={{
          y: [0, 120],

          opacity: [grid.opacity.idle, grid.opacity.active, grid.opacity.idle],
        }}
        transition={{
          duration: grid.motion.duration,
          repeat: Infinity,
          ease: grid.motion.ease,
        }}
        className='absolute inset-[-120px]'
        style={{
          backgroundImage: grid.background,

          backgroundSize: grid.size,
        }}
      />
    </div>
  );
}
