import { fingerPaint } from '@/app/dashboard/fonts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card';
import Image from 'next/image';

// todo: get the best performer from the database
const bestPerformer = 'Mireille';
const profitBestPerformer = '3212 €';

export default function WinnerPerformer() {
  return (
    <Card
      className="w-full max-w-sm text-center flex flex-col gap-5"
      id="winner-block"
    >
      <CardHeader>
        <CardTitle className="text-lg">Meilleur performeur</CardTitle>
        <CardDescription className="text-sm">
          Meilleur performance annuelle
        </CardDescription>
      </CardHeader>
      <CardContent className="h-full flex flex-col items-center justify-between">
        <h2
          className={`text-center font-bold text-2xl text-red-400 ${fingerPaint.className}`}
        >
          {bestPerformer}
        </h2>
        <h2 className="text-xl font-semibold text-foreground">
          {profitBestPerformer}
        </h2>

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
