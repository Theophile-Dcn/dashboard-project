import prisma from '@/src/lib/prisma';
import { Car } from '@/src/types/interface';

// Récupérer le nom du mois
export const getMonthName = (date: Date): string => {
  const monthNames = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ];
  const month = date.getMonth();
  return monthNames[month];
};

// Calculer le profit total par voiture
export const calculateCarProfit = (cars: Car[]) => {
  return cars.map((car) => {
    const totalBenefit = car.reservations.reduce(
      (acc: number, reservation: { price: number }) => acc + reservation.price,
      0
    );
    return {
      id: car.id,
      name: car.name,
      totalBenefit
    };
  });
};

// Agréger les profits par mois pour tous les véhicules
export const aggregateMonthlyProfits = async (cars: Car[]) => {
  const profitByMonth = await Promise.all(
    cars.map(async (car) => {
      const data = await prisma.reservation.findMany({
        where: { carId: car.id },
        include: { materials: true }
      });

      return data.reduce(
        (
          acc: Record<string, { vehicule: number; materiel: number }>,
          reservation: {
            startDate: Date;
            price: number;
            materials: { price: number }[];
          }
        ) => {
          const month = getMonthName(new Date(reservation.startDate));
          if (!acc[month]) {
            acc[month] = { vehicule: 0, materiel: 0 };
          }
          acc[month].vehicule += reservation.price;
          reservation.materials.forEach((material) => {
            acc[month].materiel += material.price;
          });
          return acc;
        },
        {}
      );
    })
  );

  // Agréger les profits mensuels pour tous les véhicules
  return profitByMonth.reduce((acc, monthlyProfits) => {
    for (const [month, profits] of Object.entries(monthlyProfits)) {
      if (!acc[month]) {
        acc[month] = { vehicule: 0, materiel: 0 };
      }
      acc[month].vehicule += profits.vehicule;
      acc[month].materiel += profits.materiel;
    }
    return acc;
  }, {});
};

// Calculer les statistiques des réservations
export const calculateReservationStats = async () => {
  const acceptedReservation = await prisma.reservation.findMany({
    where: { status: 'accepté' }
  });
  const nextReservation = await prisma.reservation.findMany({
    where: {
      startDate: {
        gte: new Date()
      }
    }
  });

  const totalReservation = await prisma.reservation.count();
  const percentage = (acceptedReservation.length / totalReservation) * 100;

  return {
    nextReservation,
    percentage,
    totalReservation,
    acceptedReservation
  };
};
