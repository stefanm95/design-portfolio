import { motion } from "framer-motion";

import { useNavigation } from "@/runtime/navigation";

export default function CinematicNavigationProgress() {
  const { scrollProgress } = useNavigation();

  return (
    <div
      className='
        absolute
        right-0
        top-0

        h-full
        w-px

        overflow-hidden
        bg-white/10
      '
    >
      <motion.div
        animate={{
          scaleY: scrollProgress,
        }}
        transition={{
          duration: 0.2,
          ease: "linear",
        }}
        style={{
          transformOrigin: "top",
        }}
        className='
          absolute
          inset-0

          bg-white/60
        '
      />
    </div>
  );
}
