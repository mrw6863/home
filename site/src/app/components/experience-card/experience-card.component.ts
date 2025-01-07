import { Component, Input } from '@angular/core';

// components/experience-card/experience-card.component.ts
export interface ExperienceCard {
  title: string;
  organization: string;
  dateRange: string;
  description: string;
}

@Component({
  selector: 'app-experience-card',
  standalone: true,
  template: `
    <div class="card">
      <h4>{{card.title}}</h4>
      <p class="subtitle">{{card.organization}}</p>
      <p class="date">{{card.dateRange}}</p>
      <p>{{card.description}}</p>
      <button class="learn-more">Learn More</button>
    </div>
  `,
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {
  @Input() card!: ExperienceCard;
}