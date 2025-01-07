import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { SectionComponent } from '../section/section.component';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { PassionCard, PassionCardComponent } from '../passion-card/passion-card.component';
import { ExperienceCard } from '../experience-card/interface';

// Create a new component for the home page content
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    SectionComponent,
    ExperienceCardComponent,
    PassionCardComponent
  ],
  template: `
    <app-hero></app-hero>
    
    <app-section title="professional experience">
      <app-experience-card 
        *ngFor="let card of experienceCards" 
        [card]="card">
      </app-experience-card>
    </app-section>

    <app-section title="personal passions">
      <app-passion-card 
        *ngFor="let card of passionCards" 
        [card]="card">
      </app-passion-card>
    </app-section>
  `
})
export class HomeComponent {
  experienceCards: ExperienceCard[] = [
    {
      title: 'Software Engineer',
      organization: 'WeTheHobby',
      dateRange: 'June 2023 - Present',
      description: 'Full Stack Software Engineer',
      slug: 'wth'
    },
    // Add more cards...
  ];

  passionCards: PassionCard[] = [
    {
      title: 'My Goodreads',
      category: 'Reading',
      description: 'Trying to spend more time reading than scrolling'
    },
    // Add more cards...
  ];
}