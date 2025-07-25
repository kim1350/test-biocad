import { PixelRatio } from "react-native";

export const fonts = {
  regular: {
    fontFamily: "Robot-Regular",
    fontWeight: "400",
  },
  medium: {
    fontFamily: "Robot-Medium",
    fontWeight: "500",
  },
  bold: {
    fontFamily: "Robot-Bold",
    fontWeight: "700",
  },
  heavy: {
    fontFamily: "Robot-Black",
    fontWeight: "900",
  },
};

export const normalize = (size: number) => {
  return size / PixelRatio.getFontScale();
};
