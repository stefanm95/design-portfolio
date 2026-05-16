# Project Architecture

This repository is a runtime-driven presentation engine.

Core architecture:

- `content/`
  authored narrative data

- `runtime/`
  orchestration + behavioral resolution

- `presentation/`
  rendering + composition

- `design/`
  reusable primitives

- `theme/`
  experiential identity system

Important rules:

- runtime resolves behavior
- presentation renders
- theme styles
- content narrates

Critical architectural boundaries:

- runtime must NOT render visuals
- theme must NOT orchestrate composition
- presentation must NOT own browser state

Read before modifying architecture:

- `docs/architecture/dependency-boundaries.md`
- `docs/architecture/runtime-principles.md`
- `docs/architecture/composition-system.md`

Renderer system:

- content owns sequencing
- registries resolve block rendering
- renderers interpret presentation language

Important:
Avoid generic dynamic rendering systems.
Preserve authored cinematic composition.
