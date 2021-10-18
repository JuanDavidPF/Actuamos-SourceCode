import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import InputSelectionGroup from "../../containers/InputSelectionGroup/InputSelectionGroup";
import { TestPageStyles } from "./TestPageStyles";

export default function TestPage({ navigation, route, callback }) {
  const test = route.params.test;
  const questions = test.questions;
  const [questionIndex, SetQuestionIndex] = useState(0);
  const [question, SetQuestion] = useState(questions[questionIndex]);

  const FinishTest = () => {
    callback();
  };
  const QuestionSelected = (answer) => {
    let clone = JSON.parse(JSON.stringify(question));
    clone.answer = answer;
    questions[questionIndex] = clone;
    SetQuestion(clone);
  };

  const NextQuestion = () => {
    SetQuestion(questions[questionIndex + 1]);
    SetQuestionIndex(questionIndex + 1);
  };
  const PreviousQuestion = () => {
    SetQuestion(questions[questionIndex - 1]);
    SetQuestionIndex(questionIndex - 1);
  };

  return (
    <SafeAreaView style={TestPageStyles.container}>
      <ScrollView>
        <View style={TestPageStyles.questionContainer}>
          <View>
            <Text style={TestPageStyles.testTitle}>{test.title}</Text>
            <Text style={TestPageStyles.testProgress}>{`Pregunta: ${
              questionIndex + 1
            } / ${questions.length}`}</Text>
          </View>
          <View>
            <Text style={TestPageStyles.questionTitle}>
              {question.question}
            </Text>

            <InputSelectionGroup
              options={question.options}
              answer={questions[questionIndex].answer}
              selectionCallback={QuestionSelected}
            />
          </View>
        </View>
      </ScrollView>

      <View style={TestPageStyles.navigationButtonsContainer}>
        <SubmitButton
          style={TestPageStyles.previousQuestionBtn}
          onPress={questionIndex == 0 ? navigation.goBack : PreviousQuestion}
        >
          {questionIndex == 0 ? "Volver" : "Anterior"}
        </SubmitButton>

        {question.answer && (
          <SubmitButton
            onPress={
              questionIndex == questions.length - 1 ? callback : NextQuestion
            }
            style={TestPageStyles.nextQuestionBtn}
          >
            {questionIndex == questions.length - 1 ? "Finalizar" : "Siguiente"}
          </SubmitButton>
        )}
      </View>
    </SafeAreaView>
  );
} //closes TestPage page
