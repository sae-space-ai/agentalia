import { Complement, Automation, Utility, File, Contact, App } from './schema';

export const complements: Complement[] = [
  {
    id: 'comp-1',
    name: 'Neural Analytics Suite',
    type: 'integration',
    description: 'Suite avanzada de análisis con IA',
    assignedTo: 'cortex',
    isActive: true,
  },
  {
    id: 'comp-2',
    name: 'Quantum Messaging Hub',
    type: 'integration',
    description: 'Hub de mensajería cuántica',
    assignedTo: 'aether',
    isActive: true,
  },
];

export const automations: Automation[] = [
  {
    id: 'auto-1',
    name: 'Auto-respuesta inteligente',
    trigger: 'Nuevo lead recibido',
    action: 'Enviar email personalizado',
    description: 'Respuesta automática con contenido adaptado',
    assignedTo: 'aether',
    isActive: true,
    lastTriggered: '2024-01-16T14:30:00Z',
    executionCount: 156,
  },
];

export const utilities: Utility[] = [
  {
    id: 'util-1',
    name: 'Generador de informes cuántico',
    category: 'tool',
    description: 'Herramienta para generar informes automatizados',
    assignedTo: 'cortex',
    isAvailable: true,
    usageCount: 89,
  },
];

export const files: File[] = [
  {
    id: 'file-1',
    name: 'Informe Q4 2023.pdf',
    type: 'pdf',
    size: 2456789,
    space: 'Analytics',
    uploadedAt: '2024-01-10T10:00:00Z',
    uploadedBy: 'cortex',
    tags: ['report', 'quarterly'],
  },
  {
    id: 'file-2',
    name: 'Estrategia Neural 2024.docx',
    type: 'docx',
    size: 1234567,
    space: 'Strategy',
    uploadedAt: '2024-01-12T11:00:00Z',
    uploadedBy: 'nexus',
    tags: ['strategy', 'planning'],
  },
];

export const contacts: Contact[] = [
  {
    id: 'contact-1',
    name: 'María García',
    email: 'maria@empresa.com',
    company: 'TechCorp',
    lastInteraction: '2024-01-15T16:00:00Z',
    interactedBy: ['aether', 'vanguard'],
    notes: 'Cliente premium',
  },
  {
    id: 'contact-2',
    name: 'Juan Pérez',
    email: 'juan@startup.com',
    company: 'InnovateLab',
    lastInteraction: '2024-01-14T10:00:00Z',
    interactedBy: ['aether'],
  },
];

export const apps: App[] = [
  {
    id: 'app-1',
    name: 'Neural Dashboard',
    description: 'Dashboard de métricas en tiempo real con IA',
    createdBy: 'vanguard',
    createdAt: '2024-01-08T09:00:00Z',
    status: 'published',
    version: '2.1.0',
    downloads: 1247,
  },
];

export const getFilesCount = (): number => files.length;
export const getContactsCount = (): number => contacts.length;
export const getAppsCount = (): number => apps.length;
