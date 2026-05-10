import Lenis from "lenis";
import { useEffect } from "react";

import { motionScroll } from "@/theme";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis(motionScroll.cinematic);

    let frameId: number;

    function raf(time: number) {
      lenis.raf(time);

      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);

      lenis.destroy();
    };
  }, []);

  return null;
}
