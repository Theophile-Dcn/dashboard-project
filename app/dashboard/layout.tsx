'use client';

import AppSidebarLayout from '@/src/components/shared/AppSidebar';
import { SidebarProvider } from '@/src/components/ui/sidebar';

import './globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebarLayout>{children}</AppSidebarLayout>
    </SidebarProvider>
  );
}
