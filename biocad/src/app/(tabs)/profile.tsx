import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { useAppSelector } from "@/src/hooks/useAppSelector";
import React from "react";
import { StyleSheet, View } from "react-native";

const ProfileScreen = () => {
  const { data } = useAppSelector((state) => state.profile);
  return (
    <ThemedView style={{ flex: 1, padding: 15 }}>
      <ThemedView colorName="white" style={styles.container}>
        <ThemedText size={22} style={{ marginBottom: 12 }}>
          Мой профиль:
        </ThemedText>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <ThemedText font="bold">Имя: </ThemedText>
          <ThemedText>{data?.user?.name}</ThemedText>
        </View>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <ThemedText font="bold">email: </ThemedText>
          <ThemedText>{data?.user?.email}</ThemedText>
        </View>
      </ThemedView>
    </ThemedView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    padding: 16,
  },
});
