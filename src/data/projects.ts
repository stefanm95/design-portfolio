import type { Project } from "../types/projects";

export const projects: Project[] = [
  {
    id: "wedding-experience",

    title: "Immersive Wedding Experience",

    subtitle: "Editorial Invitation Platform",

    description:
      "A cinematic digital invitation platform focused on editorial composition, atmospheric layering, refined motion systems, and emotionally intentional interaction.",

    year: "2026",

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

    stack: ["React", "TypeScript", "Framer Motion", "Tailwind", "Swiper"],

    liveUrl:
      "https://conceptarhitectural-git-main-stefanm95s-projects.vercel.app/",

    accent: "cyan",

    featured: true,

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
        "/images/project2/hero/architectural-hero.png",

        "/images/project2/hero/project-showcase-modal.png",
      ],

      atmosphere: [
        "/images/project2/atmosphere/dark-spatial-layout.png",

        "/images/project2/atmosphere/premium-materiality.png",
      ],

      editorial: [
        "/images/project2/editorial/projects-showcase-grid.png",

        "/images/project2/editorial/process-timeline.png",

        "/images/project2/editorial/partners-section.png",
      ],

      story: ["/images/project2/story/immersive-project-modal.png"],

      ui: ["/images/project2/ui/contact-experience.png"],
    },
  },
];
