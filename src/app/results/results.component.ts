import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  result: {correctAnswers: number, totalQuestions: number} = {
    correctAnswers: 0,
    totalQuestions: 0
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.result = JSON.parse(params['result']);
    });
  }
}
