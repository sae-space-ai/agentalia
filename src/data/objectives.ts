import { Objective } from './schema';

export const objectives: Objective[] = [
  {
    id: 'obj-1',
    title: 'Incrementar engagement 30%',
    description: 'Aumentar la interacción de usuarios en todas las plataformas digitales',
    status: 'in-progress',
    progress: 45,
    assignedTo: 'cortex',
    targetDate: '2024-03-31',
    keyResults: ['Aumentar seguidores 20%', 'Incrementar interacción al 5%', 'Publicar 3x/semana'],
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'obj-2',
    title: 'Identificar 5 oportunidades de mercado',
    description: 'Investigar y documentar nuevas oportunidades de crecimiento',
    status: 'in-progress',
    progress: 60,
    assignedTo: 'vanguard',
    targetDate: '2024-02-28',
    createdAt: '2024-01-02T00:00:00Z',
  },
  {
    id: 'obj-3',
    title: 'Reducir costos operativos 15%',
    description: 'Optimizar gastos y reducir costos mediante automatización',
    status: 'not-started',
    progress: 0,
    assignedTo: 'oracle',
    targetDate: '2024-06-30',
    createdAt: '2024-01-03T00:00:00Z',
  },
];

export const getObjectivesByAgent = (agentId: string): Objective[] => {
  return objectives.filter(obj => obj.assignedTo === agentId);
};

export const getObjectivesCount = (): number => {
  return objectives.length;
};
