export const projectLayoutScale = {
  cinematic: {
    systems: {
      section: `
        relative
        grid
        grid-cols-12
        gap-y-20
        xl:gap-x-20
      `,

      left: `
        col-span-12
        xl:col-span-4
      `,

      leftInner: `
        space-y-8
        xl:sticky
        xl:top-24
        2xl:top-32
      `,

      right: `
        col-span-12
        xl:col-span-8
      `,

      visual: `
        relative
        xl:translate-y-12
      `,
    },

    services: {
      section: `
        space-y-20
      `,

      intro: `
        max-w-[760px]
        space-y-8
      `,

      grid: `
        grid
        grid-cols-12
        gap-10
      `,

      primary: `
        col-span-12
        xl:col-span-8
      `,

      secondary: `
        col-span-12
        xl:col-span-4
      `,
    },

    mobile: {
      section: `
        relative
        overflow-hidden

        py-16
        md:py-20
        xl:py-28
      `,

      environment: `
        hidden
        md:block
      `,

      grid: `
        grid
        grid-cols-1

        gap-y-16
        lg:gap-y-20

        xl:grid-cols-12
        xl:items-center
        xl:gap-x-20
      `,

      visuals: `
        order-2
        col-span-12

        md:col-span-7

        xl:order-1
        xl:col-span-7
      `,

      tablet: `
        hidden
        sm:block
        md:hidden
      `,

      desktop: `
        hidden
        md:block
      `,

      content: `
        order-1
        col-span-12

        xl:order-2
        xl:col-span-5
      `,

      contentInner: `
        relative
        max-w-[32rem]

        space-y-6
        sm:space-y-8
        lg:space-y-10

        xl:sticky
        xl:top-32
      `,

      carousel: {
        root: `
          relative
          flex
          w-full
          items-center
          justify-center

          md:bottom-40
          md:left-20

          xl:bottom-0

          min-h-[560px]
          lg:min-h-[620px]
          xl:min-h-[720px]
        `,

        glow: `
          absolute

          h-[420px]
          w-[420px]

          rounded-full
          opacity-50
          blur-sm
        `,

        stage: `
          relative
          flex

          h-[720px]
          w-full
          max-w-[920px]

          items-center
          justify-center
        `,
      },

      stack: {
        root: `
          relative
          flex
          flex-col

          gap-5
          sm:gap-6
        `,

        main: `
          relative
          overflow-hidden

          aspect-[16/10]

          bg-black/20
        `,

        mainGlow: `
          absolute
          inset-0
          z-[1]

          opacity-40
          blur-sm

          bg-[radial-gradient(circle_at_50%_30%,rgba(103,80,255,0.12),transparent_70%)]
        `,

        mainImage: `
          relative
          z-[2]

          h-full
          w-full

          object-cover
          object-top

          scale-[1.02]

          shadow-[0_30px_90px_rgba(0,0,0,0.45)]
        `,

        overlay: `
          absolute
          inset-0
          z-[3]
        `,

        secondaryGrid: `
          grid
          grid-cols-2
          gap-4
        `,

        secondary: `
          relative
          overflow-hidden

          aspect-[4/3]
        `,

        secondaryImage: `
          h-full
          w-full

          object-cover
          object-top

          opacity-80

          shadow-[0_18px_50px_rgba(0,0,0,0.28)]
        `,
      },
    },

    showcase: {
      desktop: {
        section: `
          relative
          hidden
          md:block
        `,

        intro: `
          mb-20
          md:mb-24

          max-w-[760px]

          space-y-8
        `,

        switcherWrap: `
          mt-8
          lg:mt-10
        `,
      },

      mobile: {
        section: `
          relative
          block
          md:hidden
        `,

        intro: `
          mb-16
          space-y-7
        `,

        switcherWrap: `
          mt-6
        `,
      },

      switcher: {
        root: `
          flex
          items-center
          gap-3

          overflow-x-auto

          pb-2
        `,

        desktop: `
          justify-start
          lg:gap-4
        `,

        mobile: `
          snap-x
          snap-mandatory
        `,

        button: `
          group
          relative
          shrink-0
          cursor-pointer
          overflow-hidden

          transition-all
          duration-500
        `,

        buttonDesktop: `
          w-[140px]
          lg:w-[160px]
        `,

        buttonMobile: `
          w-[92px]
          snap-start
        `,

        image: `
          w-full
          object-cover

          transition-all
          duration-700
        `,

        activeImage: `
          opacity-100
          scale-100
        `,

        inactiveImage: `
          opacity-35
          scale-[0.985]
          group-hover:opacity-60
        `,

        activeOverlay: `
          absolute
          inset-0

          transition-opacity
          duration-500
        `,

        activeRing: `
          absolute
          inset-0

          ring-1
          ring-white/14
        `,
      },
    },
  },

  editorial: {
    showcase: {
      section: `
        grid
        grid-cols-1
        gap-y-10
        md:gap-y-14
        xl:grid-cols-12
        xl:gap-x-32
      `,

      left: `
        xl:col-span-4
      `,

      leftInner: `
        space-y-8
        xl:sticky
        xl:top-24
        2xl:top-32
      `,

      right: `
        xl:col-span-8
      `,
    },
  },
};
