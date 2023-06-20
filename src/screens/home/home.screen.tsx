import { useEffect } from "react";

import { detailUser } from "api";
import { Content } from "containers";
import { useUserStore } from "stores";

export function HomeScreen() {
  const { setUser, user } = useUserStore();

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

  return (
    <Content title="Dashboard">
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-2xl">Bem vindo, {user?.name}!</h1>
      </div>
    </Content>
  );
}
