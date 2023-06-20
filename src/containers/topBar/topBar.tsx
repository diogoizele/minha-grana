import { Typography } from "@mui/material";

import { useUserStore } from "stores";

import { Container, Content, WalletContainer } from "./topBar.styles";
import { formatCurrency } from "../../util/formatCurrency";

export function TopBar() {
  const { user } = useUserStore();

  return (
    <Container>
      <Content>
        <Typography></Typography>
      </Content>
      <WalletContainer>
        <Typography>{formatCurrency(user?.wallet.cashValue)}</Typography>
      </WalletContainer>
    </Container>
  );
}
