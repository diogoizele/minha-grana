import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";

import { Router } from "routes/router";
import { GlobalStyles } from "styles/globalStyles";
import { ThemeProvider } from "styles/theme/themeProvider";

function App() {
  return (
    <ThemeProvider>
      <StyledEngineProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Router />
        </BrowserRouter>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
