// components/experience-card/experience-card.component.ts
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExperienceCard } from './interface';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="card">
      <h4>{{card.title}}</h4>
      <p class="subtitle">{{card.organization}}</p>
      <p class="date">{{card.dateRange}}</p>
      <p>{{card.description}}</p>
      <button class="learn-more" (click)="navigateToDetail()">Learn More</button>
    </div>
  `,
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {
  @Input() card!: ExperienceCard;

  constructor(private router: Router) {}

  navigateToDetail() {
    console.log('Navigating to:', this.card.slug);
    this.router.navigate(['/experience', this.card.slug]);
  }
}
