import FadeIn from "@/presentation/animation/FadeIn";

import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";
import { ui } from "@/theme";

export default function AboutPhilosophy() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-14 lg:gap-x-16'>
      {/* LEFT */}
      <div className='col-span-1 md:col-span-12 lg:col-span-5'>
        <FadeIn>
          <Heading
            as='h3'
            className='max-w-[12ch] text-2xl md:text-3xl lg:text-4xl'
          >
            Building immersive digital systems through atmosphere and rhythm.
          </Heading>
        </FadeIn>
      </div>

      {/* RIGHT */}
      <div className='col-span-1 md:col-span-12 lg:col-span-7'>
        <FadeIn delay={0.12}>
          <div className='space-y-6 md:space-y-8'>
            <Text
              className={`
                max-w-[42ch]

                text-sm
                md:text-base
                lg:text-[16px]
                leading-[2]

                ${ui.text.reading}
              `}
            >
              My work focuses on cinematic interaction systems, editorial
              composition, motion hierarchy, and immersive frontend
              presentation.
            </Text>

            <Text
              className={`
                max-wsm
                md:text-base
                lg:text--[42ch]

                text-[16px]
                leading-[2]

                ${ui.text.muted}
              `}
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
