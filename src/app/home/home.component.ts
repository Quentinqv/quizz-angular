import { Component } from '@angular/core';
import {Question} from "../question/question.model";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  questions: Question[] | undefined;
  form = new FormGroup({
    pseudo: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router
  ) {
  }

  onSubmit() {
    this.router.navigate(['quizz'], { queryParams: { pseudo: this.form.value.pseudo } });
  }
}
