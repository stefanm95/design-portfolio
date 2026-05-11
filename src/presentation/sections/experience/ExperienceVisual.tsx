import FadeIn from "@/components/motion/FadeIn";

import ExperiencePanel from "./ExperiencePanel";
import ExperienceVisualBackground from "./ExperienceVisualBackground";

import { experiencePanels } from "./experiencePanels";

export default function ExperienceVisual() {
  return (
    <FadeIn delay={0.2}>
      <div
        className='
          relative

          flex
          items-center
          justify-center

          min-h-[560px]

          lg:min-h-[760px]
        '
      >
        {/* EXTENDED ATMOSPHERIC BACKGROUND */}
        <div
          className='
            absolute
            inset-y-0

            left-[-5%]
            right-[-28%]

            hidden
            lg:block
          '
        >
          <ExperienceVisualBackground />
        </div>

        {/* MOBILE BACKGROUND */}
        <div
          className='
            absolute
            inset-0

            lg:hidden
          '
        >
          <ExperienceVisualBackground />
        </div>

        {/* CONTENT AREA */}
        <div
          className='
            relative
            z-10

            w-full
            max-w-[720px]

            min-h-[560px]

            lg:min-h-[780px]
            lg:max-w-[860px]
          '
        >
          {/* STACK */}
          <div
            className='
              group/stack
              relative

              flex
              flex-col

              gap-5

              px-6
              py-10

              sm:px-10

              lg:gap-0
              lg:px-0
              lg:py-0
            '
          >
            {experiencePanels.map((panel) => (
              <ExperiencePanel
                key={panel.id}
                id={panel.id}
                title={panel.title}
                description={panel.description}
                className={panel.className}
              />
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
