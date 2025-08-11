import { Component } from '@angular/core';
import { AiLabService } from '../data/ai-lab.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  question: string = '';
  result: any;

  constructor(private aiLabService: AiLabService) {}

  onAsk() {
    this.aiLabService.ask(this.question).subscribe((response) => {
      this.result = response;
    });
  }
}