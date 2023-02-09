import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

  sendAnswers(answers: any) {
    return this.http.post('http://localhost:8080/answers', answers);
  }
}

