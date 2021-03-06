import { StyleSheet } from "react-native";
import { AppColors } from "../../config/AppColors";
import { Fonts, FontsSizes } from "../../config/AppFonts";

const container = {
  flex: 1,
  backgroundColor: AppColors.primary,
  alignItems: "center",
  justifyContent: "center",
};

const isotype = { width: 154, height: 148 };

const logotype = { width: 153, height: 48 };

const slogan = {
  fontSize: FontsSizes.subtitle,
  color: AppColors.white,
  fontFamily: Fonts.Comfortaa.Light,
  top: 10,
};

export const SplashPageStyles = StyleSheet.create({
  container,
  isotype,
  logotype,
  slogan,
});
