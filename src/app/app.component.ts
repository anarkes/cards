import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { Card } from './card.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgIf, NgFor],
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  cards: Card[];

  constructor(private appService: AppService) {
    this.cards = this.appService.getAll()
  }
  
}
