'use client';

import AppSidebar from '@/src/components/AppSidebar';
import { SidebarProvider, SidebarTrigger } from '@/src/components/ui/sidebar';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} h-screen bg-gray-100`}>
        <SidebarProvider>
          <AppSidebar />

          <main className="p-6">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
