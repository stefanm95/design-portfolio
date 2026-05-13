import type { Project } from "../types/projects";

export const projects: Project[] = [
  //
  // EDITORIAL PROJECT
  //
  {
    id: "wedding-experience",

    title: "Immersive Wedding Experience",

    subtitle: "Editorial Invitation Platform",

    description:
      "A cinematic digital invitation platform focused on editorial composition, atmospheric layering, refined motion systems, and emotionally intentional interaction.",

    year: "2026",

    layout: "editorial",

    stack: ["React", "TypeScript", "Framer Motion", "Tailwind"],

    liveUrl: "https://wedding-deni-iuli.vercel.app/",

    accent: "amber",

    featured: true,

    status: "live",

    metrics: [
      {
        label: "Focus",
        value: "Editorial Motion",
      },

      {
        label: "Experience",
        value: "Immersive Invitation",
      },
    ],

    presentation: {
      mode: "editorial",

      blocks: [
        { type: "hero" },
        { type: "showcase" },
        { type: "atmosphere" },
        { type: "ui" },
      ],
    },

    editorial: {
      hero: {
        liveIndicator: true,
      },
      showcase: {
        label: "Editorial Narrative",

        heading: "Emotional storytelling through digital composition.",

        description:
          "The experience was designed with editorial pacing, cinematic transitions, layered typography systems, and tactile atmospheric surfaces.",
      },

      atmosphere: {
        label: "Atmosphere & Materiality",

        heading:
          "Building tactile digital environments through texture, glow, depth, and cinematic layering.",

        description:
          "Every surface, shadow, and light interaction is carefully composed to enhance depth, emotion, and the sense of place.",
      },

      ui: {
        label: "Interaction & Experience",

        heading:
          "Thoughtful interaction designed for clarity and emotional ease.",

        description:
          "Flows are intuitive, minimal, and intentional. Each interaction guides the user naturally through the experience.",
      },
    },

    media: {
      hero: [
        "/images/project1/hero/forest-landing-hero.png",

        "/images/project1/hero/story-editorial-couple.png",

        "/images/project1/hero/rsvp-embossed-card.png",
      ],

      atmosphere: [
        "/images/project1/atmosphere/monogram-emboss-crop.png",

        "/images/project1/atmosphere/paper-composition-minimal.png",
      ],

      editorial: [
        "/images/project1/editorial/details-editorial-layout.png",

        "/images/project1/editorial/story-longform-layout.png",

        "/images/project1/editorial/text-area-detail.png",
      ],

      story: ["/images/project1/story/story-qutoe-detail.png"],

      ui: ["/images/project1/ui/form-step.png"],
    },
  },

  //
  // CINEMATIC PROJECT
  //
  {
    id: "cinematic-concept",

    title: "Architectural Construction Platform",

    subtitle: "Premium Exterior Experience System",

    description:
      "A cinematic presentation platform designed for premium construction and architectural businesses, focused on immersive project storytelling, layered atmosphere, interactive showcases, and conversion-oriented user flows.",

    year: "2026",

    layout: "architectural",

    stack: ["React", "TypeScript", "Framer Motion", "Tailwind"],

    liveUrl: "https://conceptarhitectural.vercel.app",

    accent: "cyan",

    featured: true,

    status: "live",

    metrics: [
      {
        label: "Focus",
        value: "Architectural Presentation",
      },

      {
        label: "Experience",
        value: "Premium Construction Platform",
      },
    ],

    presentation: {
      mode: "cinematic",

      blocks: [
        { type: "hero" },
        { type: "showcase" },
        { type: "systems" },
        { type: "mobile" },
      ],
    },
    cinematic: {
      hero: {
        liveIndicator: true,
      },

      showcase: {
        label: "CURATED SHOWCASE",

        heading: "Cinematic project exploration systems.",

        description:
          "Fullscreen project presentation designed with layered hierarchy, atmospheric transitions, and immersive visual pacing.",

        mobileLabel: "CURATED SHOWCASE",

        mobileHeading: "Cinematic project exploration systems.",

        mobileDescription:
          "Fullscreen project presentation designed with layered hierarchy and immersive visual pacing.",
      },
      systems: {
        label: "PROCESS & SYSTEMS",

        heading: "Structured interaction translated into cinematic rhythm.",

        description:
          "Clear service flows, process hierarchy, and restrained motion systems designed to support immersive navigation without overwhelming the experience.",

        floatingLabel: "Interaction Systems",
      },

      services: {
        label: "SERVICE ARCHITECTURE",

        heading: "Spatial service presentation with editorial pacing.",

        description:
          "Structured navigation systems, cinematic service galleries, and layered visual hierarchy designed to create clarity while preserving immersive atmosphere.",
      },

      mobile: {
        label: "RESPONSIVE EXPERIENCE",

        heading: "Cinematic pacing preserved across every screen.",

        description:
          "Responsive layouts maintain atmosphere, hierarchy, and interaction quality while adapting seamlessly to smaller devices.",
      },
    },

    media: {
      hero: [
        "/images/project2/hero/arhitectural-hero-desktop.png",

        "/images/project2/hero/solar-carport-hero.png",

        "/images/project2/hero/arhitectural-hero-mobile.png",
      ],

      showcase: [
        "/images/project2/showcase/projects-showcase-grid.png",

        "/images/project2/showcase/immersive-project-modal.png",
      ],

      showcaseMobile: [
        "/images/project2/showcase/modal-project-detail.png",

        "/images/project2/showcase/mobile-project-shwocase.png",
      ],

      systems: [
        "/images/project2/systems/process-dynamic.png",

        "/images/project2/systems/mobile-process.png",
      ],

      services: [
        "/images/project2/services/services-gallery-layout.png",

        "/images/project2/services/services-gallery-mobile.png",
      ],

      mobile: [
        "/images/project2/mobile/mobile-hero.png",

        "/images/project2/mobile/mobile-process.png",

        "/images/project2/mobile/mobile-project-section.png",

        "/images/project2/mobile/mobile-services-showcase.png",
      ],
    },
  },
];
