//React - Expo dependencies
import React from "react";
import { Text, View } from "react-native";

//firabase
import { loggingOut } from "./../../../API/firebaseMethods";
//config
import { AppColors } from "../../config/AppColors";

//components
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { ProfilePageStyles } from "./ProfilePageStyles";

export default function ProfilePage({ navigation }) {
  return (
    <View style={ProfilePageStyles.container}>
      <Text>This is the Profile Page</Text>
      <SubmitButton
        color={AppColors.accent}
        onPress={() => {
          loggingOut();
        }}
      >
        Cerrar Sesión
      </SubmitButton>
    </View>
  );
} //closes ProfilePage JSX
