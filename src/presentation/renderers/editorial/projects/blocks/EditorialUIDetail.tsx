import FadeIn from "@/presentation/animation/FadeIn";

import Heading from "@/design/typography/Heading";
import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";
import { ui } from "@/theme";

import type { ProjectBlockProps } from "@/types/projects";

import ProjectCinematicFrame from "@/presentation/shared/ProjectCinematicFrame";

export default function EditorialUIDetail({ project }: ProjectBlockProps) {
  const image = project.media.ui?.[0];

  if (!image) return null;

  return (
    <FadeIn>
      <section
        className="
          grid
          items-start
          gap-14

          lg:grid-cols-12
        "
      >
        {/* CONTENT */}
        <div
          className="
          order-2
          lg:order-1

          relative
          z-10

          lg:col-span-5
          lg:col-start-2
          lg:mt-24
        "
        >
          <div className="max-w-lg space-y-7">
            <div className="space-y-4">
              <Label>Interaction & Experience</Label>

              <Heading
                as="h3"
                className={`
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  
                  leading-[0.92]
                  tracking-[-0.05em]
                  
                  ${ui.text.primary}
                `}
              >
                Thoughtful interaction designed for clarity and emotional ease.
              </Heading>
            </div>

            <Text
              className={`
                max-w-[28ch]

                text-[15px]
                leading-[1.9]

                ${ui.text.descriptive}
              `}
            >
              Flows are intuitive, minimal, and intentional. Each interaction
              guides the user naturally through the experience.
            </Text>
          </div>
        </div>

        {/* VISUAL */}
        <div
          className="
          order-1
          lg:order-2
          relative
          lg:col-span-5
          lg:col-start-7
          "
        >
          <ProjectCinematicFrame
            image={image}
            alt="Project interface detail"
            minHeight="min-h-[240px] sm:min-h-[320px] md:min-h-[420px]"
          />
        </div>
      </section>
    </FadeIn>
  );
}
