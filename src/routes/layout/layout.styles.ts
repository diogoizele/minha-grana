import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  height: "100vh",
  overflow: "hidden",

  background: theme.palette.background.default,
}));
