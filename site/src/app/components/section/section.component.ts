import { Component, Input } from '@angular/core';

// components/section/section.component.ts
@Component({
  selector: 'app-section',
  standalone: true,
  template: `
    <section class="section">
      <h3 class="section-title">{{title}}</h3>
      <div class="card-grid">
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() title!: string;
}
