import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const register = (data) => {
    console.log(data);
  };

  const login = ({ username: identifier, password }) => {
    console.log({ identifier, password });
  };

  const logout = () => {
    console.log('Logout');
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
