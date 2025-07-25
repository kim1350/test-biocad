import React, { FC } from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import { Colors } from "@/src/constants/Colors";
import { useThemeColor } from "@/src/hooks/useThemeColor";
import { ThemedText, ThemedTextProps } from "../ThemedText";

interface IButton {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: ThemedTextProps;

  textColorName?: keyof typeof Colors.light & keyof typeof Colors.dark;
  colorName?: keyof typeof Colors.light & keyof typeof Colors.dark;
  onPress?: (() => void) | undefined;
  active?: boolean;
  disableTextColor?: string;
  disableButtonColor?: string;
  load?: boolean;
  indicatorColor?: string;
}

const Button: FC<IButton> = ({
  load = false,
  active = true,
  title,
  onPress,
  colorName,
  containerStyle,
  textColorName,
  indicatorColor,
  disableButtonColor,
}) => {
  const color = useThemeColor({}, colorName || "activeButton");
  return (
    <TouchableOpacity
      disabled={load || (active === undefined ? undefined : !active)}
      onPress={onPress}
      style={[
        styles.button,
        !active && {
          backgroundColor: disableButtonColor,
        },
        { backgroundColor: color },
        containerStyle,
      ]}
    >
      {load ? (
        <ActivityIndicator size={22} color={indicatorColor} />
      ) : (
        <ThemedText
          size={18}
          lineHeight={24}
          font="medium"
          colorName={textColorName || "white"}
        >
          {title}
        </ThemedText>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});
