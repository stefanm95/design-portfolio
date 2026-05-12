import FadeIn from "@/presentation/animation/FadeIn";

import Heading from "@/design/typography/Heading";
import Text from "@/design/typography/Text";
import { ui } from "@/theme";

import type { ProjectBlockProps } from "@/types/projects";

import ProjectCinematicFrame from "@/presentation/shared/ProjectCinematicFrame";
import ProjectSectionLabel from "@/presentation/shared/ProjectSectionLabel";

export default function EditorialShowcase({ project }: ProjectBlockProps) {
  const editorial = project.media.editorial?.[0];
  const content = project.editorial?.showcase;

  if (!editorial) return null;

  return (
    <FadeIn>
      <section className="grid grid-cols-1 gap-y-10 md:gap-y-14 xl:grid-cols-12 xl:gap-x-32">
        {/* LEFT */}
        <div className="xl:col-span-4">
          <div
            className=" space-y-8
               xl:sticky
               xl:top-24
               2xl:top-32"
          >
            <ProjectSectionLabel>{content?.label}</ProjectSectionLabel>

            <Heading
              as="h3"
              className={`
                max-w-lg
                text-5xl
                leading-[0.95]
                ${ui.text.primary}
                md:text-6xl
              `}
            >
              {content?.heading}
            </Heading>

            <Text
              className={`
                max-w-lg
                text-[15px]
                leading-[1.9]
                ${ui.text.link}
              `}
            >
              {content?.description}
            </Text>
          </div>
        </div>

        {/* RIGHT */}
        <div className="xl:col-span-8">
          <ProjectCinematicFrame
            image={editorial}
            alt={project.title}
            minHeight="min-h-[260px] sm:min-h-[340px] md:min-h-[420px] xl:min-h-[560px]"
          />
        </div>
      </section>
    </FadeIn>
  );
}
