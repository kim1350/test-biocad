import { useThemeColors } from "@/src/hooks/useThemeColors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { ThemedText } from "../ThemedText";

interface IInputProps extends TextInputProps {
  error?: string;
  label?: string;

  required?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}
const InputValid: FC<IInputProps> = (props) => {
  const { containerStyle, error, inputStyle, label, required, ...reset } =
    props;
  const colors = useThemeColors();
  return (
    <View style={[containerStyle, styles.container]}>
      {label && (
        <ThemedText
          size={14}
          lineHeight={20}
          colorName="text"
          style={styles.label}
        >
          {label}
          {required && <Text style={{ color: colors.red }}>*</Text>}
        </ThemedText>
      )}
      <View
        style={[
          styles.wrapper,
          error && { borderColor: colors.REQUIRED_ERROR },
        ]}
      >
        <TextInput
          placeholderTextColor={colors.placeholder}
          {...reset}
          style={[inputStyle, styles.inputContainer]}
        />
        {error && (
          <View style={styles.icon}>
            <MaterialIcons size={22} />
          </View>
        )}
      </View>

      {error && (
        <ThemedText size={12} lineHeight={16} colorName="REQUIRED_ERROR">
          {error}
        </ThemedText>
      )}
    </View>
  );
};

export default InputValid;

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  inputContainer: {
    paddingLeft: 16,
    paddingVertical: 10,
    flex: 1,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  wrapper: {
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
  },

  label: {
    marginBottom: 4,
  },
});
