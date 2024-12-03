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
    icon: FaShuttleVan,
    href: '/dashboard/vehicles'
  },
  {
    label: 'Calendrier',
    icon: RiCalendar2Fill,
    href: '/dashboard/calendar'
  }
];
