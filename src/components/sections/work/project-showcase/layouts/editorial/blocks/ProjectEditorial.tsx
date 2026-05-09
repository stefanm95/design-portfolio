import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";

import type { ProjectBlockProps } from "../../../shared/types";

import ProjectSectionLabel from "../../../shared/ProjectSectionLabel";

export default function ProjectEditorial({ project }: ProjectBlockProps) {
  const editorial = project.media.editorial?.[0];

  return (
    <FadeIn>
      <section className='grid grid-cols-12 gap-y-16 xl:gap-x-32'>
        {/* LEFT */}
        <div className='col-span-12 xl:col-span-4'>
          <div className='sticky top-32 space-y-10'>
            <ProjectSectionLabel>Editorial Narrative</ProjectSectionLabel>

            <Heading
              as='h3'
              className='
                max-w-lg

                text-5xl
                leading-[0.95]

                text-white/92

                md:text-6xl
              '
            >
              Emotional storytelling through digital composition.
            </Heading>

            <Text
              className='
                max-w-lg

                text-[15px]
                leading-[1.9]

                text-white/42
              '
            >
              The experience was designed with editorial pacing, cinematic
              transitions, layered typography systems, and tactile atmospheric
              surfaces.
            </Text>
          </div>
        </div>

        {/* RIGHT */}
        <div className='col-span-12 xl:col-span-8'>
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
              alt={project.title}
              src={editorial}
              className='h-full w-full object-cover'
            />

            {/* ATMOSPHERIC OVERLAY */}
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
      </section>
    </FadeIn>
  );
}
