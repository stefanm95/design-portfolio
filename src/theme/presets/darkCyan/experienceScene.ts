export const darkCyanExperienceScene = {
  texture: {
    image: "/textures/glass/nik-shuliahin-xE3S9mjUjqA-unsplash.jpg",

    opacity: "opacity-[0.14]",

    blur: "blur-[2px]",

    scale: "scale-[1.08]",
  },

  atmosphere: {
    primary: {
      position: `
        left-[-8%]
        top-[4%]
      `,

      size: `
        h-[420px]
        w-[420px]

        lg:h-[560px]
        lg:w-[760px]
      `,

      background: "bg-blue-500/14",
    },

    secondary: {
      position: `
        bottom-[-6%]
        right-[-8%]
      `,

      size: `
        h-[460px]
        w-[460px]

        lg:h-[640px]
        lg:w-[640px]
      `,

      background: "bg-orange-400/14",
    },
  },

  lightColumn: {
    width: `
      w-[100px]
      lg:w-[140px]
    `,

    blur: "blur-2xl",

    background: `
      bg-linear-to-b
      from-transparent
      via-white/[0.035]
      to-transparent
    `,
  },

  falloff: {
    vignette: `
      radial-gradient(
        circle at center,
        transparent 38%,
        rgba(0,0,0,0.74) 100%
      )
    `,

    edge: `
      linear-gradient(
        to left,
        rgba(0,0,0,0.4),
        transparent
      )
    `,
  },
};
