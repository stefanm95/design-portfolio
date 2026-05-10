import { useMousePosition } from "@/hooks/useMousePosition";
import { dividersGradients } from "@/theme";
import { motion } from "framer-motion";

export default function RightSideVisual() {
  const mouse = useMousePosition();
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {/* Main Vertical Spine */}
      <div
        className={`
          absolute
          left-[68%]
          top-0

          h-full
          w-px

          ${dividersGradients.verticalSubtle}
        `}
      />

      {/* Main Atmospheric Volume */}
      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className='
          absolute

          left-[62%]
          top-[-10%]

          h-[140vh]
          w-[32vw]

          blur-sm
        '
        style={{
          transform: `translate3d(${mouse.x * 24}px, ${mouse.y * 24}px, 0)`,
        }}
      />

      {/* Main Glass Refraction */}
      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
          y: [0, -18, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className='
          absolute

          left-[72%]
          top-[-6%]

          h-[128vh]
          w-[14vw]

          blur-[2px]
        '
        style={{
          backgroundImage:
            "url('/textures/glass/fabio-troyli-stzrfbcWPP8-unsplash.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
        }}
      />

      {/* Secondary Refraction */}
      <motion.div
        animate={{
          opacity: [0.04, 0.09, 0.04],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className='
          absolute

          left-[82%]
          top-[10%]

          h-[70vh]
          w-[6vw]

          blur-2xl
        '
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.10), transparent)",
        }}
      />

      {/* Texture Layer */}
      <div
        className='
          absolute

          left-[66%]
          top-[18%]

          h-[42vh]
          w-[10vw]

          opacity-[0.05]

          blur-[1px]
        '
        style={{
          backgroundImage:
            "url('/textures/glass/zhiqiang-wang-tMgP-wH4ux0-unsplash.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
        }}
      />

      {/* Bottom Bloom */}
      <motion.div
        animate={{
          opacity: [0.06, 0.14, 0.06],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className='
          absolute

          left-[60%]
          bottom-[-20%]

          h-[34vw]
          w-[34vw]

          rounded-full
          blur-sm
        '
        style={{
          background:
            "radial-gradient(circle, rgba(0,180,255,0.08), transparent 72%)",
          transform: `translate3d(${mouse.x * 24}px, ${mouse.y * 24}px, 0)`,
        }}
      />
    </div>
  );
}
