import prisma from '@/src/lib/prisma';

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
  console.log(vansName);

  // Calculer le profit total de chaque voiture
  const carProfit = cars.map((car) => {
    const totalBenefit = car.reservations.reduce((acc, reservation) => {
      const benefit = reservation.price;
      return acc + benefit;
    }, 0);
    return {
      id: car.id,
      name: car.name,
      totalBenefit: totalBenefit
    };
  });

  // Calculer le profit total de l'utilisateur
  const totalProfit = carProfit.reduce((acc, car) => {
    return acc + car.totalBenefit;
  }, 0);
  console.log(totalProfit, carProfit, cars);
  return { cars, carProfit, totalProfit, vansName };
}
