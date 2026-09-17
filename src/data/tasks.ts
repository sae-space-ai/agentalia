import { Task } from './schema';

export const tasks: Task[] = [
  {
    id: 'task-1',
    title: 'Análisis predictivo Q1',
    description: 'Procesar datos del último trimestre y generar modelo predictivo',
    status: 'in-progress',
    priority: 'high',
    assignedTo: 'cortex',
    createdAt: '2024-01-15T10:00:00Z',
    dueDate: '2024-01-20T18:00:00Z',
    tags: ['analytics', 'prediction'],
  },
  {
    id: 'task-2',
    title: 'Optimización de red neuronal',
    description: 'Ajustar parámetros del modelo de deep learning',
    status: 'completed',
    priority: 'medium',
    assignedTo: 'cortex',
    createdAt: '2024-01-14T09:00:00Z',
    completedAt: '2024-01-16T14:00:00Z',
    tags: ['ml', 'optimization'],
  },
  {
    id: 'task-3',
    title: 'Campaña multicanal automatizada',
    description: 'Lanzar campaña coordinada en email, social y push notifications',
    status: 'pending',
    priority: 'critical',
    assignedTo: 'aether',
    createdAt: '2024-01-16T08:00:00Z',
    dueDate: '2024-01-18T18:00:00Z',
    tags: ['campaign', 'automation'],
  },
  {
    id: 'task-4',
    title: 'A/B Testing landing pages',
    description: 'Ejecutar tests de conversión en 5 variantes de landing',
    status: 'in-progress',
    priority: 'high',
    assignedTo: 'vanguard',
    createdAt: '2024-01-12T10:00:00Z',
    dueDate: '2024-01-22T18:00:00Z',
    tags: ['testing', 'conversion'],
  },
  {
    id: 'task-5',
    title: 'Funnel de onboarding',
    description: 'Optimizar secuencia de onboarding para nuevos usuarios',
    status: 'pending',
    priority: 'medium',
    assignedTo: 'vanguard',
    createdAt: '2024-01-10T09:00:00Z',
    dueDate: '2024-01-25T18:00:00Z',
    tags: ['onboarding', 'growth'],
  },
  {
    id: 'task-6',
    title: 'Generación de contenido personalizado',
    description: 'Crear 50 variantes de contenido para segmentos de audiencia',
    status: 'in-progress',
    priority: 'high',
    assignedTo: 'synapse',
    createdAt: '2024-01-13T11:00:00Z',
    dueDate: '2024-01-19T18:00:00Z',
    tags: ['content', 'personalization'],
  },
  {
    id: 'task-7',
    title: 'Auditoría de cumplimiento AI Act',
    description: 'Realizar auditoría completa de sistemas de IA según requisitos del AI Act de la UE. Verificar clasificación de riesgos, documentación técnica y medidas de mitigación.',
    status: 'in-progress',
    priority: 'critical',
    assignedTo: 'guardian',
    createdAt: '2024-01-17T09:00:00Z',
    dueDate: '2024-01-24T18:00:00Z',
    tags: ['ai-act', 'compliance', 'audit', 'risk-assessment'],
  },
  {
    id: 'task-8',
    title: 'Evaluación de impacto RGPD',
    description: 'Evaluar el impacto en protección de datos de todos los sistemas que procesan datos personales. Documentar medidas de seguridad y consentimiento.',
    status: 'pending',
    priority: 'critical',
    assignedTo: 'guardian',
    createdAt: '2024-01-17T10:00:00Z',
    dueDate: '2024-01-26T18:00:00Z',
    tags: ['rgpd', 'data-protection', 'impact-assessment', 'privacy'],
  },
  {
    id: 'task-9',
    title: 'Monitoreo continuo de sanciones',
    description: 'Implementar sistema de alerta temprana para detectar posibles incumplimientos que puedan resultar en sanciones de hasta 35M€ o 7% del volumen de negocios.',
    status: 'in-progress',
    priority: 'high',
    assignedTo: 'guardian',
    createdAt: '2024-01-17T11:00:00Z',
    dueDate: '2024-02-01T18:00:00Z',
    tags: ['sanctions', 'monitoring', 'early-warning', 'compliance'],
  },
];

export const getTasksByAgent = (agentId: string): Task[] => {
  return tasks.filter(task => task.assignedTo === agentId);
};

export const getTasksByStatus = (status: Task['status']): Task[] => {
  return tasks.filter(task => task.status === status);
};

export const getPendingTasksCount = (): number => {
  return tasks.filter(task => task.status === 'pending' || task.status === 'in-progress').length;
};
