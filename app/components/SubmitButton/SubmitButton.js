//React - Expo dependencies
import React from "react";
import { Text, TouchableNativeFeedback, View } from "react-native";
import { LightenDarkenColor } from "lighten-darken-color";
import { SubmitButtonStyles } from "./SubmitButtonStyles";
import { AppColors } from "../../config/AppColors";

export default function SubmitButton(props) {
  return (
    <View
      style={[
        SubmitButtonStyles.container,
        props.style,
        { backgroundColor: props.color || AppColors.primary },
      ]}
    >
      <TouchableNativeFeedback
        onPress={props.onPress}
        background={TouchableNativeFeedback.Ripple(
          LightenDarkenColor(props.color || AppColors.primary, 50),
          true
        )}
      >
        <View style={[SubmitButtonStyles.button]}>
          <Text style={SubmitButtonStyles.buttonTitle}>{props.children}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
