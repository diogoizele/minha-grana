import type { IconType } from "react-icons";
import type { AppBarTabs } from "../appBar.types";

export type AppBarButtonProps = {
  title: AppBarTabs;
  path: string;
  isActive: boolean;
  isOpen: boolean;

  icon: IconType;
  onChangeTab: (tab: AppBarTabs) => void;
};
