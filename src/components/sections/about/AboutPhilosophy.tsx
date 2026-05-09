import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";

export default function AboutPhilosophy() {
  return (
    <div className='grid grid-cols-12 gap-y-14 xl:gap-x-16'>
      {/* LEFT */}
      <div className='col-span-12 xl:col-span-5'>
        <FadeIn>
          <Heading as='h3' className='max-w-[12ch]'>
            Building immersive digital systems through atmosphere and rhythm.
          </Heading>
        </FadeIn>
      </div>

      {/* RIGHT */}
      <div className='col-span-12 xl:col-span-7'>
        <FadeIn delay={0.12}>
          <div className='space-y-8'>
            <Text
              className='
                max-w-[42ch]

                text-[16px]
                leading-[2]

                text-white/46
              '
            >
              My work focuses on cinematic interaction systems, editorial
              composition, motion hierarchy, and immersive frontend
              presentation.
            </Text>

            <Text
              className='
                max-w-[42ch]

                text-[16px]
                leading-[2]

                text-white/34
              '
            >
              I’m especially interested in how pacing, spacing, typography, and
              restrained motion can transform interfaces from functional layouts
              into emotionally memorable experiences.
            </Text>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
