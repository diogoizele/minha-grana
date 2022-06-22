import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

import type { AppBarButtonProps } from "./appBarButton.types";

export function useAppBarButton({
  isActive,
  path,
  title,
  onChangeTab,
}: Pick<AppBarButtonProps, "isActive" | "path" | "onChangeTab" | "title">) {
  const theme = useTheme();
  const navigate = useNavigate();

  const color = isActive
    ? theme.palette.secondary.main
    : theme.palette.background.default;

  const handleNavigate = () => {
    navigate(path);
    onChangeTab(title);
  };

  return { color, handleNavigate };
}
