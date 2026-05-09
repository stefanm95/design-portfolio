type Props = {
  image: string;

  isActive: boolean;
  isLeft: boolean;
  isRight: boolean;

  onClick: () => void;
};

export default function ArchitecturalMobileCard({
  image,
  isActive,
  isLeft,
  isRight,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        absolute

        transition-all
        duration-[1400ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]

        cursor-pointer

        ${
          isActive
            ? `
              z-[5]

              w-[320px]
              md:w-[360px]
              xl:w-[390px]

              opacity-80
              scale-[80%]

              -translate-x-[32%]
              -translate-y-1/2

              rotate-0
            `
            : ""
        }

        ${
          isLeft
            ? `
              z-[2]

              hidden
              md:block

              w-[190px]
              xl:w-[220px]

              -translate-x-[130%]
              -translate-y-[10%]

              rotate-[-8deg]

              scale-[0.88]
              opacity-45
            `
            : ""
        }

        ${
          isRight
            ? `
              z-[2]

              hidden
              lg:block

              w-[190px]
              xl:w-[220px]

              translate-x-[90%]
              -translate-y-[10%]

              rotate-[6deg]

              scale-[0.88]
              opacity-45
            `
            : ""
        }

        ${
          !isActive && !isLeft && !isRight
            ? `
              opacity-0
              pointer-events-none
              scale-[0.6]
            `
            : ""
        }
      `}
    >
      <div className='relative overflow-hidden'>
        {/* IMAGE */}
        <img
          src={image}
          alt=''
          className={`
            w-full
            object-cover

            transition-all
            duration-[1400ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              isActive
                ? `
                  shadow-[0_45px_140px_rgba(0,0,0,0.55)]
                `
                : `
                  blur-[0.6px]
                  brightness-[0.72]

                  shadow-[0_24px_70px_rgba(0,0,0,0.28)]
                `
            }
          `}
        />

        {/* ATMOSPHERIC OVERLAY */}
        <div
          className={`
            absolute
            inset-0

            transition-opacity
            duration-[1200ms]

            ${
              isActive
                ? `
                  opacity-0
                `
                : `
                  opacity-30
                  bg-black
                `
            }
          `}
        />

        {/* ACTIVE FRAME */}
        {isActive && (
          <>
            <div
              className='
                absolute
                inset-0

                ring-1
                ring-white/[0.08]
              '
            />

            <div
              className='
                absolute
                inset-x-0
                bottom-0

                h-[30%]

                bg-linear-to-t
                from-black/30
                to-transparent
              '
            />
          </>
        )}
      </div>
    </button>
  );
}
