import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
} from "@mui/material";
import { TableRow } from "@mui/material";

import { Content } from "containers";
import { incomeApi } from "api";
import { Income } from "types";

import { PapleContainer, TableHeadCell } from "./incomes.styles";
import { IncomeCard, columns } from "./components/income-card.component";

export function IncomesScreen() {
  const [incomes, setIncomes] = useState<Income[]>([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const listIncomes = async () => {
    const incomes = await incomeApi.listIncomes();

    setIncomes(incomes);
  };

  useEffect(() => {
    listIncomes();
  }, []);

  return (
    <Content
      title="Receitas"
      primaryAction={{
        children: "Nova receita",
        variant: "contained",
        color: "primary",
        onClick: () => {
          alert("Nova receita");
        },
      }}
    >
      <PapleContainer>
        <TableContainer sx={{ flex: 1 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableHeadCell />
                {columns.map((column) => (
                  <TableHeadCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableHeadCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {incomes
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((income, index) => (
                  <IncomeCard {...income} index={index} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25]}
          component="div"
          count={incomes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </PapleContainer>
    </Content>
  );
}
