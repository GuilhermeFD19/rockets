import {
  ReactNode,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

interface AuthContextProps {
  setName: Dispatch<SetStateAction<string>>;
  setAge: Dispatch<SetStateAction<number>>;
  age: number;
  name: string;
}

interface AuthProviderProps {
  children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  return (
    <AuthContext.Provider value={{ age, name, setName, setAge }}>
      {children}
    </AuthContext.Provider>
  );
};
