import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "shared/appBar/appBar";
import { TopBar } from "shared/topBar/topBar";

import { Container, Content } from "./layout.styles";

export function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTogle = () => setIsOpen((prevState) => !prevState);

  return (
    <Container>
      <AppBar isOpen={isOpen} onToggle={handleTogle} />
      <Content isOpen={isOpen}>
        <TopBar />
        <Outlet />
      </Content>
    </Container>
  );
}
