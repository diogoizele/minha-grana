import type { Palette } from "@mui/material";
import type { ReactElement } from "react";

export type ThemeProviderProps = {
  children: ReactElement;
};

export interface ThemePalette extends Palette {
  background: Palette["background"] & {
    contrast: string;
  };
}
