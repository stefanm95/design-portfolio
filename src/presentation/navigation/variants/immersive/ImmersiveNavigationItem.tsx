"use client";

import { motion } from "framer-motion";

type Props = {
  label: string;

  index: number;

  isActive: boolean;

  onClick: () => void;
};

export default function ImmersiveNavigationItem({
  label,
  isActive,
  onClick,
}: Props) {
  return (
    <motion.button
      onClick={onClick}
      aria-label={label}
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className='
        group
        relative

        flex
        items-center

        cursor-pointer
      '
    >
      {/* AMBIENT GLOW */}
      <motion.div
        animate={{
          opacity: isActive ? 1 : 0,

          scaleX: isActive ? 1 : 0.6,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className='
          absolute
          inset-x-0
          bottom-[-10px]

          h-px

          bg-white/40
        '
      />

      {/* TYPOGRAPHIC BODY */}

      <motion.div
        animate={{
          width: isActive ? "auto" : "42px",
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className='
    overflow-hidden
    whitespace-nowrap
  '
      >
        <motion.span
          animate={{
            opacity: isActive ? 1 : 0.14,

            letterSpacing: isActive ? "0.22em" : "0.26em",

            y: isActive ? -1 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className='
      block

      text-[10px]
      uppercase

      text-white
    '
        >
          {label}
        </motion.span>
      </motion.div>
    </motion.button>
  );
}
