import FadeIn from "@/presentation/animation/FadeIn";

import { contactContent } from "@/content/contact";

import Heading from "@/design/typography/Heading";
import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";

import { resolvePageLayoutRuntime } from "@/runtime/presentation/layout";

import Section from "@/design/layout/Section";
import { ui } from "@/theme";

export default function ContactHero() {
  const { hero } = contactContent;

  const layout = resolvePageLayoutRuntime();

  return (
    <Section className={layout.contact.hero.root}>
      <div className={layout.contact.hero.content}>
        {/* LEFT */}
        <div className={layout.contact.hero.left}>
          <FadeIn>
            <div className={layout.contact.hero.infoGroup}>
              <Label
                className={`
                  text-[32px]
                  uppercase
                  tracking-[0.28em]

                  ${ui.text.metadata}
                `}
              >
                {hero.label}
              </Label>

              <Heading
                as="h2"
                className={`
                  max-w-[11ch]

                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  xl:text-[6.5rem]

                  leading-[0.92]

                  ${ui.text.primary}
                `}
              >
                {hero.title}
              </Heading>

              <Text
                className={`
                  max-w-[34ch]

                  text-base
                  md:text-sm

                  leading-[1.9]

                  ${ui.text.tertiary}
                `}
              >
                {hero.description}
              </Text>
            </div>
          </FadeIn>
        </div>

        {/* RIGHT */}
        <div className={layout.contact.hero.right}>
          <FadeIn delay={0.18}>
            <div
              className={`
                relative

                ${layout.contact.hero.card}

                ${ui.borders.focus}
                ${ui.borders.focusMd}
              `}
            >
              <div className="relative z-10">
                <div className={layout.contact.hero.infoGroup}>
                  {/* EMAIL */}
                  <div className={layout.contact.hero.infoGroup}>
                    <div
                      className={`
                        text-[11px]
                        uppercase
                        tracking-[0.28em]

                        ${ui.text.annotation}
                      `}
                    >
                      {hero.email.label}
                    </div>

                    <a
                      href={hero.email.href}
                      className={`
                        text-lg

                        transition-opacity
                        duration-500

                        hover:opacity-60

                        ${ui.text.interactive}
                      `}
                    >
                      {hero.email.value}
                    </a>
                  </div>

                  {/* AVAILABILITY */}
                  <div className={layout.contact.hero.infoGroup}>
                    <div
                      className={`
                        text-[11px]
                        uppercase
                        tracking-[0.28em]

                        ${ui.text.annotation}
                      `}
                    >
                      {hero.availability.label}
                    </div>

                    <p className={ui.text.supporting}>
                      {hero.availability.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
