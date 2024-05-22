import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'IA'
    },
    children: [
      {
        path: '',
        redirectTo: 'continuous-assessment',
        pathMatch: 'full'
      },
      {
        path: 'continuous-assessment',
        loadComponent: () => import('./continuous-assessment.component').then(m => m.ContinuousAssessmentComponent),
        data: {
          title: 'Continuous Assessment'
        }
      },
    ]
  }
];

