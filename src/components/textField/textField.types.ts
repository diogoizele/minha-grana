import {
  TextFieldProps as MUITextFieldProps,
  TextFieldVariants,
} from "@mui/material";
import { Control, RegisterOptions } from "react-hook-form";

export type TextFieldTypes = MUITextFieldProps["type"] | "money";

export type TextFieldProps = Omit<MUITextFieldProps, "type"> & {
  name: string;
  label?: string;
  control: Control<any>;
  variant?: TextFieldVariants;
  rules?: Omit<
    RegisterOptions<any, string>,
    "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  type?: TextFieldTypes;
};
