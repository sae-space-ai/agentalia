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
  {
    id: 'obj-4',
    title: 'Certificación AI Act completa',
    description: 'Lograr certificación completa de cumplimiento del AI Act de la UE para todos los sistemas de IA de alto riesgo. Incluir documentación técnica, evaluación de conformidad y marcado CE.',
    status: 'in-progress',
    progress: 35,
    assignedTo: 'guardian',
    targetDate: '2024-08-01',
    keyResults: [
      'Completar evaluación de riesgos de todos los sistemas de IA',
      'Documentar medidas de mitigación y controles',
      'Obtener marcado CE para sistemas de alto riesgo',
      'Implementar sistema de monitoreo post-mercado',
      'Capacitar equipo en requisitos AI Act'
    ],
    createdAt: '2024-01-07T00:00:00Z',
  },
  {
    id: 'obj-5',
    title: 'Cumplimiento RGPD 100%',
    description: 'Alcanzar cumplimiento total del RGPD en todos los procesos de tratamiento de datos personales. Eliminar riesgo de sanciones y mejorar confianza de usuarios.',
    status: 'in-progress',
    progress: 60,
    assignedTo: 'guardian',
    targetDate: '2024-05-15',
    keyResults: [
      'Completar registro de actividades de tratamiento',
      'Implementar mecanismo de consentimiento válido',
      'Establecer procedimientos de ejercicio de derechos ARCO',
      'Realizar evaluación de impacto (DPIA) para operaciones de alto riesgo',
      'Designar DPO y establecer canal de comunicación con autoridad supervisora'
    ],
    createdAt: '2024-01-07T00:00:00Z',
  },
];

export const getObjectivesByAgent = (agentId: string): Objective[] => {
  return objectives.filter(obj => obj.assignedTo === agentId);
};

export const getObjectivesCount = (): number => {
  return objectives.length;
};
