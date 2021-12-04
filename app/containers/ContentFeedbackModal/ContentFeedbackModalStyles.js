import { StyleSheet } from "react-native";
import { AppColors } from "../../config/AppColors";
import { Fonts, FontsSizes } from "../../config/AppFonts";

export const ContentFeedbackModalStyles = StyleSheet.create({
  container: {
    zIndex: 100,
    position: "absolute",
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },

  feedbackModal: {
    backgroundColor: AppColors.secondaryModalBackground,
    borderRadius: 20,
    paddingVertical: 45,
    paddingHorizontal: 22,
    width: "100%",
  },
  feedbackModalTitle: {
    fontFamily: Fonts.Lato.Regular,
    fontSize: FontsSizes.subtitle,
    textAlign: "center",
    color: AppColors.white,
  },
});
