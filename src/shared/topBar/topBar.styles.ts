import { styled } from "@mui/material";

export const Container = styled("header")(({ theme }) => ({
  minHeight: "2.3rem",
  marginBottom: "1rem",

  backgroundColor: theme.palette.background.contrast,

  boxShadow: "0 0.2rem 0.1rem rgba(0, 0, 0, 0.1)",
  borderRadius: "0.5rem",
}));
