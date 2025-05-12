// import React, { createContext, useState, useContext } from 'react';

// // Create Context
// const AuthContext = createContext();

// // Create Provider
// export const AuthProvider = ({ children }) => {
//   const [role, setRole] = useState(null); // 'customer', 'transporter', or 'admin'

//   const value = {
//     role,
//     setRole,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// // Optional Custom Hook
// export const useAuth = () => useContext(AuthContext);

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