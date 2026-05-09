type Props = {
  id: string;
  title: string;
  description: string;
  className?: string;
};

export default function ExperiencePanel({
  id,
  title,
  description,
  className,
}: Props) {
  return (
    <div
      className={`
        group
        relative

        min-h-[150px]
        w-full

        sm:w-[300px]

        lg:h-50
        lg:w-[320px]

        overflow-hidden

        border
        border-white/5

        bg-white/2.5
        backdrop-blur-[20px]

        shadow-[0_12px_60px_rgba(0,0,0,0.22)]

        transition-all
        duration-1600
        ease-[cubic-bezier(0.22,1,0.36,1)]

        lg:group-hover/stack:opacity-40
        hover:opacity-100!

        hover:-translate-y-2
        lg:hover:translate-x-6
        hover:scale-[1.015]

        hover:z-20

        ${className}
      `}
    >
      {/* ATMOSPHERIC LIGHT */}
      <div
        className='
          absolute
          inset-0

          opacity-60

          bg-[radial-gradient(circle_at_20%_10%,rgba(120,160,255,0.10),transparent_34%),radial-gradient(circle_at_80%_90%,rgba(255,140,90,0.08),transparent_36%)]
        '
      />

      {/* GLASS REFLECTION */}
      <div
        className='
          absolute
          inset-0

          opacity-30
          mix-blend-screen
        '
        style={{
          background:
            "linear-gradient(120deg, transparent 15%, rgba(255,255,255,0.12) 45%, transparent 75%)",
        }}
      />

      {/* INNER SHADE */}
      <div
        className='
          absolute
          inset-0

          bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,transparent_40%,rgba(0,0,0,0.18)_100%)]
        '
      />

      {/* HOVER BLOOM */}
      <div
        className='
          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-700

          group-hover:opacity-100

          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_72%)]
        '
      />

      {/* CONTENT */}
      <div
        className='
          relative
          z-10

          flex
          h-full
          flex-col
          justify-between

          p-5
          lg:p-7
        '
      >
        {/* ID */}
        <span
          className='
            text-[9px]
            tracking-[0.32em]
            text-white/18
          '
        >
          {id}
        </span>

        <div>
          {/* TITLE */}
          <h3
            className='
              max-w-[190px]

              text-[16px]
              leading-[1]

              sm:text-[18px]
              lg:text-[20px]

              font-light
              tracking-[-0.04em]

              text-white/72

              transition-all
              duration-700

              group-hover:text-white
            '
          >
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className='
              mt-4
              max-w-[210px]

              text-[12px]
              leading-[1.8]

              text-white/40

              transition-all
              duration-1000
              ease-out

              opacity-100
              translate-y-0

              lg:opacity-0
              lg:translate-y-3

              lg:group-hover:translate-y-0
              lg:group-hover:opacity-100
            '
          >
            {description}
          </p>
        </div>
      </div>

      {/* EDGE LIGHT */}
      <div
        className='
          absolute
          inset-y-0
          left-0

          w-px

          bg-linear-to-b
          from-transparent
          via-white/10
          to-transparent
        '
      />
    </div>
  );
}
