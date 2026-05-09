import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";

import type { ProjectBlockProps } from "../../../types";
import RightSideVisual from "@/components/hero/RightSideVisual";

export default function ArchitecturalMobile({ project }: ProjectBlockProps) {
  const mobile = project.media.mobile ?? [];

  if (mobile.length < 3) return null;

  return (
    <section className='relative overflow-hidden py-10'>
      <RightSideVisual />
      {/* HEADER */}
      <div className='mb-28 max-w-[760px] space-y-8'>
        <Label>RESPONSIVE EXPERIENCE</Label>

        <Heading as='h3' className='max-w-[10ch]'>
          Cinematic pacing preserved across every screen.
        </Heading>

        <Text
          className='
            max-w-[38ch]

            leading-[1.9]
            text-white/44
          '
        >
          Responsive layouts maintain atmosphere, hierarchy, and interaction
          quality while adapting seamlessly to smaller devices.
        </Text>
      </div>

      {/* DEVICE COMPOSITION */}
      <div
        className='
          relative

          flex
          flex-wrap
          items-end
          justify-center

          gap-6
          xl:gap-12
        '
      >
        {/* LEFT */}
        <FadeIn delay={0.05}>
          <div className='w-[220px] translate-y-16 xl:w-[260px]'>
            <div
              className='
                overflow-hidden
                rounded-[28px]

                border
                border-white/[0.06]

                bg-white/[0.02]
                p-3
              '
            >
              <img src={mobile[0]} alt='' className='rounded-[20px]' />
            </div>
          </div>
        </FadeIn>

        {/* CENTER */}
        <FadeIn delay={0.15}>
          <div className='w-[260px] xl:w-[320px]'>
            <div
              className='
                overflow-hidden
                rounded-[32px]

                border
                border-white/[0.08]

                bg-white/[0.03]
                p-3

                shadow-[0_30px_80px_rgba(0,0,0,0.4)]
              '
            >
              <img src={mobile[1]} alt='' className='rounded-[24px]' />
            </div>
          </div>
        </FadeIn>

        {/* RIGHT */}
        <FadeIn delay={0.25}>
          <div className='w-[220px] translate-y-10 xl:w-[260px]'>
            <div
              className='
                overflow-hidden
                rounded-[28px]

                border
                border-white/[0.06]

                bg-white/[0.02]
                p-3
              '
            >
              <img src={mobile[2]} alt='' className='rounded-[20px]' />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
