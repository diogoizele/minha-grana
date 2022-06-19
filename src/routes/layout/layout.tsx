import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./appBar/appBar";
import { Container, Content } from "./layout.styles";
import { TopBar } from "./topBar/topBar";

export const Layout = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Container >
      <AppBar open={open} onToggle={handleToggle} />
      <Content open={open}>
        <TopBar />
        <Outlet />
      </Content>
    </Container>
  );
};
