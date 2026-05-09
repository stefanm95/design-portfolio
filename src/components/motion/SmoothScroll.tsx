import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
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
