import React from "react";
import ReactDOM from "react-dom/client";
import dayjs from "dayjs";
import App from "./App";
import "dayjs/locale/pt-br";

import "./styles/index.css";

dayjs.locale("pt-br");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
