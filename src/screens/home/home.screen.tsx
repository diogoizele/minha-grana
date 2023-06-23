import { useEffect } from "react";

import { detailUser } from "api";
import { Content } from "containers";
import { useAuthStore, useUserStore } from "stores";
import { Button } from "@mui/material";

export function HomeScreen() {
  const { setUser, user } = useUserStore();
  const { setToken } = useAuthStore();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const user = await detailUser();
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <Content title="Dashboard">
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-2xl">Bem vindo, {user?.name}!</h1>
        <Button onClick={handleLogout} variant="outlined">
          Sair
        </Button>
      </div>
    </Content>
  );
}
