// components/experience-detail/experience-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExperienceCard } from '../experience-card/interface';

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="experience-detail" *ngIf="experience">
      <button class="back-button" (click)="goBack()">← Back</button>
      
      <h2>{{experience.title}}</h2>
      <h3 class="organization">{{experience.organization}}</h3>
      <p class="date">{{experience.dateRange}}</p>
      
      <div class="detailed-content">
        <h4>Overview</h4>
        <p>{{experience.detailedDescription}}</p>
        
        <h4 *ngIf="experience.achievements?.length">Key Achievements</h4>
        <ul *ngIf="experience.achievements?.length">
          <li *ngFor="let achievement of experience.achievements">
            {{achievement}}
          </li>
        </ul>
        
        <h4 *ngIf="experience.technologies?.length">Technologies Used</h4>
        <div class="technologies" *ngIf="experience.technologies?.length">
          <span class="tech-tag" *ngFor="let tech of experience.technologies">
            {{tech}}
          </span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .experience-detail {
      max-width: 800px;
      margin: 2rem auto;
      padding: 0 1rem;
    }
    
    .back-button {
      background: none;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-size: 1rem;
      color: #846B9E;
      
      &:hover {
        text-decoration: underline;
      }
    }
    
    .organization {
      color: #846B9E;
      margin-top: 0.5rem;
    }
    
    .date {
      color: #666;
      font-size: 0.9rem;
    }
    
    .detailed-content {
      margin-top: 2rem;
    }
    
    .technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      
      .tech-tag {
        background: #f0f0f0;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.9rem;
      }
    }
  `]
})
export class ExperienceDetailComponent implements OnInit {
  experience?: ExperienceCard;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // In a real app, you'd fetch this from a service
    // This is just an example of how to handle the routing
    const slug = this.route.snapshot.paramMap.get('slug');
    // You would typically get this data from a service
    this.experience = this.getExperienceBySlug(slug);
    
    if (!this.experience) {
      this.router.navigate(['/']);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  // This would typically be in a service
  private getExperienceBySlug(slug: string | null): ExperienceCard | undefined {
    // Mock data - replace with actual data source
    const experiences: ExperienceCard[] = [
      {
        title: "Sample Experience",
        organization: "Sample Corp",
        dateRange: "2020 - Present",
        description: "Brief description",
        slug: "sample-experience",
        detailedDescription: "Detailed description of the role and responsibilities...",
        achievements: [
          "Implemented key feature X resulting in Y% improvement",
          "Led team of Z developers"
        ],
        technologies: ["Angular", "TypeScript", "SCSS"]
      }
    ];
    
    return experiences.find(exp => exp.slug === slug);
  }
}