import { Controller } from "react-hook-form";
import { MenuItem, TextField } from "@mui/material";

import { StyledFormControl } from "./select.styles";
import type { SelectProps } from "./select.types";

export const Select = ({
  label,
  name,
  control,
  options,
  size = "small",
  fullWidth,
  ...selectProps
}: SelectProps) => {
  return (
    <StyledFormControl fullWidth={fullWidth}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            select
            size={size}
            {...selectProps}
            {...field}
            id={name}
            label={label}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </StyledFormControl>
  );
};
