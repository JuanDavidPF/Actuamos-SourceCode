//React - Expo dependencies
import React, { useState } from "react";
import { View } from "react-native";

import InputText from "../../components/InputText/InputText";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { AppColors } from "../../config/AppColors";
import { LoginInputsStyles } from "./LoginInputsStyle";

export default function LoginInputs(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={LoginInputsStyles.container}>
      {/*UserName input*/}
      <InputText placeholder={"Usuario"} onChangeText={setUsername}>
        {username}
      </InputText>

      {/*Password input*/}
      <InputText
        secureTextEntry={true}
        placeholder={"Contraseña"}
        onChangeText={setPassword}
      >
        {password}
      </InputText>

      {/*Submit button input*/}
      <SubmitButton
        color={AppColors.accent}
        onPress={() => {
          props.submit(username, password);
        }}
      >
        Enviar
      </SubmitButton>
    </View>
  );
}
