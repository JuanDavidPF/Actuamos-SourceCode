import React from "react";
import { View, Text, Image } from "react-native";

import { SplashPageStyles } from "./SplashPageStyles";

export default function SplashPage({ navigation }) {
  //Remove Splash Screen once seen from stack
  setTimeout(() => {
    navigation.replace("Login");
  }, 2000);

  return (
    <View style={SplashPageStyles.container}>
      <Image
        source={require("../../assets/images/isotype.png")}
        style={SplashPageStyles.isotype}
      />
      <Image
        source={require("../../assets/images/logotype.png")}
        style={SplashPageStyles.logotype}
      />
      <Text style={SplashPageStyles.slogan}>Siempre pensando en tí</Text>
    </View>
  );
}
