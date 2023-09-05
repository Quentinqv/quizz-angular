// Question model based on the structure of question in the questions.json file:
export interface Question {
  id: number;
  question: string;
  // @ts-ignore
  answers: string[{text: string, selected: boolean}];
  correctAnswers: string[];
}
