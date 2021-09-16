//React - Expo dependencies
import React from "react";
import { Text, View } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "tomato",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is the Homepage</Text>
    </View>
  );
} //closes HomePage JSX
