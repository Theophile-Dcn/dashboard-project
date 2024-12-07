'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/src/components/ui/chart';
import { chartData } from '@/src/data/dataChart';
import { chartConfig } from '@/src/utils/chartsConfig';
import { TrendingUp } from 'lucide-react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis
} from 'recharts';

const profitTotal = chartData.reduce(
  (acc, item) => acc + item.vehicule + item.materiel,
  0
);

export default function ProfitTotalChart() {
  return (
    <Card className="w-full max-w-full">
      <CardHeader>
        <CardTitle className="text-lg">Profit total {profitTotal} €</CardTitle>
        <CardDescription className="text-sm">
          Évolution mensuelle des profits d&apos;avril à octobre
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="w-full h-full">
          <ChartContainer config={chartConfig} className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 0
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  angle={-45}
                  textAnchor="end"
                  height={60}
                  tick={{ fontSize: 10 }}
                />
                <YAxis tick={{ fontSize: 10 }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend wrapperStyle={{ fontSize: '10px' }} />
                <Area
                  type="monotone"
                  dataKey="materiel"
                  stackId="1"
                  stroke={`var(--color-materiel)`}
                  fill={`var(--color-materiel)`}
                />
                <Area
                  type="monotone"
                  dataKey="vehicule"
                  stackId="1"
                  stroke={`var(--color-vehicule)`}
                  fill={`var(--color-vehicule)`}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex w-full items-start gap-1 text-xs">
          <div className="grid gap-1">
            <div className="flex items-center gap-1 font-medium leading-none">
              Tendance à la hausse
              <TrendingUp className="h-3 w-3" />
            </div>
            <div className="flex items-center gap-1 leading-none text-muted-foreground">
              Avril - Octobre
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
