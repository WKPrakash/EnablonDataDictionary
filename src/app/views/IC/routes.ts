import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'IC'
    },
    children: [
      {
        path: '',
        redirectTo: 'campaigns-manager',
        pathMatch: 'full'
      },
      {
        path: 'campaigns-manager',
        loadComponent: () => import('./campaigns/campaigns-manager.component').then(m => m.CampaignManagerComponent),
        data: {
          title: 'Campaigns Manager'
        }
      },
      {
        path: 'campaigns-updater',
        loadComponent: () => import('./campaigns/campaigns-updater.component').then(m => m.CampaignUpdaterComponent),
        data: {
          title: 'Campaign Updater'
        }
      },

      {
        path: 'group-controls',
        loadComponent: () => import('./controls/group-controls.component').then(m => m.GroupControlsComponent),
        data: {
          title: 'Group Controls'
        }
      },
      {
        path: 'local-controls',
        loadComponent: () => import('./controls/local-controls.component').then(m => m.LocalControlsComponent),
        data: {
          title: 'Local Controls'
        }
      },
    ]
  }
];

