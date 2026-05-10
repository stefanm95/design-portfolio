import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";

import { activeTheme, ui } from "@/theme";

import type { Project } from "@/types/projects";

import ArchitecturalShowcaseSwitcher from "./ArchitecturalShowcaseSwitcher";

type Props = {
  project: Project;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

export default function ArchitecturalShowcaseDesktop({
  project,
  active,
  setActive,
}: Props) {
  const showcase = project.media.showcase ?? [];

  const primary = showcase[active];

  const showcaseTheme = activeTheme.showcase;

  return (
    <section className='relative hidden md:block'>
      {/* INTRO */}
      <div className='mb-20 max-w-[760px] space-y-8 md:mb-24'>
        <Label>CURATED SHOWCASE</Label>

        <Heading as='h3' className='max-w-[24ch]'>
          Cinematic project exploration systems.
        </Heading>

        <Text
          className={`
            max-w-[38ch]
            leading-[1.9]

            ${ui.text.narrative}
          `}
        >
          Fullscreen project presentation designed with layered hierarchy,
          atmospheric transitions, and immersive visual pacing.
        </Text>
      </div>

      {/* MAIN VISUAL */}
      <FadeIn key={primary}>
        <div className='block'>
          <div
            className='
              group
              relative
              overflow-hidden

              bg-black/20

              cursor-pointer
            '
          >
            <img
              src={primary}
              alt=''
              className={`
                w-full
                object-cover

                ${showcaseTheme.image.transition}
                ${showcaseTheme.image.hoverScale}
              `}
            />

            {/* ATMOSPHERE */}
            <div
              className={`
                absolute
                inset-0

                ${showcaseTheme.overlays.cinematic}
              `}
            />

            {/* BLOOM */}
            <div
              className='
                absolute
                inset-0

                opacity-70
                blur-sm
              '
              style={{
                background: showcaseTheme.blooms.primary,
              }}
            />
          </div>
        </div>
      </FadeIn>

      {/* SWITCHER */}
      <div className='mt-8 lg:mt-10'>
        <ArchitecturalShowcaseSwitcher
          showcase={showcase}
          active={active}
          setActive={setActive}
        />
      </div>
    </section>
  );
}
