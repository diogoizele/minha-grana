import { Button, Typography } from "@mui/material";

import { Container, ContainerHeader, PaperContainer } from "./content.styles";

import type { ContentProps } from "./content.types";

export const Content = ({
  children,
  headerElement,
  title,
  primaryAction,
}: ContentProps) => {
  return (
    <Container>
      <ContainerHeader>
        {headerElement ? (
          headerElement
        ) : (
          <div className="flex justify-between items-center w-screen">
            <Typography variant="h3">{title}</Typography>
            <Button {...primaryAction} />
          </div>
        )}
      </ContainerHeader>
      <PaperContainer elevation={4}>{children}</PaperContainer>
    </Container>
  );
};
