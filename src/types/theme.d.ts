import * as Theme from "@mui/material";

import type { ThemePalette } from "styles/theme/theme.types";

declare module "@mui/material" {
  interface Theme {
    palette: ThemePalette;
  }

  interface ThemeOptions extends Partial<Theme.Theme> {
    palette?: ThemePalette;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    contrast: string;
  }
}
