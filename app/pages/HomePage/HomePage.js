//React - Expo dependencies
import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//Styles
import { HomePageStyles } from "./HomePageStyles";

export default function HomePage({ navigation }) {
  [userName, setUsername] = useState("Apreciad@");
  return (
    <ScrollView style={HomePageStyles.container}>
      <View style={HomePageStyles.greetingSection}>
        <Text style={HomePageStyles.greetingTitle}>¡Hola!</Text>
        <Text style={HomePageStyles.greetingName}>{userName}</Text>
        <Text style={HomePageStyles.greetingDescription}>
          Nos gustaría saber que frase describe aquello que esconde tu ser
          interior el día de hoy.
        </Text>
      </View>

      <View style={HomePageStyles.contentCard}></View>
    </ScrollView>
  );
} //closes HomePage JSX
