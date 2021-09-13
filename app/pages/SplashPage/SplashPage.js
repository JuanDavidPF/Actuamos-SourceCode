import React from "react";
import { View, Text, Image } from "react-native";
import { SplashPageStyles } from "./SplashPageStyles";

export default function SplashPage() {
  return (
    <View style={SplashPageStyles.container}>
      <Image source={require("./../../assets/images/isotype.png")} />
      <Image source={require("./../../assets/images/logotype.png")} />
    </View>
  );
}
