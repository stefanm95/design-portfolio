export const monochromeExperienceScene = {
  texture: {
    image: "/textures/concrete/concrete-wall.jpg",

    opacity: "opacity-[0.10]",

    blur: "blur-[1px]",

    scale: "scale-[1.04]",
  },

  atmosphere: {
    primary: {
      position: `
        left-[-10%]
        top-[6%]
      `,

      size: `
        h-[420px]
        w-[420px]

        lg:h-[620px]
        lg:w-[620px]
      `,

      background: "bg-white/[0.05]",
    },

    secondary: {
      position: `
        bottom-[-10%]
        right-[-10%]
      `,

      size: `
        h-[500px]
        w-[500px]

        lg:h-[680px]
        lg:w-[680px]
      `,

      background: "bg-white/[0.03]",
    },
  },

  lightColumn: {
    width: `
      w-[120px]
      lg:w-[180px]
    `,

    blur: "blur-3xl",

    background: `
      bg-linear-to-b
      from-transparent
      via-white/[0.025]
      to-transparent
    `,
  },

  falloff: {
    vignette: `
      radial-gradient(
        circle at center,
        transparent 34%,
        rgba(0,0,0,0.82) 100%
      )
    `,

    edge: `
      linear-gradient(
        to left,
        rgba(0,0,0,0.55),
        transparent
      )
    `,
  },
};
