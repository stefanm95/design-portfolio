import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { motionDuration, motionEase, motionReveal } from "@/theme";

type Props = {
  children: ReactNode;
};

export default function Reveal({ children }: Props) {
  return (
    <div className='overflow-hidden'>
      <motion.div
        initial={motionReveal.slideUp.initial}
        animate={motionReveal.slideUp.animate}
        transition={{
          duration: motionDuration.slideReveal,
          ease: motionEase.cinematic,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
