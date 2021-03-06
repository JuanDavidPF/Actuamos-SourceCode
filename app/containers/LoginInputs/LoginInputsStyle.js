//React - Expo dependencies
import { StyleSheet } from "react-native";

import { AppColors } from "../../config/AppColors";

export const LoginInputsStyles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: AppColors.modalBackground,
    justifyContent: "space-between",
    paddingVertical: 22,
    paddingHorizontal: 22,
    borderRadius: 20,
    width: "90%",
  },
});
