import { ReactNode } from "react";
import { Control } from "react-hook-form";
import { CheckboxProps as MUICheckboxProps } from "@mui/material";

export type CheckboxProps = MUICheckboxProps & {
  name: string;
  label?: string | ReactNode;
  control: Control<any>;
};
