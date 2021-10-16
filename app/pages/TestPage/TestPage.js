import React from "react";
import { Text, View } from "react-native";

export default function TestPage({ navigation, route }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{route.params.questions.length}</Text>
    </View>
  );
} //closes TestPage page
