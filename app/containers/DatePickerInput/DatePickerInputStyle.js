import { StyleSheet } from "react-native";
import { AppColors } from "../../config/AppColors";
import { Fonts, FontsSizes } from "../../config/AppFonts";

export const DatePickerInputStyle = StyleSheet.create({
  inputButton: {
    marginVertical: 20,
    backgroundColor: AppColors.lightViolet,
    justifyContent: "space-between",
    paddingVertical: 22,
    paddingHorizontal: 22,
    borderRadius: 20,
    width: "100%",
  },
  inputButtonInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputButtonIcon: {
    width: 20,
    resizeMode: "contain",
  },
  inputbuttonLabel: {
    color: AppColors.white,
    fontFamily: Fonts.Lato.Regular,
    fontSize: FontsSizes.paragraph,
  },
});
