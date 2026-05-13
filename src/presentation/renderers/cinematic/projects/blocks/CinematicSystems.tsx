import FadeIn from "@/presentation/animation/FadeIn";

import Heading from "@/design/typography/Heading";
import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";

import { ui, useTheme } from "@/theme";

import ProjectCinematicFrame from "@/presentation/shared/ProjectCinematicFrame";

import type {
  CinematicPresentationBlock,
  PresentationBlockRendererProps,
} from "@/runtime/presentation/types";

type Props = PresentationBlockRendererProps<CinematicPresentationBlock>;

export default function CinematicSystems({ project, block, index }: Props) {
  const system = project.media.systems?.[0];

  const content = project.cinematic?.systems;

  const { theme } = useTheme();

  const showcase = theme.showcase;

  if (!system || !content) {
    return null;
  }

  return (
    <section
      className="
        relative
        grid
        grid-cols-12
        gap-y-20
        xl:gap-x-20
      "
    >
      {/* LEFT */}
      <div className="col-span-12 xl:col-span-4">
        <div
          className="
            space-y-8
            xl:sticky
            xl:top-24
            2xl:top-32
          "
        >
          <Label>{content.label}</Label>

          <Heading as="h3" className="max-w-[11ch]">
            {content.heading}
          </Heading>

          <Text
            className={`
              max-w-[32ch]
              leading-[1.9]
              ${ui.text.narrative}
            `}
          >
            {content.description}
          </Text>
        </div>
      </div>

      {/* RIGHT */}
      <div className="col-span-12 xl:col-span-8">
        <FadeIn>
          <div
            className="
              relative
              xl:translate-y-12
            "
          >
            {/* MAIN VISUAL */}
            <ProjectCinematicFrame
              image={system}
              alt={content.heading}
              imageFit="contain"
              minHeight="min-h-[420px] xl:min-h-[760px]"
              className={`
                ${showcase.surfaces.base}
                border
                ${showcase.surfaces.border}
              `}
            />

            {/* ATMOSPHERIC BLOOM */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-60
                blur-md
              "
              style={{
                background: showcase.blooms.secondary,
              }}
            />

            {/* FLOATING DETAIL */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-10
                left-10
                hidden
                xl:block
              "
            >
              <div
                className={`
                  flex
                  items-center
                  gap-3
                  text-[10px]
                  uppercase
                  tracking-[0.24em]
                  ${ui.text.muted}
                `}
              >
                <div
                  className={`
                    h-px
                    w-16
                    ${ui.surfaces.chip}
                  `}
                />

                <span>{content.floatingLabel}</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
