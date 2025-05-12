import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null); // 'customer', 'transporter', or null
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ userRole, setUserRole, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};