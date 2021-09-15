import React from "react";
import { Keyboard, KeyboardAvoidingView, View } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

export default function KeyboardAvoidingWrapper({ children }) {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>{children}</View>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        ></TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
