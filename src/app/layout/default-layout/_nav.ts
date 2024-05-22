import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
 
  {
    name: 'APPS',
    title: true
  },
  {
    name: 'BCM',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Accordion',
        url: '/base/accordion',
        icon: 'nav-icon-bullet'
      },
    
    ]
  },
  {
    name: 'Internal Control',
    url: '/campaigns',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Campaigns',
        url: '/campaigns',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Campaign Manager',
            url: '/campaigns/campaigns-manager',
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Campaign Updater',
            url: '/campaigns/campaigns-updater',
            icon: 'nav-icon-bullet'
          },
        ]
      },
      {
        name: 'Controls',
        url: '/campaigns',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Group Controls',
            url: '/campaigns/group-controls',
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Local Controls',
            url: '/campaigns/local-controls',
            icon: 'nav-icon-bullet'
          },
        ]
      }
    ]
  },
  {
    name: 'Continues Assessment',
    url: '/CA',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Internal Audit',
    url: '/IA',
    iconComponent: { name: 'cil-star' },    
  },

  {
    title: true,
    name: 'Configuration'
  },
  {
    name: 'Builder',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Delivery',
    url: '/theme/typography',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-pencil' }
  },
];
