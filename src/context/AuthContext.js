// // context/AuthContext.js
// import React, {createContext, useState, useContext} from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({children}) => {
//   const [role, setRole] = useState(null); // 'customer' | 'transporter' | 'admin'
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const login = (userRole) => {
//     setRole(userRole);
//     setIsAuthenticated(true); // ✅ THIS IS NECESSARY
//   };

//   const logout = () => {
//     setRole(null);
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{
//       role,
//       isAuthenticated,
//       login,
//       logout,
//       setRole
//     }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    role: null,          // 'customer', 'transporter', or null (admin)
    isAuthenticated: false
  });

  const login = (role) => {
    setAuth({
      role: role,        // Can be null for admin
      isAuthenticated: true
    });
  };

  const logout = () => {
    setAuth({
      role: null,
      isAuthenticated: false
    });
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);