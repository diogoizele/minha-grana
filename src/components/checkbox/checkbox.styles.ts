import { FormControl, styled } from "@mui/material";

export const StyledFormControl = styled(FormControl)(({ fullWidth }) => ({
  width: fullWidth ? "100%" : "auto",
}));
