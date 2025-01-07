import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { SectionComponent } from './components/section/section.component';
import { ExperienceCard, ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { PassionCard, PassionCardComponent } from './components/passion-card/passion-card.component';

// app.component.ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarComponent,
    HeroComponent,
    SectionComponent,
    ExperienceCardComponent,
    PassionCardComponent
  ],
  template: `
    <app-toolbar></app-toolbar>
    <main class="main-content">
      <app-hero></app-hero>
      
      <app-section title="Professional Experience">
        <app-experience-card 
          *ngFor="let card of experienceCards" 
          [card]="card">
        </app-experience-card>
      </app-section>

      <app-section title="Personal Passions">
        <app-passion-card 
          *ngFor="let card of passionCards" 
          [card]="card">
        </app-passion-card>
      </app-section>
    </main>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  experienceCards: ExperienceCard[] = [
    {
      title: 'Software Engineer',
      organization: 'WeTheHobby',
      dateRange: 'June 2023 - Present',
      description: 'Full Stack Software Engineer'
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