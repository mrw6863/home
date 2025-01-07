import { Component, Input } from '@angular/core';

// components/passion-card/passion-card.component.ts
export interface PassionCard {
  title: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-passion-card',
  standalone: true,
  template: `
    <div class="card">
      <h4>{{card.title}}</h4>
      <p class="subtitle">{{card.category}}</p>
      <p>{{card.description}}</p>
      <button class="learn-more">Learn More</button>
    </div>
  `,
  styleUrls: ['./passion-card.component.scss']
})
export class PassionCardComponent {
  @Input() card!: PassionCard;
}