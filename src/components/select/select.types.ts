import { TextFieldProps as MUITextFieldProps } from "@mui/material";
import { Control } from "react-hook-form";
import { Frequency } from "types";

export type SelectProps = Omit<MUITextFieldProps, "select"> & {
  name: string;
  label?: string;
  control: Control<any>;
  options: SelectOption[];
};

export type SelectOption = {
  value: string | number | Frequency;
  label: string | number;
};
