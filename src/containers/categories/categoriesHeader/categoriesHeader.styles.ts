import { styled } from "@mui/material";

export const Container = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media (maxWidth: 368px)": {
    flexDirection: "column",
  },
}));
