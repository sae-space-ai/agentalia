import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { agents as initialAgents } from '../data/agents';
import { tasks as initialTasks } from '../data/tasks';
import { objectives as initialObjectives } from '../data/objectives';
import { routines as initialRoutines } from '../data/routines';
import { skills as initialSkills } from '../data/skills';
import { complements as initialComplements, automations as initialAutomations, utilities as initialUtilities, files as initialFiles, contacts as initialContacts, apps as initialApps } from '../data/entities';
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
  
  // Agent CRUD
  addAgent: (agent: Agent) => void;
  updateAgent: (id: string, updates: Partial<Agent>) => void;
  deleteAgent: (id: string) => void;
  
  // Task CRUD
  addTask: (task: Task) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  
  // Objective CRUD
  addObjective: (objective: Objective) => void;
  updateObjective: (id: string, updates: Partial<Objective>) => void;
  deleteObjective: (id: string) => void;
  
  // Routine CRUD
  addRoutine: (routine: Routine) => void;
  updateRoutine: (id: string, updates: Partial<Routine>) => void;
  deleteRoutine: (id: string) => void;
  
  // Skill CRUD
  addSkill: (skill: Skill) => void;
  updateSkill: (id: string, updates: Partial<Skill>) => void;
  deleteSkill: (id: string) => void;
  
  // File CRUD
  addFile: (file: File) => void;
  deleteFile: (id: string) => void;
  
  // Contact CRUD
  addContact: (contact: Contact) => void;
  updateContact: (id: string, updates: Partial<Contact>) => void;
  deleteContact: (id: string) => void;
  
  // App CRUD
  addApp: (app: App) => void;
  updateApp: (id: string, updates: Partial<App>) => void;
  deleteApp: (id: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Theme
      theme: 'dark',
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      
      // Initial Data
      agents: initialAgents,
      tasks: initialTasks,
      objectives: initialObjectives,
      routines: initialRoutines,
      skills: initialSkills,
      complements: initialComplements,
      automations: initialAutomations,
      utilities: initialUtilities,
      files: initialFiles,
      contacts: initialContacts,
      apps: initialApps,
      
      // UI State
      isCommandPaletteOpen: false,
      setCommandPaletteOpen: (open) => set({ isCommandPaletteOpen: open }),
      
      // Agent CRUD
      addAgent: (agent) => set((state) => ({ agents: [...state.agents, agent] })),
      updateAgent: (id, updates) => set((state) => ({
        agents: state.agents.map(a => a.id === id ? { ...a, ...updates } : a)
      })),
      deleteAgent: (id) => set((state) => ({
        agents: state.agents.filter(a => a.id !== id)
      })),
      
      // Task CRUD
      addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
      updateTask: (id, updates) => set((state) => ({
        tasks: state.tasks.map(t => t.id === id ? { ...t, ...updates } : t)
      })),
      deleteTask: (id) => set((state) => ({
        tasks: state.tasks.filter(t => t.id !== id)
      })),
      
      // Objective CRUD
      addObjective: (objective) => set((state) => ({ objectives: [...state.objectives, objective] })),
      updateObjective: (id, updates) => set((state) => ({
        objectives: state.objectives.map(o => o.id === id ? { ...o, ...updates } : o)
      })),
      deleteObjective: (id) => set((state) => ({
        objectives: state.objectives.filter(o => o.id !== id)
      })),
      
      // Routine CRUD
      addRoutine: (routine) => set((state) => ({ routines: [...state.routines, routine] })),
      updateRoutine: (id, updates) => set((state) => ({
        routines: state.routines.map(r => r.id === id ? { ...r, ...updates } : r)
      })),
      deleteRoutine: (id) => set((state) => ({
        routines: state.routines.filter(r => r.id !== id)
      })),
      
      // Skill CRUD
      addSkill: (skill) => set((state) => ({ skills: [...state.skills, skill] })),
      updateSkill: (id, updates) => set((state) => ({
        skills: state.skills.map(s => s.id === id ? { ...s, ...updates } : s)
      })),
      deleteSkill: (id) => set((state) => ({
        skills: state.skills.filter(s => s.id !== id)
      })),
      
      // File CRUD
      addFile: (file) => set((state) => ({ files: [...state.files, file] })),
      deleteFile: (id) => set((state) => ({
        files: state.files.filter(f => f.id !== id)
      })),
      
      // Contact CRUD
      addContact: (contact) => set((state) => ({ contacts: [...state.contacts, contact] })),
      updateContact: (id, updates) => set((state) => ({
        contacts: state.contacts.map(c => c.id === id ? { ...c, ...updates } : c)
      })),
      deleteContact: (id) => set((state) => ({
        contacts: state.contacts.filter(c => c.id !== id)
      })),
      
      // App CRUD
      addApp: (app) => set((state) => ({ apps: [...state.apps, app] })),
      updateApp: (id, updates) => set((state) => ({
        apps: state.apps.map(a => a.id === id ? { ...a, ...updates } : a)
      })),
      deleteApp: (id) => set((state) => ({
        apps: state.apps.filter(a => a.id !== id)
      })),
    }),
    {
      name: 'agentalia-storage',
      partialize: (state) => ({ 
        theme: state.theme,
        agents: state.agents,
        tasks: state.tasks,
        objectives: state.objectives,
        routines: state.routines,
        skills: state.skills,
        complements: state.complements,
        automations: state.automations,
        utilities: state.utilities,
        files: state.files,
        contacts: state.contacts,
        apps: state.apps,
      }),
    }
  )
);
