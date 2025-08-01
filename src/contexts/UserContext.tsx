import { type ReactNode, useState } from "react";
import { UserContext } from "./UserContext"

interface UserProviderProps {
  children: ReactNode;
}


export function UserProvider({ children }: UserProviderProps) {
  const [nome, setNome] = useState("");

  function trocarNome(nome: string) {
    setNome(nome);
  }

  return (
    <UserContext.Provider value={{ nome, trocarNome }}>
      {children}
    </UserContext.Provider>
  );
}
