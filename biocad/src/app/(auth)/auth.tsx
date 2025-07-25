import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import React from "react";
import { StyleSheet } from "react-native";

const AuthScreen = () => {
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", paddingHorizontal: 16 }}
    >
      <ThemedView
        colorName="white"
        style={{ alignItems: "center", paddingVertical: 16, borderRadius: 20 }}
      >
        <ThemedText size={22} font="medium" lineHeight={24}>
          Добро пожаловать
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
