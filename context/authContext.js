import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [confirmError, setConfirmError] = useState(null);

  const register = (data) => {
    setConfirmError(null);
    const { username, email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      setConfirmError(`Passwords don't match`);
      return;
    }
    console.log({username, email, password});
  };

  const login = ({ username: identifier, password }) => {
    console.log({ identifier, password });
  };

  const logout = () => {
    console.log('Logout');
  };

  return (
    <AuthContext.Provider value={{ user, confirmError, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
