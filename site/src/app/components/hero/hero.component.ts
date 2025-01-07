import { Component } from '@angular/core';

// components/hero/hero.component.ts
@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero">
      <h1 class="intro">hello, world! i'm</h1>
      <h2 class="name">morgan west</h2>
      <p class="bio">
        i'm a software engineer in rochester, ny<br>
        i also like to read, write, workout, cook and listen to music<br>
        click on one of the cards below to learn more about me
      </p>
    </section>
  `,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {}