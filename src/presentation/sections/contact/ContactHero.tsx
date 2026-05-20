import FadeIn from "@/presentation/animation/FadeIn";

import { contactContent } from "@/content/contact";

import Heading from "@/design/typography/Heading";
import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";

import { resolvePageLayoutRuntime } from "@/runtime/presentation/layout/resolvers/resolvePageLayoutRuntime";

import { ui } from "@/theme";

export default function ContactHero() {
  const { hero } = contactContent;

  const layout = resolvePageLayoutRuntime();

  return (
    <div className={layout.contact.hero.root}>
      <div className={layout.contact.hero.content}>
        {/* LEFT */}
        <FadeIn>
          <div className={layout.contact.hero.left}>
            <Label className={ui.text.context}>{hero.label}</Label>

            <Heading
              as="h2"
              className={`
                mt-8

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
                mt-10

                max-w-[34rem]

                text-sm
                leading-[1.9]

                ${ui.text.muted}
              `}
            >
              {hero.description}
            </Text>
          </div>
        </FadeIn>

        {/* RIGHT */}
        <FadeIn delay={0.12}>
          <div className={layout.contact.hero.right}>
            <div
              className={`
                relative

                border
                backdrop-blur-xl

                ${layout.contact.hero.card}

                ${ui.borders.subtle}
                ${ui.surfaces.panel}
              `}
            >
              <div
                className="
                  absolute
                  inset-0

                  opacity-[0.06]
                "
                style={{
                  background:
                    "radial-gradient(circle at top left, rgba(120,200,255,0.28), transparent 60%)",
                }}
              />

              <div className="relative z-10 space-y-8">
                {/* EMAIL */}
                <div className={layout.contact.hero.infoGroup}>
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
                      text-sm
                      leading-[1.8]

                      transition-opacity
                      duration-500

                      hover:opacity-80

                      ${ui.text.secondary}
                    `}
                  >
                    {hero.email.value}
                  </a>
                </div>

                {/* AVAILABILITY */}
                <div className={layout.contact.hero.infoGroup}>
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

                      ${ui.text.secondary}
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
