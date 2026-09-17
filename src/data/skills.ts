import { Skill } from './schema';

export const skills: Skill[] = [
  {
    id: 'orchestration',
    name: 'Orquestación Neural',
    category: 'Core',
    description: 'Coordinación inteligente de múltiples agentes',
    availableTo: ['nexus'],
    isEnabled: true,
    level: 'expert',
  },
  {
    id: 'quantum-analysis',
    name: 'Análisis Cuántico',
    category: 'Analytics',
    description: 'Procesamiento de datos a velocidad cuántica',
    availableTo: ['cortex'],
    isEnabled: true,
    level: 'expert',
  },
  {
    id: 'multi-channel-comm',
    name: 'Comunicación Multicanal',
    category: 'Communications',
    description: 'Gestión coordinada de múltiples canales',
    availableTo: ['aether'],
    isEnabled: true,
    level: 'advanced',
  },
  {
    id: 'growth-optimization',
    name: 'Optimización de Crecimiento',
    category: 'Growth',
    description: 'Estrategias autónomas de crecimiento',
    availableTo: ['vanguard'],
    isEnabled: true,
    level: 'expert',
  },
  {
    id: 'market-prediction',
    name: 'Predicción de Mercado',
    category: 'Intelligence',
    description: 'Anticipación de tendencias del mercado',
    availableTo: ['oracle'],
    isEnabled: true,
    level: 'advanced',
  },
  {
    id: 'content-generation',
    name: 'Generación de Contenido',
    category: 'Creative',
    description: 'Creación de contenido hiper-personalizado',
    availableTo: ['synapse'],
    isEnabled: true,
    level: 'expert',
  },
  {
    id: 'neural-routing',
    name: 'Enrutamiento Neural',
    category: 'Core',
    description: 'Asignación inteligente de tareas',
    availableTo: ['nexus'],
    isEnabled: true,
    level: 'expert',
  },
];

export const getSkillsByAgent = (agentId: string): Skill[] => {
  return skills.filter(skill => skill.availableTo.includes(agentId));
};
