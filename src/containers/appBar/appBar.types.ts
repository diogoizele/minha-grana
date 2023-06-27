export type AppBarProps = {
  isOpen: boolean;

  onToggle: () => void;
};

export type AppBarTabs =
  | "Dashboard"
  | "Categorias"
  | "Compras"
  | "Despesas"
  | "Receitas";
