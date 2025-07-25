import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { Colors } from "../constants/Colors";

const LightTheme = {
  ...DefaultTheme,

  colors: Colors.light,
  fonts: {
    regular: {
      fontFamily: "Roboto-Regular",
      fontWeight: "400",
    },
    medium: {
      fontFamily: "Roboto-Medium",
      fontWeight: "500",
    },
    bold: {
      fontFamily: "Roboto-Bold",
      fontWeight: "700",
    },

    heavy: {
      fontFamily: "Roboto-Black",
      fontWeight: "900",
    },
  },
};

const DarkThemeT: Theme = {
  ...DarkTheme,
  colors: Colors.dark,
  fonts: {
    regular: {
      fontFamily: "Roboto-Regular",
      fontWeight: "400",
    },
    medium: {
      fontFamily: "Roboto-Medium",
      fontWeight: "500",
    },
    bold: {
      fontFamily: "Roboto-Bold",
      fontWeight: "700",
    },

    heavy: {
      fontFamily: "Roboto-Black",
      fontWeight: "900",
    },
  },
};

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext должен использоваться внутри CustomThemeProvider"
    );
  }
  return context;
};

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  // const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<any>(DarkThemeT);

  const toggleTheme = () => {
    setTheme((prevTheme: any) =>
      prevTheme === LightTheme ? DarkThemeT : LightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
