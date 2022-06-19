import { BrowserRouter } from "react-router-dom";

import { Theme } from "./styles/theme/theme";
import { GlobalStyle } from "./styles/globalStyle";
import { Router } from "routes/router";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <Router />
        <GlobalStyle />
      </Theme>
    </BrowserRouter>
  );
}

export default App;
