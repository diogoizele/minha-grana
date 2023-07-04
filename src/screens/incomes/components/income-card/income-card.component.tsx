import { useState } from "react";
import {
  Checkbox,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  useTheme,
} from "@mui/material";
import { GiTwoCoins } from "react-icons/gi";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { Frequency, Income } from "types";
import { formatCurrency, formatPercentage } from "util";
import { Frequency as FrequencyConstants } from "constants";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import {
  ColoredTableRow,
  ExpandedContent,
  ToggleItem,
} from "./income-card.styles";
import dayjs from "dayjs";

interface Column {
  id: "title" | "amount" | "percent" | "frequency" | "isBlocked";
  label: string;
  minWidth?: number;
  align?: "right" | "center";
  format?: (value: number) => string;
}

export const columns: Column[] = [
  { id: "title", label: "Título", minWidth: 370 },
  {
    id: "amount",
    label: "Valor",
    format: (value: number) => formatCurrency(value),
  },
  {
    id: "percent",
    label: "Porcentagem",
    format: (value: number) => formatPercentage(value),
  },
  {
    id: "frequency",
    label: "Frequência",
  },
  {
    id: "isBlocked",
    label: "Bloqueado",
    align: "center",
  },
];

interface Props extends Income {
  index: number;
}

export function IncomeCard(props: Props) {
  const [open, setOpen] = useState(false);
  const { palette } = useTheme();

  return (
    <>
      <ColoredTableRow
        hover
        role="checkbox"
        tabIndex={-1}
        key={props.id}
        index={props.index}
      >
        <ToggleItem>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </ToggleItem>
        {columns.map((column) => {
          let value = props[column.id];

          if (column.id === "frequency") {
            value = FrequencyConstants[value as Frequency];
          }

          if (column.id === "isBlocked") {
            return (
              <TableCell
                padding="checkbox"
                key={column.id}
                align={column.align}
              >
                <Checkbox
                  color="primary"
                  checked={props.isBlocked}
                  inputProps={{ "aria-labelledby": String(props.id) }}
                />
              </TableCell>
            );
          }

          return (
            <TableCell key={column.id} align={column.align}>
              {column.format && typeof value === "number"
                ? column.format(value)
                : value}
            </TableCell>
          );
        })}
      </ColoredTableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <ExpandedContent>
              <GiTwoCoins size={24} color={palette.info.main} />
              <Typography variant="body2" component="p" style={{ flex: 1 }}>
                {props.description}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                color={({ palette }) => palette.text.secondary}
              >
                {dayjs(props.createdAt)
                  .subtract(3, "hour")
                  .format("[dia] DD [de] MMMM [de] YYYY [às] HH:mm")}
              </Typography>
            </ExpandedContent>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
