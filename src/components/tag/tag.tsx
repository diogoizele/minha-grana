import { Typography, useTheme } from "@mui/material";
import { Container } from "./tag.styles";

import type { TagProps } from "./tag.types";

export const Tag = ({ children, color, bgColor, fontSize = 13 }: TagProps) => {
  const theme = useTheme();

  return (
    <Container bgColor={bgColor}>
      <Typography
        color={color ?? theme.palette.common.white}
        fontSize={fontSize}
      >
        {children}
      </Typography>
    </Container>
  );
};
