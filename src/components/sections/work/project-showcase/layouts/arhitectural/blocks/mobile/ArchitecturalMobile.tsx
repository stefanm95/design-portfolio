import { useState } from "react";

import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";

import type { ProjectBlockProps } from "../../../../shared/types";

import RightSideVisual from "@/components/hero/RightSideVisual";

import ArchitecturalMobileCarousel from "./ArchitecturalMobileCarousel";
import ArchitecturalMobileStack from "./ArchitecturalMobileStack";

export default function ArchitecturalMobile({ project }: ProjectBlockProps) {
  const mobile = project.media.mobile ?? [];

  const [active, setActive] = useState(1);

  if (mobile.length < 3) return null;

  return (
    <section
      className='
        relative
    overflow-hidden

    py-16
    md:py-20
    xl:py-28
      '
    >
      <div className='hidden md:block'>
        <RightSideVisual />
      </div>

      <div
        className='
          grid
          grid-cols-12

          items-center

          gap-y-20
          xl:gap-x-20
        '
      >
        {/* VISUALS */}
        <div className='col-span-12 xl:col-span-7'>
          {/* MOBILE */}
          <div className='md:hidden'>
            <ArchitecturalMobileStack images={mobile} />
          </div>

          {/* TABLET + DESKTOP */}
          <div className='hidden md:block'>
            <ArchitecturalMobileCarousel
              images={mobile}
              active={active}
              setActive={setActive}
            />
          </div>
        </div>

        {/* TEXT */}
        <div className='col-span-12 xl:col-span-5'>
          <div className='space-y-8 md:sticky md:top-32 md:space-y-10'>
            <Label>RESPONSIVE EXPERIENCE</Label>

            <Heading as='h3' className='max-w-[10ch]'>
              Cinematic pacing preserved across every screen.
            </Heading>

            <Text
              className='
                max-w-[32ch]

                leading-[1.9]
                text-white/44
              '
            >
              Responsive layouts maintain atmosphere, hierarchy, and interaction
              quality while adapting seamlessly to smaller devices.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
