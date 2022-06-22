import { styled } from "@mui/material";

type ContainerProps = {
  isOpen: boolean;
};

export const Container = styled("aside")<ContainerProps>(
  ({ isOpen, theme }) => ({
    width: isOpen ? "14rem" : "4rem",

    background: theme.palette.primary.main,
    position: "fixed",
    overflow: "hidden",

    top: "0.8rem",
    left: "0.8rem",
    bottom: "0.8rem",

    borderRadius: "8px",

    display: "flex",
    flexDirection: "column",

    transition: "width 180ms",

    userSelect: "none",
  })
);

export const AppBarButtons = styled("div")(() => ({
  flex: 3,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  gap: "1rem",
}));

export const AppBarFooter = styled("footer")(() => ({
  flex: 3,
}));

export const AppBarHeader = styled("header")(({ theme }) => ({
  flex: 1,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& > img": {
    width: 32,
    height: 32,
    padding: "1px",

    boxSizing: "content-box",
    zIndex: 10,
    cursor: "pointer",

    borderRadius: 32,
    backgroundColor: theme.palette.secondary.main,

    transition: "background-color 210ms",

    "&:hover": {
      backgroundColor: theme.palette.background.default,
    },
  },
}));
