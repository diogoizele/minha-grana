import type { ReactNode } from "react";

export type ModalSizeVariants = "sm" | "md" | "lg";

export interface ModalProps {
  open: boolean;
  children: ReactNode;

  size?: ModalSizeVariants;
  fullHeight?: boolean;

  onClose: () => void;
}
