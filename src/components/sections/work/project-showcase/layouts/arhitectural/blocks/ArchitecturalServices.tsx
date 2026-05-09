import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";

import type { ProjectBlockProps } from "../../../types";

import ProjectSectionLabel from "../../../shared/ProjectSectionLabel";

export default function ArchitecturalServices({ project }: ProjectBlockProps) {
  const image = project.media.services?.[0];

  if (!image) {
    return null;
  }

  return (
    <FadeIn>
      <section className='grid grid-cols-12 gap-y-20 xl:gap-x-16'>
        <div className='col-span-12 xl:col-span-4'>
          <div className='sticky top-32 space-y-10'>
            <ProjectSectionLabel>
              Modular Service Architecture
            </ProjectSectionLabel>

            <Heading
              as='h3'
              className='
                max-w-[9ch]

                text-5xl
                leading-[0.94]

                text-white/92

                md:text-6xl
              '
            >
              Structured layouts built for premium conversion flows.
            </Heading>

            <Text
              className='
                max-w-[32ch]

                text-[15px]
                leading-[1.9]

                text-white/42
              '
            >
              The platform uses modular spatial sections, cinematic hierarchy,
              and asymmetric composition to guide users through services,
              projects, and consultation experiences.
            </Text>
          </div>
        </div>

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
              alt='Architectural services layout'
              className='h-full w-full object-cover'
              src={image}
            />

            <div
              className='
                absolute
                inset-0

                bg-linear-to-t
                from-black/40
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
