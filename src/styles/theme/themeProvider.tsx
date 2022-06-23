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
        ...currentTheme.typography.allVariants,
        fontFamily: "'Lato', sans-serif",
      },
      h1: { fontSize: "3rem" },
      h2: { fontSize: "2.5rem" },
      h3: { fontSize: "2.25rem" },
      h4: { fontSize: "2rem" },
      h5: { fontSize: "1.6rem" },
      h6: { fontSize: "1.4rem" },
    },
  });

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
