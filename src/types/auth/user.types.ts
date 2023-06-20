import { Wallet } from "types";

export interface User {
  id: number;
  email: string;
  name: string;
  wallet: Wallet;
}
