import { styled } from "@mui/system";
export const Container = styled("div")(({theme}) => ({
  height: "100vh",
  overflow: "hidden",
  backgroundColor: theme.palette.background.default ,
}));

export const Content = styled("main")<{ open: boolean }>`
  height: 100%;

  display: flex;
  flex-direction: column;

  margin-left: ${({ open }) => (open ? "15rem" : "5rem")};
  padding: 1rem;

  transition: margin-left 0.3s;
`;
