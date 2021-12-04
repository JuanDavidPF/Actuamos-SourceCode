import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LikertButtonStyles } from "./LikertButtonStyles";

export const LikertButton = ({ isSelected, index, callback }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (callback) callback(index);
      }}
    >
      <View
        style={[
          LikertButtonStyles.container,
          isSelected && LikertButtonStyles.containerSelected,
        ]}
      >
        <Text
          style={[
            LikertButtonStyles.label,
            isSelected && LikertButtonStyles.labelSelected,
          ]}
        >
          {index}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
