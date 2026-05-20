import FadeIn from "@/presentation/animation/FadeIn";

import Display from "@/design/typography/Display";
import Label from "@/design/typography/Label";

import { aboutContent } from "@/content/about";

import { resolvePageLayoutRuntime } from "@/runtime/presentation/layout";

export default function AboutHero() {
  const { hero } = aboutContent;

  const layout = resolvePageLayoutRuntime();

  return (
    <div
      className={`
        relative
        left-[45%]
        lg:left-0
        xl:left-0

        ${layout.about.hero.root}
      `}
    >
      {/* LABEL */}
      <div className={layout.about.hero.label}>
        <FadeIn>
          <Label>{hero.label}</Label>
        </FadeIn>
      </div>

      {/* STATEMENT */}
      <div className={layout.about.hero.statement}>
        <FadeIn delay={0.08}>
          <Display
            as='h2'
            variant='secondary'
            className='
              max-w-[11ch]

              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-[6rem]
              xl:text-[7rem]
              2xl:text-[8rem]

              leading-[0.92]
            '
          >
            {hero.statement}
          </Display>
        </FadeIn>
      </div>
    </div>
  );
}
