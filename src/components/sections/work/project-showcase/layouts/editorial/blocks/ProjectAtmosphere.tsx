import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";

import type { ProjectBlockProps } from "../../../shared/types";

import ProjectCinematicFrame from "../../../shared/ProjectCinematicFrame";

export default function ProjectAtmosphere({ project }: ProjectBlockProps) {
  const image = project.media.atmosphere?.[0];

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
        {/* VISUAL */}
        <div
          className='
            relative

            lg:col-span-5
            lg:mt-6
          '
        >
          <ProjectCinematicFrame
            image={image}
            alt='Project atmosphere'
            minHeight='min-h-[420px]'
          />
        </div>

        {/* CONTENT */}
        <div
          className='
            lg:col-span-5
            lg:col-start-8
            lg:mt-20
          '
        >
          <div className='max-w-lg space-y-8'>
            <div className='space-y-4'>
              <Label>Atmosphere & Materiality</Label>

              <Heading
                as='h3'
                className='
                  text-4xl
                  leading-[0.92]
                  tracking-[-0.06em]

                  text-white/92

                  md:text-5xl
                '
              >
                Building tactile digital environments through texture, glow,
                depth, and cinematic layering.
              </Heading>
            </div>

            <Text
              className='
                max-w-[34ch]

                text-[15px]
                leading-[1.9]

                text-white/38
              '
            >
              Every surface, shadow, and light interaction is carefully composed
              to enhance depth, emotion, and the sense of place.
            </Text>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
