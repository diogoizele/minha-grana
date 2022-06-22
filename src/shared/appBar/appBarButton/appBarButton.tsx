import { Typography, useTheme } from "@mui/material";
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
  onChangeTab,
}: AppBarButtonProps) {
  const { color } = useAppBarButton({ isActive });
  return (
    <Container
      isActive={isActive}
      isOpen={isOpen}
      onClick={() => onChangeTab(title)}
    >
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
