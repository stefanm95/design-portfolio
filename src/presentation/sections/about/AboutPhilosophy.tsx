// AboutPhilosophy.tsx

import FadeIn from "@/presentation/animation/FadeIn";

import { aboutContent } from "@/content/about";

import Heading from "@/design/typography/Heading";
import Text from "@/design/typography/Text";

import { compositionStack } from "@/runtime/presentation/composition";

import { ui } from "@/theme";

export default function AboutPhilosophy() {
  const { philosophy } = aboutContent;

  return (
    <div className={compositionStack.about.philosophy.root}>
      {/* LEFT */}
      <div className="col-span-1 md:col-span-12 lg:col-span-5">
        <FadeIn>
          <Heading
            as="h3"
            className="max-w-[12ch] text-2xl md:text-3xl lg:text-4xl"
          >
            {philosophy.title}
          </Heading>
        </FadeIn>
      </div>

      {/* RIGHT */}
      <div className="col-span-1 md:col-span-12 lg:col-span-7">
        <FadeIn delay={0.12}>
          <div className={compositionStack.about.philosophy.content}>
            <Text
              className={`
                max-w-[42ch]

                text-sm
                md:text-base
                lg:text-[16px]

                leading-[2]

                ${ui.text.reading}
              `}
            >
              {philosophy.paragraphs[0]}
            </Text>

            <Text
              className={`
                max-wsm
                md:text-base
                lg:text--[42ch]

                text-[16px]
                leading-[2]

                ${ui.text.muted}
              `}
            >
              {philosophy.paragraphs[1]}
            </Text>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
