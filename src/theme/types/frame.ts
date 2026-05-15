export type FrameLayer =
  | {
      type: "overlay";
      background: string;
      opacity?: string;
      blend?: string;
    }
  | {
      type: "atmosphere";
      blur?: string;
      opacity?: string;
      scale?: string;
    };

export type CinematicFrameConfig = {
  shadows?: string;

  image: {
    fit?: "cover" | "contain";
    hoverScale?: string;
    transition?: string;
  };

  layers: FrameLayer[];
};
