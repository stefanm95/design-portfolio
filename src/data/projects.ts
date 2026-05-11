import type { Project } from "../presentation/types/projects";

export const projects: Project[] = [
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
  // Arhitectural Concept
  {
    id: "architectural-concept",

    title: "Architectural Construction Platform",

    subtitle: "Premium Exterior Experience System",

    description:
      "A cinematic presentation platform designed for premium construction and architectural businesses, focused on immersive project storytelling, layered atmosphere, interactive showcases, and conversion-oriented user flows.",

    year: "2026",

    layout: "architectural",

    stack: ["React", "TypeScript", "Framer Motion", "Tailwind"],

    liveUrl:
      "https://conceptarhitectural-git-main-stefanm95s-projects.vercel.app/",

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
