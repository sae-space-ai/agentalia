import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { agents } from '../data/agents';
import { tasks } from '../data/tasks';
import { objectives } from '../data/objectives';
import { routines } from '../data/routines';
import { skills } from '../data/skills';
import { complements, automations, utilities, files, contacts, apps } from '../data/entities';
import type { Agent, Task, Objective, Routine, Skill, Complement, Automation, Utility, File, Contact, App } from '../data/schema';

interface AppState {
  // Theme
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  
  // Data
  agents: Agent[];
  tasks: Task[];
  objectives: Objective[];
  routines: Routine[];
  skills: Skill[];
  complements: Complement[];
  automations: Automation[];
  utilities: Utility[];
  files: File[];
  contacts: Contact[];
  apps: App[];
  
  // UI State
  isCommandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;
  
  // Actions
  addAgent: (agent: Agent) => void;
  updateAgent: (id: string, updates: Partial<Agent>) => void;
  deleteAgent: (id: string) => void;
  
  addTask: (task: Task) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  
  addAgentToTeam: (agentId: string) => void;
  removeAgentFromTeam: (agentId: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Theme
      theme: 'light',
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      
      // Data
      agents,
      tasks,
      objectives,
      routines,
      skills,
      complements,
      automations,
      utilities,
      files,
      contacts,
      apps,
      
      // UI State
      isCommandPaletteOpen: false,
      setCommandPaletteOpen: (open) => set({ isCommandPaletteOpen: open }),
      
      // Agent Actions
      addAgent: (agent) => set((state) => ({ agents: [...state.agents, agent] })),
      updateAgent: (id, updates) => set((state) => ({
        agents: state.agents.map(a => a.id === id ? { ...a, ...updates } : a)
      })),
      deleteAgent: (id) => set((state) => ({
        agents: state.agents.filter(a => a.id !== id)
      })),
      
      // Task Actions
      addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
      updateTask: (id, updates) => set((state) => ({
        tasks: state.tasks.map(t => t.id === id ? { ...t, ...updates } : t)
      })),
      deleteTask: (id) => set((state) => ({
        tasks: state.tasks.filter(t => t.id !== id)
      })),
      
      // Team Actions
      addAgentToTeam: (agentId) => set((state) => ({
        agents: state.agents.map(a => 
          a.id === agentId ? { ...a, status: 'active' as const } : a
        )
      })),
      removeAgentFromTeam: (agentId) => set((state) => ({
        agents: state.agents.map(a => 
          a.id === agentId ? { ...a, status: 'idle' as const } : a
        )
      })),
    }),
    {
      name: 'agentalia-storage',
      partialize: (state) => ({ 
        theme: state.theme,
        agents: state.agents,
        tasks: state.tasks,
      }),
    }
  )
);
