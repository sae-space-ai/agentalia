# Agentalia Agents Dashboard

Dashboard de agentes de Agentalia completamente implementado con tema claro y diseño moderno.

## Componentes principales

- `Header.tsx` — Barra superior con título "Tus agentes" y badge de estado.
- `QuickAccessGrid.tsx` — Grid de 6 tarjetas de acceso rápido (Tareas, Objetivos, Rutinas, Archivos, Apps, Contactos).
- `TeamOrbit.tsx` — Visualización orbital del equipo con iconos de agentes en órbitas concéntricas.
- `AgentsList.tsx` — Lista de agentes con avatares, roles y sección especial del Maestro.
- `App.tsx` — Componente principal que integra todos los elementos.
- `agents.ts` — Datos tipados de agentes y elementos de acceso rápido.

## Características implementadas

- ✅ Tema claro con fondo blanco/gris suave (#F8F9FA)
- ✅ Header con título grande y badge de estado con acento verde
- ✅ Grid de acceso rápido con 6 tarjetas interactivas
- ✅ Visualización orbital del equipo con iconos de agentes
- ✅ Lista de agentes con avatares circulares y badges de roles
- ✅ Sección especial del Maestro con descripción y botón destacado
- ✅ Tarjeta de "Conocimiento del agente" en la parte inferior
- ✅ Diseño totalmente responsive (mobile, tablet, desktop)
- ✅ Iconos de lucide-react con estilo lineal
- ✅ Bordes redondeados, sombras sutiles y transiciones suaves
- ✅ Hover effects en todas las tarjetas interactivas

## Estructura del proyecto

```
src/
├── components/
│   ├── Header.tsx
│   ├── QuickAccessGrid.tsx
│   ├── TeamOrbit.tsx
│   └── AgentsList.tsx
├── data/
│   └── agents.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Instalación

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Tecnologías

- React 18
- TypeScript
- Vite
- Tailwind CSS
- lucide-react (iconos)

## Agentes incluidos

- **Valeria** — Agente de Contenido Curioso
- **Lucía** — Agente de Investigación
- **Elena** — Agente de Éxito Multicanal
- **Carmen** — Agente de Comunicación
- **Daniel** — Agente de Análisis Financiero
- **The Maestro** — Orquestador de agentes

## Estado del proyecto

✅ El proyecto compila correctamente
✅ Sin referencias a marcas originales
✅ "Agentalia" aparece correctamente en todo el proyecto
