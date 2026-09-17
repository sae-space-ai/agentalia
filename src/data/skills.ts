import { Skill } from './schema';

export const skills: Skill[] = [
  {
    id: 'content-creation',
    name: 'Creación de contenido',
    category: 'Marketing',
    description: 'Generación de contenido optimizado para diferentes canales',
    availableTo: ['valeria'],
    isEnabled: true,
  },
  {
    id: 'copywriting',
    name: 'Copywriting',
    category: 'Marketing',
    description: 'Redacción persuasiva para conversiones',
    availableTo: ['valeria'],
    isEnabled: true,
  },
  {
    id: 'social-media',
    name: 'Gestión de redes sociales',
    category: 'Marketing',
    description: 'Administración y optimización de perfiles sociales',
    availableTo: ['valeria', 'elena'],
    isEnabled: true,
  },
  {
    id: 'research',
    name: 'Investigación de mercado',
    category: 'Análisis',
    description: 'Análisis de tendencias y competencia',
    availableTo: ['lucia'],
    isEnabled: true,
  },
  {
    id: 'data-analysis',
    name: 'Análisis de datos',
    category: 'Análisis',
    description: 'Procesamiento e interpretación de datos',
    availableTo: ['lucia', 'daniel'],
    isEnabled: true,
  },
  {
    id: 'financial-analysis',
    name: 'Análisis financiero',
    category: 'Finanzas',
    description: 'Evaluación de métricas financieras y proyecciones',
    availableTo: ['daniel'],
    isEnabled: true,
  },
  {
    id: 'orchestration',
    name: 'Orquestación de agentes',
    category: 'Sistema',
    description: 'Coordinación y asignación inteligente de tareas',
    availableTo: ['maestro'],
    isEnabled: true,
  },
];

export const getSkillsByAgent = (agentId: string): Skill[] => {
  return skills.filter(skill => skill.availableTo.includes(agentId));
};
