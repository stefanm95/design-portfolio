import FadeIn from "@/presentation/animation/FadeIn";

import Heading from "@/design/typography/Heading";
import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";

import { ui } from "@/theme";

import type { Project } from "@/types/projects";

import ProjectCinematicFrame from "@/presentation/shared/ProjectCinematicFrame";
import ArchitecturalShowcaseSwitcher from "./CinematicShowcaseSwitcher";

type Props = {
  project: Project;
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

  return (
    <section className="relative hidden md:block">
      {/* INTRO */}
      <div className="mb-20 max-w-[760px] space-y-8 md:mb-24">
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

      {/* MAIN VISUAL */}
      <FadeIn key={primary}>
        <ProjectCinematicFrame
          image={primary}
          imageFit="cover"
          minHeight="min-h-[620px]"
          className="bg-black/20"
        />
      </FadeIn>

      {/* SWITCHER */}
      <div className="mt-8 lg:mt-10">
        <ArchitecturalShowcaseSwitcher
          showcase={showcase}
          active={active}
          setActive={setActive}
        />
      </div>
    </section>
  );
}
