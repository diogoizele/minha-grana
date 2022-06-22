import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  height: "100vh",
  overflow: "hidden",

  background: theme.palette.background.default,
}));

type ContentProps = {
  isOpen: boolean;
};

export const Content = styled("main")<ContentProps>(({ isOpen }) => ({
  height: "100%",

  display: "flex",
  flexDirection: "column",

  marginLeft: isOpen ? "14.8rem" : "4.8rem",
  padding: "1rem",

  transition: "margin-left 180ms",
}));
