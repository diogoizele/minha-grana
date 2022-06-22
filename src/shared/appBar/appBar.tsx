import {
  AppBarButtons,
  AppBarFooter,
  AppBarHeader,
  Container,
} from "./appBar.styles";
import { useAppBar } from "./useAppBar";
import { AppBarButton } from "./appBarButton/appBarButton";

import logoImg from "assets/logo.png";

import type { AppBarProps } from "./appBar.types";

export function AppBar({ isOpen, onToggle }: AppBarProps) {
  const { activeTab, appBarButtons, handleChangeTab } = useAppBar();

  return (
    <Container isOpen={isOpen}>
      <AppBarHeader>
        <img onClick={onToggle} src={logoImg} />
      </AppBarHeader>
      <AppBarButtons>
        {appBarButtons.map(({ icon, path, title }) => (
          <AppBarButton
            key={title}
            icon={icon}
            title={title}
            path={path}
            isActive={activeTab === title}
            isOpen={isOpen}
            onChangeTab={handleChangeTab}
          />
        ))}
      </AppBarButtons>
      <AppBarFooter></AppBarFooter>
    </Container>
  );
}
