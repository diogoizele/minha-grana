import { InputLabel, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

import { StyledFormControl, StyledTextField } from "./textField.styles";
import type { TextFieldProps } from "./textField.types";

const TextField = ({
  label,
  name,
  control,
  size = "small",
  fullWidth,

  ...textFieldProps
}: TextFieldProps) => {
  return (
    <StyledFormControl fullWidth={fullWidth}>
      {/* <InputLabel htmlFor={name}>
        <Typography>{label}</Typography>
      </InputLabel> */}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <StyledTextField
            id={name}
            label={label}
            size={size}
            {...textFieldProps}
            {...field}
          />
        )}
      />
    </StyledFormControl>
  );
};

export default TextField;
