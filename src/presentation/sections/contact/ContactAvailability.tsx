// ContactAvailability.tsx

import { contactContent } from "@/content/contact";

import FadeIn from "@/presentation/animation/FadeIn";
import type { ResolvedContactLayout } from "@/runtime/presentation/layout/contracts";

import { ui } from "@/theme";

type Props = {
  layout: ResolvedContactLayout["availability"];
};

export default function ContactAvailability({ layout }: Props) {
  const { availability } = contactContent;

  return (
    <FadeIn delay={0.12}>
      <div
        className={`
          relative

          border-t
          ${ui.borders.hairline}

          px-8

          ${layout.root}
        `}
      >
        {/* SOFT GLOW */}
        <div
          className="
            absolute
            left-0
            top-0

            h-px
            w-24

            bg-cyan-300/30
          "
        />

        <div className={layout.content}>
          <div
            className={`
              text-[11px]
              uppercase
              tracking-[0.28em]

              ${ui.text.metadata}
            `}
          >
            {availability.label}
          </div>

          <p
            className={`
              max-w-[28ch]

              leading-[1.9]

              ${ui.text.available}
            `}
          >
            {availability.description}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
