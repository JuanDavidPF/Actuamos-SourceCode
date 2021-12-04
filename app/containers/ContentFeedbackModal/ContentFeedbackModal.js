import { BlurView } from "expo-blur";
import React from "react";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ContentFeedbackModalStyles } from "./ContentFeedbackModalStyles";

export default function ContentFeedbackModal({ dismissState }) {
  return (
    <BlurView
      tint="dark"
      intensity={100}
      style={ContentFeedbackModalStyles.container}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          if (dismissState) dismissState(false);
        }}
      >
        <View style={{ height: "100%", width: "100%" }}></View>
      </TouchableWithoutFeedback>

      <View style={ContentFeedbackModalStyles.feedbackModal}>
        <Text style={ContentFeedbackModalStyles.feedbackModalTitle}>
          ¡Ayudanos a calificar este contenido!
        </Text>
      </View>
    </BlurView>

    //   <BlurView
    //     tint="dark"
    //     intensity={100}
    //     style={ContentFeedbackModalStyles.container}
    //   >
    //     <BlurView
    //       style={ContentFeedbackModalStyles.feedbackModal}
    //       tint="light"
    //       intensity={100}
    //     >
    //       <Text>Feedback</Text>
    //     </BlurView>
    //   </BlurView>
  );
}
