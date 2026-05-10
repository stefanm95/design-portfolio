import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";
import { rgba, ui } from "@/theme";

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
        <div rel='noreferrer' className='block'>
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
              className='
                w-full
                object-cover

                transition-transform
                duration-[2200ms]
                ease-out

                group-hover:scale-[0.98]
              '
            />

            {/* ATMOSPHERE */}
            <div
              className='
                absolute
                inset-0

                bg-linear-to-t
                from-black/50
                via-transparent
                to-black/10
              '
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
                background: `radial-gradient(circle at 72% 80%, ${rgba.purpleShowcase}, transparent 40%)`,
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
