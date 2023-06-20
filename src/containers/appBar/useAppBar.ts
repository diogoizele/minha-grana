import { useState } from "react";
import { VscDashboard } from "react-icons/vsc";
import { IoIosOptions } from "react-icons/io";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { useLocation } from "react-router-dom";

import type { AppBarTabs } from "./appBar.types";
import type { AppBarButtonProps } from "./appBarButton/appBarButton.types";

export function useAppBar() {
  const { pathname } = useLocation();

  const [activeTab, setActiveTab] = useState<AppBarTabs>(() => {
    switch (pathname) {
      case "/categories":
        return "Categorias";
      case "/purchases":
        return "Compras";
      case "/":
      default:
        return "Dashboard";
    }
  });

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
      path: "/categories",
      icon: IoIosOptions,
    },
    {
      title: "Compras",
      path: "/purchases",
      icon: BiPurchaseTagAlt,
    },
  ];

  return { activeTab, appBarButtons, handleChangeTab };
}
