import { FaShuttleVan } from 'react-icons/fa';
import { RiCalendar2Fill, RiDashboardFill } from 'react-icons/ri';

export const sidebarLinks = [
  {
    label: 'Dashboard',
    icon: RiDashboardFill,
    href: '/'
  },
  {
    label: 'Véhicules détails',
    dropdown: true,
    dropdownItems: [
      {
        label: 'Mireille',
        href: '/dashboard/vehicles/mireille'
      },
      {
        label: 'Mireille',
        href: '/dashboard/vehicles/mireille'
      }
    ],
    icon: FaShuttleVan,
    href: '/dashboard/vehicles'
  },
  {
    label: 'Calendrier',
    icon: RiCalendar2Fill,
    href: '/dashboard/calendar'
  }
];
