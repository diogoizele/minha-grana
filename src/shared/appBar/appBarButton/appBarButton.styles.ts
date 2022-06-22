import { styled } from "@mui/material";

type ContainerProps = {
  isOpen: boolean;
  isActive: boolean;
};

export const Container = styled("div")<ContainerProps>(
  ({ isActive, theme }) => ({
    width: "100%",
    height: "3rem",
    position: "relative",

    background: isActive ? theme.palette.background.default : "transparent",

    display: "flex",
    alignItems: "center",

    border: 0,

    borderTopLeftRadius: "3rem",
    borderBottomLeftRadius: "3rem",
    marginLeft: "1rem",

    transition: "180ms",

    cursor: "pointer",
    userSelect: "none",
  })
);

export const IconContainer = styled("div")(() => ({
  borderRadius: "1rem",

  display: "flex",
  alignItems: "center",
  paddingLeft: "0.5rem",

  minWidth: "4rem",

  height: "3rem",
}));

type RoundedTopProps = {
  isActive: boolean;
};

export const RoundedTop = styled("div")<RoundedTopProps>(
  ({ theme, isActive }) => ({
    opacity: isActive ? "1" : "0",

    height: "16px",
    width: "20px",

    backgroundColor: theme.palette.background.default,
    position: "absolute",
    right: "8px",
    top: "-16px",

    transition: "180ms",

    "& > div": {
      backgroundColor: theme.palette.primary.main,

      width: "20px",
      height: "16px",

      position: "absolute",
      bottom: 0,
      right: 0,

      borderBottomRightRadius: "10rem",
      transition: "180ms",
    },
  })
);

export const RoundedBottom = styled("div")<RoundedTopProps>(
  ({ theme, isActive }) => ({
    opacity: isActive ? "1" : "0",

    height: "16px",
    width: "20px",

    backgroundColor: theme.palette.background.default,
    position: "absolute",
    right: "8px",
    bottom: "-16px",

    transition: "180ms",

    "& > div": {
      backgroundColor: theme.palette.primary.main,

      width: "20px",
      height: "16px",

      position: "absolute",
      top: 0,
      right: 0,

      borderTopRightRadius: "10rem",
      transition: "180ms",
    },
  })
);
