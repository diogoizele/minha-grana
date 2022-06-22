import { useState } from "react";
import { AppBar } from "shared/appBar/appBar";

import { Container } from "./layout.styles";

export function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTogle = () => setIsOpen((prevState) => !prevState);

  return (
    <Container>
      <AppBar isOpen={isOpen} onToggle={handleTogle} />
    </Container>
  );
}
