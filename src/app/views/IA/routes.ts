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
        redirectTo: 'internal-audit',
        pathMatch: 'full'
      },
      {
        path: 'internal-audit',
        loadComponent: () => import('./internal-audit.component').then(m => m.InternalAuditComponent),
        data: {
          title: 'Internal Audit'
        }
      },
    ]
  }
];

