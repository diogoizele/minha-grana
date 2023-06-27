import { Paper, styled } from "@mui/material";

export const Container = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,

  gap: "0.5rem",

  height: "10px",

  marginRight: "2px",
}));

export const PaperContainer = styled(Paper)(() => ({
  flexGrow: 1,
  display: "flex",
  overflow: "hidden",

  borderRadius: "0.5rem",
}));

export const ContainerHeader = styled("header")(() => ({
  display: "flex",
  minHeight: "3rem",
}));
