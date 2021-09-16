//React - Expo dependencies
import React from "react";
import { Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { loggingOut } from "../../../API/firebaseMethods";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

export default function HubPage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is the Hub Page</Text>
      <SubmitButton
        color={"tomato"}
        onPress={() => {
          loggingOut();
        }}
      >
        Cerrar sesion
      </SubmitButton>
    </View>
  );
} //closes HubPage JSX
