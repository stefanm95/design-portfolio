import Lenis from "lenis";
import { useEffect } from "react";

import { motionPresets } from "@/theme";

export default function SmoothScroll() {
  useEffect(() => {
    const smooth = motionPresets.smoothScroll;

    const lenis = new Lenis({
      duration: smooth.duration,
      lerp: smooth.lerp,
      smoothWheel: true,
      wheelMultiplier: smooth.wheelMultiplier,
    });

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
