import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  height: "8rem",
  padding: "1rem",

  boxShadow: theme.shadows[3],
  borderRadius: "8px",
  // backgroundColor: theme.palette.background.contrast,

  display: "flex",
  justifyContent: "space-between",
}));
