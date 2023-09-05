import { Component } from '@angular/core';
import {Question} from "../question/question.model";
import {QuestionsService} from "../questions/questions.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  questions: Question[] | undefined;

  constructor(private questionsService: QuestionsService,
              private router: Router) {
    this.questionsService.getQuestions().then((questions) => {
      this.questions = questions;
    });
  }

  async submitForm() {
    await this.questionsService.calcResults(this.questions!).then((result) => {
      this.router.navigate(['/results'], {
        queryParams: {
          result: JSON.stringify({correctAnswers: result, totalQuestions: this.questions!.length})
        },
      });
    });

  }
}
