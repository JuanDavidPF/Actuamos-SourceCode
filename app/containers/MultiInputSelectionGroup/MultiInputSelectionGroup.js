import React, { useState } from "react";
import InputSelection from "../../components/InputSelection/InputSelection";

export default function MultiInputSelectionGroup({
  options,
  answer,
  selectionCallback,
}) {
  const HandleInputSelection = (value) => {
    selectionCallback(value);
  };

  return options.map((value, index) => {
    return (
      <InputSelection
        key={index}
        selected={answer && answer.includes(value)}
        onPress={HandleInputSelection}
      >
        {value}
      </InputSelection>
    );
  });
} //closes InputSelection container
