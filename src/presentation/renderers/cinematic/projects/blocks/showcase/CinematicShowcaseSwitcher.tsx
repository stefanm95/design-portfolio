import { projectComposition } from "@/runtime/presentation/composition";

import { dividersGradients } from "@/theme";

type Props = {
  showcase: string[];

  active: number;

  setActive: React.Dispatch<React.SetStateAction<number>>;

  mobile?: boolean;
};

export default function CinematicShowcaseSwitcher({
  showcase,
  active,
  setActive,
  mobile = false,
}: Props) {
  const composition = projectComposition.cinematic.showcase.switcher;

  return (
    <div
      className={`
        ${composition.root}
        ${mobile ? composition.mobile : composition.desktop}
      `}
    >
      {showcase.map((image, index) => (
        <button
          key={image}
          onClick={() => setActive(index)}
          className={`
            ${composition.button}
            ${mobile ? composition.buttonMobile : composition.buttonDesktop}
          `}
        >
          <img
            src={image}
            alt=""
            className={`
              ${composition.image}
              ${
                active === index
                  ? composition.activeImage
                  : composition.inactiveImage
              }
            `}
          />

          {/* ACTIVE OVERLAY */}
          <div
            className={`
              ${composition.activeOverlay}
              ${active === index ? "opacity-100" : "opacity-0"}
            `}
          >
            <div className={composition.activeRing} />

            <div
              className={`
                absolute
                inset-0

                ${dividersGradients.activeOverlay}
              `}
            />
          </div>
        </button>
      ))}
    </div>
  );
}
