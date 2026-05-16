import type { ReactNode } from "react";

import { useMotionCadence } from "@/runtime/presentation/motion";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;

  className?: string;

  delay?: number;
};

export default function FadeIn({
  children,

  delay = 0,

  className,
}: Props) {
  const cadence = useMotionCadence();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: cadence.fade.offset,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-10%",
      }}
      transition={{
        duration: cadence.fade.duration,

        delay: cadence.fade.delay + delay,

        ease: cadence.fade.ease,
      }}
    >
      {children}
    </motion.div>
  );
}
