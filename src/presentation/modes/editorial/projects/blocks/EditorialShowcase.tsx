import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";
import { ui } from "@/theme";

import type { ProjectBlockProps } from "@/presentation/shared/types";

import ProjectSectionLabel from "@/presentation/shared/ProjectSectionLabel";
import ProjectCinematicFrame from "@/presentation/shared/ProjectCinematicFrame";

export default function EditorialShowcase({ project }: ProjectBlockProps) {
  const editorial = project.media.editorial?.[0];

  if (!editorial) return null;

  return (
    <FadeIn>
      <section className='grid grid-cols-1 gap-y-10 md:gap-y-14 xl:grid-cols-12 xl:gap-x-32'>
        {/* LEFT */}
        <div className='xl:col-span-4'>
          <div
            className=' space-y-8

               xl:sticky
               xl:top-24

               2xl:top-32'
          >
            <ProjectSectionLabel>Editorial Narrative</ProjectSectionLabel>

            <Heading
              as='h3'
              className={`
                max-w-lg

                text-5xl
                leading-[0.95]

                ${ui.text.primary}

                md:text-6xl
              `}
            >
              Emotional storytelling through digital composition.
            </Heading>

            <Text
              className={`
                max-w-lg

                text-[15px]
                leading-[1.9]

                ${ui.text.link}
              `}
            >
              The experience was designed with editorial pacing, cinematic
              transitions, layered typography systems, and tactile atmospheric
              surfaces.
            </Text>
          </div>
        </div>

        {/* RIGHT */}
        <div className='xl:col-span-8'>
          <ProjectCinematicFrame
            image={editorial}
            alt={project.title}
            minHeight='min-h-[260px] sm:min-h-[340px] md:min-h-[420px] xl:min-h-[560px]'
          />
        </div>
      </section>
    </FadeIn>
  );
}
