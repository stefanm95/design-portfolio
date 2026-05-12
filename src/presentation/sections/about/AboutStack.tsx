import FadeIn from "@/presentation/animation/FadeIn";

import { aboutContent } from "@/content/about";
import Text from "@/design/typography/Text";
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
          {aboutContent.stack.description}
        </Text>
      </div>
    </FadeIn>
  );
}
