import prisma from '@/src/lib/prisma';
import {
  aggregateMonthlyProfits,
  calculateCarProfit,
  calculateReservationStats
} from '@/src/utils/dashboardUtils';

export default async function handlerDashboard(userId: string) {
  // Récupérer les voitures de l'utilisateur
  const cars = await prisma.car.findMany({
    where: {
      userId: Number(userId)
    },
    include: {
      reservations: true
    }
  });

  // Récupéré le nom des vans
  const vansName = cars.map((car) => car.name);

  // Calculer le profit total de chaque voiture
  const carProfit = calculateCarProfit(cars);

  // Trouver la voiture avec le meilleur profit
  const bestPerfomerCar = carProfit.reduce((acc, car) =>
    car.totalBenefit > acc.totalBenefit ? car : acc
  );

  // Calculer le profit total des réservations par mois
  const profitByMonth = await aggregateMonthlyProfits(cars);

  // Récupérer les statistiques des réservations
  const reservationStats = await calculateReservationStats();

  return {
    reservationStats: reservationStats,
    bestPerfomerCar: bestPerfomerCar,
    aggregatedProfitByMonth: profitByMonth,
    vansName: vansName
  };
}
