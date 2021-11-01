//React - Expo dependencies
import React, { useContext } from "react";
import { Text, View } from "react-native";

//firabase
import { loggingOut } from "./../../../API/firebaseMethods";
import firebase from "firebase";
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

      <SubmitButton
        color={AppColors.accent}
        onPress={() => {
          firebase.auth().currentUser.updateProfile({ displayName: "" });
        }}
      >
        Reiniciar Datos
      </SubmitButton>
    </View>
  );
} //closes ProfilePage JSX
