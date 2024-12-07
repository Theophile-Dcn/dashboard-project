'use client';
import { NavMain } from '@/src/components/ui/nav-main';
import { NavSecondary } from '@/src/components/ui/nav-secondary';
import { NavUser } from '@/src/components/ui/nav-user';
import { NavUtility } from '@/src/components/ui/nav-utility';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider
} from '@/src/components/ui/sidebar';
import { Calendar, Car, File, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

const data = {
  user: {
    name: 'ThéoDev',
    email: 'theo@example.com',
    avatar: '/userPicture.jpg'
  },
  navMain: [
    {
      title: 'Véhicules',
      url: '/dashboard',
      icon: Car,
      isActive: true,
      items: [
        {
          title: 'Mireille',
          url: '/dashboard/mireille'
        },
        {
          title: 'Simone',
          url: '/dashboard/simone'
        },
        {
          title: 'Léon',
          url: '/dashboard/leon'
        }
      ]
    }
  ],

  navSecondary: [
    {
      title: 'Feedback',
      url: '#',
      icon: Send
    }
  ],
  navUtility: [
    {
      title: 'Documents',
      url: '/dashboard/documents',
      icon: File,
      items: [
        {
          title: 'Factures',
          url: '/dashboard/documents/factures'
        },
        {
          title: 'Contrats de location',
          url: '/dashboard/documents/contrats'
        },
        {
          title: 'Récapitulatif de gain',
          url: '/dashboard/documents/recap-benefit'
        }
      ]
    },
    {
      title: 'Calendrier',
      url: '/dashboard/calendar',
      icon: Calendar
    }
  ]
};
export default function AppSidebarLayouts({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar variant="inset" {...props}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="/dashboard">
                  <div className="flex aspect-square size-11 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Image src="/logo.jpg" alt="logo" width={45} height={45} />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Vanventure</span>
                    <span className="truncate text-xs">Location</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} />
          <NavUtility items={data.navUtility} />
          <NavSecondary items={data.navSecondary} className="mt-auto" />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>
      <main className="p-6 w-full">{children}</main>
    </SidebarProvider>
  );
}
