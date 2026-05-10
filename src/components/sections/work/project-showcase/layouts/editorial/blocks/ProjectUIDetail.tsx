import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";

import type { ProjectBlockProps } from "../../../shared/types";

import ProjectCinematicFrame from "../../../shared/ProjectCinematicFrame";

export default function ProjectUIDetail({ project }: ProjectBlockProps) {
  const image = project.media.ui?.[0];

  if (!image) return null;

  return (
    <FadeIn>
      <section
        className='
          grid
          items-start
          gap-14

          lg:grid-cols-12
        '
      >
        {/* CONTENT */}
        <div
          className='
            relative
            z-10

            lg:col-span-5
            lg:col-start-2
            lg:mt-24
          '
        >
          <div className='max-w-lg space-y-7'>
            <div className='space-y-4'>
              <Label>Interaction & Experience</Label>

              <Heading
                as='h3'
                className='
                  text-[clamp(2rem,4vw,3.5rem)]
                  leading-[0.9]
                  tracking-[-0.07em]

                  text-white/92
                '
              >
                Thoughtful interaction designed for clarity and emotional ease.
              </Heading>
            </div>

            <Text
              className='
                max-w-[28ch]

                text-[15px]
                leading-[1.9]

                text-white/40
              '
            >
              Flows are intuitive, minimal, and intentional. Each interaction
              guides the user naturally through the experience.
            </Text>
          </div>
        </div>

        {/* VISUAL */}
        <div
          className='
            relative

            lg:col-span-5
            lg:col-start-7
          '
        >
          <ProjectCinematicFrame
            image={image}
            alt='Project interface detail'
            minHeight='min-h-[420px]'
          />
        </div>
      </section>
    </FadeIn>
  );
}
