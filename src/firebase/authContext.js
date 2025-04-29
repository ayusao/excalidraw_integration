
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase"; 
import { onAuthStateChanged, signOut } from "firebase/auth";

// 1. Create a context
const AuthContext = React.createContext();

// 2. Create a provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logout = () => signOut(auth);

  // 3. Provide value for context
  const value = {
    user,
    loading,
    logout,  
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// 4. Easy hook for other components to use
export function useAuth() {
  return useContext(AuthContext);
}
