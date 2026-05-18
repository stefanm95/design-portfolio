import FadeIn from "@/presentation/animation/FadeIn";

import { philosophyContent } from "@/content/philosophy";

import Section from "@/design/layout/Section";

import Heading from "@/design/typography/Heading";
import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";

import LeftSideVisual from "@/design/visuals/LeftSideVisual";

import { resolvePageLayoutRuntime } from "@/runtime/presentation/layout/resolvers/resolvePageLayoutRuntime";
import { dividersGradients, ui } from "@/theme";

export default function Philosophy() {
  const { hero, body, metadata } = philosophyContent;

  //
  // LAYOUT RUNTIME
  //

  const layout = resolvePageLayoutRuntime();

  return (
    <Section
      id='philosophy'
      className={`
        relative

        ${layout.philosophy.root}
      `}
    >
      <LeftSideVisual />

      {/* Atmospheric Divider */}
      <div
        className={`
          ${layout.philosophy.divider}
          ${dividersGradients.atmospheric}
        `}
      />

      {/* Ambient Bloom */}
      <div
        className={layout.philosophy.ambientBloom}
        style={{
          background:
            "radial-gradient(circle, rgba(0,180,255,0.18), transparent 72%)",
        }}
      />

      <div className={layout.philosophy.stack}>
        {/* LEFT */}
        <div className={layout.philosophy.left}>
          <FadeIn>
            <div className={layout.philosophy.heading}>
              <Label>{hero.label}</Label>

              <Heading
                as='h2'
                className={`
                  max-w-[10ch]

                  text-4xl
                  md:text-5xl
                  lg:text-[5.5rem]

                  leading-[0.95]
                  tracking-[-0.06em]

                  ${ui.text.strong}
                `}
              >
                {hero.title}
              </Heading>
            </div>
          </FadeIn>
        </div>

        {/* RIGHT */}
        <div className={layout.philosophy.right}>
          <FadeIn delay={0.15}>
            <div className={layout.philosophy.body}>
              <Text
                className={`
                  text-base
                  md:text-lg
                  lg:text-[17px]

                  leading-[2]

                  ${ui.text.reading}
                `}
              >
                {body.primary}
              </Text>

              <Text
                className={`
                  text-sm
                  md:text-base
                  lg:text-[15px]

                  leading-[1.9]

                  ${ui.text.muted}
                `}
              >
                {body.secondary}
              </Text>

              {/* Metadata */}
              <div
                className={`
                  ${layout.philosophy.metadata}
                  ${ui.borders.subtle}
                `}
              >
                {metadata.map((item) => (
                  <div
                    key={item.label}
                    className={layout.philosophy.metadataItem}
                  >
                    <Label className={ui.text.annotation}>{item.label}</Label>

                    <Text className={ui.text.paragraph}>{item.value}</Text>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
