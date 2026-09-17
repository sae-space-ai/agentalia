// ============================================================================
// AGENTALIA DATABASE SCHEMA
// ============================================================================
// This file defines the complete data model for the Agentalia platform.
// All entities are typed and extensible.

// ============================================================================
// CORE ENTITIES
// ============================================================================

export interface Agent {
  id: string;
  name: string;
  role: string;
  avatar: string;
  color: string;
  description?: string;
  status: 'active' | 'idle' | 'processing';
  isOrchestrator?: boolean;
  skills?: string[];
  tasks?: string[]; // Task IDs
  objectives?: string[]; // Objective IDs
  routines?: string[]; // Routine IDs
  complements?: string[]; // Complement IDs
  automations?: string[]; // Automation IDs
  utilities?: string[]; // Utility IDs
}

export interface Task {
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

export interface Objective {
  id: string;
  title: string;
  description: string;
  status: 'not-started' | 'in-progress' | 'completed';
  targetDate?: string;
  progress: number; // 0-100
  assignedTo: string; // Agent ID
  keyResults?: string[];
}

export interface Routine {
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

export interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  availableTo: string[]; // Agent IDs
  isEnabled: boolean;
}

export interface Complement {
  id: string;
  name: string;
  type: 'integration' | 'addon' | 'extension';
  description: string;
  assignedTo: string; // Agent ID
  isActive: boolean;
  config?: Record<string, any>;
}

export interface Automation {
  id: string;
  name: string;
  trigger: string;
  action: string;
  description: string;
  assignedTo: string; // Agent ID
  isActive: boolean;
  lastTriggered?: string;
}

export interface Utility {
  id: string;
  name: string;
  category: 'tool' | 'resource' | 'template';
  description: string;
  assignedTo: string; // Agent ID
  isAvailable: boolean;
}

export interface File {
  id: string;
  name: string;
  type: string;
  size: number;
  space: string;
  uploadedAt: string;
  uploadedBy: string; // Agent ID
}

export interface Contact {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  lastInteraction?: string;
  interactedBy: string[]; // Agent IDs
}

export interface App {
  id: string;
  name: string;
  description: string;
  createdBy: string; // Agent ID
  createdAt: string;
  status: 'draft' | 'published' | 'archived';
}
