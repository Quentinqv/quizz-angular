import { Component } from '@angular/core';
import {Question} from "../question/question.model";
import {QuizzService} from "../quizz/quizz.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  questions: Question[] | undefined;

}
