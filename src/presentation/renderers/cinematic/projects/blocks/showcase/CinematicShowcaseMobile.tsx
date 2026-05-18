"use client";

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

export default function CinematicShowcaseMobile({
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

  const layout = runtime.layout.project.cinematic.showcase.mobile;

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
        <Label>{content.mobileLabel}</Label>

        <Heading as='h3' className='max-w-[12ch]'>
          {content.mobileHeading}
        </Heading>

        <Text
          className={`
            max-w-[30ch]
            leading-[1.85]

            ${ui.text.narrative}
          `}
        >
          {content.mobileDescription}
        </Text>
      </div>

      {/* ACTIVE FRAME */}
      <FadeIn key={primary}>
        <a
          title={project.title}
          href={project.liveUrl}
          target='_blank'
          rel='noreferrer'
          className='block'
        >
          <ProjectCinematicFrame
            image={primary}
            imageFit='cover'
            minHeight='min-h-[320px]'
            className='bg-black/20'
          />
        </a>
      </FadeIn>

      {/* SWITCHER */}
      <div className={layout.switcherWrap}>
        <CinematicShowcaseSwitcher
          showcase={showcase}
          active={active}
          setActive={setActive}
          mobile
          layout={runtime.layout.project.cinematic.showcase.switcher}
        />
      </div>
    </section>
  );
}
