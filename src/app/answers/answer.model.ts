export interface Answer {
  id: number;
  answers: string[];
  corrects: string[];
}

export interface AnswerSelected {
  id: number | undefined;
  selected: string[];
  corrects: string[];
}
