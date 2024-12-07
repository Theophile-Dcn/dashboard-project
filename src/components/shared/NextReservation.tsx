import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card';

export default function NextReservation() {
  // todo: get the 3 next reservations from the database by order of date

  // exemple :
  const reservations = [
    {
      id: 1,
      date: '2024-01-01',
      title: 'Julien.k',
      dateReservation: '10/08/2024',
      option: ['Forfait ménage', 'Toilette chimique', 'kit litterie']
    },
    {
      id: 2,
      date: '2024-01-02',
      title: 'Mireille.c',
      dateReservation: '12/11/2024',
      option: ['Forfait ménage', 'paddle', 'kit litterie']
    },
    {
      id: 3,
      date: '2024-01-03',
      title: 'Pierre.p',
      dateReservation: '11/11/2024',
      option: ['velo', 'kit litterie']
    }
  ];
  return (
    <Card className="w-full max-w-sm text-center">
      <CardHeader>
        <CardTitle className="text-lg">À venir</CardTitle>
        <CardDescription className="text-sm">
          Les prochaines réservations à venir
        </CardDescription>
      </CardHeader>
      <CardContent>
        {reservations.map((reservation) => (
          <div
            key={reservation.date}
            className="grid grid-cols-2 gap-2 border-b border-border p-2"
          >
            <div className="flex flex-col justify-center">
              <p className="text-lg">{reservation.title}</p>
              <p className="text-sm">{reservation.dateReservation}</p>
            </div>
            <div className="flex flex-col">
              {reservation.option.map((opt, i) => (
                <p key={i} className="text-sm">
                  {opt}
                </p>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
