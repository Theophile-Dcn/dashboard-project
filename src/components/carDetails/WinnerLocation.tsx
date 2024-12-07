import { fingerPaint } from '@/app/dashboard/fonts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card';
import Image from 'next/image';

export default function WinnerLocation() {
  const data = {
    location: 'Julien.k',
    profit: 1000,
    numberOfLocationDays: 10
  };
  return (
    <Card
      className="w-full max-w-sm text-center flex flex-col gap-5"
      id="winner-block"
    >
      <CardHeader>
        <CardTitle className="text-lg">Meilleur Réservation</CardTitle>
        <CardDescription className="text-sm">
          Meilleur réservation au {new Date().toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-full flex flex-col items-center justify-between">
        <h2
          className={`text-center font-bold text-2xl text-red-400 ${fingerPaint.className}`}
        >
          {data.location}
        </h2>
        <h2 className="text-xl font-semibold text-foreground">
          {data.profit} €
        </h2>
        <span className="text-sm text-muted-foreground">
          {data.numberOfLocationDays} jours consécutifs
        </span>

        <Image
          src="/winner.png"
          alt="winner picture"
          width={85}
          height={85}
          className="mx-auto"
        />
      </CardContent>
    </Card>
  );
}
