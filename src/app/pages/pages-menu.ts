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
