# Dependency Boundaries

This document defines:

- ownership boundaries
- dependency direction
- allowed knowledge flow
- orchestration responsibilities

inside the presentation runtime architecture.

The goal is:

- protect architectural clarity
- preserve authored cinematic composition

---

## Core Philosophy

The system is NOT:

- a CMS renderer
- a universal component engine
- a generic design system

The system IS:

```txt
content-driven presentation architecture
```

with:

- authored experiences
- runtime orchestration
- semantic rendering
- cinematic composition
- experiential identity systems

---

## Macro Architecture

```txt
content/
    authored narrative data

runtime/
    orchestration + behavioral resolution

presentation/
    rendering + composition

theme/
    visual identity + environmental language

design/
    reusable primitives + visual infrastructure
```

---

## Dependency Direction

Correct dependency flow:

```txt
content
   ↓

runtime
   ↓

presentation
   ↓

design
   ↓

theme
```

Important:

```txt
runtime resolves
presentation renders
theme styles
content narrates
design supports
```

---

## Layer Responsibilities

---

### content/

#### Owns

- project narratives
- section ordering
- presentation declarations
- authored sequencing
- copy/content
- presentation metadata
- composition metadata

Example:

```ts
presentation: {
  mode: "cinematic",

  blocks: [
    { type: "hero" },
    { type: "showcase" },
    { type: "systems" },
  ],

  composition: {
    density: "spacious",
    rhythm: "cinematic",
  },
}
```

#### Can Know About

- presentation schemas
- content types

#### MUST NOT Know About

- rendering components
- motion implementations
- navigation implementations
- theme internals
- orchestration state
- browser state

---

### runtime/

#### Owns

- orchestration
- active scene
- scroll state
- navigation state
- presentation resolution
- cadence resolution
- density resolution
- atmosphere resolution
- transition resolution

Runtime is:

```txt
behavioral coordination
```

NOT visual rendering.

#### Can Know About

- content metadata
- presentation schemas
- orchestration contracts
- runtime profiles
- scene definitions

#### MUST NOT Know About

- typography
- overlays
- gradients
- cinematic styling
- visual composition
- section layouts
- rendering primitives

#### Runtime Rule

Runtime resolves:

```txt
WHAT should happen
```

Presentation decides:

```txt
HOW it visually appears
```

---

### presentation/

#### Owns

- rendering pipelines
- block rendering
- experience composition
- presentation modes
- section orchestration
- cinematic composition
- editorial composition
- navigation rendering
- authored flow

Presentation is:

```txt
experience rendering
```

#### Can Know About

- runtime state
- resolved orchestration values
- content
- design primitives
- themes

#### MUST NOT Own

- browser state
- scroll listeners
- orchestration resolution
- global navigation state
- runtime coordination logic

#### Presentation Rule

Presentation consumes orchestration.

It does not generate orchestration.

---

### design/

#### Owns

- typography primitives
- layout primitives
- motion wrappers
- atmosphere primitives
- surface systems
- reusable cinematic infrastructure
- visual utility systems

Design is:

```txt
stable infrastructure
```

NOT authored composition.

#### Can Know About

- theme tokens
- motion primitives
- visual semantics

#### MUST NOT Know About

- project narratives
- presentation sequencing
- scenes
- runtime orchestration
- business meaning

#### Design Rule

Design primitives should become:

```txt
rarely touched systems
```

with stable contracts.

---

### theme/

#### Owns

- visual identity
- atmosphere language
- material language
- color systems
- environmental semantics
- typography identity
- visual tone
- semantic opacity
- overlays
- gradients
- surface behavior

Theme is:

```txt
identity
```

NOT orchestration.

#### Can Know About

- semantic visual tokens
- atmosphere contracts
- environmental intensity systems

#### MUST NOT Know About

- section order
- rendering structure
- browser state
- orchestration flow
- presentation composition
- navigation state

#### Theme Rule

Themes provide:

```txt
visual possibility space
```

Runtime determines:

- intensity
- pacing
- activation

Presentation determines:

- composition

---

## Presentation Profiles

Profiles are:

```txt
behavioral orchestration contracts
```

NOT themes.

Profiles coordinate:

- rhythm
- density
- transitions
- navigation behavior
- atmosphere intensity
- cinematic pacing

### Profiles MUST NOT

- define colors
- define gradients
- define overlays directly
- define typography styles directly

Those belong to themes/design.

---

## Scene System

Scenes are:

```txt
environmental state
```

NOT sections.

---

### Sections

Physical rendered blocks.

Examples:

```txt
Hero
Projects
Contact
```

---

### Scenes

Emotional/environmental orchestration contexts.

Examples:

```txt
immersive
editorial
technical
closing
```

---

### Important Architectural Distinction

```txt
section ≠ scene
```

Sections render structure.

Scenes influence:

- atmosphere
- pacing
- transitions
- environmental intensity

---

## Renderer Architecture

Renderers are:

```txt
presentation language interpreters
```

NOT generic component selectors.

---

### Correct Renderer Flow

```txt
content
→ presentation mode
→ renderer registry
→ block registry
→ rendering pipeline
→ design primitives
→ theme identity
```

---

### Registry Rules

Registries may:

- map semantic block types
- resolve presentation implementations
- select navigation systems

Registries must NOT:

- orchestrate browser behavior
- manage runtime state
- mutate orchestration systems

---

## Runtime Resolver Layer

Resolvers coordinate:

- profile defaults
- composition metadata
- orchestration fallbacks
- scene/environment logic

Examples:

```ts
resolveDensity()
resolveRhythm()
resolveAtmosphere()
resolveNavigation()
resolveScene()
```

---

### Resolver Rule

Fallback logic should exist ONLY inside resolvers.

Never spread fallback logic across:

- components
- sections
- renderers
- navigation systems

---

## Navigation Architecture

Navigation belongs to:

```txt
presentation/
```

because navigation is:

- experiential
- cinematic
- compositional

Runtime only owns:

- active section
- scroll progress
- navigation state

Presentation owns:

- navigation feeling
- navigation rendering
- navigation rhythm

---

## Composition Philosophy

Composition is the heart of the system.

Composition controls:

- pacing
- breathing
- density
- cinematic tension
- asymmetry
- rhythm

The system intentionally avoids:

- normalized spacing
- utility-only layout systems
- generic CMS composition

---

## Important Anti-Patterns

Avoid:

---

### Generic Dynamic Rendering

```tsx
<DynamicSectionRenderer
  type="hero"
  variant="cinematic"
/>
```

This destroys:

- authored pacing
- cinematic direction
- presentation intentionality

---

### Runtime Rendering Visuals

Runtime must NOT render:

- overlays
- typography
- cinematic frames
- gradients
- atmosphere visuals

Runtime resolves behavior.

Presentation renders visuals.

---

### Theme Orchestration Leakage

Themes must NOT:

- orchestrate transitions
- manage navigation
- define composition flow

Themes provide identity.

Not orchestration.

---

## Long-Term Architectural Goal

The target architecture is:

```txt
content/
    authored narrative

runtime/
    orchestration engine

presentation/
    authored experiences

design/
    reusable visual infrastructure

theme/
    experiential identity
```

The system should evolve toward:

```txt
runtime-coordinated cinematic presentation
```

WITHOUT becoming:

- a generic CMS
- a plugin architecture
- a universal layout engine
- a configuration-first renderer
