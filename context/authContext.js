import {
  checkUserLoggedIn,
  loginUser,
  logoutUser,
  registerUser,
} from '@/apiHelpers/index';
import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    isLoggedIn();
  }, []);

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
      setError(data?.message || data?.error);
    } else {
      setUser(data.user);
      router.push('/');
    }
  };

  const isLoggedIn = async () => {
    const res = await checkUserLoggedIn();
    const data = await res.json();
    if (!res.ok) {
      setUser(null);
    } else {
      setUser(data.user);
      router.push('/');
    }
  };

  const logout = async () => {
    const res = await logoutUser();
    if (!res.ok) {
      const data = await res.json();
      setError(data?.message);
    } else {
      setUser(null);
      router.push('/');
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
