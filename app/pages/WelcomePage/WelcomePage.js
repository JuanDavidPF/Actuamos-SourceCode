import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext, useEffect, useState } from "react";

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

export default function WelcomePage({ navigation, route }) {
  const firstTestKey = "56kFX5NIfjX9cQQ48FK6";
  const { userState } = useContext(UserContext);
  useEffect(() => {
    if (route.params.userInfo) {
      console.log(userState.value);
    }
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="DisplayNameSetter"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="DisplayNameSetter" component={SetDisplayNamePage} />
      <Stack.Screen name="Test" component={TestPage} />
    </Stack.Navigator>
  );
} //closes WelcomePage component

const SetDisplayNamePage = ({ navigation, route }) => {
  const [displayName, SetDisplayName] = useState("");

  const HandleNextButtonPress = () => {
    if (displayName) {
      navigation.navigate("Test", {
        questions: [{ question: "¿hola?" }, { question: "¿mundo?" }],
      });
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
