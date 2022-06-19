import { styled } from "@mui/material";

export const Container = styled("li")(({ theme }) => ({
  padding: "1rem",

  boxShadow: theme.shadows[5],
  borderRadius: "0.5rem",
  listStyle: "none",

  display: "grid",
  gridTemplateColumns: "1fr  auto",
  gridTemplateRows: "auto auto 1fr",
  gridColumnGap: "1rem",
  gridRowGap: "1rem",
}));

type ItemProps = {
  area: string;
  justifyContent?: "flex-start" | "center" | "flex-end";
  alignItems?: "flex-start" | "center" | "flex-end";
};

export const Item = styled("div")<ItemProps>(
  ({ area, alignItems, justifyContent }) => ({
    gridArea: area,

    display: "flex",
    alignItems,
    justifyContent,
  })
);
