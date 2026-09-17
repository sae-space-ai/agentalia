export interface Agent {
  id: string;
  name: string;
  role: string;
  avatar: string;
  color: string;
  description?: string;
  isOrchestrator?: boolean;
}

export const agents: Agent[] = [
  {
    id: 'valeria',
    name: 'Valeria',
    role: 'Agente de Contenido Curioso',
    avatar: '📝',
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 'lucia',
    name: 'Lucía',
    role: 'Agente de Investigación',
    avatar: '🔍',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 'elena',
    name: 'Elena',
    role: 'Agente de Éxito Multicanal',
    avatar: '📱',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    id: 'carmen',
    name: 'Carmen',
    role: 'Agente de Comunicación',
    avatar: '💬',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'daniel',
    name: 'Daniel',
    role: 'Agente de Análisis Financiero',
    avatar: '💰',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    id: 'maestro',
    name: 'The Maestro',
    role: 'Orquestador de agentes',
    avatar: '🎼',
    color: 'bg-gray-900 text-white',
    isOrchestrator: true,
    description: 'The Maestro aprovecha la experiencia de Agentalia para elegir a mano los mejores agentes y habilidades que ayuden a crecer tu negocio.',
  },
];

export const quickAccessItems = [
  {
    id: 'tasks',
    icon: 'CheckCircle',
    title: 'Tareas',
    subtitle: '02',
    badge: null,
  },
  {
    id: 'goals',
    icon: 'TrendingUp',
    title: 'Objetivos',
    subtitle: 'Aún no hay objetivos',
    badge: null,
  },
  {
    id: 'routines',
    icon: 'Zap',
    title: 'Rutinas',
    subtitle: '01',
    badge: null,
  },
  {
    id: 'files',
    icon: 'FileText',
    title: 'Archivos',
    subtitle: '20 archivos · 7 espacios',
    badge: 'Próximamente',
  },
  {
    id: 'apps',
    icon: 'Grid3x3',
    title: 'Apps',
    subtitle: 'Apps que tus agentes crearon en todos tus espacios',
    badge: null,
  },
  {
    id: 'contacts',
    icon: 'Users',
    title: 'Contactos',
    subtitle: 'Los contactos con los que tus agentes han estado en ...',
    badge: null,
  },
];
