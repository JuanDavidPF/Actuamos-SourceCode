import { Platform, StatusBar, StyleSheet } from "react-native";
import { AppColors } from "../../config/AppColors";
import { Fonts, FontsSizes } from "../../config/AppFonts";

export const HomePageStyles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: "10%",
    flex: 1,
  },

  greetingSection: {
    marginTop: 50,
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

  contentCard: {
    backgroundColor: AppColors.modalBackground,
    borderRadius: 20,
    height: 20000,
  },
});
