import { Paper, styled } from "@mui/material";

export const Container = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,

  gap: "1.5rem",

  height: "10px",
}));

export const PaperContainer = styled(Paper)(() => ({
  flexGrow: 1,
  display: "flex",
  overflow: "hidden",

  borderRadius: "0.5rem",
}));

export const ContainerHeader = styled("header")(() => ({
  display: "flex",
}));
