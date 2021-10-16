//React - Expo dependencies
import React, { useContext } from "react";
import { Text, View } from "react-native";

//firabase
import { loggingOut } from "./../../../API/firebaseMethods";
//config
import { AppColors } from "../../config/AppColors";

//components
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { ProfilePageStyles } from "./ProfilePageStyles";
import { UserContext } from "../../utils/Contexts/UserContext";

export default function ProfilePage({ navigation }) {
  return (
    <View style={ProfilePageStyles.container}>
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
