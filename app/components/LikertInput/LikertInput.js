import React, { Children, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppColors } from "../../config/AppColors";
import { Fonts } from "../../config/AppFonts";
import { LikertButton } from "../LikertButton/LikertButton";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { LikertInputStyles } from "./LikertInputStyles";

export const LikertInput = ({ style, size, callback, dismiss, children }) => {
  const [scale, SetScale] = useState([]);
  const [value, SetValue] = useState(0);

  useEffect(() => {
    const clone = [];
    for (let i = 0; i <= size; i++) {
      clone[i] = { index: i };
    }
    SetScale(clone);
  }, []);

  const HandleValueSelected = (index) => {
    SetValue(index);
  };
  const Submit = () => {
    if (callback) callback((value / size) * 100);
  };
  return (
    <View style={[style, LikertInputStyles.container]}>
      <Text style={LikertInputStyles.title}>{children}</Text>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {scale.map((item) => {
          return (
            <LikertButton
              key={item.index}
              isSelected={value == item.index}
              callback={HandleValueSelected}
              index={item.index}
            />
          );
        })}
      </View>
      <SubmitButton style={{ marginVertical: 25 }} onPress={Submit}>
        Enviar
      </SubmitButton>
      <SubmitButton
        onPress={() => {
          if (dismiss) dismiss();
        }}
        style={{ marginVertical: -15 }}
        labelStyle={{
          color: AppColors.black,
          fontFamily: Fonts.Lato.Regular,
          fontSize: 15,
        }}
        color={AppColors.white}
      >
        Cancelar
      </SubmitButton>
    </View>
  );
};
