import { createContext } from "react";

import { navigationSections } from "./navigation.config";

export type NavigationSection = (typeof navigationSections)[number];

export type NavigationContextType = {
  sections: NavigationSection[];

  activeSection: string;

  setActiveSection: React.Dispatch<React.SetStateAction<string>>;

  scrollProgress: number;

  scrollToSection: (id: string) => void;
};

export const NavigationContext = createContext<NavigationContextType | null>(
  null,
);
