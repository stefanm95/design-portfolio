"use client";

import { motion } from "framer-motion";

import { useNavigation } from "@/runtime/navigation";

export default function ImmersiveNavigationProgress() {
  const { scrollProgress } = useNavigation();

  return (
    <div
      className='
        absolute
        inset-0

        overflow-hidden

        rounded-full
      '
    >
      <motion.div
        animate={{
          opacity: scrollProgress > 0 ? 1 : 0,
        }}
        style={{
          scaleX: scrollProgress,

          transformOrigin: "left",
        }}
        className='
          absolute
          inset-y-0
          left-0

          w-full

          rounded-full

          bg-white/[0.04]

          blur-md
        '
      />
    </div>
  );
}
