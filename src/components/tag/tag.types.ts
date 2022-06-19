import type { Theme } from "@mui/material";

export type TagProps = {
  children: string | number;
  color?: string;
  bgColor?: string | [keyof Theme["palette"]];
  fontSize?: number | string;
};
