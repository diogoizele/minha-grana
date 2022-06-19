import { styled } from "@mui/material";

export const Container = styled("header")(({ theme }) => ({
  height: "2.5rem",
  marginBottom: "1rem",

  backgroundColor: theme.palette.background.contrast,

  boxShadow: "0 0.2rem 1rem rgba(0, 0, 0, 0.1)",
  borderRadius: "0.5rem",
}));