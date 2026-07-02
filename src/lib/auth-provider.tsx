"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Learner } from "@/types";
import { currentLearner as mockLearner } from "./mock-data";

interface AuthContextType {
  user: Learner | null;
  login: (email: string) => void;
  signup: (name: string, email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Learner | null>(null);

  useEffect(() => {
    // Load from local storage on mount
    const storedUser = localStorage.getItem("mindgrid_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse stored user", e);
      }
    } else {
      // Default to mock learner if none exists (for demo purposes)
      setUser(mockLearner);
    }
  }, []);

  const login = (email: string) => {
    // Basic mock login: just extract a name from email if we don't have this user,
    // but typically we'd fetch from a DB. Here we simulate finding the user.
    const storedUser = localStorage.getItem("mindgrid_user");
    let loggedInUser = mockLearner;
    
    if (storedUser) {
      loggedInUser = JSON.parse(storedUser);
    } else {
      // Simulate new user from email prefix
      const name = email.split("@")[0].replace(/[^a-zA-Z]/g, " ");
      const initials = name.slice(0, 2).toUpperCase();
      loggedInUser = {
        ...mockLearner,
        id: "u_" + Date.now(),
        name: name || "User",
        initials: initials || "US",
        streakDays: 0,
        weeklyGoalMinutes: 300,
        weeklyMinutesCompleted: 0,
      };
    }
    
    setUser(loggedInUser);
    localStorage.setItem("mindgrid_user", JSON.stringify(loggedInUser));
  };

  const signup = (name: string, email: string) => {
    // Create new user profile based on input
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();

    const newUser: Learner = {
      ...mockLearner,
      id: "u_" + Date.now(),
      name,
      initials: initials || "U",
      // Reset mock progress for a new account
      streakDays: 0,
      weeklyGoalMinutes: 300,
      weeklyMinutesCompleted: 0,
    };

    setUser(newUser);
    localStorage.setItem("mindgrid_user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("mindgrid_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
