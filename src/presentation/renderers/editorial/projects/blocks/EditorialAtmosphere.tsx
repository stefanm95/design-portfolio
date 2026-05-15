import FadeIn from "@/presentation/animation/FadeIn";

import Heading from "@/design/typography/Heading";
import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";

import { ui } from "@/theme";

import ProjectCinematicFrame from "@/presentation/shared/ProjectCinematicFrame";

import type {
  EditorialPresentationBlock,
  PresentationBlockRendererProps,
} from "@/presentation/renderers/types";

type Props = PresentationBlockRendererProps<EditorialPresentationBlock>;

export default function EditorialAtmosphere({ project }: Props) {
  const image = project.media.atmosphere?.[0];

  const content = project.editorial?.atmosphere;

  if (!image || !content) {
    return null;
  }

  return (
    <FadeIn>
      <section
        className="
          grid
          gap-y-10
          lg:items-start
          lg:gap-14
          lg:grid-cols-12
        "
      >
        {/* VISUAL */}
        <div
          className="
            relative
            order-1
            lg:col-span-5
            lg:mt-6
          "
        >
          <ProjectCinematicFrame
            image={image}
            alt="Project atmosphere"
            minHeight="min-h-[240px] sm:min-h-[320px] md:min-h-[420px]"
          />
        </div>

        {/* CONTENT */}
        <div
          className="
            order-2
            lg:col-span-5
            lg:col-start-8
            lg:mt-20
          "
        >
          <div className="max-w-lg space-y-8">
            <div className="space-y-4">
              <Label>{content.label}</Label>

              <Heading
                as="h3"
                className={`
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  leading-[0.94]
                  tracking-[-0.05em]
                  ${ui.text.primary}
                `}
              >
                {content.heading}
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
              {content.description}
            </Text>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
