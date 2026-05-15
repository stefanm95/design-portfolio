Project Conventions
File Naming
Components
PascalCase.tsx
Utilities
camelCase.ts
Constants
UPPER_CASE.ts
Import Structure

Prefer:

import { ui } from '@/theme'

Avoid:

../../../theme
Component Structure

Recommended order:

imports
constants
types
component
helpers
exports
Styling Rules

Prefer:

composition
utility abstraction
theme-driven styling

Avoid:

inline styles
duplicated class groups
arbitrary spacing values
Motion Rules

Avoid:

hardcoded durations
isolated easing systems
inconsistent timing

Prefer:

cadence-driven motion
shared transition primitives
scene modulation
Architecture Rules

Avoid:

business logic inside presentation
duplicated orchestration
tightly coupled components

Prefer:

isolated systems
reusable composition
layered architecture
Documentation Rules

When introducing a new system:

Document:

purpose
responsibilities
boundaries
integration points
future evolution
Long-Term Goal

Create a modular experiential architecture capable of:

adaptive rendering
runtime modulation
compositional scalability
thematic evolution
cinematic interaction systems
