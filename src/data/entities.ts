import { Complement, Automation, Utility, File, Contact, App } from './schema';

export const complements: Complement[] = [
  {
    id: 'comp-1',
    name: 'Google Analytics',
    type: 'integration',
    description: 'Integración con Google Analytics para métricas web',
    assignedTo: 'elena',
    isActive: true,
  },
  {
    id: 'comp-2',
    name: 'Mailchimp',
    type: 'integration',
    description: 'Plataforma de email marketing',
    assignedTo: 'carmen',
    isActive: true,
  },
];

export const automations: Automation[] = [
  {
    id: 'auto-1',
    name: 'Auto-respuesta a leads',
    trigger: 'Nuevo lead recibido',
    action: 'Enviar email de bienvenida',
    description: 'Respuesta automática cuando se recibe un nuevo lead',
    assignedTo: 'carmen',
    isActive: true,
    lastTriggered: '2024-01-16T14:30:00Z',
  },
];

export const utilities: Utility[] = [
  {
    id: 'util-1',
    name: 'Generador de informes',
    category: 'tool',
    description: 'Herramienta para generar informes automatizados',
    assignedTo: 'daniel',
    isAvailable: true,
  },
];

export const files: File[] = [
  {
    id: 'file-1',
    name: 'Informe Q4 2023.pdf',
    type: 'pdf',
    size: 2456789,
    space: 'Finanzas',
    uploadedAt: '2024-01-10T10:00:00Z',
    uploadedBy: 'daniel',
  },
  {
    id: 'file-2',
    name: 'Estrategia Marketing 2024.docx',
    type: 'docx',
    size: 1234567,
    space: 'Marketing',
    uploadedAt: '2024-01-12T11:00:00Z',
    uploadedBy: 'valeria',
  },
];

export const contacts: Contact[] = [
  {
    id: 'contact-1',
    name: 'María García',
    email: 'maria@empresa.com',
    company: 'Empresa ABC',
    lastInteraction: '2024-01-15T16:00:00Z',
    interactedBy: ['carmen', 'elena'],
  },
  {
    id: 'contact-2',
    name: 'Juan Pérez',
    email: 'juan@startup.com',
    company: 'Startup XYZ',
    lastInteraction: '2024-01-14T10:00:00Z',
    interactedBy: ['carmen'],
  },
];

export const apps: App[] = [
  {
    id: 'app-1',
    name: 'Dashboard de Métricas',
    description: 'Aplicación para visualizar métricas en tiempo real',
    createdBy: 'elena',
    createdAt: '2024-01-08T09:00:00Z',
    status: 'published',
  },
];

export const getFilesCount = (): number => files.length;
export const getContactsCount = (): number => contacts.length;
export const getAppsCount = (): number => apps.length;
