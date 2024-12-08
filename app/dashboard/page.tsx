import { SessionProvider } from 'next-auth/react';
import Dashboard from './dashboard';

export default function AdminDashboard() {
  return (
    <SessionProvider>
      <Dashboard />
    </SessionProvider>
  );
}
