import { AuthContext } from 'context/authContext';
import { useContext } from 'react';

export const useAuth = () => useContext(AuthContext);
