import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material";

import { light } from "./light";
import { dark } from "./dark";

import type { ThemeProviderProps } from "./theme.types";

export function ThemeProvider({ children }: ThemeProviderProps) {
  const mode = "light";
  const currentTheme = mode === "light" ? light : dark;

  const theme = createTheme({
    palette: { ...currentTheme.palette, mode },
    typography: {
      allVariants: {
        ...currentTheme.typography.allVariants,
        fontFamily: "'Lato', sans-serif",
      },
      h1: { fontSize: "2.5rem", fontWeight: 700 }, // 40px
      h2: { fontSize: "2rem", fontWeight: 700 }, // 32px
      h3: { fontSize: "1.5rem", fontWeight: 700 }, // 24px
      h4: { fontSize: "1.25rem", fontWeight: 700 }, // 20px
      h5: { fontSize: "1rem", fontWeight: 700 }, // 16px
      h6: { fontSize: "0.875rem", fontWeight: 700 }, // 14px
    },
  });

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
