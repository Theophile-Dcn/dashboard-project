'use client';

import { SessionProvider } from 'next-auth/react';
import DashboardDetails from './DashboardDetails';

export default function DashboardDetailsPage() {
  return (
    <SessionProvider>
      <DashboardDetails />
    </SessionProvider>
  );
}
