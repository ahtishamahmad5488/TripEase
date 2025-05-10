// context/AuthContext.js
import React, {createContext, useState, useContext} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [role, setRole] = useState(null); // 'customer' | 'transporter' | 'admin'

  const login = (userRole) => {
    setRole(userRole);
  };

  const logout = () => {
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{role, login, logout, setRole}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
