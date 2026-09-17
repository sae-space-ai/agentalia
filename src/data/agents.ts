import { Agent } from './schema';

export const agents: Agent[] = [
  {
    id: 'nexus',
    name: 'Agentalia Nexus',
    role: 'Neural Orchestrator',
    avatar: '⚡',
    color: 'from-cyan-500 to-blue-600',
    glowColor: 'cyan',
    status: 'active',
    isOrchestrator: true,
    description: 'Nexus coordina todos los agentes del sistema, optimizando flujos de trabajo y asignando tareas de forma inteligente mediante redes neuronales avanzadas.',
    skills: ['orchestration', 'neural-routing', 'workflow-optimization'],
    createdAt: '2024-01-01T00:00:00Z',
    lastActive: new Date().toISOString(),
  },
  {
    id: 'cortex',
    name: 'Agentalia Cortex',
    role: 'Quantum Data Analyst',
    avatar: '🧠',
    color: 'from-purple-500 to-pink-600',
    glowColor: 'purple',
    status: 'active',
    description: 'Cortex procesa datos a velocidad cuántica, identificando patrones y generando insights predictivos para decisiones estratégicas.',
    skills: ['quantum-analysis', 'pattern-recognition', 'predictive-modeling'],
    tasks: ['task-1', 'task-2'],
    objectives: ['obj-1'],
    createdAt: '2024-01-02T00:00:00Z',
    lastActive: new Date().toISOString(),
  },
  {
    id: 'aether',
    name: 'Agentalia Aether',
    role: 'Cyber Communications Specialist',
    avatar: '🌐',
    color: 'from-blue-500 to-indigo-600',
    glowColor: 'blue',
    status: 'active',
    description: 'Aether domina todas las frecuencias de comunicación digital, gestionando mensajes, emails y redes sociales con precisión quirúrgica.',
    skills: ['multi-channel-comm', 'message-optimization', 'social-sync'],
    tasks: ['task-3'],
    routines: ['routine-1'],
    createdAt: '2024-01-03T00:00:00Z',
    lastActive: new Date().toISOString(),
  },
  {
    id: 'vanguard',
    name: 'Agentalia Vanguard',
    role: 'Autonomous Growth Hacker',
    avatar: '🚀',
    color: 'from-green-500 to-emerald-600',
    glowColor: 'green',
    status: 'processing',
    description: 'Vanguard ejecuta estrategias de crecimiento autónomo, experimentando con tácticas innovadoras y optimizando conversiones en tiempo real.',
    skills: ['growth-optimization', 'ab-testing', 'conversion-boost'],
    tasks: ['task-4', 'task-5'],
    objectives: ['obj-2'],
    createdAt: '2024-01-04T00:00:00Z',
    lastActive: new Date().toISOString(),
  },
  {
    id: 'oracle',
    name: 'Agentalia Oracle',
    role: 'Predictive Intelligence Engine',
    avatar: '🔮',
    color: 'from-violet-500 to-purple-600',
    glowColor: 'violet',
    status: 'idle',
    description: 'Oracle anticipa tendencias del mercado y comportamiento del usuario mediante algoritmos de aprendizaje profundo, proporcionando ventaja competitiva.',
    skills: ['market-prediction', 'trend-analysis', 'user-behavior-modeling'],
    objectives: ['obj-3'],
    createdAt: '2024-01-05T00:00:00Z',
    lastActive: new Date().toISOString(),
  },
  {
    id: 'synapse',
    name: 'Agentalia Synapse',
    role: 'Neural Content Generator',
    avatar: '✨',
    color: 'from-pink-500 to-rose-600',
    glowColor: 'pink',
    status: 'active',
    description: 'Synapse crea contenido hiper-personalizado que resuena con audiencias específicas, adaptando tono, estilo y formato en milisegundos.',
    skills: ['content-generation', 'personalization', 'creative-ai'],
    tasks: ['task-6'],
    routines: ['routine-2'],
    createdAt: '2024-01-06T00:00:00Z',
    lastActive: new Date().toISOString(),
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
