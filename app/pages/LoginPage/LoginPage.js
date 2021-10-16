//React - Expo dependencies
import React, { useContext, useEffect } from "react";
import { Image, View, Text } from "react-native";

//firebase
import firebase from "firebase";
import { signIn } from "../../../API/firebaseMethods";

import LoginInputs from "../../containers/LoginInputs/LoginInputs";
import { UserContext } from "../../utils/Contexts/UserContext";
import KeyboardAvoidingWrapper from "../../utils/KeyboardAvoidingWrapper";
import { LoginPageStyles } from "./LoginPageStyles";

export default function LoginPage({ navigation }) {
  const { userState } = useContext(UserContext);

  useEffect(() => {
    userState.setter();
  }, []);
  const Login = (username, password) => {
    signIn(username, password);
  };

  return (
    <KeyboardAvoidingWrapper>
      <View style={LoginPageStyles.container}>
        <View style={LoginPageStyles.header}>
          <Image
            source={require("./../../assets/images/isotype.png")}
            style={LoginPageStyles.logo}
          />
          <Text style={LoginPageStyles.title}>Iniciar Sesión</Text>
        </View>
        <LoginInputs submit={Login} />
      </View>
    </KeyboardAvoidingWrapper>
  );
}
