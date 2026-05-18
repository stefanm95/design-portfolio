import FadeIn from "@/presentation/animation/FadeIn";

import { experienceContent } from "@/content/experience";

import { resolveLayoutRuntime } from "@/runtime/presentation/layout/resolvers/resolvePageLayoutRuntime";

import ExperiencePanel from "./ExperiencePanel";
import ExperienceVisualBackground from "./ExperienceVisualBackground";

export default function ExperienceVisual() {
  const layout = resolveLayoutRuntime();

  return (
    <FadeIn delay={0.2}>
      <div className={layout.experience.visual.root}>
        {/* DESKTOP ATMOSPHERE */}
        <div className={layout.experience.visual.desktopBackground}>
          <ExperienceVisualBackground />
        </div>

        {/* MOBILE ATMOSPHERE */}
        <div className={layout.experience.visual.mobileBackground}>
          <ExperienceVisualBackground />
        </div>

        {/* CONTENT */}
        <div className={layout.experience.visual.content}>
          <div className={layout.experience.visual.stack}>
            {experienceContent.panels.map((panel) => (
              <ExperiencePanel
                key={panel.id}
                id={panel.id}
                title={panel.title}
                description={panel.description}
                className={panel.className}
              />
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
