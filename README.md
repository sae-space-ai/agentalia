# Agentalia Agents Dashboard

Dashboard completo de agentes de IA con tema claro/oscuro, routing, state management, command palette, y preparación para Vercel.

## 🚀 Características Principales

### Diseño y UX
- ✅ **Tema claro/oscuro** con toggle persistente
- ✅ **Diseño responsive** (mobile, tablet, desktop)
- ✅ **Animaciones suaves** con Framer Motion
- ✅ **Command Palette** (⌘K) para navegación rápida
- ✅ **Notificaciones** con Sonner
- ✅ **Hover effects** y transiciones en todas las interacciones

### Funcionalidades
- ✅ **Routing completo** con React Router (Dashboard, Agentes, Tareas, Objetivos, Rutinas, Habilidades, Archivos, Apps, Configuración)
- ✅ **State management** con Zustand y persistencia en localStorage
- ✅ **Base de datos interna** tipada con TypeScript
- ✅ **Catálogo extensible** de agentes, tareas, objetivos, rutinas, habilidades
- ✅ **Visualización orbital** del equipo de agentes
- ✅ **Búsqueda global** en command palette
- ✅ **Acciones en tiempo real** (completar tareas, cambiar estado de agentes)

### Preparado para Producción
- ✅ **Configuración de Vercel** lista para deploy
- ✅ **Variables de entorno** con .env.example
- ✅ **TypeScript estricto** con interfaces completas
- ✅ **Componentes modulares** y reutilizables
- ✅ **Sin dependencias de marcas prohibidas**

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Layout.tsx              # Layout principal con sidebar y routing
│   ├── CommandPalette.tsx      # Command palette con ⌘K
│   ├── QuickAccessGrid.tsx     # 6 tarjetas de acceso rápido
│   ├── TeamOrbit.tsx           # Visualización orbital del equipo
│   ├── AgentsList.tsx          # Lista de agentes con Maestro
│   └── Header.tsx              # Header del dashboard
├── pages/
│   ├── DashboardPage.tsx       # Página principal
│   ├── AgentsPage.tsx          # Lista de agentes
│   ├── TasksPage.tsx           # Gestión de tareas
│   ├── ObjectivesPage.tsx      # Objetivos y KPIs
│   ├── RoutinesPage.tsx        # Rutinas automatizadas
│   ├── SkillsPage.tsx          # Habilidades de agentes
│   ├── FilesPage.tsx           # Archivos del sistema
│   ├── AppsPage.tsx            # Apps creadas por agentes
│   └── SettingsPage.tsx        # Configuración
├── data/
│   ├── schema.ts               # Interfaces TypeScript
│   ├── agents.ts               # Catálogo de agentes
│   ├── tasks.ts                # Tareas
│   ├── objectives.ts           # Objetivos
│   ├── routines.ts             # Rutinas
│   ├── skills.ts               # Habilidades
│   └── entities.ts             # Otras entidades
├── store/
│   └── appStore.ts             # Zustand store con persistencia
├── App.tsx                     # Router principal
├── main.tsx                    # Entry point
└── index.css                   # Estilos globales
```

## 🗄️ Base de Datos Interna

### Entidades Implementadas

1. **Agent** - Agentes con roles, habilidades, tareas, objetivos, rutinas
2. **Task** - Tareas con estado, prioridad, fechas, asignación
3. **Objective** - Objetivos con progreso y resultados clave
4. **Routine** - Rutinas con frecuencia y horarios
5. **Skill** - Habilidades disponibles para agentes
6. **Complement** - Integraciones y extensiones
7. **Automation** - Automatizaciones con triggers
8. **Utility** - Herramientas y recursos
9. **File** - Archivos gestionados
10. **Contact** - Contactos de agentes
11. **App** - Aplicaciones creadas

### Relaciones
- Agentes ↔ Tareas, Objetivos, Rutinas, Habilidades
- Funciones de consulta para filtrar por agente, estado, etc.
- Contadores dinámicos actualizados automáticamente

## 🚀 Instalación y Uso

### Desarrollo Local

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo con hot reload
- `npm run build` - Compilación para producción
- `npm run preview` - Vista previa de la compilación
- `npm run lint` - Linting con ESLint

## 🌐 Deploy en Vercel

### Opción 1: Deploy Automático (Recomendado)

1. **Conectar repositorio GitHub**
   - Ve a [vercel.com](https://vercel.com)
   - Importa tu repositorio de GitHub

2. **Configuración automática**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Variables de entorno** (opcional)
   - Ve a Settings → Environment Variables
   - Añade las variables de `.env.example`

4. **Deploy**
   - Click en "Deploy"
   - Tu sitio estará listo en ~2 minutos

### Opción 2: Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Configuración de Vercel

El archivo `vercel.json` incluye:
- ✅ Rewrites para SPA routing
- ✅ Cache headers para assets
- ✅ Framework preset: Vite
- ✅ Build y output directories

## 🎨 Mejoras Implementadas

### 1. State Management con Zustand
- **Por qué**: Escalabilidad y rendimiento superior a Context API
- **Cómo**: Store global con persistencia en localStorage
- **Beneficio**: Estado compartido sin prop drilling, persistencia automática

### 2. Routing con React Router
- **Por qué**: Navegación entre múltiples vistas
- **Cómo**: 9 rutas principales con layout compartido
- **Beneficio**: URLs compartibles, historial de navegación, deep linking

### 3. Command Palette (⌘K)
- **Por qué**: Navegación rápida estilo VS Code/Linear
- **Cómo**: Búsqueda fuzzy con atajos de teclado
- **Beneficio**: Productividad mejorada, acceso rápido a cualquier sección

### 4. Theme Toggle (Claro/Oscuro)
- **Por qué**: Accesibilidad y preferencia del usuario
- **Cómo**: Toggle persistente con clases de Tailwind
- **Beneficio**: Mejor UX, reduce fatiga visual

### 5. Animaciones con Framer Motion
- **Por qué**: Experiencia pulida y profesional
- **Cómo**: Transiciones de página, hover effects, stagger animations
- **Beneficio**: Feedback visual, sensación de calidad

### 6. Notificaciones con Sonner
- **Por qué**: Feedback inmediato al usuario
- **Cómo**: Toast notifications para acciones
- **Beneficio**: Confirmación de acciones, mejor UX

### 7. Preparación para Vercel
- **Por qué**: Deploy sin fricción
- **Cómo**: vercel.json, .vercelignore, .env.example
- **Beneficio**: Deploy en 2 minutos, configuración lista

### 8. Base de Datos Interna Tipada
- **Por qué**: Escalabilidad y mantenibilidad
- **Cómo**: TypeScript interfaces + arrays tipados
- **Beneficio**: Type safety, autocompletado, fácil extensión

### 9. Componentes Modulares
- **Por qué**: Reutilización y mantenibilidad
- **Cómo**: Componentes separados por responsabilidad
- **Beneficio**: Código limpio, fácil de testear y extender

### 10. Accesibilidad (a11y)
- **Por qué**: Inclusividad y cumplimiento de estándares
- **Cómo**: ARIA labels, keyboard navigation, focus management
- **Beneficio**: Accesible para todos, mejor SEO

## 🔧 Extensión del Catálogo

### Añadir un Nuevo Agente

```typescript
// src/data/agents.ts
{
  id: 'nuevo-agente',
  name: 'Nombre del Agente',
  role: 'Rol específico',
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

```typescript
// src/data/tasks.ts
{
  id: 'task-nuevo',
  title: 'Nueva tarea',
  description: 'Descripción',
  status: 'pending',
  priority: 'medium',
  assignedTo: 'valeria',
  createdAt: new Date().toISOString(),
}
```

### Crear Nueva Entidad

1. Define interfaz en `src/data/schema.ts`
2. Crea archivo en `src/data/` (ej: `newEntity.ts`)
3. Exporta array y funciones de consulta
4. Añade al store en `src/store/appStore.ts`
5. Usa en componentes

## 📊 Tecnologías

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Routing declarativo
- **Zustand** - State management ligero
- **Framer Motion** - Animaciones declarativas
- **Sonner** - Notificaciones toast
- **lucide-react** - Iconos modernos

## 🎯 Agentes Incluidos

1. **Valeria** — Agente de Contenido Curioso 📝
2. **Lucía** — Agente de Investigación 🔍
3. **Elena** — Agente de Éxito Multicanal 📱
4. **Carmen** — Agente de Comunicación 💬
5. **Daniel** — Agente de Análisis Financiero 💰
6. **The Maestro** — Orquestador de agentes 🎼

## ✅ Verificación

- ✅ Proyecto compila sin errores
- ✅ Sin referencias a marcas prohibidas
- ✅ "Agentalia" aparece correctamente en todo el proyecto
- ✅ Base de datos interna completamente tipada
- ✅ Catálogo de agentes extensible
- ✅ Componentes modulares y reutilizables
- ✅ Diseño responsive y accesible
- ✅ Tema claro/oscuro con persistencia
- ✅ Routing completo con 9 vistas
- ✅ State management con Zustand
- ✅ Command palette funcional
- ✅ Animaciones suaves
- ✅ Preparado para Vercel

## 📝 Licencia

MIT License - Libre para uso comercial y personal.

---

**Desarrollado con ❤️ para Agentalia**
