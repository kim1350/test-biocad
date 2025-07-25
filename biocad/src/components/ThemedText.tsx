import { Text, TextStyle, type TextProps } from "react-native";
import { Colors } from "../constants/Colors";
import { fonts, normalize } from "../constants/Fonts";
import { fontSizes, lineHeights } from "../constants/Sizes";
import { useThemeColor } from "../hooks/useThemeColor";

interface ThemedTextProps extends TextProps {
  children: React.ReactNode;
  font?: keyof typeof fonts;
  size?: (typeof fontSizes)[number];
  lineHeight?: (typeof lineHeights)[number];
  lightColor?: string;
  darkColor?: string;
  colorName?: keyof typeof Colors.light & keyof typeof Colors.dark;
}
export function ThemedText({
  style,
  lightColor,
  darkColor,
  font = "regular",
  size = 16,
  lineHeight,
  colorName,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    colorName || "text"
  );
  return (
    <Text
      style={[
        { color },
        {
          ...fonts[font],
          fontSize: normalize(size),
          lineHeight: lineHeight ? normalize(lineHeight) : undefined,
        } as TextStyle,
        style,
      ]}
      {...rest}
    />
  );
}
