import { monochrome } from "./monochrome";
import { obsidianGold } from "./obsidianGold";
import { darkCyan } from "./darkCyan";

export const themes = {
  monochrome,
  obsidianGold,
  darkCyan,
};

export type ThemeName = keyof typeof themes;
