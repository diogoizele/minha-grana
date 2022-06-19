import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Source Sans Pro', sans-serif;;
  }
  
  button {
    cursor: pointer;
  }

  [diabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
