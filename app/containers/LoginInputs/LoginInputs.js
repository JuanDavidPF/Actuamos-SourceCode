//React - Expo dependencies
import React from "react";
import { View } from "react-native";

import InputText from "../../components/InputText/InputText";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { AppColors } from "../../config/AppColors";
import { LoginInputsStyles } from "./LoginInputsStyle";

export default function LoginInputs() {
  return (
    <View style={LoginInputsStyles.container}>
      <InputText placeholder={"Usuario"} />
      <InputText passwordInput={true} placeholder={"Contraseña"} />
      <SubmitButton title={"Enviar"} color={AppColors.primary}></SubmitButton>
    </View>
  );
}
