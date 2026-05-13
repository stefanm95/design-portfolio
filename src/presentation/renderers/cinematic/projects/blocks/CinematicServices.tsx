import FadeIn from "@/presentation/animation/FadeIn";

import Heading from "@/design/typography/Heading";
import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";

import ProjectCinematicFrame from "@/presentation/shared/ProjectCinematicFrame";

import { projectComposition } from "@/runtime/presentation/composition";

import { ui, useTheme } from "@/theme";

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

  const composition = projectComposition.cinematic.systems;

  if (!system || !content) {
    return null;
  }

  return (
    <section className={composition.section}>
      {/* LEFT */}
      <div className={composition.left}>
        <div className={composition.leftInner}>
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
      <div className={composition.right}>
        <FadeIn>
          <div className={composition.visual}>
            {/* MAIN VISUAL */}
            <ProjectCinematicFrame
              image={system}
              alt={content.heading}
              imageFit="contain"
              minHeight="min-h-[420px] xl:min-h-[760px]"
              className={`
                border

                ${showcase.surfaces.base}
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
