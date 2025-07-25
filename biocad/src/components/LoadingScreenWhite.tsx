import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import { ThemedView } from "./ThemedView";

const LoadingScreenWhite = () => {
  return (
    <ThemedView colorName="white" style={{ ...styles.container }}>
      <ActivityIndicator size={40} color={Colors.dark.primary} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingScreenWhite;
