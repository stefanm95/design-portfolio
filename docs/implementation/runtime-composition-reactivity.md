# Runtime Composition Reactivity Implementation

## Overview

The composition reactivity layer introduces subtle, runtime-coordinated behavior to authored composition without generating layouts or duplicating orchestration.

Located in: `src/runtime/presentation/composition/reactivity.ts`

## Architecture

### Core Principle

Composition remains **authored and cinematic** while subtly reacting to:
- **Profile** (immersive, editorial, minimal)
- **Cadence** (rhythm: editorial, cinematic, immersive)
- **Density** (tight, balanced, spacious)
- **Scene Intensity** (soft, balanced, dramatic)

### Three Reactivity Layers

#### 1. Composition Pacing

Controls how reveals are grouped and distributed.

```ts
type CompositionPacing = {
  revealGrouping: "tight" | "balanced" | "relaxed";
  spacingModifier: number;        // 0.8–1.2
  staggerDistribution: "compressed" | "natural" | "expanded";
};
```

**Behavior:**
- Editorial + Tight → compressed, tight grouping (modifier 0.9)
- Editorial + Balanced → balanced grouping (modifier 1.0)
- Immersive + Spacious → relaxed, expanded grouping (modifier 1.15)
- Cinematic Rhythm → natural pacing (modifier 1.05)
- Immersive Rhythm → expanded pacing (modifier 1.1)

#### 2. Composition Breathing

Orchestrates spatial breathing, compositional pressure, and visual pacing.

```ts
type CompositionBreathing = {
  breathingFactor: number;              // 0.85–1.2
  pressure: "gentle" | "balanced" | "intense";
  groupingIntensity: "tight" | "natural" | "spacious";
};
```

**Behavior:**
- Spacious Density → high breathing (1.2), gentle pressure
- Tight Density → low breathing (0.85), intense pressure
- Balanced Density + Soft Transitions → natural breathing, gentle pressure
- Balanced Density + Dramatic Transitions → expanded breathing (1.1), intense pressure

#### 3. Composition Density Reactivity

Determines whether and how density influences compositional pressure.

```ts
type CompositionDensityReactivity = {
  effectiveDensity: CompositionDensity;
  influencesBreathing: boolean;
  pressureModifier: number;             // 0.7–1.3
};
```

**Behavior:**
- Tight Density → pressure modifier 1.2 (composition feels tighter)
- Spacious Density → pressure modifier 0.8 (composition feels more open)
- Scene Intensity Dramatic → +15% pressure
- Scene Intensity Soft → -15% pressure
- Immersive Rhythm → -10% pressure (more open pacing)

### Complete Reactivity Context

Aggregates all three layers into actionable composition modifiers:

```ts
type CompositionReactivityContext = {
  pacing: CompositionPacing;
  breathing: CompositionBreathing;
  density: CompositionDensityReactivity;

  spacingInfluence: number;      // Combined spacing modifier (0.85–1.25)
  revealTimeModifier: number;    // Reveal timing influence (0.85–1.2)
};
```

**Calculation:**

```
spacingInfluence = breathingFactor × spacingModifier × pressureModifier
                 ∈ [0.85, 1.25]

revealTimeModifier = staggerDistribution modifier × pressure modifier
                   ∈ [0.85, 1.2]
```

## Integration

### 1. Composition Contract

Updated to include reactivity context:

```ts
export type CompositionContract = {
  density: CompositionDensity;
  densityClass: string;
  rhythm: CompositionRhythm;
  rhythmProfile: RhythmProfile;
  transition: PresentationTransition;
  atmosphere: PresentationProfile["atmosphere"];
  overlays: boolean;
  sceneIntensity: string;
  reactivity: CompositionReactivityContext;  // ← NEW
};
```

### 2. Resolver Integration

New resolver in `src/runtime/presentation/resolvers/resolveCompositionReactivity.ts`:

```ts
export function resolveCompositionReactivity(
  profile: PresentationProfile,
  sceneIntensity?: string,
)
```

### 3. Contract Resolution

Updated `resolveCompositionContract()` to include reactivity:

```ts
export function resolveCompositionContract(
  presentation: ProjectPresentation,
  profile: PresentationProfile,
  sceneIntensity?: string,  // ← NEW parameter
): CompositionContract
```

### 4. Usage in Renderers

Updated `ProjectPresentationRenderer.tsx`:

```ts
const composition = resolveCompositionContract(
  presentation,
  profile,
  profile.sceneIntensity,  // Pass scene intensity
);
```

## Composition Reactivity Behaviors

### Editorial + Tight Configuration

- **Desired feel:** sharp, restrained, cleaner
- **Achieved through:**
  - Tight reveal grouping
  - Compressed stagger distribution
  - Intense compositional pressure
  - 0.9× spacing modifier
  - Low breathing factor (0.85)

### Immersive + Spacious Configuration

- **Desired feel:** slower, deeper, more breathable
- **Achieved through:**
  - Relaxed reveal grouping
  - Expanded stagger distribution
  - Gentle pressure
  - 1.15× spacing modifier
  - High breathing factor (1.2)

### Cinematic + Balanced Configuration

- **Desired feel:** natural, coherent, orchestrated
- **Achieved through:**
  - Balanced reveal grouping
  - Natural stagger distribution
  - Balanced pressure
  - 1.05× spacing modifier
  - Natural breathing factor (1.0)

## Design Constraints

The system **intentionally avoids:**

- ✗ Adaptive layout systems
- ✗ Runtime layout generation
- ✗ Orchestration state machines
- ✗ Generic composition engines
- ✗ Plugin orchestration systems

The system **preserves:**

- ✓ Authored composition
- ✓ Centralized orchestration
- ✓ Runtime semantic ownership
- ✓ Cinematic intentionality
- ✓ Presentation autonomy

## Future Evolution

This layer enables:

1. **Composition-aware Motion**
   - Reveal timing influenced by composition reactivity
   - Stagger distribution coordinated with cinematic intent

2. **Density-Aware Spacing**
   - Section spacing subtly influenced by density context
   - Breathing modulated by compositional pressure

3. **Scene-Coordinated Composition**
   - Different scenes with different reactivity profiles
   - Scene transitions influence composition pacing

4. **Narrative Pacing**
   - Composition reactivity evolves throughout narrative
   - Density/rhythm shifts drive compositional changes

All while remaining **behavior-first, not visual-first**, and preserving the author's cinematic intent.
