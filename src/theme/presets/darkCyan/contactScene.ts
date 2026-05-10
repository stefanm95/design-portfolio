export const darkCyanContactScene = {
  texture: {
    image: "/textures/stone/photo-ground-texture-pattern.jpg",

    opacity: "opacity-[0.20]",

    size: "cover",

    position: "center",
  },

  atmosphere: {
    primary: {
      position: `
        left-[-10%]
        md:left-[-8%]
        lg:left-[-10%]

        top-[20%]
      `,

      size: `
        h-[28rem]
        w-[28rem]

        md:h-[30rem]
        md:w-[30rem]

        lg:h-[34rem]
        lg:w-[34rem]
      `,

      background: `
        radial-gradient(
          circle,
          rgba(90,180,255,0.24),
          transparent 72%
        )
      `,

      opacity: "opacity-[0.10]",
    },
  },

  dividers: {
    vertical: {
      visibility: "hidden xl:block",

      width: "w-px",

      color: "border-white/[0.08]",
    },
  },

  layout: {
    sectionPadding: `
      py-28
      md:py-32
      lg:py-40
      xl:py-56
    `,
  },
};
