import { FormControl, FormLabel, Typography } from "@mui/material";
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
      <FormLabel htmlFor={name}>
        <Typography>{label}</Typography>
      </FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <StyledTextField
            id={name}
            size={size}
            // fullWidth={fullWidth}
            {...textFieldProps}
            {...field}
          />
        )}
      />
    </StyledFormControl>
  );
};

export default TextField;
