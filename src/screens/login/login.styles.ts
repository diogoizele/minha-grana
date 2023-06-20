import { Typography, styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  height: "100vh",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background: theme.palette.background.default,
}));

export const FormContainer = styled("section")(({ theme }) => ({
  maxWidth: "90%",

  display: "flex",
  flexDirection: "column",

  gap: "0.5rem",
  padding: "1rem",

  borderRadius: "0.5rem",
  boxShadow: theme.shadows[3],

  background: theme.palette.background.paper,
}));

export const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  gap: "1rem",
  margin: "1rem 0",
}));

export const TitleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: "0.5rem",

  "& > img": {
    width: 32,
    height: 32,
    padding: "1px",

    boxSizing: "content-box",

    borderRadius: 32,
    backgroundColor: theme.palette.primary.main,
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: "1.5rem",

  textAlign: "center",
}));

export const FormTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,

  fontSize: "1.2rem",
  textAlign: "center",
}));
