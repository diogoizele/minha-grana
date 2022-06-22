import { BrowserRouter } from "react-router-dom";

import { Router } from "routes/router";
import { GlobalStyles } from "styles/globalStyles";
import { ThemeProvider } from "styles/theme/themeProvider";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
