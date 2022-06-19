import * as Theme from "@mui/material/styles/createTheme";

declare module "@mui/material/styles/createTheme" {
  interface Theme {
    palette: {
      primary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      info: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      success: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      warning: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      error: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      background: {
        default: string;
        contrast: string;
      };
      common: {
        white: string;
        black: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
      };
    };
  }
  interface ThemeOptions extends Partial<Theme> {}
}
