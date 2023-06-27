import { Paper, TableBody, TableCell, styled } from "@mui/material";

export const TableHeadCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
}));

export const PapleContainer = styled(Paper)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));
