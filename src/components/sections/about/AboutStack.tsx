import FadeIn from "@/components/motion/FadeIn";

import Text from "@/components/typography/Text";

export default function AboutStack() {
  return (
    <FadeIn>
      <div
        className='
          border-t
          border-white/[0.06]

          pt-12
        '
      >
        <Text
          className='
            max-w-[52ch]

            text-[15px]
            leading-[2]

            text-white/34
          '
        >
          Built with React, TypeScript, Framer Motion, Tailwind, and custom
          interaction systems focused on immersive presentation, editorial
          pacing, and cinematic frontend architecture.
        </Text>
      </div>
    </FadeIn>
  );
}
