import React from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";
import { AppColors } from "../../config/AppColors";
import { Fonts } from "../../config/AppFonts";
import { InputSelectionStyle } from "./InputSelectionStyle";

const inputIcon = {
  selected: require("../../assets/images/icons/inputs/inputSelection/inputIconSelected.png"),
  unselected: require("../../assets/images/icons/inputs/inputSelection/inputIcon.png"),
};
export default function InputSelection({ selected, onPress, children }) {
  return (
    <TouchableHighlight
      underlayColor={AppColors.accent}
      style={{ borderRadius: 20 }}
      onPress={() => {
        onPress(children);
      }}
    >
      <View style={InputSelectionStyle.container}>
        <Image
          style={InputSelectionStyle.inputIcon}
          source={selected ? inputIcon.selected : inputIcon.unselected}
        />
        <Text
          style={[
            InputSelectionStyle.inputLabel,
            selected && { fontFamily: Fonts.Lato.Regular },
          ]}
        >
          {children}
        </Text>
      </View>
    </TouchableHighlight>
  );
} //closes InputSelection component
