import { useGetUsers } from "@/src/api/userApi";
import LoadingScreenWhite from "@/src/components/LoadingScreenWhite";
import { ThemedView } from "@/src/components/ThemedView";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import CardProfile from "@/src/modules/home/components/CardProfile";

import { Profile } from "@/src/store/types/profile";
import React, { useCallback, useState } from "react";
import { FlatList, RefreshControl, StyleSheet } from "react-native";

const HomeScreen = () => {
  const colors = useThemeColors();
  const { data, isLoading, refetch } = useGetUsers();
  const [isRefresh, setRefresh] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefresh(true);
    await refetch();
    setRefresh(false);
  }, [refetch]);
  const renderItem = useCallback(({ item }: { item: Profile }) => {
    return <CardProfile item={item} />;
  }, []);
  if (isLoading) return <LoadingScreenWhite />;
  return (
    <ThemedView style={{ flex: 1 }}>
      <FlatList
        data={data}
        refreshControl={
          <RefreshControl
            colors={[colors.primary]}
            tintColor={colors.primary}
            refreshing={isRefresh}
            onRefresh={onRefresh}
          />
        }
        contentContainerStyle={styles.container}
        renderItem={renderItem}
      />
    </ThemedView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
});
