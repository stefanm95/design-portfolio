export const obsidianGoldContactScene = {
  texture: {
    image: "/textures/obsidianGold/gold/pexels-karola-g-4.jpg",

    opacity: "opacity-[0.14]",

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
          rgba(212,175,55,0.10),
          transparent 72%
        )
      `,

      opacity: "opacity-[0.12]",
    },
  },

  dividers: {
    vertical: {
      visibility: "hidden xl:block",

      width: "w-px",

      color: "border-[#d4af37]/[0.06]",
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
