import FadeIn from "@/presentation/animation/FadeIn";

import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";

import { experienceContent } from "@/content/experience";
import Container from "@/design/layout/Container";
import Section from "@/design/layout/Section";
import Heading from "@/design/typography/Heading";
import { dividersGradients, ui } from "@/theme";
import ExperienceVisual from "./ExperienceVisual";

export default function Experience() {
  const { hero } = experienceContent;

  return (
    <Section
      id="experience"
      className="relative overflow-hidden md:py-40 xl:py-48"
    >
      {/* BACKGROUND ATMOSPHERE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* BLUE LIGHT */}
        <div
          className="
            absolute
            left-[8%]
            top-[10%]

            h-[620px]
            w-[620px]

            rounded-full
            blur-sm

            bg-blue-500/10
          "
        />

        {/* WARM LIGHT */}
        <div
          className="
            absolute
            bottom-[0%]
            right-[0%]

            h-[720px]
            w-[720px]

            rounded-full
            blur-sm

            bg-orange-400/10
          "
        />

        {/* CENTRAL VERTICAL LIGHT */}
        <div
          className={`
            absolute
            left-1/2
            top-0

            h-full
            w-px

            -translate-x-1/2

            ${dividersGradients.verticalSubtle}
          `}
        />

        {/* VIGNETTE */}
        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]
          "
        />
      </div>

      <Container className="relative z-10">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[minmax(0,1.15fr)_520px]
            items-center
            gap-16
            md:gap-20
            lg:gap-24
          "
        >
          {/* LEFT SIDE */}
          <FadeIn>
            <div className="relative max-w-[760px]">
              {/* LABEL */}
              <Label className={ui.text.context}>{hero.label}</Label>

              {/* TITLE */}
              <div className="relative mt-8">
                {/* SUBTLE GLOW */}
                <div
                  className={`
                    absolute
                    -left-10
                    top-10
                    
                    h-40
                    w-40
                    
                    rounded-full
                    blur-sm
                    
                    ${ui.surfaces.faint}
                  `}
                />

                <Heading
                  className="
                  relative
                  z-10
                                
                  text-[clamp(3rem,6vw,6.8rem)]
                                
                  md:text-[clamp(3.6rem,6vw,5.6rem)]
                  xl:text-[clamp(4.8rem,7vw,6.8rem)]
                                
                  leading-[0.9]
                  tracking-[-0.06em]
                                
                  text-transparent
                  bg-clip-text
                                
                  bg-[linear-gradient(180deg,rgba(240,244,248,0.98)_0%,rgba(210,220,228,0.92)_50%,rgba(214,195,161,0.88)_100%)]
                                
                  drop-shadow-[0_0_30px_rgba(255,255,255,0.03)]
                "
                >
                  <span className="block">{hero.title.line1}</span>

                  <span className="block ml-[0.04em]">{hero.title.line2}</span>

                  <span className="block">{hero.title.line3}.</span>
                </Heading>
              </div>

              {/* DIVIDER */}
              <div
                className={`
                mt-10
                h-px
                w-24

                ${dividersGradients.leadIn}
              `}
              />

              {/* DESCRIPTION */}
              <Text
                className={`
                mt-8
                max-w-[420px]

                text-sm
                leading-[1.9]
                ${ui.text.link}
              `}
              >
                {hero.description}
              </Text>

              {/* MINI TAGS */}
              <div
                className="
                 mt-12

                 flex
                 flex-wrap
                 gap-3
               "
              >
                {hero.tags.map((item) => (
                  <div
                    key={item}
                    className={`
                    border
                    ${ui.borders.quiet}
                            
                    ${ui.surfaces.tag}
                            
                    px-4
                    py-2
                            
                    text-[10px]
                    uppercase
                    tracking-[0.22em]
                    ${ui.text.tertiary}
                            
                    backdrop-blur-sm
                  `}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* RIGHT SIDE */}
          <ExperienceVisual />
        </div>
      </Container>
    </Section>
  );
}
