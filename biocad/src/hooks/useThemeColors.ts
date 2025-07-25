import { useTheme } from "../components/ThemeContext";
import { Colors } from "../constants/Colors";

export function useThemeColors() {
  const currentTheme = useTheme();
  const theme = currentTheme?.theme.dark ? "dark" : "light";

  return Colors[theme];
}
