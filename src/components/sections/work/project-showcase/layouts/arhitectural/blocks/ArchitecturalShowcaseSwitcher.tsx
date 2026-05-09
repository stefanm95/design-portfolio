type Props = {
  showcase: string[];
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  mobile?: boolean;
};

export default function ArchitecturalShowcaseSwitcher({
  showcase,
  active,
  setActive,
  mobile = false,
}: Props) {
  return (
    <div
      className={`
        flex
        items-center
        gap-3

        overflow-x-auto

        pb-2

        ${mobile ? "snap-x snap-mandatory" : "justify-start lg:gap-4"}
      `}
    >
      {showcase.map((image, index) => (
        <button
          key={image}
          onClick={() => setActive(index)}
          className={`
            group
            relative
            shrink-0

            overflow-hidden

            transition-all
            duration-500

            ${mobile ? "w-[92px] snap-start" : "w-[140px] lg:w-[160px]"}
          `}
        >
          <img
            src={image}
            alt=''
            className={`
              w-full
              object-cover

              transition-all
              duration-700

              ${
                active === index
                  ? "opacity-100 scale-100"
                  : "opacity-35 scale-[0.985] group-hover:opacity-60"
              }
            `}
          />

          {/* ACTIVE OVERLAY */}
          <div
            className={`
              absolute
              inset-0

              transition-opacity
              duration-500

              ${active === index ? "opacity-100" : "opacity-0"}
            `}
          >
            <div
              className='
                absolute
                inset-0

                ring-1
                ring-white/14
              '
            />

            <div
              className='
                absolute
                inset-0

                bg-linear-to-t
                from-white/[0.03]
                to-transparent
              '
            />
          </div>
        </button>
      ))}
    </div>
  );
}
