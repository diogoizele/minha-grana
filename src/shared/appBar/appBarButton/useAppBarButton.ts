import { useTheme } from "@mui/material";

import type { AppBarButtonProps } from "./appBarButton.types";

export function useAppBarButton({
  isActive,
}: Pick<AppBarButtonProps, "isActive">) {
  const theme = useTheme();

  const color = isActive
    ? theme.palette.secondary.main
    : theme.palette.background.default;

  return { color };
}
