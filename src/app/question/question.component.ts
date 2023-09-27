import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Question} from "./question.model";
import {MatChipListboxChange} from "@angular/material/chips";
import {AnswerSelected} from "../answers/answer.model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question: Question = {
    id: 0,
    question: '',
  };

  @Output()
  selectedEvent = new EventEmitter<AnswerSelected>();

  selectionChange(selected: AnswerSelected) {
    this.selectedEvent.emit(selected);
  }
}
