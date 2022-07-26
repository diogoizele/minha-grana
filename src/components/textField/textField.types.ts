import { TextFieldProps as MUITextFieldProps } from "@mui/material";
import { UseFormReturn } from "react-hook-form";

export type TextFieldProps = MUITextFieldProps & {
  name: string;
  label?: string;
  control: UseFormReturn["control"];
};
