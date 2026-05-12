import FadeIn from "@/presentation/animation/FadeIn";

import Heading from "@/design/typography/Heading";
import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";

import { ui, useTheme } from "@/theme";

import ProjectCinematicFrame from "@/presentation/shared/ProjectCinematicFrame";
import type { ProjectBlockProps } from "@/types/projects";

export default function CinematicServices({ project }: ProjectBlockProps) {
  const services = project.media.services ?? [];
  const { theme } = useTheme();
  const showcase = theme.showcase;

  return (
    <section className="space-y-20">
      {/* INTRO */}
      <div className="max-w-[760px] space-y-8">
        <Label>SERVICE ARCHITECTURE</Label>

        <Heading as="h3" className="max-w-[12ch]">
          Spatial service presentation with editorial pacing.
        </Heading>

        <Text
          className={`
            max-w-[40ch]
            leading-[1.9]

            ${ui.text.narrative}
          `}
        >
          Structured navigation systems, cinematic service galleries, and
          layered visual hierarchy designed to create clarity while preserving
          immersive atmosphere.
        </Text>
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-12 gap-10">
        {services.map((image, index) => {
          const isPrimary = index === 0;

          return (
            <FadeIn key={image} delay={index * 0.1}>
              <div
                className={`
                  relative

                  ${
                    isPrimary
                      ? "col-span-12 xl:col-span-8"
                      : "col-span-12 xl:col-span-4"
                  }
                `}
              >
                <ProjectCinematicFrame
                  image={image}
                  alt={`Service showcase ${index + 1}`}
                  imageFit="cover"
                  minHeight={
                    isPrimary
                      ? "min-h-[420px] xl:min-h-[720px]"
                      : "min-h-[320px] xl:min-h-[720px]"
                  }
                  className={`
                    ${showcase.surfaces.base}
                    border
                    ${showcase.surfaces.border}
                  `}
                />

                {/* OPTIONAL ATMOSPHERIC BLOOM */}
                <div
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    opacity-50
                    blur-md
                  "
                  style={{
                    background: showcase.blooms.secondary,
                  }}
                />
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
