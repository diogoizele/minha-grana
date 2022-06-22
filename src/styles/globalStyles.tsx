import { createStyles, GlobalStyles as MUIGlobalStyles } from "@mui/material";

export function GlobalStyles() {
  const styles = createStyles`
      * {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
      }

      body {
         -webkit-font-smoothing: antialiased;
         font-family: 'Lato', sans-serif;
      }

      button {
         cursor: pointer;
      }
   `;

  return <MUIGlobalStyles styles={styles} />;
}
