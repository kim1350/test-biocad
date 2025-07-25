import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { Colors } from "@/src/constants/Colors";
import { Profile } from "@/src/store/types/profile";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
type TCardProfile = {
  item: Profile;
};
const CardProfile: FC<TCardProfile> = ({ item }) => {
  return (
    <ThemedView style={styles.card} colorName="white">
      <View style={styles.img} />
      <View>
        <ThemedText font="medium" colorName="black">
          {item.name}
        </ThemedText>
        <ThemedText size={14}>{item.email}</ThemedText>
      </View>
    </ThemedView>
  );
};

export default CardProfile;

const styles = StyleSheet.create({
  img: {
    backgroundColor: Colors.dark.card,
    width: 78,
    height: 78,
    borderRadius: 60,
  },
  card: {
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    gap: 12,
  },
});
