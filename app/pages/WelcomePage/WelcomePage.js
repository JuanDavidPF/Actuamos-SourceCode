import React, { useState } from "react";

import { Alert, Image, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputText from "../../components/InputText/InputText";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { AppColors } from "../../config/AppColors";
import KeyboardAvoidingWrapper from "../../utils/KeyboardAvoidingWrapper";
import { WelcomePageStyles } from "./WelcomePageStyles";

export default function WelcomePage() {
  const [displayName, SetDisplayName] = useState("");

  const HandleNextButtonPress = () => {
    if (displayName) {
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
} //closes WelcomePage component
