import FadeIn from "@/presentation/animation/FadeIn";

import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";
import { ui } from "@/theme";

import type { ProjectBlockProps } from "@/presentation/types/projects";

import ProjectCinematicFrame from "@/presentation/shared/ProjectCinematicFrame";

export default function EditorialAtmosphere({ project }: ProjectBlockProps) {
  const image = project.media.atmosphere?.[0];

  if (!image) return null;

  return (
    <FadeIn>
      <section
        className='
          grid
          
          gap-y-10
          lg:items-start
          lg:gap-14
          lg:grid-cols-12
        '
      >
        {/* VISUAL */}
        <div
          className='
            relative
            order-1

            lg:col-span-5
            lg:mt-6
          '
        >
          <ProjectCinematicFrame
            image={image}
            alt='Project atmosphere'
            minHeight='min-h-[240px] sm:min-h-[320px] md:min-h-[420px]'
          />
        </div>

        {/* CONTENT */}
        <div
          className='
          order-2
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
                className={`
                  text-3xl
                  sm:text-4xl
                  md:text-5xl

                  leading-[0.94]
                  tracking-[-0.05em]

                  ${ui.text.primary}
                `}
              >
                Building tactile digital environments through texture, glow,
                depth, and cinematic layering.
              </Heading>
            </div>

            <Text
              className={`
                max-w-[34ch]

                text-[15px]
                leading-[1.9]

                ${ui.text.tertiary}
              `}
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
