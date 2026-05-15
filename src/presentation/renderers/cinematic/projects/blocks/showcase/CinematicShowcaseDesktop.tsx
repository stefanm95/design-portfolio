import FadeIn from "@/presentation/animation/FadeIn";

import Heading from "@/design/typography/Heading";
import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";

import ProjectCinematicFrame from "@/presentation/shared/ProjectCinematicFrame";

import { projectComposition } from "@/runtime/presentation/composition";

import { ui } from "@/theme";

import CinematicShowcaseSwitcher from "./CinematicShowcaseSwitcher";

import type { CinematicPresentationBlock } from "@/presentation/renderers/types";
import type { Project } from "@/types/projects";

type Props = {
  project: Project;

  block: CinematicPresentationBlock;

  index: number;

  active: number;

  setActive: React.Dispatch<React.SetStateAction<number>>;
};

export default function CinematicShowcaseDesktop({
  project,
  active,
  setActive,
}: Props) {
  const showcase = project.media.showcase ?? [];

  const content = project.cinematic?.showcase;

  const primary = showcase[active];

  const composition = projectComposition.cinematic.showcase.desktop;

  return (
    <section className={composition.section}>
      <div className={composition.intro}>
        <Label>{content?.label}</Label>

        <Heading as="h3" className="max-w-[24ch]">
          {content?.heading}
        </Heading>

        <Text
          className={`
            max-w-[38ch]
            leading-[1.9]

            ${ui.text.narrative}
          `}
        >
          {content?.description}
        </Text>
      </div>

      <FadeIn key={primary}>
        <ProjectCinematicFrame
          image={primary}
          imageFit="cover"
          minHeight="min-h-[620px]"
          className="bg-black/20"
        />
      </FadeIn>

      <div className={composition.switcherWrap}>
        <CinematicShowcaseSwitcher
          showcase={showcase}
          active={active}
          setActive={setActive}
        />
      </div>
    </section>
  );
}
