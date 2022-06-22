import * as Theme from "@mui/material";

import type { ThemePalette } from "styles/theme/theme.types";

declare module "@mui/material" {
  interface Theme {
    palette: ThemePalette;
  }

  interface ThemeOptions extends Partial<Theme> {}
}
