import { Route, Routes } from "react-router-dom";

import { Layout } from "./layout/layout";

export const Router = () => {
  const authenticated = true;

  return (
    <Routes>
      {authenticated ? (
        <Route element={<Layout />}>
          <Route index element={<h1>Autenticado</h1>} />
        </Route>
      ) : (
        <>
          <Route element={<h1>Não autenticado</h1>} />
        </>
      )}
    </Routes>
  );
};
