import { styled } from "@mui/material";

export const List = styled("ul")(({ theme }) => ({
  width: "100%",
  padding: "1rem",

  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))",
  gridTemplateRows: "min-content",
  gridGap: "1rem",
  flex: 1,

  "::-webkit-scrollbar": {
    width: "0.5rem",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "0.5rem",
  },

  overflowY: "scroll",
}));
