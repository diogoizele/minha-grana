import { FormControl, Input, styled, TextField } from "@mui/material";

export const StyledFormControl = styled(FormControl)(({ fullWidth }) => ({
  width: fullWidth ? "100%" : "auto",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({}));
