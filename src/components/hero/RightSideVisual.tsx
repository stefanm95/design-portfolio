import { motion } from "framer-motion";

import { useMousePosition } from "@/hooks/useMousePosition";

import {
  atmosphericLayout,
  blur,
  gradients,
  motionPresets,
  opacity,
  textures,
} from "@/theme";

export default function RightSideVisual() {
  const mouse = useMousePosition();

  const parallax = {
    transform: `translate3d(${mouse.x * 24}px, ${mouse.y * 24}px, 0)`,
  };

  return (
    <div className='pointer-events-none absolute inset-0 overflow-hidden'>
      {/* MAIN VERTICAL SPINE */}
      <div
        className={`
          absolute
          ${atmosphericLayout.spine}
          top-0

          h-full
          w-px

          ${gradients.spine.vertical}
        `}
      />

      {/* MAIN ATMOSPHERIC VOLUME */}
      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
          y: [0, -30, 0],
        }}
        transition={motionPresets.slowFloat}
        className={`
          absolute

          ${atmosphericLayout.primaryVolume.position}
          ${atmosphericLayout.primaryVolume.size}

          ${blur.soft}
        `}
        style={parallax}
      />

      {/* MAIN GLASS REFRACTION */}
      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
          y: [0, -18, 0],
        }}
        transition={motionPresets.glassFloat}
        className={`
          absolute

          ${atmosphericLayout.primaryGlass.position}
          ${atmosphericLayout.primaryGlass.size}

          ${blur.glass}
        `}
        style={{
          backgroundImage: `url('${textures.glass.primary}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
        }}
      />

      {/* SECONDARY REFRACTION */}
      <motion.div
        animate={{
          opacity: [0.04, 0.09, 0.04],
          x: [0, 10, 0],
        }}
        transition={motionPresets.subtleShift}
        className={`
          absolute

          ${atmosphericLayout.secondaryGlass.position}
          ${atmosphericLayout.secondaryGlass.size}

          ${blur.soft}
        `}
        style={{
          background: gradients.lighting.verticalLight,
        }}
      />

      {/* TEXTURE LAYER */}
      <div
        className={`
          absolute

          ${atmosphericLayout.texture.position}
          ${atmosphericLayout.texture.size}

          ${opacity.atmosphere.glass}
          ${blur.texture}
        `}
        style={{
          backgroundImage: `url('${textures.glass.secondary}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
        }}
      />

      {/* BOTTOM BLOOM */}
      <motion.div
        animate={{
          opacity: [0.06, 0.14, 0.06],
          scale: [1, 1.04, 1],
        }}
        transition={motionPresets.bloomPulse}
        className={`
          absolute

          ${atmosphericLayout.bloom.position}
          ${atmosphericLayout.bloom.size}

          rounded-full
          ${blur.soft}
          ${gradients.atmospheric.cyan}
        `}
        style={parallax}
      />
    </div>
  );
}
