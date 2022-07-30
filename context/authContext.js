import { createContext, useState } from 'react';
import { loginUser, registerUser } from '@/apiHelpers/index';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [error, setError] = useState(null);
  const router = useRouter();

  const register = async (values) => {
    const { username, email, password, confirmPassword } = values;
    if (password !== confirmPassword) {
      setError('Passwords don`t match');
      return;
    }
    const data = await registerUser({ username, email, password });
    console.log(data);
  };

  const login = async ({ username: identifier, password }) => {
    setError(null);
    const res = await loginUser({ identifier, password });
    const data = await res.json();
    if (!res.ok) {
      setError(data?.error);
    } else {
      setUser(data.user);
      router.push('/');
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
