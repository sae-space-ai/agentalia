import { Agent } from './schema';

export const agents: Agent[] = [
  {
    id: 'valeria',
    name: 'Valeria',
    role: 'Agente de Contenido Curioso',
    avatar: '📝',
    color: 'bg-green-100 text-green-600',
    status: 'active',
    skills: ['content-creation', 'copywriting', 'social-media'],
    tasks: ['task-1', 'task-2'],
    objectives: ['obj-1'],
    routines: ['routine-1'],
  },
  {
    id: 'lucia',
    name: 'Lucía',
    role: 'Agente de Investigación',
    avatar: '🔍',
    color: 'bg-purple-100 text-purple-600',
    status: 'active',
    skills: ['research', 'data-analysis', 'market-research'],
    tasks: ['task-3'],
    objectives: ['obj-2'],
  },
  {
    id: 'elena',
    name: 'Elena',
    role: 'Agente de Éxito Multicanal',
    avatar: '📱',
    color: 'bg-orange-100 text-orange-600',
    status: 'active',
    skills: ['multi-channel', 'customer-success', 'campaign-management'],
    tasks: ['task-4', 'task-5'],
    routines: ['routine-2'],
  },
  {
    id: 'carmen',
    name: 'Carmen',
    role: 'Agente de Comunicación',
    avatar: '💬',
    color: 'bg-blue-100 text-blue-600',
    status: 'idle',
    skills: ['communication', 'email-marketing', 'messaging'],
    tasks: ['task-6'],
  },
  {
    id: 'daniel',
    name: 'Daniel',
    role: 'Agente de Análisis Financiero',
    avatar: '💰',
    color: 'bg-pink-100 text-pink-600',
    status: 'idle',
    skills: ['financial-analysis', 'reporting', 'budgeting'],
    objectives: ['obj-3'],
  },
  {
    id: 'maestro',
    name: 'The Maestro',
    role: 'Orquestador de agentes',
    avatar: '🎼',
    color: 'bg-gray-900 text-white',
    status: 'active',
    isOrchestrator: true,
    description: 'The Maestro aprovecha la experiencia de Agentalia para elegir a mano los mejores agentes y habilidades que ayuden a crecer tu negocio.',
    skills: ['orchestration', 'agent-coordination', 'task-assignment'],
  },
];

export const getAgentById = (id: string): Agent | undefined => {
  return agents.find(agent => agent.id === id);
};

export const getAgentsByStatus = (status: Agent['status']): Agent[] => {
  return agents.filter(agent => agent.status === status);
};

export const getOrchestrator = (): Agent | undefined => {
  return agents.find(agent => agent.isOrchestrator);
};
