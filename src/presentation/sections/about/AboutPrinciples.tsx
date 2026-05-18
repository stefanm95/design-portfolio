// AboutPrinciples.tsx

import { aboutContent } from "@/content/about";

import FadeIn from "@/presentation/animation/FadeIn";

import { resolveLayoutRuntime } from "@/runtime/presentation/layout/resolvers/resolveLayoutRuntime";

import { opacityClass, ui } from "@/theme";

export default function AboutPrinciples() {
  const { stack } = aboutContent;

  const layout = resolveLayoutRuntime();

  return (
    <section className={layout.about.principles.root}>
      {/* ATMOSPHERIC BASE */}
      <div
        className='
          absolute
          inset-0

          bg-transparent
        '
      />

      {/* STONE SLAB */}
      <div
        className='
          absolute

          left-[-140%]
          md:left-[-95%]
          xl:left-[-80%]

          top-1/2

          h-[140%]
          w-[400%]

          md:w-[240%]
          xl:w-[250%]

          -translate-y-1/2

          overflow-hidden

          rounded-r-[2rem]

          opacity-[0.22]
        '
      >
        <img
          src='/textures/stone/bekky-bekks-79k1zS6SnzY-unsplash.jpg'
          alt=''
          className='
            h-full
            w-full

            object-contain
            object-center

            scale-[0.82]
            md:scale-[0.78]
          '
        />

        {/* DARKEN */}
        <div
          className='
            absolute
            inset-0

            bg-black/45
          '
        />

        {/* LIGHT EDGE */}
        <div
          className={`
            absolute
            right-0
            top-0

            h-full
            w-px

            ${ui.dividers.subtle}
          `}
        />
      </div>

      {/* CYAN ATMOSPHERE */}
      <div
        className={`
          absolute

          left-[10%]
          md:left-[16%]
          xl:left-[22%]

          top-[48%]

          h-[18rem]
          w-[18rem]

          md:h-[22rem]
          md:w-[22rem]

          -translate-y-1/2

          rounded-full
          blur-sm

          ${opacityClass.subtle}
        `}
        style={{
          background:
            "radial-gradient(circle, rgba(80,180,255,0.28), transparent 72%)",
        }}
      />

      {/* CONTENT */}
      <div className={layout.about.principles.content}>
        {/* LEFT SPACER */}
        <div className='hidden xl:block xl:col-span-5' />

        {/* RIGHT CONTENT */}
        <div className={layout.about.principles.right}>
          <div className={layout.about.principles.stack}>
            <FadeIn>
              <div
                className={`
                  text-[11px]
                  uppercase
                  tracking-[0.34em]

                  ${ui.text.label}
                `}
              >
                {stack.label}
              </div>
            </FadeIn>

            <FadeIn delay={0.06}>
              <h2
                className={`
                  max-w-[12ch]

                  text-[2rem]
                  sm:text-[2.4rem]
                  md:text-5xl
                  lg:text-6xl

                  leading-[0.92]
                  tracking-[-0.05em]

                  ${ui.text.primary}
                `}
              >
                {stack.title}
              </h2>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p
                className={`
                  max-w-[26ch]
                  sm:max-w-[30ch]
                  md:max-w-[34ch]

                  text-[14px]
                  md:text-[15px]

                  leading-[1.85]

                  ${ui.text.narrative}
                `}
              >
                {stack.paragraph}
              </p>
            </FadeIn>

            {/* PRINCIPLES */}
            <FadeIn delay={0.18}>
              <div className={layout.about.principles.list}>
                {stack.list.map((item) => (
                  <div
                    key={item}
                    className={`
                      relative

                      pl-4

                      text-[11px]
                      sm:text-[12px]

                      uppercase
                      tracking-[0.22em]

                      ${ui.text.supporting}
                    `}
                  >
                    <div
                      className={`
                        absolute
                        left-0
                        top-1/2

                        h-px
                        w-2

                        -translate-y-1/2

                        ${ui.dividers.marker}
                      `}
                    />

                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
