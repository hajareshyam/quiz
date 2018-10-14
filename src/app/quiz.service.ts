import { Injectable } from '@angular/core';
import { QUESTIONS } from './mock-questions';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  public getAllQuestions(): any {
    return QUESTIONS.questions;
  }
}
