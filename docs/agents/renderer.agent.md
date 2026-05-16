# Renderer Agent Rules

Renderers interpret presentation language.

They are NOT generic component selectors.

---

## Renderer Flow

```txt
content
→ presentation mode
→ renderer registry
→ block registry
→ rendering pipeline
```

---

## Renderer Responsibilities

Renderers own:

- presentation composition
- cinematic rendering
- editorial rendering
- authored flow
- block orchestration
- presentation sequencing interpretation

Renderers consume:

- runtime orchestration
- resolved profile state
- resolved density
- resolved rhythm
- resolved transitions

---

## Important Rules

Content owns sequencing.

Example:

```ts
presentation: {
  blocks: [
    { type: "hero" },
    { type: "showcase" },
    { type: "systems" },
  ],
}
```

Renderers interpret sequencing.

Renderers do NOT invent sequencing.

---

## Renderer Boundaries

Renderers must NOT:

- resolve runtime state
- manage browser state
- manage scroll listeners
- orchestrate navigation state
- own scene logic

---

## Registry Architecture

Registries may:

- resolve block implementations
- resolve presentation variants
- resolve navigation variants

Registries must NOT:

- orchestrate runtime behavior
- mutate orchestration state
- manage global state

---

## Avoid

Avoid:

```tsx
<DynamicSectionRenderer type='hero' variant='cinematic' />
```

This destroys:

- authored pacing
- cinematic intentionality
- experiential composition

---

## Renderer Goal

Renderers should evolve toward:

```txt
presentation language interpretation
```

NOT:

```txt
generic dynamic rendering systems
```
