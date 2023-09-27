import {Component, Output} from '@angular/core';
import {Question} from "../question/question.model";
import {QuizzService} from "./quizz.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AnswerSelected} from "../answers/answer.model";

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent {
  questions: Question[] | undefined;
  pseudo: string = "Anonymous";
  selectedAnswers: AnswerSelected[] = [];

  constructor(
    private quizzService: QuizzService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.quizzService.getQuestions().then((questions) => {
      this.questions = questions;
    });

    this.route.queryParams.subscribe(params => {
      this.pseudo = params['pseudo'];
    });
  }

  selectionChange(selected: AnswerSelected) {
    let found = false;
    this.selectedAnswers.forEach((answer: AnswerSelected) => {
      if (answer.hasOwnProperty('id') && answer.id === selected.id) {
        answer.selected = selected.selected;
        found = true;
      }
    });

    if (!found) {
      this.selectedAnswers.push(selected);
    }
  }

  async submitForm() {
    await this.quizzService.calcResults(this.selectedAnswers).then((result) => {
      this.router.navigate(['/results'], {
        queryParams: {
          pseudo: this.pseudo,
          result: JSON.stringify({correctAnswers: result, totalQuestions: this.questions!.length})
        },
      });
    });
  }
}
