import { CircleDot, Clock } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card';

export default function TaskAuto() {
  const tasks = [
    { id: 1, name: 'Mettre les nouvelles photos de Mireille' },
    { id: 2, name: "Laver et désinfecter les cuves d'eau" },
    { id: 3, name: 'Vérifier les entretiens avant saison' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tâches automatisées</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CircleDot className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Julien.k</span>
                <span className="text-sm font-medium">
                  envoi sms avant départ
                </span>
              </div>
            </div>
            <span className="text-sm text-muted-foreground flex flex-col items-center gap-2">
              <Clock className="h-4 w-4" />
              Dans 8:00
            </span>
          </div>
          <CardTitle>Rappels de tâches</CardTitle>
          <CardDescription>
            <ol className="flex flex-col p-4 gap-2">
              {tasks.map((task) => (
                <li className="list-decimal" key={task.id}>
                  {task.name}
                </li>
              ))}
            </ol>
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
