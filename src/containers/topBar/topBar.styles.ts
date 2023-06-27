import { styled } from "@mui/material";

export const Container = styled("header")(({ theme }) => ({
  minHeight: "2.3rem",
  marginBottom: "0.5rem",

  backgroundColor: theme.palette.background.contrast,

  boxShadow: "0 0.2rem 0.1rem rgba(0, 0, 0, 0.1)",
  borderRadius: "0.5rem",

  display: "flex",
  alignItems: "center",

  padding: "0 1rem",
}));

export const Content = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  flexGrow: 1,
}));

export const WalletContainer = styled("aside")(({ theme }) => ({
  display: "flex",

  gap: "0.5rem",
}));
