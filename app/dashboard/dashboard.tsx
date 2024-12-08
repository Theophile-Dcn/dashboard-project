'use client';
import WinnerPerformer from '@/src/components/dashboard/WinnerPerformer';
import TaskAuto from '@/src/components/dashboard/taskAuto';
import AcceptedReservationsChart from '@/src/components/shared/AcceptedReservationsChart';
import NextReservation from '@/src/components/shared/NextReservation';
import ProfitTotalChart from '@/src/components/shared/ProfitChart';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/src/components/ui/breadcrumb';
import { Separator } from '@/src/components/ui/separator';
import { SidebarInset, SidebarTrigger } from '@/src/components/ui/sidebar';
import { useSession } from 'next-auth/react';

export default function Dashboard() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-4">
            <TaskAuto />
            <WinnerPerformer />
            <NextReservation />
            <AcceptedReservationsChart />
          </div>
          <ProfitTotalChart />
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    );
  }

  return <p>You are not authorized to view this page!</p>;
}
