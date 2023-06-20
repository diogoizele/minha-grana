import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "containers";
import { useAuthStore } from "stores";
import { LocalStorageKeys } from "constants";
import { HomeScreen, LoginScreen } from "screens";

export const Router = () => {
  const { token } = useAuthStore();

  const isAuthenticated = useMemo(() => {
    const storedToken = localStorage.getItem(LocalStorageKeys.TOKEN);

    return !!token || !!storedToken;
  }, []);

  return (
    <Routes>
      {isAuthenticated ? (
        <Route element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/categories" element={<div>Categorias</div>} />
          <Route path="/purchases" element={<h1>Compras</h1>} />
        </Route>
      ) : (
        <Route index element={<LoginScreen />} />
      )}
    </Routes>
  );
};
