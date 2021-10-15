//React - Expo dependencies
import React from "react";

import { TextInput } from "react-native";
import { InputTextStyles } from "./InputTextStyles";

export default function InputText(props) {
  return (
    <TextInput {...props} style={[InputTextStyles.input, props.style]}>
      {props.children}
    </TextInput>
  );
}
