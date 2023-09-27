import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuizzService} from "../quizz/quizz.service";
import {Answer, AnswerSelected} from "./answer.model";
import {filter} from "rxjs";
import {MatChipListboxChange} from "@angular/material/chips";

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent {
  @Input()
  questionId: number | undefined;

  answers: string[] = [];
  corrects: string[] = [];

  @Output()
  selectedEvent = new EventEmitter<AnswerSelected>();

  constructor(
    private quizService: QuizzService,
  ) {
  }

  ngOnInit() {
    this.quizService.getAnswers().then((answers: Answer[]) => {
      this.answers = answers.filter((answer: Answer) => answer.id === this.questionId)[0].answers;
      this.corrects = answers.filter((answer: Answer) => answer.id === this.questionId)[0].corrects;
    });
  }

  selectionChange(event: MatChipListboxChange) {
    let selected: string[] = []
    this.answers.filter((answer: string) => {
      if (event.value.includes(answer)) {
        selected.push(answer)
      }
    });

    this.selectedEvent.emit({id: this.questionId, selected: selected, corrects: this.corrects});
  }
}
