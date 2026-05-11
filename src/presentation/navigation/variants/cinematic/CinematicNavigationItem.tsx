import { motion } from "framer-motion";

type Props = {
  index: number;

  label: string;

  isActive: boolean;

  onClick: () => void;
};

export default function CinematicNavigationItem({
  index,
  label,
  isActive,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className='group relative flex items-center gap-5 text-left'
    >
      {/* INDEX */}
      <span
        className={`
          text-[10px]
          tracking-[0.28em]
          transition-all
          duration-700

          ${
            isActive
              ? `
                text-white/90
              `
              : `
                text-white/22
                group-hover:text-white/50
              `
          }
        `}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* SPINE */}
      <div className='relative h-px w-10 overflow-hidden'>
        <motion.div
          animate={{
            opacity: isActive ? 1 : 0.24,
            scaleX: isActive ? 1 : 0.45,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className='absolute inset-0 origin-left bg-white'
        />
      </div>

      {/* LABEL */}
      <motion.span
        animate={{
          opacity: isActive ? 1 : 0.34,
          x: isActive ? 0 : -2,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className='
          text-[11px]
          uppercase
          tracking-[0.28em]
          whitespace-nowrap
        '
      >
        {label}
      </motion.span>
    </button>
  );
}
