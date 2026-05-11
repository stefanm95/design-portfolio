import { createContext } from "react";

import { themes, type ThemeName } from "../presets";

type ThemeContextType = {
  themeName: ThemeName;

  setTheme: (theme: ThemeName) => void;

  theme: (typeof themes)[ThemeName];
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
