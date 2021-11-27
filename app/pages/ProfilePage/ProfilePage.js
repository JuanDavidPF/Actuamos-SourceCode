//React - Expo dependencies
import React, { useContext, useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

//firabase
import { loggingOut } from "./../../../API/firebaseMethods";
import firebase from "firebase";
//config
import { AppColors } from "../../config/AppColors";

//components
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { ProfilePageStyles } from "./ProfilePageStyles";
import { UserContext } from "../../utils/Contexts/UserContext";
import TestPage from "../TestPage/TestPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function ProfilePage({ navigation }) {
  const lastTestKey = "26kgX5NIfjd9cHQ48Fd6";
  const { userState } = useContext(UserContext);
  const [test, SetTest] = useState();
  const [availableLastTest, SetAvailableLastTest] = useState(false);

  const FetchTest = () => {
    try {
      const db = firebase.firestore();
      db.collection("Tests")
        .doc(lastTestKey)
        .get()
        .then((doc) => {
          SetTest(doc.data());
        });
    } catch (err) {
      Alert.alert("¡Hubo un problema!", err.message);
    }
  };

  useEffect(() => {
    if (!userState.value) return;
    if (!userState.value.authData) return;
    if (!userState.value.authData.uid) return;
    try {
      const db = firebase.firestore();
      db.collection("Tests")
        .doc(lastTestKey)
        .collection("Responses")
        .doc(userState.value.authData.uid)
        .get()
        .then((doc) => {
          SetAvailableLastTest(!doc.data());
        });
    } catch (err) {
      Alert.alert("¡Hubo un problema!", err.message);
    }
  }, [userState.value]);

  useEffect(() => {
    if (test)
      if (test.active) {
        navigation.navigate("Test", {
          test: test,
          callback: HandleTestFinished.bind(this),
        });
      } else Alert.alert("Test finalizado", "Esta opción ha expirado");
  }, [test]);

  function HandleTestFinished(answer) {
    try {
      const db = firebase.firestore();
      db.collection("Tests")
        .doc(lastTestKey)
        .collection("Responses")
        .doc(firebase.auth().currentUser.uid)
        .set({
          answers: answer,
        })
        .then(() => {
          SetAvailableLastTest(false);
          navigation.navigate("Hub");
        });
    } catch (err) {
      Alert.alert("¡Hubo un problema!", err.message);
    }
  }

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

      {availableLastTest && (
        <SubmitButton
          color={AppColors.accent}
          onPress={() => {
            FetchTest();
          }}
        >
          Finalizar Experimento
        </SubmitButton>
      )}

      {/* <SubmitButton
          color={AppColors.accent}
          onPress={() => {
            firebase.auth().currentUser.updateProfile({ displayName: "" });
          }}
        >
          Reiniciar Datos
        </SubmitButton> */}
    </View>
  );
} //closes ProfilePage JSX
