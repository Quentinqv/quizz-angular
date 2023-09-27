import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionComponent} from "./question/question.component";
import {HomeComponent} from "./home/home.component";
import {ResultsComponent} from "./results/results.component";
import {QuizzComponent} from "./quizz/quizz.component";

const routes: Routes = [
  { path: 'quizz', component: QuizzComponent },
  { path: 'results', component: ResultsComponent},
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
