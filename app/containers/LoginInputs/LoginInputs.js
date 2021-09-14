//React - Expo dependencies
import React from "react";
import { Image, View, Text } from "react-native";

import InputText from "../../components/InputText/InputText";
import { LoginInputsStyles } from "./LoginInputsStyle";

export default function LoginInputs() {
  return (
    <View style={LoginInputsStyles.container}>
      <InputText placeholder={"Usuario"}></InputText>
      <InputText passwordInput={true} placeholder={"Contraseña"}></InputText>
    </View>
  );
}
