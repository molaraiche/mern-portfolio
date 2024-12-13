"use client";
import { createContext, useContext, useEffect, useState } from "react";
interface ThemeContextProps {
  isLightMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLightMode, setIsLightMode] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setIsLightMode(storedTheme === "light");
      } else {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setIsLightMode(!prefersDark);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      if (isLightMode) {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
