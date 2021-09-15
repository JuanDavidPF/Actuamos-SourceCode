//React - Expo dependencies
import React from "react";
import { Text, TouchableNativeFeedback, View } from "react-native";
import { LightenDarkenColor } from "lighten-darken-color";
import { SubmitButtonStyles } from "./SubmitButtonStyles";

export default function SubmitButton(props) {
  return (
    <View
      style={[SubmitButtonStyles.container, { backgroundColor: props.color }]}
    >
      <TouchableNativeFeedback
        onPress={Login}
        background={TouchableNativeFeedback.Ripple(
          LightenDarkenColor(props.color, 50),
          true
        )}
      >
        <View style={[SubmitButtonStyles.button]}>
          <Text style={SubmitButtonStyles.buttonTitle}>{props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const Login = () => {};
