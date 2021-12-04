import { StyleSheet } from "react-native";
import { AppColors } from "../../config/AppColors";
import { Fonts, FontsSizes } from "../../config/AppFonts";

export const LikertButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 2,
    borderRadius: 18,
    width: 35,
    height: 35,
  },

  label: {
    color: AppColors.black,
    fontFamily: Fonts.Comfortaa.Regular,
    fontSize: FontsSizes.paragraph,
  },

  containerSelected: {
    backgroundColor: AppColors.lightViolet,
  },
  labelSelected: {
    color: AppColors.white,
    fontFamily: Fonts.Comfortaa.Bold,
    fontSize: FontsSizes.subtitle,
  },
});
