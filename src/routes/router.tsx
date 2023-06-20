import { Categories } from "containers/categories/categories";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./layout/layout";
import { LoginScreen } from "../screens";

export const Router = () => {
  const authenticated = false;

  return (
    <Routes>
      {authenticated ? (
        <Route element={<Layout />}>
          <Route index element={<h1>Dashboard</h1>} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/purchases" element={<h1>Compras</h1>} />
        </Route>
      ) : (
        <Route index element={<LoginScreen />} />
      )}
    </Routes>
  );
};
