import Heading from "@/design/typography/Heading";
import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";

import RightSideVisual from "@/design/visuals/RightSideVisual";

import { ui } from "@/theme";

import type { ProjectBlockProps } from "@/types/projects";

import { useState } from "react";

import ArchitecturalMobileCarousel from "./CinematicMobileCarousel";
import ArchitecturalMobileStack from "./CinematicMobileStack";

export default function CinematicMobile({ project }: ProjectBlockProps) {
  const mobile = project.media.mobile ?? [];

  const content = project.cinematic?.mobile;

  const [active, setActive] = useState(1);

  if (mobile.length < 3 || !content) return null;

  return (
    <section
      className="
        relative
        overflow-hidden

        py-16
        md:py-20
        xl:py-28
      "
    >
      <div className="hidden md:block">
        <RightSideVisual />
      </div>

      <div
        className="
          grid
          grid-cols-1

          gap-y-16
          lg:gap-y-20

          xl:grid-cols-12
          xl:items-center
          xl:gap-x-20
        "
      >
        {/* VISUALS */}
        <div
          className="
            order-2
            col-span-12

            md:col-span-7

            xl:order-1
            xl:col-span-7
          "
        >
          {/* TABLET + SMALL LAPTOP */}
          <div className="hidden sm:block md:hidden">
            <ArchitecturalMobileStack images={mobile} />
          </div>

          {/* DESKTOP */}
          <div className="hidden md:block">
            <ArchitecturalMobileCarousel
              images={mobile}
              active={active}
              setActive={setActive}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div
          className="
            order-1
            col-span-12

            xl:order-2
            xl:col-span-5
          "
        >
          <div
            className="
              relative
              max-w-[32rem]

              space-y-6
              sm:space-y-8
              lg:space-y-10

              xl:sticky
              xl:top-32
            "
          >
            <Label>{content.label}</Label>

            <Heading
              as="h3"
              className="
                max-w-[10ch]

                text-3xl
                sm:text-4xl
                md:text-5xl
                xl:text-6xl
              "
            >
              {content.heading}
            </Heading>

            <Text
              className={`
                max-w-[32ch]
                leading-[1.9]

                ${ui.text.narrative}
              `}
            >
              {content.description}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
