import { useState } from "react";
import { VscDashboard } from "react-icons/vsc";
import { IoIosOptions } from "react-icons/io";
import { BiPurchaseTagAlt } from "react-icons/bi";

import type { AppBarTabs } from "./appBar.types";
import type { AppBarButtonProps } from "./appBarButton/appBarButton.types";

export function useAppBar() {
  const [activeTab, setActiveTab] = useState<AppBarTabs>("Dashboard");

  const handleChangeTab = (tab: AppBarTabs) => {
    setActiveTab(tab);
  };

  const appBarButtons: Pick<AppBarButtonProps, "icon" | "path" | "title">[] = [
    {
      title: "Dashboard",
      path: "/",
      icon: VscDashboard,
    },
    {
      title: "Categorias",
      path: "/",
      icon: IoIosOptions,
    },
    {
      title: "Compras",
      path: "/",
      icon: BiPurchaseTagAlt,
    },
  ];

  return { activeTab, appBarButtons, handleChangeTab };
}
