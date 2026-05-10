export const monochromeContactScene = {
  texture: {
    image: "/textures/stone/hubert-buratynski--monochrome.jpg",

    opacity: "opacity-[0.10]",

    size: "cover",

    position: "center",
  },

  atmosphere: {
    primary: {
      position: `
        left-[-12%]
        top-[16%]
      `,

      size: `
        h-[26rem]
        w-[26rem]

        lg:h-[36rem]
        lg:w-[36rem]
      `,

      background: `
        radial-gradient(
          circle,
          rgba(255,255,255,0.08),
          transparent 72%
        )
      `,

      opacity: "opacity-[0.08]",
    },
  },

  dividers: {
    vertical: {
      visibility: "hidden xl:block",

      width: "w-px",

      color: "border-white/[0.05]",
    },
  },

  layout: {
    sectionPadding: `
      py-32
      md:py-36
      lg:py-44
      xl:py-60
    `,
  },
};
