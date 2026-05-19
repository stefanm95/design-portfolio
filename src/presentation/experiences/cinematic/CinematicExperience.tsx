import {
  About,
  Contact,
  Experience,
  Hero,
  Philosophy,
  SelectedWork,
} from "@/presentation/sections";

import { SectionMotionProvider } from "@/runtime/presentation";

import { resolveCompositionContract } from "@/runtime/presentation/composition";

import { resolveProfile } from "@/runtime/presentation/resolvers";

import { resolveSceneRuntime } from "@/runtime/presentation/scene";

import { sceneDefinitions } from "@/runtime/presentation/scene";

import { resolvePresentationSnapshot } from "@/runtime/presentation/execution/snapshot";

import { resolvePageLayoutRuntime } from "@/runtime/presentation/layout/resolvers";
import type { ProjectPresentation } from "@/types/presentation";

export default function CinematicExperience() {
  //
  // EXPERIENCE PRESENTATION
  //

  const presentation: ProjectPresentation = {
    mode: "cinematic",

    composition: {
      profile: "immersive",
    },

    blocks: [],
  };

  //
  // PROFILE
  //

  const profileVariant = presentation.composition?.profile ?? "immersive";

  const profile = resolveProfile(profileVariant);

  //
  // COMPOSITION
  //

  const composition = resolveCompositionContract(
    presentation,
    profile,
    profile.orchestration.sceneIntensity,
  );

  //
  // SCENE
  //

  const scene = resolveSceneRuntime({
    scene: sceneDefinitions.projects,

    composition,
  });

  //
  // SNAPSHOT
  //

  const snapshot = resolvePresentationSnapshot({
    composition,

    scene,

    profile: profileVariant,
  });

  const layout = resolvePageLayoutRuntime();

  //
  // RENDER
  //

  return (
    <main
      className="relative z-10"
      data-profile={snapshot.profile}
      data-density={snapshot.composition.orchestration.density}
      data-rhythm={snapshot.composition.orchestration.rhythm}
      data-transition={snapshot.composition.orchestration.transition}
      data-scene-intensity={snapshot.composition.orchestration.sceneIntensity}
    >
      <SectionMotionProvider>
        <Hero />

        <Philosophy />

        <SelectedWork snapshot={snapshot} />

        <Experience />

        <About />

        <Contact layout={layout.contact} />
      </SectionMotionProvider>
    </main>
  );
}
