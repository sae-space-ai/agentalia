import { Routine } from './schema';

export const routines: Routine[] = [
  {
    id: 'routine-1',
    name: 'Publicación diaria en redes',
    description: 'Publicar contenido optimizado en todas las redes sociales',
    frequency: 'daily',
    schedule: '09:00',
    assignedTo: 'synapse',
    isActive: true,
    lastRun: '2024-01-16T09:00:00Z',
    nextRun: '2024-01-17T09:00:00Z',
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'routine-2',
    name: 'Reporte semanal de métricas',
    description: 'Generar y enviar reporte de métricas multicanal',
    frequency: 'weekly',
    schedule: 'Monday 08:00',
    assignedTo: 'aether',
    isActive: true,
    lastRun: '2024-01-15T08:00:00Z',
    nextRun: '2024-01-22T08:00:00Z',
    createdAt: '2024-01-02T00:00:00Z',
  },
  {
    id: 'routine-3',
    name: 'Monitoreo diario de cumplimiento AI Act',
    description: 'Verificación automática diaria de cumplimiento con requisitos del AI Act. Escaneo de sistemas de IA, verificación de documentación y detección de desviaciones.',
    frequency: 'daily',
    schedule: '06:00',
    assignedTo: 'guardian',
    isActive: true,
    lastRun: '2024-01-17T06:00:00Z',
    nextRun: '2024-01-18T06:00:00Z',
    createdAt: '2024-01-07T00:00:00Z',
  },
  {
    id: 'routine-4',
    name: 'Auditoría semanal de protección de datos',
    description: 'Auditoría automatizada semanal de cumplimiento RGPD. Verificación de registros de tratamiento, consentimiento, derechos ARCO y medidas de seguridad.',
    frequency: 'weekly',
    schedule: 'Friday 10:00',
    assignedTo: 'guardian',
    isActive: true,
    lastRun: '2024-01-12T10:00:00Z',
    nextRun: '2024-01-19T10:00:00Z',
    createdAt: '2024-01-07T00:00:00Z',
  },
];

export const getRoutinesByAgent = (agentId: string): Routine[] => {
  return routines.filter(routine => routine.assignedTo === agentId);
};

export const getActiveRoutinesCount = (): number => {
  return routines.filter(routine => routine.isActive).length;
};
