import { SessionProvider } from 'next-auth/react';
import Dashboard from './dashboard';

export default function UserDashboard() {
  return (
    <SessionProvider>
      <Dashboard />
    </SessionProvider>
  );
}
