import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: any;
  answered: any;
  unanswered: any;
  selectedQuestion: any;
  selectedOptions: any;
  preQDisabled: Boolean = false;
  nxtQDisabled: Boolean = false;
  constructor( private _quizService: QuizService) { }

  ngOnInit() {
    this.questions = this._quizService.getAllQuestions();
    console.log(this.questions, this.questions.length);
    if (!this.selectedQuestion) {
      this.selectQuestion(this.questions[0]);
    }
    this.accessNavigation();
  }

  accessNavigation(): void {
    for (let i = 0; i < this.questions.length; i++) {
      if (i === 0) {
        if (this.questions[i].id === this.selectedQuestion.id) {
          this.preQDisabled = true;
        } else {
          this.preQDisabled = false;
        }
      }
      if (i === (this.questions.length - 1)) {
        if (this.questions[i].id === this.selectedQuestion.id) {
          this.nxtQDisabled = true;
        } else {
          this.nxtQDisabled = false;
        }
      }
    }
  }
  
  selectQuestion(question): void {
    this.selectedQuestion = {};
    this.selectedQuestion = question;
    // this.accessNavigation();
    // this.stopTimer();
    // this.startTimer();
  }

  nxtQuestion(): void {
    const self = this;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].id === self.selectedQuestion.id) {
        this.unanswered = this.questions[i];
        console.log(this.unanswered);
        this.selectQuestion(self.questions[i + 1]);
          this.accessNavigation();
        return;
      }
    }
  }

  preQuestion(): void {
    const self = this;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].id === self.selectedQuestion.id) {
        this.selectQuestion(self.questions[i - 1]);
          this.accessNavigation();
        return;
      }
    }
  }
}
