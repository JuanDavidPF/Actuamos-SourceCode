//React Imports

import React from "react";
import { View, Text, Image } from "react-native";

//Firebase Imports
import firebase from "firebase";
import { SplashPageStyles } from "./SplashPageStyles";

export default function SplashPage({ navigation }) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      navigation.replace("Hub");
    } else {
      navigation.replace("Login");
    }
  });

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
