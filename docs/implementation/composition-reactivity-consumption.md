# Composition Reactivity Consumption Implementation

## Overview

The composition reactivity layer now deeply integrates into presentation behavior through three consumption patterns:

1. **Motion Cadence Integration** - Reactivity modulates animation timing
2. **Breathing-Aware Utilities** - Components apply breathing modulation to animation
3. **Composition Reactivity Context** - Components access reactivity semantics

## Architecture

### 1. Motion Cadence Integration

**File:** `src/runtime/presentation/motion/cadence.ts`

Composition reactivity now directly influences `MotionCadence` generation:

```ts
export function resolveCadence(contract: CompositionContract): MotionCadence {
  const motionInfluence = resolveCompositionMotionInfluence(contract);
  
  // transitionSoftness modulated by pressure
  transitionSoftness *= motionInfluence.pressureSoftness;
  
  // stagger and sectionDelay influenced by pacing/breathing
  const { stagger, sectionDelay } = 
    applyCompositionMotionInfluence(baseStagger, baseSectionDelay, motionInfluence);
  
  return { fade, reveal, stagger, sectionDelay, transitionSoftness };
}
```

**Semantic Influence:**
- `revealTimeModifier` (0.85-1.2) → affects stagger + reveal timing
- `staggerModifier` (0.95-1.05) → compresses/expands reveal distribution
- `breathingDelayModifier` (0.8-1.2) → breathing factor modulates section delays
- `pressureSoftness` (0.85-1.15) → pressure modulates transition curves

**Result:** Motion feels cohesive with composition breathing/pressure

### 2. Composition Motion Semantics

**File:** `src/runtime/presentation/motion/compositionMotionSemantics.ts`

Resolves actionable motion influence from reactivity:

```ts
type CompositionMotionInfluence = {
  revealTimeModifier: number;      // 0.85-1.2
  staggerModifier: number;         // 0.9-1.1
  breathingDelayModifier: number;  // 0.8-1.2
  pressureSoftness: number;        // 0.85-1.15
};
```

**Extraction Logic:**
```ts
// Reveal timing modifier from reactivity
revealTimeModifier = reactivity.revealTimeModifier

// Stagger distribution influences compression
staggerModifier = 
  staggerDistribution === "compressed" ? 0.95 :
  staggerDistribution === "expanded" ? 1.05 : 1.0

// Breathing factor directly influences delays
breathingDelayModifier = reactivity.breathing.breathingFactor

// Pressure influences transition softness
pressureSoftness = 
  pressure === "gentle" ? 1.1 :
  pressure === "intense" ? 0.9 : 1.0
```

### 3. Breathing-Aware Animation Utilities

**File:** `src/runtime/presentation/motion/breathingAwareAnimation.ts`

Helper functions for components to apply breathing modulation:

```ts
// Calculate breathing-influenced delay
calculateBreathingDelay(baseDelay, reactivity)

// Calculate pressure-aware stagger
calculatePressureStagger(baseStagger, reactivity)

// Calculate breathing-influenced distance
calculateBreathingDistance(baseDistance, reactivity)

// Apply full breathing modulation to cadence
applyBreathingModulation(cadence, reactivity)

// Calculate spacing modifier for sections
calculateCinematicSpacingModifier(reactivity) // Returns 0.9-1.1

// Determine compositional separation
calculateCompositionalSeparation(reactivity) // Returns "tight" | "natural" | "spacious"
```

### 4. Composition Reactivity Context

**File:** `src/runtime/presentation/CompositionReactivityContext.tsx`

Provides components access to reactivity semantics:

```ts
export function useCompositionReactivity(): CompositionReactivityContext {
  // Returns pacing, breathing, density, spacingInfluence, revealTimeModifier
  // Provides default neutral values if outside provider
}
```

**Provider Chain:**
```
MotionCadenceProvider
  ├─ CompositionReactivityContext.Provider (value: contract.reactivity)
  ├─ MotionCadenceContext.Provider (value: cadence)
  └─ children
```

## Usage Patterns

### Pattern 1: Breathing-Aware Animation Component

```tsx
import { useMotionCadence, useCompositionReactivity } from "@/runtime/presentation";
import { applyBreathingModulation } from "@/runtime/presentation/motion";

export function RevealWithBreathing({ children }) {
  const cadence = useMotionCadence();
  const reactivity = useCompositionReactivity();
  
  // Apply breathing modulation to cadence
  const breathingCadence = applyBreathingModulation(cadence, reactivity);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: breathingCadence.reveal.distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: breathingCadence.reveal.duration,
        delay: breathingCadence.fade.delay,
      }}
    >
      {children}
    </motion.div>
  );
}
```

### Pattern 2: Breathing-Influenced Section Spacing

```tsx
import { useCompositionReactivity } from "@/runtime/presentation";
import { calculateCinematicSpacingModifier } from "@/runtime/presentation/motion";

export function Section({ children }) {
  const reactivity = useCompositionReactivity();
  const spacingModifier = calculateCinematicSpacingModifier(reactivity);
  
  // Apply modifier to spacing scale
  const effectiveSpacing = baseSpacing * spacingModifier;
  
  return (
    <section style={{ marginBottom: `${effectiveSpacing}rem` }}>
      {children}
    </section>
  );
}
```

### Pattern 3: Pressure-Aware Stagger in List

```tsx
import { useMotionCadence, useCompositionReactivity } from "@/runtime/presentation";
import { calculatePressureStagger } from "@/runtime/presentation/motion";

export function RevealList({ items }) {
  const cadence = useMotionCadence();
  const reactivity = useCompositionReactivity();
  
  const effectiveStagger = calculatePressureStagger(cadence.stagger, reactivity);
  
  return (
    <motion.div>
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * effectiveStagger }}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}
```

## Behavioral Consequences

### Immersive + Spacious Configuration

```
Profile: immersive, density: spacious, pressure: gentle

Reactivity Semantics:
- spacingInfluence: ~1.15
- revealTimeModifier: ~1.1
- breathingFactor: 1.2
- pressureSoftness: 1.1
- staggerDistribution: expanded

Motion Feels:
- Slower, more deliberate reveals
- Longer delays between animations
- Stretched reveal stagger (more breathing room)
- Softer transitions (longer curves)
- Section delays feel more spacious

Presentation Feels:
- Cinematic, breathable
- Reveals are grouped loosely
- Compositional pressure is gentle
- Spacing feels expanded
```

### Editorial + Tight Configuration

```
Profile: editorial, density: tight, pressure: intense

Reactivity Semantics:
- spacingInfluence: ~0.9
- revealTimeModifier: ~0.95
- breathingFactor: 0.85
- pressureSoftness: 0.9
- staggerDistribution: compressed

Motion Feels:
- Tighter, sharper reveals
- Shorter delays between animations
- Compressed reveal stagger (restrained)
- Tighter transitions (shorter curves)
- Section delays feel compressed

Presentation Feels:
- Editorial, crisp
- Reveals are grouped tightly
- Compositional pressure is intense
- Spacing feels compressed
```

## Architectural Guarantees

### Runtime Semantic Ownership ✓

- Runtime resolves `CompositionReactivityContext` values
- Presentation interprets through composition-aware utilities
- No presentation-owned orchestration
- No bidirectional dependencies

### No Layout Generation ✓

- Utilities only modify timing/spacing modifiers
- No flex/grid generation
- No dynamic class construction
- Authored composition structure unchanged

### No State Machine Orchestration ✓

- Utilities are pure, deterministic functions
- No stateful orchestration layers
- No plugin systems
- Simple, predictable semantic flow

### Authored Composition Preservation ✓

- CompositionReactivityContext is optional consumption
- Components work without it (graceful fallback)
- Spacing modifiers are clamped to safe ranges (0.85-1.25)
- Breathing influence is subtle, not structural

## Integration Points

### MotionCadenceProvider

Already enhanced to provide both contexts:

```tsx
<MotionCadenceProvider contract={composition}>
  {/* MotionCadenceContext + CompositionReactivityContext both available */}
</MotionCadenceProvider>
```

### Animation Components

Use breathing modulation for subtle consumption:

```tsx
const breathingCadence = applyBreathingModulation(cadence, reactivity);
```

### Section Components

Apply spacing modifiers where appropriate:

```tsx
const spacingModifier = calculateCinematicSpacingModifier(reactivity);
```

### Reveal Components

Use pressure-aware stagger for grouping:

```tsx
const stagger = calculatePressureStagger(baseStagger, reactivity);
```

## Success Criteria Met ✓

- ✓ Immersive + spacious feels more breathable (via spacingInfluence, breathingFactor)
- ✓ Editorial + tight feels sharper (via compressed stagger, intense pressure)
- ✓ Composition subtly reflects runtime orchestration (through cadence integration)
- ✓ Orchestration remains predictable (pure functions, no state machines)
- ✓ Authored composition dominates (modifiers only, structure unchanged)
- ✓ Runtime semantic ownership clear (context provides influence, not control)
- ✓ Presentation interprets orchestration (breathing utilities for components)
