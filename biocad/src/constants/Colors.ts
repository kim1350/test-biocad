/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    black: "#000000ff",
    text: "#11181C",
    background: "#EBEBEB",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    red: "#FF3D3D",
    primary: "#353535",
    activeButton: "#353535",
    button: "#EBEBEB",
    disableText: "#939393",
    placeholder: "#9B9999",
    white: "#ffffff",
    card: "#EBEBEB",
    REQUIRED_ERROR: "#E54141",
    border: "#C6C6C6",
    notification: "#11181C",
  },
  dark: {
    black: "#ffffffff",
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    placeholder: "#9B9999",
    REQUIRED_ERROR: "#E54141",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    white: "#000000ff",
    activeButton: "#353535",
    button: "#EBEBEB",
    red: "#FF3D3D",
    primary: "#353535",
    disableText: "#939393",
    card: "#EBEBEB",
    border: "#C6C6C6",
    notification: "#11181C",
  },
};
