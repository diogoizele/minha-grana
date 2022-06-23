import * as Theme from "@mui/material";

import type { ThemePalette } from "styles/theme/theme.types";
import type { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material" {
  interface Theme {
    palette: ThemePalette;
    typography: TypographyOptions;
  }

  interface ThemeOptions extends Partial<Theme.Theme> {
    palette?: ThemePalette;
    typography: TypographyOptions;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    contrast: string;
  }
}
