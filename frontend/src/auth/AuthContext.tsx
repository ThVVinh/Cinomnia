import { createContext} from "react";

export type User = {
  id: number;
  email: string;
  dob: string;
  gender: string;
  name: string;
  password: string;
};

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

