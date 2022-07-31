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
    setError(null);
    const { username, email, password, confirmPassword } = values;
    if (password !== confirmPassword) {
      setError('Passwords don`t match');
      return;
    }
    const res = await registerUser({ username, email, password });
    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
      router.push('/');
    } else {
      setError(data?.message);
    }
  };

  const login = async ({ username: identifier, password }) => {
    setError(null);
    const res = await loginUser({ identifier, password });
    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
      router.push('/');
    } else {
      setError(data?.message || data?.error);
    }
  };

  const isLoggedIn = async () => {
    const res = await checkUserLoggedIn();
    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
      router.push('/');
    } else {
      setUser(null);
    }
  };

  const logout = async () => {
    const res = await logoutUser();
    if (res.ok) {
      setUser(null);
      router.push('/');
    } else {
      const data = await res.json();
      setError(data?.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
