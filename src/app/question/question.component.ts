import {Component, Input} from '@angular/core';
import {Question} from "./question.model";
import {MatChipListboxChange} from "@angular/material/chips";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question: Question = {
    id: 0,
    question: '',
    answers: [],
    correctAnswers: []
  };

  selectionChange(e: MatChipListboxChange) {
    const selectedAnswers = e.value;
    this.question.answers.filter((answer: { selected: any; text: any; }) => {
      answer.selected = selectedAnswers.includes(answer.text);
    }).map((answer: { selected: any; text: any; }) => {
      answer.text;
      true;
    });
  }
}
