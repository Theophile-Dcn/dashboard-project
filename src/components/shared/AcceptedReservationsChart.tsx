'use client';

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart
} from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card';
import { ChartConfig, ChartContainer } from '@/src/components/ui/chart';
const chartData = [
  { reservation: 100, accepted: 50, fill: 'hsl(var(--chart-5))' }
];

const chartConfig = {
  reservation: {
    label: 'Réservations',
    color: 'hsl(var(--chart-2))'
  },
  accepted: {
    label: 'acceptées',
    color: 'hsl(var(--chart-1))'
  }
} satisfies ChartConfig;

export default function AcceptedReservationsChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pourcentage de réservations acceptées</CardTitle>
        <CardDescription>
          au {new Date().toLocaleDateString('fr-FR')}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={180}
            endAngle={0}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="accepted" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {chartData[0].accepted.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          acceptées
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {chartData[0].accepted.toLocaleString()} acceptées sur{' '}
          {chartData[0].reservation.toLocaleString()} réservations
        </div>
        <div className="leading-none text-muted-foreground text-center">
          Pourcentage de réservations acceptées depuis le début de l&apos;année
        </div>
      </CardFooter>
    </Card>
  );
}
