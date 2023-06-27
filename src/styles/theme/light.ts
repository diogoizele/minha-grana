import { createTheme } from "@mui/material";

export const light = createTheme({
  palette: {
    primary: {
      main: "#4e2355",
    },
    secondary: {
      main: "#af3551",
    },
    info: {
      main: "#F48A2D",
    },
    success: {
      main: "#2c9564",
    },
    warning: {
      main: "#d7ca2f",
    },
    error: {
      main: "#df3619",
    },
    common: {
      white: "#f2fbf7",
      black: "#070106",
    },
    background: {
      default: "#dae6f0",
      paper: "#eef2f1",
      contrast: "#ffffff",
      paperVariant: "#f2fbf7",
    },
  },
  typography: {
    allVariants: {
      color: "#232323",
    },
  },
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: "#af3551",
        },
      },
    },
  },
});
