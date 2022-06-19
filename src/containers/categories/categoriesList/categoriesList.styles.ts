import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  height: "calc(100vh - 9.5rem)",
  overflowY: "scroll",

  margin: "1rem 0",
  padding: "1rem",
  borderRadius: "0.5rem",
  backgroundColor: theme.palette.background.contrast,

  "::-webkit-scrollbar": {
    width: "0.5rem",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "gray",
    borderRadius: "0.5rem",
  },
}));

export const List = styled("ul")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(23rem, 1fr))",
  gap: "2rem",
}));
