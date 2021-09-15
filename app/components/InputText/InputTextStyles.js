//React - Expo dependencies
import { StyleSheet } from "react-native";

import { AppColors } from "../../config/AppColors";
import { Fonts, FontsSizes } from "../../config/AppFonts";

export const InputTextStyles = StyleSheet.create({
  input: {
    fontFamily: Fonts.Lato.Regular,
    fontSize: FontsSizes.subtitle,
    paddingHorizontal: 22,
    backgroundColor: AppColors.white,
    height: 53,
    borderRadius: 10,
    marginVertical: 7.5,
  },
});
