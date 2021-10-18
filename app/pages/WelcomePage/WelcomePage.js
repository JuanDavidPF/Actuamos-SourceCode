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

//navigation
const Stack = createNativeStackNavigator();
const HandleTestFinished = () => {
  console.log("finished");
};

export default function WelcomePage({ navigation }) {
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
  const firstTestKey = "56kFX5NIfjX9cQQ48FK6";

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
  const TestFinished = () => {
    console.log("Test finished");
  };

  const HandleNextButtonPress = () => {
    if (displayName) {
      let firstTestFinished = userState.value.userData.testsFinished.find(
        (test) => {
          test.testID == firstTestKey;
        }
      );

      if (firstTestFinished)
        mainNavigator.dispatch(StackActions.replace("Hub"));
      else {
        FetchTest();
      }
    } else {
      Alert.alert("¡Espera!", "Por favor danos un nombre por el cual llamarte");
    }
  };

  const FinishedTest = () => {
    console.log("Test finsished");
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

        <SubmitButton
          onPress={HandleNextButtonPress}
          color={AppColors.accent}
          style={WelcomePageStyles.nextButton}
        >
          Siguiente
        </SubmitButton>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
}; //closes SetDisplayNamePage component
