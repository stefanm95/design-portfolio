import { dividersGradients } from "@/theme";

type Props = {
  showcase: string[];

  active: number;

  setActive: React.Dispatch<React.SetStateAction<number>>;

  layout: {
    root: string;

    desktop: string;

    mobile: string;

    button: string;

    buttonDesktop: string;

    buttonMobile: string;

    image: string;

    activeImage: string;

    inactiveImage: string;

    activeOverlay: string;

    activeRing: string;
  };

  mobile?: boolean;
};

export default function CinematicShowcaseSwitcher({
  showcase,
  active,
  setActive,
  layout,
  mobile = false,
}: Props) {
  return (
    <div
      className={`
        ${layout.root}
        ${mobile ? layout.mobile : layout.desktop}
      `}
    >
      {showcase.map((image, index) => (
        <button
          key={image}
          onClick={() => setActive(index)}
          className={`
            ${layout.button}
            ${mobile ? layout.buttonMobile : layout.buttonDesktop}
          `}
        >
          <img
            src={image}
            alt=''
            className={`
              ${layout.image}
              ${active === index ? layout.activeImage : layout.inactiveImage}
            `}
          />

          {/* ACTIVE OVERLAY */}
          <div
            className={`
              ${layout.activeOverlay}
              ${active === index ? "opacity-100" : "opacity-0"}
            `}
          >
            <div className={layout.activeRing} />

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
