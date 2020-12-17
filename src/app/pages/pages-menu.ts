import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Estadisticas',
    icon: 'pie-chart-outline',
    link: '/pages/estadisticas',
    home: true,
  },
  {
    title: 'Mi Perfil',
    icon: 'person-outline',
    link: '/pages/perfil',
  },
  {
    title: 'Modulos',
    group: true,
  },
  {
    title: 'calles',
    icon: 'paper-plane-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Infracciones',
    icon: 'bulb-outline',
    children: [
      {
        title: 'ver las infracciones',
        link: '/pages/infracciones',
      },
    ],
  },
];
