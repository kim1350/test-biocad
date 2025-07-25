import { Redirect } from "expo-router";
import React from "react";
import { useAppSelector } from "../hooks/useAppSelector";

const Index = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  } else {
    return <Redirect href="/(auth)/auth" />;
  }
};

export default Index;
