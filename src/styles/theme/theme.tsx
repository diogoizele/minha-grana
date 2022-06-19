import { createTheme, ThemeProvider } from "@mui/material";
import { lightModePalette, lightModeShadows } from "./lightMode";

import type { ThemeProviderProps } from "./theme.types";

export const Theme = ({ children }: ThemeProviderProps) => {
  const mode: "light" | "dark" = "light";

  const theme = createTheme({
    palette: {
      mode,
      ...lightModePalette,
    },
    shadows: lightModeShadows,
    typography: {
      allVariants: {
        color: "#333",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
