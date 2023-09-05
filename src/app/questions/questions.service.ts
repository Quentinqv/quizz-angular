import { Injectable } from '@angular/core';
import {Question} from "../question/question.model";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  getQuestions() : Promise<Question[]> {
    return fetch('/assets/questions.json')
      .then(response => response.json())
      .then(data => data.questions);
  }

  async calcResults(questions: Question[]) {
    let correctAnswersCount = 0;
    questions.forEach((question) => {
      const correctAnswers = question.correctAnswers;
      const selectedAnswers = question.answers.filter((answer: { selected: any; }) => answer.selected).map((answer: { text: any; }) => answer.text);

      if (correctAnswers.length == selectedAnswers.length && correctAnswers.every((value: any, index: any) => value === selectedAnswers[index])) {
        correctAnswersCount++;
      }
    });

    return correctAnswersCount;
  }
}
