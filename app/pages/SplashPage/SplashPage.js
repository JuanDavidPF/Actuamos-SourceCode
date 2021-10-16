//React Imports

import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

//Firebase Imports
import firebase from "firebase";
import { SplashPageStyles } from "./SplashPageStyles";
import { UserContext } from "../../utils/Contexts/UserContext";

export default function SplashPage({ navigation }) {
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
