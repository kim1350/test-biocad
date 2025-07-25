import { Redirect } from "expo-router";
import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { checkIsSigned } from "../store/slices/authSlice";
import { getProfileInfo } from "../store/thunks/profileThunks";

const Index = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getProfileInfo());
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(checkIsSigned());
  }, []);

  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  } else {
    return <Redirect href="/(auth)/auth" />;
  }
};

export default Index;
