import { Platform, StatusBar, StyleSheet } from "react-native";
import { AppColors } from "../../config/AppColors";
import { Fonts, FontsSizes } from "../../config/AppFonts";

export const TestPageStyles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 30,
    backgroundColor: AppColors.primary,
    flex: 1,
    paddingHorizontal: 25,
  },
  questionContainer: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderRadius: 20,
    backgroundColor: AppColors.white,
  },
  testTitle: {
    color: AppColors.black,
    fontFamily: Fonts.Lato.Regular,
    fontSize: FontsSizes.paragraph,
  },
  testProgress: {
    marginVertical: 5,
    color: AppColors.black,
    fontFamily: Fonts.Lato.Regular,
    fontSize: FontsSizes.paragraph,
  },

  questionTitle: {
    marginVertical: 20,
    fontFamily: Fonts.Lato.Regular,
    fontSize: FontsSizes.title,
  },

  navigationButtonsContainer: {
    marginBottom: 35,
    flexDirection: "row",

    justifyContent: "space-between",
  },

  previousQuestionBtn: {
    backgroundColor: "transparent",
  },
  nextQuestionBtn: {
    backgroundColor: AppColors.accent,
  },
});
