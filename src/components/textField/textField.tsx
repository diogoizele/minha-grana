import { NumericFormat } from "react-number-format";
import { Controller, ControllerRenderProps } from "react-hook-form";
import { TextField as MuiTextField } from "@mui/material";

import { StyledFormControl, StyledTextField } from "./textField.styles";
import type { TextFieldProps, TextFieldTypes } from "./textField.types";

const TextField = ({
  label,
  name,
  control,
  size = "small",
  fullWidth,
  rules,
  type,
  ...textFieldProps
}: TextFieldProps) => {
  const renderNumberFormat = (field: ControllerRenderProps<any, string>) => (
    <NumericFormat
      {...field}
      //@ts-ignore
      control={control}
      customInput={MuiTextField}
      InputProps={{ ...textFieldProps.InputProps }}
      id={name}
      label={label}
      size={size}
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
    />
  );

  const renderTextField = (field: ControllerRenderProps<any, string>) => {
    if ((type as TextFieldTypes) === "money") {
      return renderNumberFormat(field);
    }

    return (
      <StyledTextField
        id={name}
        label={label}
        size={size}
        type={type}
        {...textFieldProps}
        {...field}
      />
    );
  };

  return (
    <StyledFormControl fullWidth={fullWidth}>
      <Controller
        rules={rules}
        name={name}
        control={control}
        render={({ field }) => renderTextField(field)}
      />
    </StyledFormControl>
  );
};

export default TextField;
