//React - Expo dependencies
import { StyleSheet } from "react-native";

import { AppColors } from "../../config/AppColors";

export const LoginInputsStyles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.modalBackground,
    justifyContent: "space-between",
    padding: 22,
    borderRadius: 20,
    width: "85%",
    height: 170,
  },
});
