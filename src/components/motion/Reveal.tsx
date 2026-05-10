import { motion } from "framer-motion";

import type { ReactNode } from "react";

import { motionPresets } from "@/theme";

type Props = {
  children: ReactNode;
};

export default function Reveal({ children }: Props) {
  const preset = motionPresets.reveal;

  return (
    <div className='overflow-hidden'>
      <motion.div
        initial={preset.initial}
        animate={preset.animate}
        transition={preset.transition}
      >
        {children}
      </motion.div>
    </div>
  );
}
