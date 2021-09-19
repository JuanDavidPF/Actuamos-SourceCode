//React - Expo dependencies
import { StyleSheet } from "react-native";

import { AppColors } from "../../config/AppColors";
import { Fonts, FontsSizes } from "../../config/AppFonts";

export const SubmitButtonStyles = StyleSheet.create({
  container: {
    marginVertical: 26,
    height: 53,
    borderRadius: 10,
    overflow: "hidden",
  },
  button: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    color: AppColors.white,
    fontFamily: Fonts.Lato.Bold,
    fontSize: FontsSizes.subtitle,
  },
});
