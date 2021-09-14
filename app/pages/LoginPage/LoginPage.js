//React - Expo dependencies
import React from "react";
import { Image, View, Text } from "react-native";
import LoginInputs from "../../containers/LoginInputs/LoginInputs";
import { LoginPageStyles } from "./LoginPageStyles";

export default function LoginPage({ navigation }) {
  return (
    <View style={LoginPageStyles.container}>
      <View style={LoginPageStyles.header}>
        <Image
          source={require("./../../assets/images/isotype.png")}
          style={LoginPageStyles.logo}
        />
        <Text style={LoginPageStyles.title}>Iniciar Sesión</Text>
      </View>

      <LoginInputs />
    </View>
  );
}
