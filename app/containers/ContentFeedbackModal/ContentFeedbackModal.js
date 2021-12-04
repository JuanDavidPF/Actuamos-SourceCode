import { BlurView } from "expo-blur";
import React from "react";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { LikertInput } from "../../components/LikertInput/LikertInput";
import { ContentFeedbackModalStyles } from "./ContentFeedbackModalStyles";

export default function ContentFeedbackModal({
  dismissCallback,
  feedbackCallback,
}) {
  return (
    <BlurView
      tint="dark"
      intensity={100}
      style={ContentFeedbackModalStyles.container}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          if (dismissCallback) dismissCallback();
        }}
      >
        <View style={{ height: "100%", width: "100%" }}></View>
      </TouchableWithoutFeedback>

      <View style={ContentFeedbackModalStyles.feedbackModal}>
        <Text style={ContentFeedbackModalStyles.feedbackModalTitle}>
          ¡Ayudanos a calificar este contenido!
        </Text>

        <LikertInput
          style={{ marginTop: 20 }}
          size={5}
          callback={feedbackCallback}
          dismiss={dismissCallback}
        >
          ¿Qué tan pertinente te parece este contenido?
        </LikertInput>
      </View>
    </BlurView>
  );
}
