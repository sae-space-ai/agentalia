import { Routine } from './schema';

export const routines: Routine[] = [
  {
    id: 'routine-1',
    name: 'Publicación diaria en redes',
    description: 'Publicar contenido optimizado en todas las redes sociales',
    frequency: 'daily',
    schedule: '09:00',
    assignedTo: 'valeria',
    isActive: true,
    lastRun: '2024-01-16T09:00:00Z',
    nextRun: '2024-01-17T09:00:00Z',
  },
  {
    id: 'routine-2',
    name: 'Reporte semanal de métricas',
    description: 'Generar y enviar reporte de métricas multicanal',
    frequency: 'weekly',
    schedule: 'Monday 08:00',
    assignedTo: 'elena',
    isActive: true,
    lastRun: '2024-01-15T08:00:00Z',
    nextRun: '2024-01-22T08:00:00Z',
  },
];

export const getRoutinesByAgent = (agentId: string): Routine[] => {
  return routines.filter(routine => routine.assignedTo === agentId);
};

export const getActiveRoutinesCount = (): number => {
  return routines.filter(routine => routine.isActive).length;
};
