//React - Expo dependencies
import React from "react";
import { Text, View } from "react-native";

//firabase
import { loggingOut } from "./../../../API/firebaseMethods";
//config
import { AppColors } from "../../config/AppColors";

//components
import SubmitButton from "../../components/SubmitButton/SubmitButton";

export default function ProfilePage({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: AppColors.accent,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is the Profile Page</Text>
      <SubmitButton
        onPress={() => {
          loggingOut();
        }}
      >
        Cerrar Sesión
      </SubmitButton>
    </View>
  );
} //closes ProfilePage JSX
