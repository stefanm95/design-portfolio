import { createContext } from "react";

type ExperienceContextType = {
  scrollProgress: number;

  activeSection: string;

  setActiveSection: (section: string) => void;

  scrollToSection: (id: string) => void;
};

export const ExperienceContext = createContext<ExperienceContextType | null>(
  null,
);
