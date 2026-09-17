import { Task } from './schema';

export const tasks: Task[] = [
  {
    id: 'task-1',
    title: 'Crear contenido para blog',
    description: 'Redactar 3 artículos sobre tendencias del mercado',
    status: 'in-progress',
    priority: 'high',
    assignedTo: 'valeria',
    createdAt: '2024-01-15T10:00:00Z',
    dueDate: '2024-01-20T18:00:00Z',
  },
  {
    id: 'task-2',
    title: 'Publicar en redes sociales',
    description: 'Programar publicaciones para la semana',
    status: 'completed',
    priority: 'medium',
    assignedTo: 'valeria',
    createdAt: '2024-01-14T09:00:00Z',
    completedAt: '2024-01-16T14:00:00Z',
  },
  {
    id: 'task-3',
    title: 'Análisis de competencia',
    description: 'Investigar principales competidores y sus estrategias',
    status: 'in-progress',
    priority: 'high',
    assignedTo: 'lucia',
    createdAt: '2024-01-13T11:00:00Z',
    dueDate: '2024-01-22T18:00:00Z',
  },
  {
    id: 'task-4',
    title: 'Campaña de email marketing',
    description: 'Diseñar y enviar campaña de seguimiento',
    status: 'pending',
    priority: 'medium',
    assignedTo: 'elena',
    createdAt: '2024-01-16T08:00:00Z',
    dueDate: '2024-01-25T18:00:00Z',
  },
  {
    id: 'task-5',
    title: 'Optimizar landing page',
    description: 'Mejorar conversión de página principal',
    status: 'in-progress',
    priority: 'urgent',
    assignedTo: 'elena',
    createdAt: '2024-01-12T10:00:00Z',
    dueDate: '2024-01-18T18:00:00Z',
  },
  {
    id: 'task-6',
    title: 'Newsletter mensual',
    description: 'Preparar y enviar newsletter a suscriptores',
    status: 'pending',
    priority: 'low',
    assignedTo: 'carmen',
    createdAt: '2024-01-10T09:00:00Z',
    dueDate: '2024-01-30T18:00:00Z',
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
