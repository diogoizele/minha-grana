import type { ButtonProps } from "@mui/material";
import type { ReactNode } from "react";

export type ContentProps = {
  children: ReactNode;

  headerElement?: ReactNode;
  title?: string;
  primaryAction?: ButtonProps;
};
