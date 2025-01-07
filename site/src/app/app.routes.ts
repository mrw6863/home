import { Routes } from '@angular/router';
import { ExperienceDetailComponent } from './components/experience-detail/experience-detail.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: 'experience/:slug',
        component: ExperienceDetailComponent
    }
];
