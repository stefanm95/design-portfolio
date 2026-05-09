import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";

import type { ProjectBlockProps } from "../../../types";

export default function ArchitecturalServices({ project }: ProjectBlockProps) {
  const services = project.media.services ?? [];

  return (
    <section className='space-y-20'>
      <div className='max-w-[760px] space-y-8'>
        <Label>SERVICE ARCHITECTURE</Label>

        <Heading as='h3' className='max-w-[12ch]'>
          Spatial service presentation with editorial pacing.
        </Heading>

        <Text
          className='
            max-w-[40ch]

            leading-[1.9]
            text-white/44
          '
        >
          Structured navigation systems, cinematic service galleries, and
          layered visual hierarchy designed to create clarity while preserving
          immersive atmosphere.
        </Text>
      </div>

      <div className='grid grid-cols-12 gap-10'>
        {services.map((image, index) => (
          <FadeIn key={image} delay={index * 0.1}>
            <div
              className={`
                overflow-hidden
                border
                border-white/[0.06]

                ${
                  index === 0
                    ? "col-span-12 xl:col-span-8"
                    : "col-span-12 xl:col-span-4"
                }
              `}
            >
              <img src={image} alt='' className='w-full object-cover' />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
