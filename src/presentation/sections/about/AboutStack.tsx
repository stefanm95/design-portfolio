// AboutStack.tsx

import FadeIn from "@/presentation/animation/FadeIn";

import { aboutContent } from "@/content/about";

import Text from "@/design/typography/Text";

import { sectionSpacing } from "@/runtime/presentation/composition";

import { ui } from "@/theme";

export default function AboutStack() {
  const { description } = aboutContent.stack;

  return (
    <FadeIn>
      <div
        className={`
          border-t

          ${ui.borders.hairline}
          ${sectionSpacing.about.stackFooter}
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
          {description}
        </Text>
      </div>
    </FadeIn>
  );
}
