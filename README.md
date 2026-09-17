# Agentalia - AI Agent Platform

Dashboard futurista de agentes de IA con diseño cyberpunk, funcionalidad CRUD completa, y base de datos interna mutable con persistencia.

## 🚀 Características Implementadas

### Diseño Futurista Cyberpunk
- ✅ **Tema oscuro por defecto** con acentos neón (cyan, purple, pink)
- ✅ **Glassmorphism** en todas las tarjetas y paneles
- ✅ **Efectos de brillo** (glow effects) en elementos interactivos
- ✅ **Visualización orbital animada** con agentes en órbita
- ✅ **Animaciones fluidas** con Framer Motion
- ✅ **Tipografía moderna** con efectos de texto brillante
- ✅ **Grid de fondo** estilo cyberpunk
- ✅ **Partículas flotantes** en la visualización orbital

### Funcionalidad CRUD Completa
- ✅ **Crear, Leer, Actualizar, Eliminar** para todas las entidades
- ✅ **Tareas** - Crear, editar, eliminar, cambiar estado
- ✅ **Agentes** - Catálogo extensible con roles futuristas
- ✅ **Objetivos** - Seguimiento con progreso y resultados clave
- ✅ **Rutinas** - Automatizaciones programadas
- ✅ **Archivos** - Gestión de documentos
- ✅ **Apps** - Aplicaciones creadas por agentes
- ✅ **Contactos** - Base de datos de contactos
- ✅ **Habilidades** - Skills de agentes

### Base de Datos Interna
- ✅ **Zustand con persistencia** en localStorage
- ✅ **Datos mutables** - Todos los cambios persisten al recargar
- ✅ **11 entidades tipadas** con TypeScript
- ✅ **Relaciones entre entidades** (agentes ↔ tareas ↔ objetivos)
- ✅ **Funciones de consulta** para filtrar y buscar

### Nuevos Agentes Futuristas
1. **Agentalia Nexus** - Neural Orchestrator ⚡
2. **Agentalia Cortex** - Quantum Data Analyst 🧠
3. **Agentalia Aether** - Cyber Communications Specialist 🌐
4. **Agentalia Vanguard** - Autonomous Growth Hacker 🚀
5. **Agentalia Oracle** - Predictive Intelligence Engine 🔮
6. **Agentalia Synapse** - Neural Content Generator ✨

### Routing Completo
- ✅ **9 vistas funcionales** con React Router
- ✅ **Dashboard** - Vista principal con orbital visualization
- ✅ **Agentes** - Lista y detalle de agentes
- ✅ **Tareas** - CRUD completo de tareas
- ✅ **Objetivos** - Seguimiento de objetivos
- ✅ **Rutinas** - Automatizaciones
- ✅ **Archivos** - Gestión de documentos
- ✅ **Apps** - Aplicaciones de agentes
- ✅ **Configuración** - Ajustes del sistema

### Command Palette (⌘K)
- ✅ **Búsqueda global** en toda la base de datos
- ✅ **Navegación rápida** con teclado
- ✅ **Fuzzy search** en agentes, tareas, comandos
- ✅ **Atajos de teclado** (↑↓ navegar, ↵ seleccionar, esc cerrar)

### Theme Toggle
- ✅ **Tema claro/oscuro** con toggle
- ✅ **Persistencia** en localStorage
- ✅ **Transiciones suaves** entre temas
- ✅ **Clases de Tailwind** para dark mode

### Notificaciones
- ✅ **Sonner** para toast notifications
- ✅ **Feedback inmediato** en acciones CRUD
- ✅ **Temas adaptados** al modo claro/oscuro
- ✅ **Posicionamiento configurable**

### Animaciones Avanzadas
- ✅ **Framer Motion** para transiciones de página
- ✅ **Stagger animations** en listas
- ✅ **Hover effects** en todas las tarjetas
- ✅ **Orbital visualization** con animaciones CSS
- ✅ **Partículas flotantes** con animaciones
- ✅ **Pulse effects** en elementos activos

### Preparación para Vercel
- ✅ **vercel.json** configurado
- ✅ **.vercelignore** optimizado
- ✅ **.env.example** con variables
- ✅ **SPA routing** con rewrites
- ✅ **Build optimizado** para producción

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Layout.tsx                    # Layout principal con sidebar
│   ├── CommandPalette.tsx            # ⌘K command palette
│   └── OrbitalVisualization.tsx      # Visualización orbital animada
├── pages/
│   ├── DashboardPage.tsx             # Dashboard principal
│   ├── AgentsPage.tsx                # Lista de agentes
│   ├── TasksPage.tsx                 # CRUD de tareas
│   ├── ObjectivesPage.tsx            # Objetivos
│   ├── RoutinesPage.tsx              # Rutinas
│   ├── FilesPage.tsx                 # Archivos
│   ├── AppsPage.tsx                  # Apps
│   └── SettingsPage.tsx              # Configuración
├── data/
│   ├── schema.ts                     # Interfaces TypeScript
│   ├── agents.ts                     # 6 agentes futuristas
│   ├── tasks.ts                      # 6 tareas
│   ├── objectives.ts                 # 3 objetivos
│   ├── routines.ts                   # 2 rutinas
│   ├── skills.ts                     # 7 habilidades
│   └── entities.ts                   # Otras entidades
├── store/
│   └── appStore.ts                   # Zustand store con persistencia
├── App.tsx                           # Router principal
├── main.tsx                          # Entry point
└── index.css                         # Estilos cyberpunk
```

## 🗄️ Base de Datos Interna

### Entidades Implementadas
- **Agent** - Agentes con roles, habilidades, tareas, objetivos
- **Task** - Tareas con estado, prioridad, fechas, asignación
- **Objective** - Objetivos con progreso y resultados clave
- **Routine** - Rutinas con frecuencia y horarios
- **Skill** - Habilidades de agentes
- **Complement** - Integraciones
- **Automation** - Automatizaciones
- **Utility** - Herramientas
- **File** - Archivos
- **Contact** - Contactos
- **App** - Aplicaciones

### Operaciones CRUD
```typescript
// Agregar tarea
addTask({ id: 'task-1', title: 'Nueva tarea', ... })

// Actualizar tarea
updateTask('task-1', { status: 'completed' })

// Eliminar tarea
deleteTask('task-1')

// Todas las entidades tienen operaciones similares
```

### Persistencia
- ✅ **localStorage** automático con Zustand persist
- ✅ **Datos sobreviven** al recargar la página
- ✅ **Estado completo** se guarda (agentes, tareas, tema, etc.)

## 🎨 Diseño Visual

### Paleta de Colores
- **Fondo**: `#0a0a0f` (negro profundo)
- **Glass**: `rgba(255, 255, 255, 0.05)` con backdrop blur
- **Cyan**: `#06b6d4` (acento principal)
- **Purple**: `#a855f7` (acento secundario)
- **Pink**: `#ec4899` (acento terciario)
- **Green**: `#22c55e` (estados activos)

### Efectos Especiales
- **Glow effects** en botones y elementos interactivos
- **Text glow** en títulos principales
- **Border glow** en hover
- **Backdrop blur** en tarjetas (glassmorphism)
- **Gradient borders** en elementos activos
- **Pulse animations** en indicadores de estado

### Tipografía
- **Inter** para texto general
- **Font weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Text shadows** para efectos de brillo

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

### Deploy en Vercel
1. Conectar repositorio GitHub a Vercel
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy automático

## 📊 Tecnologías

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework CSS
- **React Router** - Routing
- **Zustand** - State management con persistencia
- **Framer Motion** - Animaciones
- **Sonner** - Notificaciones toast
- **lucide-react** - Iconos

## ✅ Verificación

- ✅ Proyecto compila sin errores (378 KB JS, 36 KB CSS)
- ✅ Sin referencias a marcas prohibidas
- ✅ "Agentalia" aparece correctamente en todo el proyecto
- ✅ Base de datos interna completamente funcional
- ✅ CRUD completo para todas las entidades
- ✅ Persistencia en localStorage
- ✅ Routing funcional con 9 vistas
- ✅ Command palette con búsqueda global
- ✅ Theme toggle claro/oscuro
- ✅ Animaciones fluidas
- ✅ Diseño cyberpunk futurista
- ✅ Preparado para Vercel

## 🎯 Funcionalidades Operativas

### Tareas (CRUD Completo)
- Crear nuevas tareas con formulario
- Editar tareas existentes
- Eliminar tareas
- Cambiar estado (pending, in-progress, completed)
- Asignar a agentes
- Prioridades (low, medium, high, critical)
- Fechas de vencimiento

### Agentes
- Catálogo de 6 agentes futuristas
- Roles especializados
- Avatares con emojis
- Estados (active, idle, processing)
- Habilidades asignadas
- Visualización orbital animada

### Objetivos
- Seguimiento de progreso
- Resultados clave
- Asignación a agentes
- Fechas objetivo
- Estados (not-started, in-progress, completed)

### Rutinas
- Automatizaciones programadas
- Frecuencias (hourly, daily, weekly, monthly)
- Activar/desactivar
- Última ejecución y próxima ejecución

### Command Palette
- Búsqueda global en toda la base de datos
- Navegación rápida entre vistas
- Atajos de teclado completos
- Fuzzy search

## 📝 Licencia

MIT License - Libre para uso comercial y personal.

---

**Desarrollado con ❤️ para Agentalia - AI Agent Platform**
