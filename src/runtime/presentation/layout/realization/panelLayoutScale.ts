export const panelLayoutScale = {
  cinematic: {
    root: `
            relative
            h-full
            overflow-hidden
          `,

    image: `
            absolute
            inset-0
      
            scale-[1.04]
      
            opacity-[0.22]
          `,

    gradient: `
            absolute
            inset-0
      
            bg-gradient-to-br
            from-black/10
            via-black/45
            to-black/80
          `,

    bloom: `
            absolute
            left-[-10%]
            top-[20%]
      
            h-[18rem]
            w-[18rem]
      
            rounded-full
            blur-sm
      
            opacity-[0.12]
          `,

    content: `
            relative
            z-10
      
            flex
            h-full
            flex-col
            justify-between
      
            p-10
          `,

    header: `
            space-y-6
          `,
  },
};
