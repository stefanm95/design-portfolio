import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";
import { ui } from "@/theme";

import type { Project } from "@/types/projects";

import ArchitecturalShowcaseSwitcher from "./ArchitecturalShowcaseSwitcher";
import ProjectCinematicFrame from "../../../../shared/ProjectCinematicFrame";

type Props = {
  project: Project;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

export default function ArchitecturalShowcaseMobile({
  project,
  active,
  setActive,
}: Props) {
  const showcase = project.media.showcase ?? [];

  const primary = showcase[active];

  return (
    <section className='relative block md:hidden'>
      {/* INTRO */}
      <div className='mb-16 space-y-7'>
        <Label>CURATED SHOWCASE</Label>

        <Heading as='h3' className='max-w-[12ch]'>
          Cinematic project exploration systems.
        </Heading>

        <Text
          className={`
            max-w-[30ch]
            leading-[1.85]
            ${ui.text.narrative}
          `}
        >
          Fullscreen project presentation designed with layered hierarchy and
          immersive visual pacing.
        </Text>
      </div>

      {/* MAIN VISUAL */}
      <FadeIn key={primary}>
        <a
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
      <div className='mt-6'>
        <ArchitecturalShowcaseSwitcher
          showcase={showcase}
          active={active}
          setActive={setActive}
          mobile
        />
      </div>
    </section>
  );
}
