//React - Expo dependencies
import React from "react";
import { Text, TouchableNativeFeedback, View } from "react-native";
import { LightenDarkenColor } from "lighten-darken-color";
import { SubmitButtonStyles } from "./SubmitButtonStyles";
import { AppColors } from "../../config/AppColors";

export const SubmitButton = ({
  color,
  style,
  labelStyle,
  children,
  onPress,
}) => {
  return (
    <View
      style={[
        SubmitButtonStyles.container,
        { backgroundColor: color || AppColors.primary },
        style,
      ]}
    >
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple(
          LightenDarkenColor(color || AppColors.primary, 50),
          true
        )}
      >
        <View style={[SubmitButtonStyles.button]}>
          <Text style={[SubmitButtonStyles.buttonTitle, labelStyle]}>
            {children}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
