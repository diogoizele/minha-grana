import { useEffect, useMemo } from "react";
import { Route, Routes } from "react-router-dom";

import { detailUser } from "api";
import { Layout } from "containers";
import { LocalStorageKeys } from "constants";
import { useAuthStore, useUserStore } from "stores";
import { HomeScreen, IncomesScreen, LoginScreen } from "screens";

export const Router = () => {
  const { token } = useAuthStore();
  const { setUser } = useUserStore();

  const isAuthenticated = useMemo(() => {
    const storedToken = localStorage.getItem(LocalStorageKeys.TOKEN);

    return !!token || !!storedToken;
  }, [token]);

  useEffect(() => {
    if (isAuthenticated) {
      getUser();
    }
  }, [isAuthenticated]);

  const getUser = async () => {
    try {
      const user = await detailUser();
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Routes>
      {isAuthenticated ? (
        <Route element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/incomes" element={<IncomesScreen />} />
          <Route path="/purchases" element={<h1>Compras</h1>} />
        </Route>
      ) : (
        <Route index element={<LoginScreen />} />
      )}
    </Routes>
  );
};
