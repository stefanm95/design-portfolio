import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";

import type { ProjectBlockProps } from "../../../types";

export default function ArchitecturalSystems({ project }: ProjectBlockProps) {
  const image = project.media.systems?.[0];

  if (!image) {
    return null;
  }

  return (
    <FadeIn>
      <section className='grid grid-cols-12 gap-y-20 xl:gap-x-16'>
        {/* VISUAL */}
        <div className='col-span-12 xl:col-span-5'>
          <div
            className='
              relative
              overflow-hidden

              border
              border-white/6

              bg-black/20
            '
          >
            <img
              alt='Process system design'
              className='h-full w-full object-cover'
              src={image}
            />

            <div
              className='
                absolute
                inset-0

                bg-linear-to-t
                from-black/20
                via-transparent
                to-transparent
              '
            />
          </div>
        </div>

        {/* CONTENT */}
        <div
          className='
            col-span-12

            flex items-center

            xl:col-span-4
            xl:col-start-8
          '
        >
          <div className='space-y-8'>
            <Label>Process & Systems</Label>

            <Heading
              as='h3'
              className='
                max-w-[10ch]

                text-4xl
                leading-[0.92]
                tracking-[-0.06em]

                text-white/92

                md:text-5xl
              '
            >
              Clear process structures translated into cinematic interfaces.
            </Heading>

            <Text
              className='
                max-w-[34ch]

                text-[15px]
                leading-[1.9]

                text-white/38
              '
            >
              The experience balances premium visual presentation with strong
              usability systems, structured information flow, and modular
              interaction design.
            </Text>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
