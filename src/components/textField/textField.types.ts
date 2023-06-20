import {
  TextFieldProps as MUITextFieldProps,
  TextFieldVariants,
} from "@mui/material";
import { Control } from "react-hook-form";

export type TextFieldProps = MUITextFieldProps & {
  name: string;
  label?: string;
  control: Control<any>;
  variant?: TextFieldVariants;
};
