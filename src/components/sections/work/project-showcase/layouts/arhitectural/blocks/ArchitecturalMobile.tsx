import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";

import type { ProjectBlockProps } from "../../../types";

import ProjectSectionLabel from "../../../shared/ProjectSectionLabel";

export default function ArchitecturalMobile({ project }: ProjectBlockProps) {
  const mobile = project.media.mobile;

  if (!mobile?.length) {
    return null;
  }

  return (
    <FadeIn>
      <section className='space-y-20'>
        {/* INTRO */}
        <div className='max-w-3xl space-y-8'>
          <ProjectSectionLabel>
            Responsive Spatial Experience
          </ProjectSectionLabel>

          <Heading
            as='h3'
            className='
              max-w-[12ch]

              text-5xl
              leading-[0.94]

              text-white/92

              md:text-6xl
            '
          >
            Designed to preserve cinematic pacing across every screen.
          </Heading>

          <Text
            className='
              max-w-[42ch]

              text-[15px]
              leading-[1.9]

              text-white/42
            '
          >
            Responsive layouts maintain atmosphere, hierarchy, and interaction
            quality while adapting seamlessly to smaller devices.
          </Text>
        </div>

        {/* MOBILE GRID */}
        <div className='grid grid-cols-2 gap-5 md:grid-cols-4 grid-max-cols-[repeat(auto-fit,minmax(240px,1fr))]  lg:gap-8'>
          {mobile.map((image) => (
            <div
              key={image}
              className='
                group
                relative
                overflow-hidden

                border
                border-white/6

                bg-black/20
              '
            >
              <img
                alt='Mobile experience'
                className='
                  h-full
                  w-full
                  object-cover

                  transition-transform
                  duration-1800
                  ease-out

                  group-hover:scale-[1.03]
                '
                src={image}
              />

              <div
                className='
                  absolute
                  inset-0

                  bg-linear-to-t
                  from-black/10
                  via-transparent
                  to-transparent
                '
              />
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
