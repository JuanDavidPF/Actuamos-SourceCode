import React, { useContext, useEffect, useState } from "react";

//firebase
import firebase from "firebase";

//navigation
import { StackActions } from "@react-navigation/routers";
import { useNavigation } from "@react-navigation/core";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Alert, Image, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputText from "../../components/InputText/InputText";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { AppColors } from "../../config/AppColors";
import { UserContext } from "../../utils/Contexts/UserContext";
import KeyboardAvoidingWrapper from "../../utils/KeyboardAvoidingWrapper";
import TestPage from "../TestPage/TestPage";
import { WelcomePageStyles } from "./WelcomePageStyles";
import { loggingOut } from "../../../API/firebaseMethods";
let userName = "";
//navigation
const Stack = createNativeStackNavigator();
const firstTestKey = "56kFX5NIfjX9cQQ48FK6";

export default function WelcomePage({ navigation }) {
  const { userState } = useContext(UserContext);
  const HandleTestFinished = (answer) => {
    try {
      const db = firebase.firestore();
      db.collection("Tests")
        .doc(firstTestKey)
        .collection("Responses")
        .doc(firebase.auth().currentUser.uid)
        .set({
          answers: answer,
        })
        .then(() => {
          try {
            const auth = firebase.auth();
            auth.currentUser
              .updateProfile({ displayName: userName })
              .then(() => {
                const userClone = JSON.parse(JSON.stringify(userState.value));
                userClone.authData = firebase.auth().currentUser;
                userState.setter(userClone);
              });
          } catch (err) {
            Alert.alert("¡Hubo un problema!", err.message);
          }
        });
    } catch (err) {
      Alert.alert("¡Hubo un problema!", err.message);
    }
  };

  return (
    <Stack.Navigator
      initialRouteName="DisplayNameSetter"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="DisplayNameSetter" component={SetDisplayNamePage} />
      <Stack.Screen name="Test">
        {(props) => <TestPage {...props} callback={HandleTestFinished} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
} //closes WelcomePage component

const SetDisplayNamePage = ({ navigation, route }) => {
  const mainNavigator = useNavigation();
  const [displayName, SetDisplayName] = useState("");
  const [test, SetTest] = useState();
  const { userState } = useContext(UserContext);

  useEffect(() => {
    if (test)
      if (test.active) {
        navigation.navigate("Test", {
          test: test,
        });
      } else mainNavigator.dispatch(StackActions.replace("Hub"));
  }, [test]);

  const FetchTest = () => {
    try {
      const db = firebase.firestore();
      db.collection("Tests")
        .doc(firstTestKey)
        .get()
        .then((doc) => {
          SetTest(doc.data());
        });
    } catch (err) {
      Alert.alert("¡Hubo un problema!", err.message);
    }
  };

  const HandleNextButtonPress = () => {
    if (displayName) {
      userName = displayName;
      try {
        const db = firebase.firestore();
        db.collection("Tests")
          .doc(firstTestKey)
          .collection("Responses")
          .doc(userState.value.authData.uid)
          .get()
          .then((doc) => {
            const firstTestFinished = doc.data();

            if (firstTestFinished) {
              try {
                const auth = firebase.auth();
                auth.currentUser
                  .updateProfile({ displayName: userName })
                  .then(() => {
                    const userClone = JSON.parse(
                      JSON.stringify(userState.value)
                    );

                    userClone.authData = firebase.auth().currentUser;
                    userState.setter(userClone);
                  });
              } catch (err) {
                Alert.alert("¡Hubo un problema!", err.message);
              }
            } else {
              FetchTest();
            }
          });
      } catch (err) {
        Alert.alert("¡Hubo un problema!", err.message);
      }
    } else {
      Alert.alert("¡Espera!", "Por favor danos un nombre por el cual llamarte");
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <SafeAreaView style={WelcomePageStyles.container}>
        <View style={WelcomePageStyles.brand}>
          <Image
            style={WelcomePageStyles.logo}
            source={require("../../assets/images/isotype.png")}
          />
          <Text style={WelcomePageStyles.slogan}>
            Te damos la bienvenidad a nuestra comunidad
          </Text>
        </View>

        <View style={WelcomePageStyles.displayNameInputContainer}>
          <Text style={WelcomePageStyles.displayNameInputLabel}>
            ¿Cómo podemos referirnos a ti?
          </Text>
          <InputText placeholder={"Nickname"} onChangeText={SetDisplayName}>
            {displayName}
          </InputText>
        </View>
        <View style={WelcomePageStyles.buttonContainer}>
          <SubmitButton
            onPress={HandleNextButtonPress}
            color={AppColors.accent}
            style={WelcomePageStyles.button}
          >
            Siguiente
          </SubmitButton>

          <SubmitButton
            onPress={loggingOut}
            color={AppColors.primary}
            style={WelcomePageStyles.button}
          >
            Cerrar Sesión
          </SubmitButton>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
}; //closes SetDisplayNamePage component
