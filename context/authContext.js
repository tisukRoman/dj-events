import { createContext, useState } from 'react';
import { API_URL } from '@/config/index';
import { registerUser } from 'apiHelpers/registerUser';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [error, setError] = useState(null);

  const register = async (data) => {
    setError(null);
    const { username, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      setError({
        type: 'password confirming',
        message: `Passwords don't match`,
      });
      return;
    }

    const res = await registerUser({ username, email, password });

    console.log(res);
  };

  const login = ({ username: identifier, password }) => {
    console.log({ identifier, password });
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
