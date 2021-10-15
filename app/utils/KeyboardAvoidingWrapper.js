import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform, View } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

export default function KeyboardAvoidingWrapper({ style, children }) {
  return (
    <KeyboardAvoidingView
      style={[{ flex: 1 }, style]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>{children}</View>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        ></TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
