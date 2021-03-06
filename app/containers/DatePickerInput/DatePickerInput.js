import RNDateTimePicker from "@react-native-community/datetimepicker";
import React, { useEffect, useState } from "react";
import firebase from "firebase";

import { Image, Platform, Text, TouchableHighlight, View } from "react-native";
import { AppColors } from "../../config/AppColors";
import { DatePickerInputStyle } from "./DatePickerInputStyle";

export default function DatePickerInput({ selectionCallback, answer }) {
  const [stringDate, SetStringDate] = useState("DD/MM/AAAA");
  const [date, SetDate] = useState(new Date());
  const [isDatePickerOpened, SetIsDatePickerOpened] = useState(false);

  const DateToDDMMAAAA = (_date) => {
    if (Object.prototype.toString.call(_date) === "[object Date]") {
      function pad2(n) {
        return (n < 10 ? "0" : "") + n;
      }

      var month = pad2(_date.getMonth() + 1); //months (0-11)
      var day = pad2(_date.getDate()); //day (1-31)
      var year = _date.getFullYear();

      return day + "/" + month + "/" + year;
    } else return "DD/MM/AAAA";
  };

  useEffect(() => {
    if (!answer) return;

    const answerParsed = new Date(answer);
    SetDate(answerParsed);
    SetStringDate(DateToDDMMAAAA(answerParsed));
  }, [answer]);

  const onChange = (event, selectedDate) => {
    if (event.type == "set" || Platform.OS === "ios");
    const currentDate = selectedDate || date;
    selectionCallback(currentDate);

    if (Platform.OS === "android") SetIsDatePickerOpened(false);
  };
  return (
    <View>
      <TouchableHighlight
        underlayColor={AppColors.accent}
        style={DatePickerInputStyle.inputButton}
        onPress={() => {
          SetIsDatePickerOpened(!isDatePickerOpened);
        }}
      >
        <View style={DatePickerInputStyle.inputButtonInner}>
          <Text style={DatePickerInputStyle.inputbuttonLabel}>
            {stringDate}
          </Text>
          <Image
            style={DatePickerInputStyle.inputButtonIcon}
            source={require("../../assets/images/icons/inputs/inputSelection/calendarIcon.png")}
          />
        </View>
      </TouchableHighlight>

      {isDatePickerOpened && (
        <RNDateTimePicker
          value={date}
          display="spinner"
          onChange={onChange}
        ></RNDateTimePicker>
      )}
    </View>
  );
}
