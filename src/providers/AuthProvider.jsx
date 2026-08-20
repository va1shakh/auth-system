import { useState } from "react";
import { AuthContext, login, register } from "../contexts/AuthContext";
import { useEffect } from "react";

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        user,
        setUser,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
