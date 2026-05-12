import FadeIn from "@/presentation/animation/FadeIn";

import Display from "@/design/typography/Display";
import Label from "@/design/typography/Label";

import { aboutContent } from "@/content/about";

export default function AboutHero() {
  const { hero } = aboutContent;
  return (
    <div className="grid relative left-[45%] xl:left-0 lg:left-0 grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-16 lg:gap-x-12">
      {/* LABEL */}
      <div className="col-span-1 md:col-span-12 lg:col-span-2">
        <FadeIn>
          <Label>{hero.label}</Label>
        </FadeIn>
      </div>

      {/* STATEMENT */}
      <div className="col-span-1 md:col-span-12 lg:col-span-10">
        <FadeIn delay={0.08}>
          <Display
            as="h2"
            variant="secondary"
            className="
              max-w-[11ch]

              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-[6rem]
              xl:text-[7rem]
              2xl:text-[8rem]
              leading-[0.92]
            "
          >
            {hero.statement}
          </Display>
        </FadeIn>
      </div>
    </div>
  );
}
