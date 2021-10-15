//React - Expo dependencies
import { Platform, StatusBar, StyleSheet } from "react-native";
import { AppColors } from "../../config/AppColors";
import { Fonts, FontsSizes } from "../../config/AppFonts";

export const WelcomePageStyles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    paddingHorizontal: 23,
    paddingVertical: 50,
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },

  brand: {
    alignItems: "center",
    width: "70%",
  },
  logo: {
    resizeMode: "contain",
    width: 100,
    height: 100,
  },
  slogan: {
    marginTop: 30,
    fontSize: FontsSizes.subtitle,
    textAlign: "center",
    fontFamily: Fonts.Comfortaa.Bold,
    color: AppColors.white,
  },

  displayNameInputContainer: {
    marginVertical: 50,
    backgroundColor: AppColors.modalBackground,
    paddingHorizontal: 20,
    paddingVertical: 40,
    width: "100%",
    borderRadius: 20,
  },

  displayNameInputLabel: {
    marginVertical: 12,
    fontFamily: Fonts.Lato.Regular,
    fontSize: FontsSizes.subtitle,
    color: AppColors.white,
  },

  nextButton: {
    width: "90%",
  },
});
