import { useMousePosition } from "@/hooks/useMousePosition";
import { motion } from "framer-motion";

export default function LeftSideVisual() {
  const mouse = useMousePosition();

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {/* Vertical Spine */}
      <div
        className='
          absolute
          left-[18%]
          top-0

          h-full
          w-px

          bg-linear-to-b
          from-transparent
          via-white/8
          to-transparent
        '
      />

      {/* Main Purple Atmospheric Volume */}
      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className='
          absolute

          left-[-6vw]
          top-[0%]

          h-[160vh]
          w-[34vw]

          blur-sm
        '
        style={{
          background:
            "linear-gradient(to bottom, rgba(96,72,255,0.14), rgba(180,70,255,0.10), transparent)",

          transform: `translate3d(${mouse.x * -20}px, ${mouse.y * -20}px, 0)`,
        }}
      />

      {/* Main Glass Refraction */}
      <motion.div
        animate={{
          opacity: [0.08, 0.14, 0.08],
          y: [0, -24, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className='
          absolute

          left-[6%]
          top-[10%]

          h-[120vh]
          w-[14vw]

          blur-[2px]
        '
        style={{
          backgroundImage:
            "url('/textures/glass/ambitious-studio-rick-barrett-jNOUEeCVKe4-unsplash.jpg')",

          backgroundSize: "cover",
          backgroundPosition: "center",

          mixBlendMode: "screen",
        }}
      />

      {/* Secondary Magenta Refraction */}
      <motion.div
        animate={{
          opacity: [0.03, 0.08, 0.03],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className='
          absolute

          left-[18%]
          top-[24%]

          h-[72vh]
          w-[8vw]

          blur-2xl
        '
        style={{
          background:
            "linear-gradient(to bottom, rgba(220,120,255,0.10), transparent)",
        }}
      />

      {/* Texture Refraction */}
      <div
        className='
          absolute

          left-[10%]
          top-[32%]

          h-[44vh]
          w-[10vw]

          opacity-[0.05]

          blur-[1px]
        '
        style={{
          backgroundImage:
            "url('/textures/stone/bekky-bekks-79k1zS6SnzY-unsplash.jpg')",

          backgroundSize: "cover",
          backgroundPosition: "center",

          mixBlendMode: "screen",
        }}
      />

      {/* Bottom Bloom */}
      <motion.div
        animate={{
          opacity: [0.05, 0.12, 0.05],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className='
          absolute

          left-[-10%]
          bottom-[-10%]

          h-[40vw]
          w-[40vw]

          rounded-full
          blur-sm
        '
        style={{
          background:
            "radial-gradient(circle, rgba(130,90,255,0.12), transparent 72%)",

          transform: `translate3d(${mouse.x * -16}px, ${mouse.y * -16}px, 0)`,
        }}
      />
    </div>
  );
}
