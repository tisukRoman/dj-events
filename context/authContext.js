import { createContext, useState } from 'react';
import { API_URL } from '@/config/index';
import { registerUser } from 'apiHelpers/registerUser';
import { loginUser } from '../apiHelpers';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [error, setError] = useState(null);

  const register = async (values) => {
    setError(null);
    const { username, email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      setError({
        type: 'password confirming',
        message: `Passwords don't match`,
      });
      return;
    }

    const data = await registerUser({ username, email, password });
    console.log(data);
  };

  const login = async ({ username: identifier, password }) => {
    setError(null);
    const data = await loginUser({ identifier, password });
    console.log(data);
  };

  const logout = () => {
    console.log('Logout');
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
