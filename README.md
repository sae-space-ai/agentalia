# Agentalia Agents Dashboard

Dashboard completo de agentes de Agentalia con tema claro, base de datos interna extensible y diseño responsive.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Base de Datos Interna](#base-de-datos-interna)
- [Instalación](#instalación)
- [Uso](#uso)
- [Extensión del Catálogo](#extensión-del-catálogo)
- [Tecnologías](#tecnologías)

## ✨ Características

### Diseño Visual
- ✅ **Tema claro** con fondo #F8F9FA y tarjetas blancas
- ✅ **Header** con título "Tus agentes" y badge de estado verde
- ✅ **Grid de acceso rápido** con 6 tarjetas interactivas conectadas a la base de datos
- ✅ **Visualización orbital** del equipo con iconos de agentes
- ✅ **Lista de agentes** con avatares circulares y badges de roles
- ✅ **Sección del Maestro** con descripción y botón destacado
- ✅ **Tarjeta de conocimiento** en la parte inferior
- ✅ **Diseño responsive** (mobile, tablet, desktop)
- ✅ **Hover effects** y transiciones suaves

### Funcionalidades
- ✅ Base de datos interna con múltiples entidades tipadas
- ✅ Catálogo de agentes extensible
- ✅ Conexión entre entidades (agentes ↔ tareas ↔ objetivos ↔ rutinas)
- ✅ Contadores dinámicos basados en datos reales
- ✅ TypeScript completo con interfaces para todas las entidades

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.tsx              # Barra superior con título y badges
│   ├── QuickAccessGrid.tsx     # 6 tarjetas de acceso rápido + KnowledgeCard
│   ├── TeamOrbit.tsx           # Visualización orbital del equipo
│   └── AgentsList.tsx          # Lista de agentes con sección del Maestro
├── data/
│   ├── schema.ts               # Interfaces TypeScript para todas las entidades
│   ├── agents.ts               # Catálogo de agentes
│   ├── tasks.ts                # Tareas asignadas a agentes
│   ├── objectives.ts           # Objetivos de agentes
│   ├── routines.ts             # Rutinas automatizadas
│   ├── skills.ts               # Habilidades de agentes
│   └── entities.ts             # Otras entidades (complements, automations, etc.)
├── App.tsx                     # Componente principal
├── main.tsx                    # Entry point
└── index.css                   # Estilos globales con tema claro
```

## 🗄️ Base de Datos Interna

### Esquema de Datos

El sistema utiliza una base de datos interna basada en TypeScript con las siguientes entidades:

#### Agent
```typescript
interface Agent {
  id: string;
  name: string;
  role: string;
  avatar: string;
  color: string;
  description?: string;
  status: 'active' | 'idle' | 'processing';
  isOrchestrator?: boolean;
  skills?: string[];
  tasks?: string[];
  objectives?: string[];
  routines?: string[];
  complements?: string[];
  automations?: string[];
  utilities?: string[];
}
```

#### Task
```typescript
interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo: string; // Agent ID
  createdAt: string;
  dueDate?: string;
  completedAt?: string;
}
```

#### Objective
```typescript
interface Objective {
  id: string;
  title: string;
  description: string;
  status: 'not-started' | 'in-progress' | 'completed';
  targetDate?: string;
  progress: number; // 0-100
  assignedTo: string; // Agent ID
  keyResults?: string[];
}
```

#### Routine
```typescript
interface Routine {
  id: string;
  name: string;
  description: string;
  frequency: 'daily' | 'weekly' | 'monthly' | 'custom';
  schedule?: string;
  assignedTo: string; // Agent ID
  isActive: boolean;
  lastRun?: string;
  nextRun?: string;
}
```

#### Skill
```typescript
interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  availableTo: string[]; // Agent IDs
  isEnabled: boolean;
}
```

### Entidades Adicionales

- **Complement**: Integraciones y extensiones
- **Automation**: Automatizaciones con triggers y acciones
- **Utility**: Herramientas y recursos
- **File**: Archivos gestionados por agentes
- **Contact**: Contactos con los que interactúan los agentes
- **App**: Aplicaciones creadas por agentes

### Relaciones entre Entidades

Los agentes están conectados con otras entidades mediante IDs:
- Un agente puede tener múltiples tareas, objetivos, rutinas
- Las tareas están asignadas a un agente específico
- Los objetivos tienen un agente responsable
- Las rutinas están vinculadas a un agente
- Las habilidades están disponibles para uno o más agentes

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación
npm run preview
```

## 📖 Uso

### Agentes Incluidos

1. **Valeria** — Agente de Contenido Curioso
   - Habilidades: Creación de contenido, copywriting, redes sociales
   - Tareas activas: 2

2. **Lucía** — Agente de Investigación
   - Habilidades: Investigación, análisis de datos, investigación de mercado
   - Tareas activas: 1

3. **Elena** — Agente de Éxito Multicanal
   - Habilidades: Multicanal, éxito del cliente, gestión de campañas
   - Tareas activas: 2

4. **Carmen** — Agente de Comunicación
   - Habilidades: Comunicación, email marketing, mensajería
   - Tareas activas: 1

5. **Daniel** — Agente de Análisis Financiero
   - Habilidades: Análisis financiero, reportes, presupuestación
   - Objetivos: 1

6. **The Maestro** — Orquestador de agentes
   - Coordina todos los agentes
   - Aprovecha la experiencia de Agentalia para optimizar el negocio

### Funciones de Consulta

Cada archivo de datos exporta funciones útiles:

```typescript
// Obtener agente por ID
const agent = getAgentById('valeria');

// Obtener agentes por estado
const activeAgents = getAgentsByStatus('active');

// Obtener tareas de un agente
const valeriaTasks = getTasksByAgent('valeria');

// Contar tareas pendientes
const pendingCount = getPendingTasksCount();

// Obtener objetivos de un agente
const objectives = getObjectivesByAgent('valeria');

// Obtener rutinas activas
const activeRoutines = getActiveRoutinesCount();
```

## 🔧 Extensión del Catálogo

### Añadir un Nuevo Agente

1. Abre `src/data/agents.ts`
2. Añade un nuevo objeto al array `agents`:

```typescript
{
  id: 'nuevo-agente',
  name: 'Nombre del Agente',
  role: 'Rol del Agente',
  avatar: '🎯',
  color: 'bg-blue-100 text-blue-600',
  status: 'active',
  skills: ['skill-1', 'skill-2'],
  tasks: [],
  objectives: [],
  routines: [],
}
```

### Añadir Nuevas Tareas

1. Abre `src/data/tasks.ts`
2. Añade un nuevo objeto al array `tasks`:

```typescript
{
  id: 'task-nuevo',
  title: 'Nueva tarea',
  description: 'Descripción de la tarea',
  status: 'pending',
  priority: 'medium',
  assignedTo: 'valeria', // ID del agente
  createdAt: new Date().toISOString(),
  dueDate: '2024-02-01T18:00:00Z',
}
```

### Añadir Nuevas Habilidades

1. Abre `src/data/skills.ts`
2. Añade un nuevo objeto al array `skills`:

```typescript
{
  id: 'nueva-habilidad',
  name: 'Nombre de la habilidad',
  category: 'Categoría',
  description: 'Descripción',
  availableTo: ['valeria', 'lucia'], // IDs de agentes
  isEnabled: true,
}
```

### Crear Nuevas Entidades

Para añadir un nuevo tipo de entidad:

1. Define la interfaz en `src/data/schema.ts`
2. Crea un nuevo archivo en `src/data/` (ej: `src/data/newEntity.ts`)
3. Exporta el array de datos y funciones de consulta
4. Importa y usa en los componentes necesarios

## 🎨 Tecnologías

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework CSS utility-first
- **lucide-react** - Iconos modernos y consistentes

## 📊 Estado del Proyecto

✅ Proyecto compila sin errores  
✅ Sin referencias a marcas prohibidas  
✅ "Agentalia" aparece correctamente en todo el proyecto  
✅ Base de datos interna completamente tipada  
✅ Catálogo de agentes extensible  
✅ Componentes modulares y reutilizables  
✅ Diseño responsive y accesible  
✅ Tema claro con colores especificados

## 📝 Licencia

Este proyecto es una implementación de dashboard para Agentalia.

---

**Desarrollado con ❤️ para Agentalia**
