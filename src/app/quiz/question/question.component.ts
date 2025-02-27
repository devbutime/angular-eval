import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from '../../shared/services/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() categoryId: number = 0;
  quizContent: any[] = this.quizService.quizContent;
  categoryName: string = '';

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getQuizContent(this.categoryId);
    console.log('id : ', this.categoryId);
  }
}
