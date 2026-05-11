import { createContext } from "react";

export type NavigationContextType = {
  activeSection: string;

  scrollProgress: number;

  scrollToSection: (id: string) => void;
};

export const NavigationContext = createContext<NavigationContextType | null>(
  null,
);
