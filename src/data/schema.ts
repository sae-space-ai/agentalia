// ============================================================================
// AGENTALIA DATABASE SCHEMA - FUTURISTIC EDITION
// ============================================================================

export interface Agent {
  id: string;
  name: string;
  role: string;
  avatar: string;
  color: string;
  glowColor: string;
  description?: string;
  status: 'active' | 'idle' | 'processing' | 'offline';
  isOrchestrator?: boolean;
  skills?: string[];
  tasks?: string[];
  objectives?: string[];
  routines?: string[];
  createdAt: string;
  lastActive?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  assignedTo: string;
  createdAt: string;
  dueDate?: string;
  completedAt?: string;
  tags?: string[];
}

export interface Objective {
  id: string;
  title: string;
  description: string;
  status: 'not-started' | 'in-progress' | 'completed';
  targetDate?: string;
  progress: number;
  assignedTo: string;
  keyResults?: string[];
  createdAt: string;
}

export interface Routine {
  id: string;
  name: string;
  description: string;
  frequency: 'hourly' | 'daily' | 'weekly' | 'monthly' | 'custom';
  schedule?: string;
  assignedTo: string;
  isActive: boolean;
  lastRun?: string;
  nextRun?: string;
  createdAt: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  availableTo: string[];
  isEnabled: boolean;
  level: 'basic' | 'advanced' | 'expert';
}

export interface Complement {
  id: string;
  name: string;
  type: 'integration' | 'addon' | 'extension';
  description: string;
  assignedTo: string;
  isActive: boolean;
  config?: Record<string, any>;
}

export interface Automation {
  id: string;
  name: string;
  trigger: string;
  action: string;
  description: string;
  assignedTo: string;
  isActive: boolean;
  lastTriggered?: string;
  executionCount: number;
}

export interface Utility {
  id: string;
  name: string;
  category: 'tool' | 'resource' | 'template';
  description: string;
  assignedTo: string;
  isAvailable: boolean;
  usageCount: number;
}

export interface File {
  id: string;
  name: string;
  type: string;
  size: number;
  space: string;
  uploadedAt: string;
  uploadedBy: string;
  tags?: string[];
}

export interface Contact {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  lastInteraction?: string;
  interactedBy: string[];
  notes?: string;
}

export interface App {
  id: string;
  name: string;
  description: string;
  createdBy: string;
  createdAt: string;
  status: 'draft' | 'published' | 'archived';
  version: string;
  downloads?: number;
}
