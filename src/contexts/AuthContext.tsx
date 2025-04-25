import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAdmin: boolean;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Senha padrão para desenvolvimento
const DEFAULT_ADMIN_PASSWORD = 'admin123';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Verificar se há um token salvo
    const token = localStorage.getItem('admin_token');
    if (token) {
      setIsAdmin(true);
    }
  }, []);

  const login = async (password: string) => {
    // Usar a senha do ambiente ou a senha padrão
    const correctPassword = DEFAULT_ADMIN_PASSWORD;
    
    if (password === correctPassword) {
      localStorage.setItem('admin_token', 'true');
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 