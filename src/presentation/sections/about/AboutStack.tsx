// AboutStack.tsx

import FadeIn from "@/presentation/animation/FadeIn";

import { aboutContent } from "@/content/about";

import Text from "@/design/typography/Text";

import { resolvePageLayoutRuntime } from "@/runtime/presentation/layout";

import { ui } from "@/theme";

export default function AboutStack() {
  const { description } = aboutContent.stack;

  const layout = resolvePageLayoutRuntime();

  return (
    <FadeIn>
      <div
        className={`
          ${layout.about.stackFooter}

          ${ui.borders.hairline}
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
