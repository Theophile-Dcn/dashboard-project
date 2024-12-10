import { auth } from '@/src/lib/auth';
import { NextResponse } from 'next/server';
import handlerDashboard from '../services/dashboardService';
export async function GET() {
  const session = await auth();
  const userId = session?.user?.id;
  try {
    const dataDashboard = await handlerDashboard(userId as string);
    console.log(dataDashboard);
    return NextResponse.json(dataDashboard);
  } catch (error) {
    console.error(error);
  }
}
