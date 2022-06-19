import { Container } from "./appBar.styles";

import type { AppBarProps } from "./appBar.types";

export const AppBar = ({ open, onToggle }: AppBarProps) => {
  return (
    <Container open={open}>
      <button onClick={onToggle}>Abrir</button>
    </Container>
  );
};
