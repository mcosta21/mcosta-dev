import React, { createContext, useEffect, useState } from "react";

type Theme = typeof ThemeProps.light | typeof ThemeProps.dark;
const ThemeProps = {
  key: "theme",
  light: "light",
  dark: "dark",
} as const;

interface MyThemeContext {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<MyThemeContext>({} as any);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(ThemeProps.key) as Theme | null;

    return storedTheme || ThemeProps.dark;
  });

  const _setTheme = (theme: Theme) => {
    localStorage.setItem(ThemeProps.key, theme);
    document.documentElement.classList.remove(
      ThemeProps.light,
      ThemeProps.dark,
    );
    document.documentElement.classList.add(theme);
    setTheme(theme);
  };

  const setLightTheme = () => _setTheme(ThemeProps.light);

  const setDarkTheme = () => _setTheme(ThemeProps.dark);

  const toggleTheme = () => {
    if (theme === ThemeProps.dark) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  useEffect(() => {
    _setTheme(theme);
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
