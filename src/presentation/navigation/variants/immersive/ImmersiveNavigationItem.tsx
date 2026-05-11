"use client";

import { motion } from "framer-motion";

type Props = {
  label: string;

  isActive: boolean;

  onClick: () => void;
};

export default function ImmersiveNavigationItem({
  label,
  isActive,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className='
        group
        relative

        flex
        items-center
        justify-center

        cursor-pointer
      '
    >
      {/* GLOW */}
      <motion.div
        animate={{
          scale: isActive ? 1 : 0.7,

          opacity: isActive ? 1 : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className='
          absolute

          h-10
          w-10

          rounded-full

          blur-sm
        '
      />

      {/* ORB */}
      <motion.div
        animate={{
          scale: isActive ? 1.1 : 0.82,

          opacity: isActive ? 1 : 0.34,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className={`
          relative

          h-2.5
          w-2.5

          rounded-full

          transition-all
          duration-700

          ${
            isActive
              ? `
                bg-white
              `
              : `
                bg-white/30
                group-hover:bg-white/60
              `
          }
        `}
      />

      {/* LABEL */}
      <motion.div
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0,

          y: isActive ? -28 : -18,

          scale: isActive ? 1 : 0.96,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className='
          pointer-events-none

          absolute
          left-1/2
          top-0

          -translate-x-1/2

          whitespace-nowrap

          text-[10px]
          uppercase
          tracking-[0.24em]

          text-white/72
        '
      >
        {label}
      </motion.div>
    </button>
  );
}
