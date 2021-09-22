import { Platform, StatusBar, StyleSheet } from "react-native";
import { AppColors } from "../../config/AppColors";
import { Fonts, FontsSizes } from "../../config/AppFonts";

export const HomePageStyles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },

  greetingSection: {
    marginTop: 65,
    paddingHorizontal: "10%",
  },
  greetingTitle: {
    fontFamily: Fonts.Comfortaa.Regular,
    color: AppColors.white,
    fontSize: FontsSizes.subtitle,
  },
  greetingName: {
    fontFamily: Fonts.Comfortaa.Bold,
    fontSize: FontsSizes.title,
    color: AppColors.accent,
  },
  greetingDescription: {
    fontFamily: Fonts.Lato.Regular,
    fontSize: FontsSizes.paragraph,
    color: AppColors.white,
    marginTop: 25,
    width: 260,
  },
});
