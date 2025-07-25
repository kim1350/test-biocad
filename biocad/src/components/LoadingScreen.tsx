import React, { type FC } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Colors } from "../constants/Colors";

interface LoadingScreenProps {
  backgroundColor?: string;
}

const LoadingScreen: FC<LoadingScreenProps> = (props) => {
  const { backgroundColor = "rgba(0, 0, 0, 0.4)" } = props;
  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <ActivityIndicator size={40} color={Colors.light.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    zIndex: 4,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingScreen;
