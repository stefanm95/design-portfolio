# Phase 3: Scene Modulation Integration Guide

## Overview

Phase 3 makes **scenes into experiential modulation systems**. Scenes no longer just label content — they contextually influence motion, pacing, and atmosphere through the motion cadence system.

### The System

```
Profile (baseline identity)
  ↓
Cadence Resolver (motion/pacing from profile)
  ↓
Scene (environmental context) → Modulation Multipliers
  ↓
Applied Modulation (scene influences baseline cadence)
  ↓
Component Behavior (motion feels scene-aware)
```

## Implementation

### For Main Sections (Hero, Philosophy, About, etc.)

Wrap with `SectionMotionProvider`:

```tsx
import { SectionMotionProvider } from "@/runtime/presentation";

export function App() {
  return (
    <main>
      <SectionMotionProvider>
        <Hero />
        <Philosophy />
        <About />
        <Experience />
        <Contact />
      </SectionMotionProvider>
    </main>
  );
}
```

### For Project Presentations

ProjectPresentationRenderer already integrates MotionCadenceProvider. Optionally pass `sceneId` for cross-project scene modulation:

```tsx
<MotionCadenceProvider contract={composition} sceneId={projectScene}>
  {/* Project blocks get modulated motion */}
</MotionCadenceProvider>
```

### Inside Components (No Changes Needed)

```tsx
import FadeIn from "@/presentation/animation/FadeIn";
import Reveal from "@/presentation/animation/Reveal";

export default function Hero() {
  // Components automatically consume modulated cadence
  return (
    <>
      <FadeIn>
        {/* Timing: profile-driven + scene-modulated */}
        <h1>Title</h1>
      </FadeIn>

      <Reveal>
        {/* Spacing: density-aware + scene-modulated */}
        <p>Content</p>
      </Reveal>
    </>
  );
}
```

## Scene Modulation Values

Each scene applies contextual multipliers:

### Immersive (projects)

- `cadenceSoftness: 1.2` — 20% slower motion
- `spacingPressure: 1.25` — 25% larger spacing
- `breathingIntensity: 1.25` — deeper stagger/breathing
- `atmosphereModulation: 1.25` — stronger overlays
- `cinematicDepth: 1.3` — environmental depth
- `motionRestraint: 0.85` — expressive motion

### Editorial (philosophy)

- `cadenceSoftness: 0.95` — slight tightening
- `spacingPressure: 0.95` — 5% compression
- `breathingIntensity: 1.0` — neutral breathing
- `atmosphereModulation: 0.9` — reduced atmosphere
- `motionRestraint: 1.1` — 10% restraint

### Minimal (about)

- `cadenceSoftness: 0.9` — 10% faster, sharper
- `spacingPressure: 0.85` — 15% compression
- `breathingIntensity: 0.9` — reduced breathing
- `atmosphereModulation: 0.75` — minimal depth
- `motionRestraint: 1.15` — maximum restraint

### Technical (experience)

- `cadenceSoftness: 0.85` — structured, tight
- `spacingPressure: 0.8` — compressed spacing
- `breathingIntensity: 0.8` — low stagger
- `atmosphereModulation: 0.7` — minimal atmosphere
- `motionRestraint: 1.2` — restrained motion

### Quiet (contact)

- `cadenceSoftness: 0.9` — calm motion
- `spacingPressure: 0.85` — subtle spacing
- `breathingIntensity: 0.85` — reduced breathing
- `atmosphereModulation: 0.8` — quiet atmosphere
- `motionRestraint: 1.2` — calm restraint

### Introduction (hero)

- `cadenceSoftness: 1.1` — slightly dramatic
- `spacingPressure: 1.05` — slight expansion
- `breathingIntensity: 1.15` — deep breathing
- `atmosphereModulation: 1.1` — strong intro feeling
- `cinematicDepth: 1.2` — cinematic depth

## How Modulation Works

Scenes apply **multiplicative adjustments** to baseline cadence values:

```ts
// Before (from profile baseline):
fade.duration = 1.2s
reveal.distance = 80px
stagger = 0.08s

// Scene: immersive (1.2x cadenceSoftness, 1.25x spacingPressure)
// After:
fade.duration = 1.2s × 1.2 = 1.44s
reveal.distance = 80px × 1.25 = 100px
stagger = 0.08s × 1.25 = 0.1s
```

Motion feels **contextually appropriate** — immersive projects feel deeper and slower, editorial sections feel clean and precise.

## Key Properties

Scene modulation adds these to MotionCadence:

```ts
type MotionCadence = {
  fade: { duration; delay; offset };
  reveal: { duration; distance };
  stagger: number;
  sectionDelay: number;
  transitionSoftness: number;

  // New scene-modulated values:
  atmosphereIntensity?: number; // Controls overlay intensity
  cinematicPressure?: number; // Environmental depth
  motionRestraint?: number; // Tightness/looseness
};
```

## Architecture Benefits

1. **Scenes are behaviorally authoritative** — not just labels
2. **No prop explosion** — components don't need rhythm/transition props
3. **Semantic causality** — profile → cadence → scene modulation → behavior
4. **Lightweight** — SectionMotionProvider is minimal coordination
5. **Composable** — multiple providers can nest for fine-grained control

## What NOT to Do

❌ Don't hardcode `if (sceneId === "immersive")` in components
❌ Don't create scene-specific component variants
❌ Don't scatter modulation logic across renderers
❌ Don't create state machines for scene transitions
❌ Don't over-engineer plugin architectures

## Result

Motion and pacing now feel **environmentally orchestrated**. Scenes don't just label sections — they actively shape the _feeling_ of how content unfolds.

Scenes become **experiential modulation systems**, not metadata.
