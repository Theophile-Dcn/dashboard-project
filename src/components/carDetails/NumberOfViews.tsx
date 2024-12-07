'use client';

import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/src/components/ui/chart';

const chartData = [
  { month: 'Avril', desktop: 186, mobile: 80 },
  { month: 'Mai', desktop: 305, mobile: 200 },
  { month: 'Juin', desktop: 237, mobile: 120 },
  { month: 'Juillet', desktop: 73, mobile: 190 },
  { month: 'Août', desktop: 209, mobile: 130 },
  { month: 'Septembre', desktop: 214, mobile: 140 },
  { month: 'Octobre', desktop: 214, mobile: 140 }
];

const chartConfig = {
  desktop: {
    label: '2024',
    color: 'hsl(var(--chart-1))'
  },
  mobile: {
    label: '2023',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export default function NumberOfViews({ name }: { name: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nombre de vues sur l&apos;annonce</CardTitle>
        <CardDescription>
          Avril - Octobre {new Date().getFullYear()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Augmentation de 10% par rapport à 2023{' '}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Nombre de vues sur l&apos;annonce de {name}
        </div>
      </CardFooter>
    </Card>
  );
}
