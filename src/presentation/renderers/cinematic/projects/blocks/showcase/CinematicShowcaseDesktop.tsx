import FadeIn from "@/presentation/animation/FadeIn";

import Heading from "@/design/typography/Heading";
import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";

import ProjectCinematicFrame from "@/presentation/shared/ProjectCinematicFrame";

import { ui } from "@/theme";

import CinematicShowcaseSwitcher from "./CinematicShowcaseSwitcher";

import type { PresentationBlockRendererProps } from "@/presentation/renderers/types";

import type { CinematicPresentationBlock } from "@/types";

type Props = PresentationBlockRendererProps<CinematicPresentationBlock> & {
  active: number;

  setActive: React.Dispatch<React.SetStateAction<number>>;
};

export default function CinematicShowcaseDesktop({
  project,
  runtime,
  active,
  setActive,
}: Props) {
  //
  // CONTENT
  //

  const showcase = project.media.showcase ?? [];

  const content = project.cinematic?.showcase;

  const primary = showcase[active];

  //
  // LAYOUT
  //

  const layout = runtime.layout.project.cinematic.showcase.desktop;

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
      <div className={layout.intro}>
        <Label>{content.label}</Label>

        <Heading as='h3' className='max-w-[24ch]'>
          {content.heading}
        </Heading>

        <Text
          className={`
            max-w-[38ch]
            leading-[1.9]

            ${ui.text.narrative}
          `}
        >
          {content.description}
        </Text>
      </div>

      {/* SHOWCASE */}
      <FadeIn key={primary}>
        <ProjectCinematicFrame
          image={primary}
          imageFit='cover'
          minHeight='min-h-[620px]'
          className='bg-black/20'
        />
      </FadeIn>

      {/* SWITCHER */}
      <div className={layout.switcherWrap}>
        <CinematicShowcaseSwitcher
          showcase={showcase}
          active={active}
          setActive={setActive}
          layout={runtime.layout.project.cinematic.showcase.switcher}
        />
      </div>
    </section>
  );
}
