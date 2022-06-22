import { Typography, useTheme } from "@mui/material";
import { Navigate } from "react-router-dom";
import {
  Container,
  IconContainer,
  RoundedBottom,
  RoundedTop,
} from "./appBarButton.styles";

import { useAppBarButton } from "./useAppBarButton";

import type { AppBarButtonProps } from "./appBarButton.types";

export function AppBarButton({
  title,
  icon: Icon,
  isOpen,
  isActive,
  path,
  onChangeTab,
}: AppBarButtonProps) {
  const { color, handleNavigate } = useAppBarButton({
    isActive,
    path,
    title,
    onChangeTab,
  });

  return (
    <Container isActive={isActive} isOpen={isOpen} onClick={handleNavigate}>
      <RoundedTop isActive={isActive}>
        <div />
      </RoundedTop>
      <IconContainer>
        <Icon color={color} size={32} />
      </IconContainer>
      <Typography
        color={color}
        variant="subtitle1"
        fontWeight={600}
        fontSize={"1.1rem"}
      >
        {title}
      </Typography>
      <RoundedBottom isActive={isActive}>
        <div />
      </RoundedBottom>
    </Container>
  );
}
