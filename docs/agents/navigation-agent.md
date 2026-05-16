# Navigation Agent Rules

Navigation belongs to:

```txt
presentation/
```

because navigation is:

- experiential
- cinematic
- compositional

---

## Runtime vs Presentation

Runtime owns:

- active section state
- scroll progress
- navigation orchestration state

Presentation owns:

- navigation rendering
- navigation feeling
- navigation rhythm
- navigation composition

---

## Navigation Architecture

Correct flow:

```txt
profile
→ resolveNavigation()
→ navigation registry
→ navigation renderer
```

Avoid:

```txt
hardcoded navigation selection
```

---

## Navigation Variants

Navigation variants are:

```txt
presentation experiences
```

NOT runtime systems.

Examples:

- immersive
- editorial
- cinematic
- minimal

---

## Navigation Boundaries

Navigation systems must NOT:

- manage browser orchestration
- own global runtime state
- resolve scenes
- resolve profiles
- resolve atmosphere

Navigation consumes orchestration.

It does not generate orchestration.

---

## Avoid

Avoid:

- global navigation abstraction inflation
- runtime-driven visual composition
- hardcoded presentation coupling
- navigation-specific orchestration duplication

---

## Navigation Goal

Navigation should evolve toward:

```txt
profile-driven experiential navigation
```

while preserving:

- authored pacing
- cinematic restraint
- compositional intentionality
