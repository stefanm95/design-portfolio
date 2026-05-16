# Runtime Agent Rules

Runtime is responsible for:

- orchestration
- behavioral coordination
- scene resolution
- cadence resolution
- density resolution
- atmosphere resolution
- navigation state
- scroll state

Runtime is NOT responsible for:

- rendering visuals
- typography
- overlays
- gradients
- cinematic styling
- authored composition

---

## Runtime Philosophy

Runtime resolves:

```txt
WHAT should happen
```

Presentation decides:

```txt
HOW it visually appears
```

---

## Runtime Ownership

Runtime may coordinate:

- profiles
- scenes
- density
- rhythm
- transitions
- navigation state
- active section state

Runtime must NOT coordinate:

- visual identity
- cinematic framing
- typography systems
- surface rendering
- layout composition

---

## Runtime Resolver Layer

Resolvers own fallback logic.

Examples:

```ts
resolveDensity()
resolveRhythm()
resolveAtmosphere()
resolveNavigation()
resolveScene()
```

Fallback logic must NOT spread across:

- renderers
- sections
- navigation components
- presentation components

---

## Important Rules

Avoid:

- orchestration duplication
- renderer-owned runtime state
- presentation-owned orchestration
- theme-owned behavior
- global runtime abstraction inflation

---

## Runtime Goal

The runtime layer should evolve toward:

```txt
runtime-coordinated cinematic presentation
```

while remaining:

```txt
behavior-first
```

NOT:

```txt
visual-first
```
