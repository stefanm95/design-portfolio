import FadeIn from "@/components/motion/FadeIn";

import Display from "@/components/typography/Display";
import Label from "@/components/typography/Label";

export default function AboutHero() {
  return (
    <div className='grid grid-cols-12 gap-y-16 xl:gap-x-12'>
      {/* LABEL */}
      <div className='col-span-12 xl:col-span-2'>
        <FadeIn>
          <Label>DESIGN PHILOSOPHY</Label>
        </FadeIn>
      </div>

      {/* STATEMENT */}
      <div className='col-span-12 xl:col-span-10'>
        <FadeIn delay={0.08}>
          <Display
            as='h2'
            variant='secondary'
            className='
              max-w-[11ch]

              text-[4rem]
              leading-[0.92]

              md:text-[6rem]
              xl:text-[8rem]
            '
          >
            Interfaces should feel directed, not assembled.
          </Display>
        </FadeIn>
      </div>
    </div>
  );
}
