import { useState } from "react";

import { ThemeContext } from "./ThemeContext";

import { themes, type ThemeName } from "../presets";

type Props = {
  children: React.ReactNode;
};

const STORAGE_KEY = "portfolio-theme";

export default function ThemeProvider({ children }: Props) {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    if (typeof window === "undefined") {
      return "obsidianGold";
    }

    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved && saved in themes) {
      return saved as ThemeName;
    }

    return "obsidianGold";
  });

  const setTheme = (theme: ThemeName) => {
    localStorage.setItem(STORAGE_KEY, theme);

    setThemeName(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        setTheme,
        theme: themes[themeName],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
