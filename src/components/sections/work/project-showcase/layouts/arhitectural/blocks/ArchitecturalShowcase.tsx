import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";

import type { ProjectBlockProps } from "../../../types";

export default function ArchitecturalShowcase({ project }: ProjectBlockProps) {
  const primary = project.media.showcase?.[0];
  const secondary = project.media.showcase?.[1];

  if (!primary || !secondary) {
    return null;
  }

  return (
    <FadeIn>
      <section className='space-y-28'>
        <div className='grid grid-cols-12 gap-y-14 xl:gap-x-14'>
          <div className='col-span-12 xl:col-span-7'>
            <div
              className='
                relative
                overflow-hidden

                border
                border-white/6

                bg-black/20
              '
            >
              <img
                alt='Project showcase grid'
                className='h-full w-full object-cover'
                src={primary}
              />
            </div>
          </div>

          <div
            className='
              col-span-12

              flex items-end

              xl:col-span-4
              xl:col-start-9
            '
          >
            <div className='space-y-8'>
              <Label>Immersive Showcase System</Label>

              <Heading
                as='h3'
                className='
                  text-4xl
                  leading-[0.92]
                  tracking-[-0.06em]

                  text-white/92

                  md:text-5xl
                '
              >
                Fullscreen project experiences designed for spatial immersion.
              </Heading>

              <Text
                className='
                  max-w-[34ch]

                  text-[15px]
                  leading-[1.9]

                  text-white/40
                '
              >
                Projects are presented through layered fullscreen experiences
                that prioritize atmosphere, visual pacing, and cinematic user
                focus.
              </Text>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-12 gap-y-14 xl:gap-x-14'>
          <div className='col-span-12 xl:col-span-5 xl:col-start-2'>
            <div className='space-y-8'>
              <Label>Modal Interaction Design</Label>

              <Heading
                as='h3'
                className='
                  max-w-[10ch]

                  text-4xl
                  leading-[0.92]
                  tracking-[-0.06em]

                  text-white/92

                  md:text-5xl
                '
              >
                Layered interface systems focused on clarity and depth.
              </Heading>

              <Text
                className='
                  max-w-[32ch]

                  text-[15px]
                  leading-[1.9]

                  text-white/38
                '
              >
                Motion, overlays, transitions, and fullscreen compositions work
                together to create a premium interactive browsing experience.
              </Text>
            </div>
          </div>

          <div className='col-span-12 xl:col-span-5 xl:col-start-8'>
            <div
              className='
                relative
                overflow-hidden

                border
                border-white/6

                bg-black/20
              '
            >
              <img
                alt='Immersive project modal'
                className='h-full w-full object-cover'
                src={secondary}
              />
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
