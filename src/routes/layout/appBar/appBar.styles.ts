import styled from "styled-components";

export const Container = styled.header<{ open: boolean }>`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: ${({ open }) => (open ? "15rem" : "5rem")};
  transition: 0.3s;
  position: fixed;
`;
