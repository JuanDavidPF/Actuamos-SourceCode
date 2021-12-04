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
    height: "120%",
    borderRadius: 20,

    bottom: "-20%",
  },

  feedbackModal: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: AppColors.secondaryModalBackground,

    borderRadius: 20,
    paddingVertical: 45,

    paddingHorizontal: 22,
    maxHeight: "100%",
    width: "100%",
  },
  feedbackModalTitle: {
    fontFamily: Fonts.Lato.Regular,
    fontSize: FontsSizes.subtitle,
    textAlign: "center",
    color: AppColors.white,
  },
});
