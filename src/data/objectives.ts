import { Objective } from './schema';

export const objectives: Objective[] = [
  {
    id: 'obj-1',
    title: 'Aumentar engagement en redes sociales',
    description: 'Incrementar la interacción en un 30% durante el próximo trimestre',
    status: 'in-progress',
    progress: 45,
    assignedTo: 'valeria',
    targetDate: '2024-03-31',
    keyResults: [
      'Aumentar seguidores en un 20%',
      'Incrementar tasa de interacción al 5%',
      'Publicar 3 veces por semana',
    ],
  },
  {
    id: 'obj-2',
    title: 'Identificar 5 oportunidades de mercado',
    description: 'Investigar y documentar nuevas oportunidades de crecimiento',
    status: 'in-progress',
    progress: 60,
    assignedTo: 'lucia',
    targetDate: '2024-02-28',
  },
  {
    id: 'obj-3',
    title: 'Reducir costos operativos',
    description: 'Optimizar gastos y reducir costos en un 15%',
    status: 'not-started',
    progress: 0,
    assignedTo: 'daniel',
    targetDate: '2024-06-30',
  },
];

export const getObjectivesByAgent = (agentId: string): Objective[] => {
  return objectives.filter(obj => obj.assignedTo === agentId);
};

export const getObjectivesCount = (): number => {
  return objectives.length;
};
