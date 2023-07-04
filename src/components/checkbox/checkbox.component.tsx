import { Controller } from "react-hook-form";
import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

import { StyledFormControl } from "./checkbox.styles";
import type { CheckboxProps } from "./checkbox.types";

export const Checkbox = ({
  label,
  name,
  control,
  ...checkboxProps
}: CheckboxProps) => {
  return (
    <StyledFormControl>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<MuiCheckbox id={name} {...checkboxProps} {...field} />}
            label={label}
          />
        )}
      />
    </StyledFormControl>
  );
};
