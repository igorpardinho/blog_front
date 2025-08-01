import { createContext } from "react";

export interface UserContextProps {
  nome: string;
  trocarNome: (nome: string) => void;
}

export const UserContext = createContext({} as UserContextProps);