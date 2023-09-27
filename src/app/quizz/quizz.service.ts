import { Injectable } from '@angular/core';
import {Question} from "../question/question.model";
import {Answer, AnswerSelected} from "../answers/answer.model";

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor() { }

  async getQuestions(): Promise<Question[]> {
    const response = await fetch('http://localhost:3000/questions');
    return await response.json();
  }

  async getAnswers() : Promise<Answer[]> {
    return fetch('http://localhost:3000/answers')
      .then(response => response.json())
  }

  async calcResults(selectedAnswers: AnswerSelected[]) {
    let correctAnswersCount = 0;
    selectedAnswers.forEach((answer: AnswerSelected) => {
      if (answer.corrects.length == answer.selected.length && answer.corrects.every((value: any, index: any) => value === answer.selected[index])) {
        correctAnswersCount++;
      }
    });

    return correctAnswersCount;
  }
}
