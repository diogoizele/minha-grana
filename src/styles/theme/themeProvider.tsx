import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material";

import { light } from "./light";
import { dark } from "./dark";

import type { ThemeProviderProps } from "./theme.types";

export function ThemeProvider({ children }: ThemeProviderProps) {
  const mode = "light";
  const currentTheme = mode === "light" ? light : dark;

  const theme = createTheme({
    ...currentTheme,
    palette: { ...currentTheme.palette, mode },
    typography: {
      allVariants: {
        fontFamily: "'Lato', sans-serif",
      },
    },
  });

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
