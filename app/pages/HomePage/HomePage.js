//React - Expo dependencies
import React from "react";
import { Text, View } from "react-native";

//Styles
import { HomePageStyles } from "./HomePageStyles";

export default function HomePage({ navigation }) {
  return (
    <View style={HomePageStyles.container}>
      <Text>This is the Homepage</Text>
    </View>
  );
} //closes HomePage JSX
