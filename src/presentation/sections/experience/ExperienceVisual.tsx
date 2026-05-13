import FadeIn from "@/presentation/animation/FadeIn";

import { experienceContent } from "@/content/experience";

import {
  compositionStack,
  sectionSpacing,
} from "@/runtime/presentation/composition";

import ExperiencePanel from "./ExperiencePanel";
import ExperienceVisualBackground from "./ExperienceVisualBackground";

export default function ExperienceVisual() {
  return (
    <FadeIn delay={0.2}>
      <div
        className={`
          ${compositionStack.experience.visual.root}
          ${sectionSpacing.experience.visualRoot}
        `}
      >
        {/* EXTENDED ATMOSPHERIC BACKGROUND */}
        <div className={compositionStack.experience.visual.desktopBackground}>
          <ExperienceVisualBackground />
        </div>

        {/* MOBILE BACKGROUND */}
        <div className={compositionStack.experience.visual.mobileBackground}>
          <ExperienceVisualBackground />
        </div>

        {/* CONTENT AREA */}
        <div
          className={`
            ${compositionStack.experience.visual.content}
            ${sectionSpacing.experience.visualContent}
          `}
        >
          {/* STACK */}
          <div className={compositionStack.experience.visual.stack}>
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
