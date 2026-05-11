import { motion, useScroll } from "framer-motion";

export default function CinematicNavigationProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div
      className='
        absolute
        right-0
        top-0

        h-full
        w-px

        bg-white/10
        overflow-hidden
      '
    >
      <motion.div
        style={{
          scaleY: scrollYProgress,
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
