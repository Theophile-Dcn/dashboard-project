import { ChartConfig } from '@/src/components/ui/chart';

export const chartConfig = {
  vehicule: {
    label: 'Location de véhicule',
    color: 'hsl(var(--chart-1))'
  },
  materiel: {
    label: 'Location de matériel',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;
