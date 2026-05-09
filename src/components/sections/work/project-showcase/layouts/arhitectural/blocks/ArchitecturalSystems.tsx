import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";

import type { ProjectBlockProps } from "../../../types";

export default function ArchitecturalSystems({ project }: ProjectBlockProps) {
  const system = project.media.systems?.[0];

  if (!system) return null;

  return (
    <section className='grid grid-cols-12 gap-y-20 xl:gap-x-16'>
      {/* LEFT */}
      <div className='col-span-12 xl:col-span-5'>
        <div className='sticky top-32 space-y-10'>
          <Label>PROCESS & SYSTEMS</Label>

          <Heading as='h3' className='max-w-[10ch]'>
            Structured interaction translated into cinematic rhythm.
          </Heading>

          <Text
            className='
              max-w-[32ch]

              leading-[1.9]
              text-white/44
            '
          >
            Clear service flows, process hierarchy, and restrained motion
            systems designed to support immersive navigation without
            overwhelming the experience.
          </Text>
        </div>
      </div>

      {/* RIGHT */}
      <div className='col-span-12 xl:col-span-7'>
        <FadeIn>
          <div
            className='
              overflow-hidden

              border
              border-white/[0.06]
            '
          >
            <img src={system} alt='' className='w-full object-cover' />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
