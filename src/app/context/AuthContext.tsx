import { createContext, useContext, useState } from 'react';

type AuthContextType = {
  admin: boolean;
  login: boolean;
  setAdmin: (v: boolean) => void;
  setLogin: (v: boolean) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [admin, setAdmin] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <AuthContext value={{ admin, login, setAdmin, setLogin }}>
      {children}
    </AuthContext>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
