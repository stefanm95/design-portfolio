import FadeIn from "@/presentation/animation/FadeIn";

import { contactContent } from "@/content/contact";

import Heading from "@/design/typography/Heading";
import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";

import type { ResolvedContactLayout } from "@/runtime/presentation/layout/contracts";

import { ui } from "@/theme";

type Props = {
  layout: ResolvedContactLayout["hero"];
};

export default function ContactHero({ layout }: Props) {
  const { hero } = contactContent;

  return (
    <div className={layout.root}>
      <div className={layout.content}>
        {/* LEFT */}
        <FadeIn>
          <div className={layout.left}>
            <div className='space-y-10'>
              <Label
                className={`
                  text-[11px]
                  uppercase
                  tracking-[0.28em]

                  ${ui.text.context}
                `}
              >
                {hero.label}
              </Label>

              <Heading
                as='h2'
                className={`
                  max-w-[10ch]

                  text-[clamp(3rem,7vw,7rem)]

                  leading-[0.9]
                  tracking-[-0.06em]

                  ${ui.text.strong}
                `}
              >
                {hero.title}
              </Heading>

              <Text
                className={`
                  max-w-[34rem]

                  text-sm
                  leading-[1.9]

                  ${ui.text.muted}
                `}
              >
                {hero.description}
              </Text>
            </div>
          </div>
        </FadeIn>

        {/* RIGHT */}
        <FadeIn delay={0.12}>
          <div className={layout.right}>
            <div
              className={`
                relative

                border-t
                pt-8

                ${layout.card}

                ${ui.borders.focus}
                ${ui.borders.focusMd}
              `}
            >
              {/* ATMOSPHERIC BLOOM */}
              <div
                className='
                  absolute
                  inset-0

                  opacity-[0.06]
                '
                style={{
                  background:
                    "radial-gradient(circle at top left, rgba(120,200,255,0.28), transparent 60%)",
                }}
              />

              {/* CONTENT */}
              <div className='relative z-10 space-y-8'>
                {/* EMAIL */}
                <div className={layout.infoGroup}>
                  <div
                    className={`
                      text-[10px]
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
                <div className={layout.infoGroup}>
                  <div
                    className={`
                      text-[10px]
                      uppercase
                      tracking-[0.28em]

                      ${ui.text.annotation}
                    `}
                  >
                    {hero.availability.label}
                  </div>

                  <div
                    className={`
                      text-sm
                      leading-[1.8]

                      ${ui.text.supporting}
                    `}
                  >
                    {hero.availability.value}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
