import type { ReactNode } from "react";
import { useMemo } from "react";
import type { CompositionContract } from "./composition";
import { MotionCadenceProvider } from "./motion/MotionCadenceProvider";
import { useScene } from "./scene/useScene";

/**
 * Section Motion Provider
 *
 * Wraps main application sections (Hero, Philosophy, About, etc.)
 * to provide scene-modulated motion cadence.
 *
 * This integrates scenes into the motion orchestration automatically:
 * - Gets current scene
 * - Applies scene modulation to baseline cadence
 * - Provides modulated cadence to child components
 *
 * Use this in main sections that don't have explicit composition contracts.
 */

export function SectionMotionProvider({ children }: { children: ReactNode }) {
  const scene = useScene();

  // Create a sensible default composition contract for main sections
  const defaultContract: CompositionContract = useMemo(
    () => ({
      density: "balanced",
      densityClass: "space-y-12 md:space-y-16 lg:space-y-20",
      rhythm: "cinematic",
      rhythmProfile: {
        transitionDelay: 0.16,
        revealOffset: 80,
        stagger: 0.08,
        sectionDelay: 0.2,
        duration: 1.2,
      },
      transition: "balanced",
      atmosphere: "cinematic",
      overlays: true,
      sceneIntensity: "balanced",
    }),
    [],
  );

  return (
    <MotionCadenceProvider contract={defaultContract} sceneId={scene.id}>
      {children}
    </MotionCadenceProvider>
  );
}
