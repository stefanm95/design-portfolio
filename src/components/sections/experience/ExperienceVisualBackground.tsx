export default function ExperienceVisualBackground() {
  return (
    <div
      className='
        absolute
        inset-0
        overflow-hidden
      '
    >
      {/* TEXTURE */}
      <img
        src='/textures/glass/nik-shuliahin-xE3S9mjUjqA-unsplash.jpg'
        alt=''
        className='
          absolute
          inset-0

          h-full
          w-full

          object-cover
          scale-[1.08]

          opacity-[0.14]
          blur-[2px]
        '
      />

      {/* BLUE ATMOSPHERE */}
      <div
        className='
          absolute
          left-[-8%]
          top-[4%]

          h-[420px]
          w-[420px]

          lg:h-[560px]
          lg:w-[760px]

          rounded-full
          blur-3xl

          bg-blue-500/14
        '
      />

      {/* WARM ATMOSPHERE */}
      <div
        className='
          absolute
          bottom-[-6%]
          right-[-8%]

          h-[460px]
          w-[460px]

          lg:h-[640px]
          lg:w-[640px]

          rounded-full
          blur-3xl

          bg-orange-400/14
        '
      />

      {/* CENTRAL LIGHT COLUMN */}
      <div
        className='
          absolute
          left-1/2
          top-0

          h-full
          w-[100px]

          lg:w-[140px]

          -translate-x-1/2

          bg-linear-to
          from-transparent
          via-white/[0.035]
          to-transparent

          blur-2xl
        '
      />

      {/* DEPTH FALLOFF */}
      <div
        className='
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_38%,rgba(0,0,0,0.74)_100%)]
        '
      />

      {/* EDGE DARKENING */}
      <div
        className='
          absolute
          inset-y-0
          right-0

          w-[20%]

          bg-linear-to
          from-black/40
          to-transparent
        '
      />
    </div>
  );
}
