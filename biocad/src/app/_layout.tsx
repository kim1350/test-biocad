import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { CustomThemeProvider } from "../components/ThemeContext";
import store from "../store";
const queryClient = new QueryClient();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded, error] = useFonts({
    "Roboto-Black": require("../../assets/fonts/Roboto-Black.ttf"),
    "Roboto-BlackItalic": require("../../assets/fonts/Roboto-BlackItalic.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-BoldItalic": require("../../assets/fonts/Roboto-BoldItalic.ttf"),
    "Roboto-ExtraBold": require("../../assets/fonts/Roboto-ExtraBold.ttf"),
    "Roboto-ExtraBoldItalic": require("../../assets/fonts/Roboto-ExtraBoldItalic.ttf"),
    "Roboto-ExtraLight": require("../../assets/fonts/Roboto-ExtraLight.ttf"),
    "Roboto-ExtraLightItalic": require("../../assets/fonts/Roboto-ExtraLightItalic.ttf"),
    "Roboto-Italic": require("../../assets/fonts/Roboto-Italic.ttf"),
    "Roboto-Light": require("../../assets/fonts/Roboto-Light.ttf"),
    "Roboto-LightItalic": require("../../assets/fonts/Roboto-LightItalic.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("../../assets/fonts/Roboto-MediumItalic.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-SemiBold": require("../../assets/fonts/Roboto-SemiBold.ttf"),
    "Roboto-SemiBoldItalic": require("../../assets/fonts/Roboto-SemiBoldItalic.ttf"),
    "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
    "Roboto-ThinItalic": require("../../assets/fonts/Roboto-ThinItalic.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
      if (error) {
        console.warn(`Error in loading fonts: ${error}`);
      }
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <CustomThemeProvider>
          <Slot />
          <StatusBar style="auto" />
        </CustomThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}
