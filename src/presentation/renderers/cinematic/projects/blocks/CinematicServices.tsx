import FadeIn from "@/presentation/animation/FadeIn";

import Heading from "@/design/typography/Heading";
import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";

import ProjectCinematicFrame from "@/presentation/shared/ProjectCinematicFrame";

import { ui, useTheme } from "@/theme";

import type { PresentationBlockRendererProps } from "@/presentation/renderers/types";

import type { CinematicPresentationBlock } from "@/types";

type Props = PresentationBlockRendererProps<CinematicPresentationBlock>;

export default function CinematicServices({ project, runtime }: Props) {
  //
  // CONTENT
  //

  const primary = project.media.services?.[0];

  const secondary = project.media.services?.[1];

  const content = project.cinematic?.services;

  //
  // THEME
  //

  const { theme } = useTheme();

  const showcase = theme.showcase;

  //
  // LAYOUT
  //

  const layout = runtime.layout.project.cinematic.services;

  //
  // GUARD
  //

  if (!primary || !content) {
    return null;
  }

  //
  // RENDER
  //

  return (
    <section className={layout.section}>
      {/* INTRO */}
      <FadeIn>
        <div className={layout.intro}>
          <Label>{content.label}</Label>

          <Heading as='h3' className='max-w-[12ch]'>
            {content.heading}
          </Heading>

          <Text
            className={`
              max-w-[60ch]
              leading-[1.9]

              ${ui.text.narrative}
            `}
          >
            {content.description}
          </Text>
        </div>
      </FadeIn>

      {/* GRID */}
      <div className={layout.grid}>
        {/* PRIMARY */}
        <FadeIn>
          <div className={layout.primary}>
            <ProjectCinematicFrame
              image={primary}
              alt={content.heading}
              minHeight='min-h-[420px] xl:min-h-[720px]'
              className={`
                border

                ${showcase.surfaces.base}
                ${showcase.surfaces.border}
              `}
            />
          </div>
        </FadeIn>

        {/* SECONDARY */}
        {secondary ? (
          <FadeIn>
            <div className={layout.secondary}>
              <ProjectCinematicFrame
                image={secondary}
                alt={`${content.heading} secondary`}
                minHeight='min-h-[280px] xl:min-h-[420px]'
                className={`
                  border

                  ${showcase.surfaces.base}
                  ${showcase.surfaces.border}
                `}
              />
            </div>
          </FadeIn>
        ) : null}
      </div>
    </section>
  );
}
