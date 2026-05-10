import { motion } from "framer-motion";

import { useMousePosition } from "@/hooks/useMousePosition";

import {
  atmosphereBlend,
  atmosphereBlur,
  atmosphereGradients,
  atmosphereLayout,
  atmosphereMotion,
  atmosphereOpacity,
  atmosphereTextures,
} from "@/theme";

export default function RightSideVisual() {
  const mouse = useMousePosition();

  const parallax = {
    transform: `translate3d(${mouse.x * 24}px, ${mouse.y * 24}px, 0)`,
  };

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {/* MAIN VERTICAL SPINE */}
      <div
        className={`
          absolute
          ${atmosphereLayout.spine}
          top-0
          h-full
          w-px
          ${atmosphereGradients.verticalSpine}
        `}
      />

      {/* MAIN ATMOSPHERIC VOLUME */}
      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
          y: [0, -30, 0],
        }}
        transition={atmosphereMotion.slowFloat}
        className={`
          absolute
          ${atmosphereLayout.primaryVolume.position}
          ${atmosphereLayout.primaryVolume.size}
          ${atmosphereBlur.soft}
        `}
        style={parallax}
      />

      {/* MAIN GLASS REFRACTION */}
      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
          y: [0, -18, 0],
        }}
        transition={atmosphereMotion.glassFloat}
        className={`
          absolute
          ${atmosphereLayout.primaryGlass.position}
          ${atmosphereLayout.primaryGlass.size}
          ${atmosphereBlur.glass}
        `}
        style={{
          backgroundImage: `url('${atmosphereTextures.primaryGlass}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: atmosphereBlend.screen,
        }}
      />

      {/* SECONDARY REFRACTION */}
      <motion.div
        animate={{
          opacity: [0.04, 0.09, 0.04],
          x: [0, 10, 0],
        }}
        transition={atmosphereMotion.subtleShift}
        className={`
          absolute
          ${atmosphereLayout.secondaryGlass.position}
          ${atmosphereLayout.secondaryGlass.size}
          ${atmosphereBlur.soft}
        `}
        style={{
          background: atmosphereGradients.verticalLight,
        }}
      />

      {/* TEXTURE LAYER */}
      <div
        className={`
          absolute
          ${atmosphereLayout.texture.position}
          ${atmosphereLayout.texture.size}
          ${atmosphereOpacity.texture}
          ${atmosphereBlur.texture}
        `}
        style={{
          backgroundImage: `url('${atmosphereTextures.secondaryGlass}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: atmosphereBlend.screen,
        }}
      />

      {/* BOTTOM BLOOM */}
      <motion.div
        animate={{
          opacity: [0.06, 0.14, 0.06],
          scale: [1, 1.04, 1],
        }}
        transition={atmosphereMotion.bloomPulse}
        className={`
          absolute
          ${atmosphereLayout.bloom.position}
          ${atmosphereLayout.bloom.size}
          rounded-full
          ${atmosphereBlur.soft}
        `}
        style={{
          background: atmosphereGradients.cyanBloom,
          ...parallax,
        }}
      />
    </div>
  );
}
