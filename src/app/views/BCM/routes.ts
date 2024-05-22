import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'BCM'
    },
    children: [
      {
        path: '',
        redirectTo: 'incident-tracking',
        pathMatch: 'full'
      },
      {
        path: 'incident-tracking',
        loadComponent: () => import('./Events/IncidentManagement/incident-tracking/incident-tracking.component').then(m => m.IncidentTrackingComponent),
        data: {
          title: 'Incident Tracking'
        }
      },
      {
        path: 'crisis',
        loadComponent: () => import('./Events/BusinessContinuity/crisis/crisis.component').then(m => m.CrisisComponent),
        data: {
          title: 'Crisis'
        }
      }
    ]
  }
];

