import { Controller } from "react-hook-form";

import { StyledFormControl, StyledTextField } from "./textField.styles";
import type { TextFieldProps } from "./textField.types";

const TextField = ({
  label,
  name,
  control,
  size = "small",
  fullWidth,
  rules,
  ...textFieldProps
}: TextFieldProps) => {
  return (
    <StyledFormControl fullWidth={fullWidth}>
      <Controller
        rules={rules}
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
