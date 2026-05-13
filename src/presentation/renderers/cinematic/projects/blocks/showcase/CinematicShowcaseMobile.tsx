import FadeIn from "@/presentation/animation/FadeIn";

import Heading from "@/design/typography/Heading";
import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";

import { ui } from "@/theme";

import ProjectCinematicFrame from "@/presentation/shared/ProjectCinematicFrame";

import CinematicShowcaseSwitcher from "./CinematicShowcaseSwitcher";

import type { Project } from "@/types/projects";

import type { CinematicPresentationBlock } from "@/runtime/presentation/types";

type Props = {
  project: Project;

  block: CinematicPresentationBlock;

  index: number;

  active: number;

  setActive: React.Dispatch<React.SetStateAction<number>>;
};

export default function CinematicShowcaseMobile({
  project,
  active,
  setActive,
}: Props) {
  const showcase = project.media.showcase ?? [];

  const content = project.cinematic?.showcase;

  const primary = showcase[active];

  return (
    <section className="relative block md:hidden">
      <div className="mb-16 space-y-7">
        <Label>{content?.mobileLabel}</Label>

        <Heading as="h3" className="max-w-[12ch]">
          {content?.mobileHeading}
        </Heading>

        <Text
          className={`
            max-w-[30ch]
            leading-[1.85]

            ${ui.text.narrative}
          `}
        >
          {content?.mobileDescription}
        </Text>
      </div>

      <FadeIn key={primary}>
        <a
          title={project.title}
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="block"
        >
          <ProjectCinematicFrame
            image={primary}
            imageFit="cover"
            minHeight="min-h-[320px]"
            className="bg-black/20"
          />
        </a>
      </FadeIn>

      <div className="mt-6">
        <CinematicShowcaseSwitcher
          showcase={showcase}
          active={active}
          setActive={setActive}
          mobile
        />
      </div>
    </section>
  );
}
