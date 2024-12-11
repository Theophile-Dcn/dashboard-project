interface CarProfit {
  id: number;
  name: string;
  profit: number;
}

interface Car {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  reservations: {
    id: number;
    startDate: Date;
    endDate: Date;
    price: number;
  }[];
}

interface ReservationStats {
  nextReservation: [];
  percentage: number;
  totalReservation: number;
  acceptedReservation: [];
}

interface AggregatedProfitByMonth {
  month: string;
  vehicule: number;
  materiel: number;
}

interface VansName {
  id: number;
  name: string;
}

interface DashboardData {
  reservationStats: ReservationStats;
  bestPerfomerCar: CarProfit;
  nextReservation: [];
  aggregatedProfitByMonth: AggregatedProfitByMonth[];
  vansName: VansName[];
}

export type {
  AggregatedProfitByMonth,
  Car,
  CarProfit,
  DashboardData,
  ReservationStats,
  VansName
};
