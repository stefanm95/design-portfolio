export type ResolvedCinematicSystemsLayout = {
  section: string;

  left: string;

  leftInner: string;

  right: string;

  visual: string;
};

export type ResolvedCinematicServicesLayout = {
  section: string;

  intro: string;

  grid: string;

  primary: string;

  secondary: string;
};

export type ResolvedCinematicMobileLayout = {
  section: string;

  environment: string;

  grid: string;

  visuals: string;

  tablet: string;

  desktop: string;

  content: string;

  contentInner: string;

  carousel: {
    root: string;

    glow: string;

    stage: string;
  };

  stack: {
    root: string;

    main: string;

    mainGlow: string;

    mainImage: string;

    overlay: string;

    secondaryGrid: string;

    secondary: string;

    secondaryImage: string;
  };
};

export type ResolvedCinematicShowcaseLayout = {
  desktop: {
    section: string;

    intro: string;

    switcherWrap: string;
  };

  mobile: {
    section: string;

    intro: string;

    switcherWrap: string;
  };

  switcher: {
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
};

export type ResolvedEditorialShowcaseLayout = {
  section: string;

  left: string;

  leftInner: string;

  right: string;
};

export type ResolvedProjectLayoutRuntime = {
  cinematic: {
    systems: {
      section: string;

      left: string;

      leftInner: string;

      right: string;

      visual: string;
    };

    services: {
      section: string;

      intro: string;

      grid: string;

      primary: string;

      secondary: string;
    };

    mobile: {
      section: string;

      environment: string;

      grid: string;

      visuals: string;

      tablet: string;

      desktop: string;

      content: string;

      contentInner: string;

      carousel: {
        root: string;

        glow: string;

        stage: string;
      };

      stack: {
        root: string;

        main: string;

        mainGlow: string;

        mainImage: string;

        overlay: string;

        secondaryGrid: string;

        secondary: string;

        secondaryImage: string;
      };
    };

    showcase: {
      desktop: {
        section: string;

        intro: string;

        switcherWrap: string;
      };

      mobile: {
        section: string;

        intro: string;

        switcherWrap: string;
      };

      switcher: {
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
    };
  };

  editorial: {
    showcase: {
      section: string;

      left: string;

      leftInner: string;

      right: string;
    };
  };
};
