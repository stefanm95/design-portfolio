import FadeIn from "@/presentation/animation/FadeIn";

import Display from "@/design/typography/Display";
import Heading from "@/design/typography/Heading";

import {
  compositionStack,
  sectionSpacing,
} from "@/runtime/presentation/composition";

import { contactContent } from "@/content/contact";

import { ui, useTheme } from "@/theme";

export default function ContactHero() {
  const { theme } = useTheme();
  const { hero } = contactContent;

  const scene = theme.scenes.contact;

  const spacing = sectionSpacing.contact;
  const stack = compositionStack.contact;

  return (
    <section
      className={`
        relative
        overflow-hidden

        ${scene.layout.sectionPadding}
      `}
    >
      {/* BASE TEXTURE */}
      <div
        className={`
          absolute
          inset-0

          ${scene.texture.opacity}
        `}
        style={{
          backgroundImage: `url(${scene.texture.image})`,
          backgroundSize: scene.texture.size,
          backgroundPosition: scene.texture.position,
        }}
      />

      {/* ATMOSPHERIC LIGHT */}
      <div
        className={`
          absolute
          rounded-full
          blur-sm

          ${scene.atmosphere.primary.position}
          ${scene.atmosphere.primary.size}
          ${scene.atmosphere.primary.opacity}
        `}
        style={{
          background: scene.atmosphere.primary.background,
        }}
      />

      {/* VERTICAL DIVIDER */}
      <div
        className={`
          absolute
          left-1/2
          top-0

          h-full

          border-l

          ${scene.dividers.vertical.visibility}
          ${scene.dividers.vertical.width}
          ${scene.dividers.vertical.color}
        `}
      />

      {/* CONTENT */}
      <div
        className={`
          relative
          z-10

          grid
          grid-cols-12

          ${spacing.heroContent}
        `}
      >
        {/* LEFT */}
        <div className="col-span-12 xl:col-span-7">
          <div
            className={`
              ${stack.hero.left}
              ${spacing.heroLeft}
            `}
          >
            <FadeIn>
              <Heading
                className={`
                  text-[32px]

                  uppercase
                  tracking-[0.28em]

                  ${ui.text.metadata}
                `}
              >
                {hero.label}
              </Heading>
            </FadeIn>

            <FadeIn delay={0.06}>
              <Display
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
              </Display>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p
                className={`
                  max-w-[34ch]

                  text-base
                  md:text-sm

                  leading-[1.9]

                  ${ui.text.tertiary}
                `}
              >
                {hero.description}
              </p>
            </FadeIn>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className={`
            col-span-12
            xl:col-span-4
            xl:col-start-9

            ${spacing.heroRight}
          `}
        >
          <FadeIn delay={0.18}>
            <div
              className={`
                ${stack.hero.right}

                border-t

                ${spacing.heroCard}

                ${ui.borders.focus}
                ${ui.borders.focusMd}
              `}
            >
              <div className={stack.hero.infoGroup}>
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
                  href="mailto:your@email.com"
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

              <div className={stack.hero.infoGroup}>
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

                <p className={ui.text.supporting}>{hero.availability.value}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
