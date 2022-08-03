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
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = async () => {
      setLoading(true);
      const res = await checkUserLoggedIn();
      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
        // router.push('/');
      } else {
        setUser(null);
      }
      setLoading(false);
    };
    isLoggedIn();
  }, []);

  const register = async (values) => {
    setLoading(true);
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
    setLoading(false);
  };

  const login = async ({ username: identifier, password }) => {
    setLoading(true);
    setError(null);
    const res = await loginUser({ identifier, password });
    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
      router.push('/');
    } else {
      setError(data?.message || data?.error);
    }
    setLoading(false);
  };

  const logout = async () => {
    setLoading(true);
    const res = await logoutUser();
    if (res.ok) {
      router.replace('/');
      setUser(null);
    } else {
      const data = await res.json();
      setError(data?.message);
    }
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, error, loading, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
