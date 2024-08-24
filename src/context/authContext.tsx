'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/firebase/client';

interface AuthContextType {
  isLoggedIn: boolean;
  username?: string;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setIsLoggedIn(true);
        setUsername(user.displayName || user.email || 'User');
      } else {
        setIsLoggedIn(false);
        setUsername(undefined);
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await auth.signOut();
    setIsLoggedIn(false);
    setUsername(undefined);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, logout }}>
      {children}
    </AuthContext.Provider>
  );
};