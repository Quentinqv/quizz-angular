import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionComponent} from "./question/question.component";
import {HomeComponent} from "./home/home.component";
import {ResultsComponent} from "./results/results.component";

const routes: Routes = [
  { path: 'question', component: QuestionComponent },
  { path: '', component: HomeComponent },
  { path: 'results', component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
