import { useMousePosition } from "@/hooks/useMousePosition";

import { activeTheme, dividersGradients } from "@/theme";

import { motion } from "framer-motion";

export default function LeftSideVisual() {
  const mouse = useMousePosition();

  const visuals = activeTheme.visuals.leftSide;

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {/* Vertical Spine */}
      <div
        className={`
          absolute
          left-[18%]
          top-0

          h-full
          w-px

          ${dividersGradients.verticalAtmospheric}
        `}
      />

      {/* Main Atmospheric Volume */}
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
          background: visuals.atmosphericVolume.background,

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
          backgroundImage: `url(${visuals.glassRefraction.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          mixBlendMode: "screen",
        }}
      />

      {/* Secondary Refraction */}
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
          background: visuals.secondaryRefraction.background,
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
          backgroundImage: `url(${visuals.textureLayer.image})`,
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
          background: visuals.bottomBloom.background,

          transform: `translate3d(${mouse.x * -16}px, ${mouse.y * -16}px, 0)`,
        }}
      />
    </div>
  );
}
