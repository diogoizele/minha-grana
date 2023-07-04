import { Box, TableCell, TableRow, styled } from "@mui/material";

export const Container = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  boxShadow: theme.shadows[4],
  borderRadius: "6px",
  padding: theme.spacing(2),

  height: "128px",
}));

export const ToggleItem = styled(TableCell)(() => ({
  width: "0.5rem",
}));

export const ExpandedContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  gap: "1rem",
  padding: "1rem 2rem",
  backgroundColor: theme.palette.background.contrast,
}));

type ColoredTableRowProps = {
  index: number;
};

export const ColoredTableRow = styled(TableRow)<ColoredTableRowProps>(
  ({ theme, index }) => ({
    backgroundColor:
      index % 2 === 0
        ? theme.palette.background.paper
        : theme.palette.background.paperVariant,
  })
);
