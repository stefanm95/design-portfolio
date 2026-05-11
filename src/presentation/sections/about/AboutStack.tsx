import FadeIn from "@/presentation/animation/FadeIn";

import Text from "@/components/typography/Text";
import { ui } from "@/theme";

export default function AboutStack() {
  return (
    <FadeIn>
      <div
        className={`
          border-t
          ${ui.borders.hairline}

          pt-12
        `}
      >
        <Text
          className={`
            max-w-[52ch]

            text-[15px]
            leading-[2]

            ${ui.text.muted}
          `}
        >
          Built with React, TypeScript, Framer Motion, Tailwind, and custom
          interaction systems focused on immersive presentation, editorial
          pacing, and cinematic frontend architecture.
        </Text>
      </div>
    </FadeIn>
  );
}
