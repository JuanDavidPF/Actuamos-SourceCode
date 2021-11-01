import React, { useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { AppColors } from "../../config/AppColors";

import MultiInputSelectionGroup from "../../containers/MultiInputSelectionGroup/MultiInputSelectionGroup";
import InputSelectionGroup from "../../containers/InputSelectionGroup/InputSelectionGroup";
import { TestPageStyles } from "./TestPageStyles";
import DatePickerInput from "../../containers/DatePickerInput/DatePickerInput";

export default function TestPage({ navigation, route, callback }) {
  const test = route.params.test;
  const questions = test.questions;
  const [testFinished, SetTestFinished] = useState(false);
  const [questionIndex, SetQuestionIndex] = useState(0);
  const [question, SetQuestion] = useState(questions[questionIndex]);
  const [answers, SetAnswers] = useState([]);

  const FinishTest = () => {
    SetTestFinished(true);
    callback(answers);
  };

  const SingleAnswerSelection = (answer) => {
    let answerClone = JSON.parse(JSON.stringify(answers));
    if (!answerClone[questionIndex]) answerClone[questionIndex] = {};
    answerClone[questionIndex].answer = answer;
    answerClone[questionIndex].question = question.question;
    SetAnswers(answerClone);
  };

  const MultipleAnswerSelection = (answer) => {
    let answerClone = JSON.parse(JSON.stringify(answers));
    ///////////
    if (!answerClone[questionIndex]) answerClone[questionIndex] = {};
    ///////////
    if (!answerClone[questionIndex].answer)
      answerClone[questionIndex].answer = [];

    let answerIndex = answerClone[questionIndex].answer.findIndex(
      (element) => element == answer
    );

    if (answerIndex >= 0) {
      answerClone[questionIndex].answer.splice(answerIndex, 1);
    } else {
      answerClone[questionIndex].answer.push(answer);
    }

    answerClone[questionIndex].question = question.question;
    SetAnswers(answerClone);
  };

  const DateSelection = (answer) => {
    let answerClone = JSON.parse(JSON.stringify(answers));
    if (!answerClone[questionIndex]) answerClone[questionIndex] = {};
    answerClone[questionIndex].answer = answer;
    answerClone[questionIndex].question = question.question;
    SetAnswers(answerClone);
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
        {testFinished ? (
          <ActivityIndicator
            style={{ marginTop: 100 }}
            size={"large"}
            color={AppColors.accent}
          />
        ) : (
          <View style={TestPageStyles.questionContainer}>
            <View>
              <Text
                style={TestPageStyles.testTitle}
              >{`${test.title} - ${question.subtitle}`}</Text>
              <Text style={TestPageStyles.testProgress}>{`Pregunta: ${
                questionIndex + 1
              } / ${questions.length}`}</Text>
            </View>
            <View>
              <Text style={TestPageStyles.questionTitle}>
                {question.question}
              </Text>
              {question.type == "single" && (
                <InputSelectionGroup
                  options={question.options}
                  answer={
                    answers[questionIndex] && answers[questionIndex].answer
                  }
                  selectionCallback={SingleAnswerSelection}
                />
              )}
              {question.type == "multiple" && (
                <MultiInputSelectionGroup
                  options={question.options}
                  answer={
                    answers[questionIndex] && answers[questionIndex].answer
                  }
                  selectionCallback={MultipleAnswerSelection}
                />
              )}
              {question.type == "date" && (
                <DatePickerInput
                  selectionCallback={DateSelection}
                  answer={
                    answers[questionIndex] && answers[questionIndex].answer
                  }
                />
              )}
            </View>
          </View>
        )}
      </ScrollView>

      <View style={TestPageStyles.navigationButtonsContainer}>
        {!testFinished && (
          <SubmitButton
            style={TestPageStyles.previousQuestionBtn}
            onPress={questionIndex == 0 ? navigation.goBack : PreviousQuestion}
          >
            {questionIndex == 0 ? "Volver" : "Anterior"}
          </SubmitButton>
        )}
        {answers[questionIndex] && !testFinished && (
          <SubmitButton
            onPress={
              questionIndex == questions.length - 1 ? FinishTest : NextQuestion
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
