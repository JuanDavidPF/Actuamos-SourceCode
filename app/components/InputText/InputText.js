//React - Expo dependencies
import React from "react";

import { TextInput } from "react-native";
import { InputTextStyles } from "./InputTextStyles";

export default function InputText(props) {
  return (
    <TextInput
      style={InputTextStyles.input}
      placeholder={props.placeholder}
      secureTextEntry={props.passwordInput}
    ></TextInput>
  );
}
