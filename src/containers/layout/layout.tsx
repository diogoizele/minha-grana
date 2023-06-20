import { useState } from "react";
import { Outlet } from "react-router-dom";

import { AppBar, TopBar } from "containers";

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
