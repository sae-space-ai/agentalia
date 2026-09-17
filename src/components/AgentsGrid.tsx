import { useState } from 'react';

interface Agent {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: 'active' | 'idle' | 'processing';
  tasksCompleted: number;
  lastActive: string;
  color: string;
  category: string;
  skills: string[];
}

const agents: Agent[] = [
  {
    id: 'outreach',
    name: 'Outreach Agent',
    description: 'Handles client communications, lead follow-ups, appointment confirmations and reminders.',
    icon: '📧',
    status: 'active',
    tasksCompleted: 156,
    lastActive: '2 min ago',
    color: 'from-blue-500 to-cyan-500',
    category: 'Built-in',
    skills: ['Email campaigns', 'Lead follow-up', 'Client outreach', 'Reminders'],
  },
  {
    id: 'marketing',
    name: 'Marketing Agent',
    description: 'Creates and runs marketing campaigns, writes social copy, manages editorial calendars.',
    icon: '📢',
    status: 'active',
    tasksCompleted: 89,
    lastActive: '5 min ago',
    color: 'from-purple-500 to-pink-500',
    category: 'Built-in',
    skills: ['Social media', 'Content creation', 'Campaigns', 'SEO'],
  },
  {
    id: 'scheduling',
    name: 'Scheduling Agent',
    description: 'Manages appointments, monitors booking flows, triggers automated reminders.',
    icon: '📅',
    status: 'processing',
    tasksCompleted: 234,
    lastActive: 'Just now',
    color: 'from-green-500 to-emerald-500',
    category: 'Built-in',
    skills: ['Calendar sync', 'Booking', 'Reminders', 'Follow-ups'],
  },
  {
    id: 'research',
    name: 'Research Agent',
    description: 'Gathers information, surfaces insights and provides business intelligence.',
    icon: '🔍',
    status: 'active',
    tasksCompleted: 67,
    lastActive: '12 min ago',
    color: 'from-amber-500 to-orange-500',
    category: 'Built-in',
    skills: ['Market research', 'Competitor analysis', 'Trends', 'Reports'],
  },
  {
    id: 'finance',
    name: 'Finance Agent',
    description: 'Monitors revenue, flags overdue invoices, reconciles payments and surfaces insights.',
    icon: '💰',
    status: 'idle',
    tasksCompleted: 45,
    lastActive: '1 hour ago',
    color: 'from-emerald-500 to-teal-500',
    category: 'Built-in',
    skills: ['Invoicing', 'Revenue tracking', 'Payment reconciliation', 'Reports'],
  },
  {
    id: 'design',
    name: 'Design Agent',
    description: 'Creates branded content, generates visual assets and adapts content across channels.',
    icon: '🎨',
    status: 'idle',
    tasksCompleted: 32,
    lastActive: '3 hours ago',
    color: 'from-pink-500 to-rose-500',
    category: 'Built-in',
    skills: ['Brand assets', 'Visual content', 'Social graphics', 'Templates'],
  },
];

export default function AgentsGrid() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'active' | 'idle'>('all');

  const filteredAgents = agents.filter((agent) => {
    if (filter === 'all') return true;
    if (filter === 'active') return agent.status === 'active' || agent.status === 'processing';
    return agent.status === 'idle';
  });

  const activeCount = agents.filter((a) => a.status === 'active' || a.status === 'processing').length;

  return (
    <div className="p-4 lg:p-8">
      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Agents" value="6" icon="🤖" />
        <StatCard label="Active Now" value={String(activeCount)} icon="⚡" />
        <StatCard label="Tasks Today" value="42" icon="✅" />
        <StatCard label="AI Credits Used" value="1,240" icon="🔋" />
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          {(['all', 'active', 'idle'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === f
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
              {f === 'all' && <span className="ml-1.5 text-xs opacity-60">({agents.length})</span>}
              {f === 'active' && (
                <span className="ml-1.5 text-xs opacity-60">({agents.filter((a) => a.status !== 'idle').length})</span>
              )}
              {f === 'idle' && (
                <span className="ml-1.5 text-xs opacity-60">({agents.filter((a) => a.status === 'idle').length})</span>
              )}
            </button>
          ))}
        </div>
        <button className="text-sm text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          Sort
        </button>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredAgents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            isSelected={selectedAgent === agent.id}
            onSelect={() => setSelectedAgent(selectedAgent === agent.id ? null : agent.id)}
          />
        ))}

        {/* Create Custom Agent Card */}
        <button className="flex flex-col items-center justify-center p-8 rounded-xl border-2 border-dashed border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 group min-h-[220px]">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-3 group-hover:bg-purple-500/10 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-purple-400 transition-colors">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
          <p className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Create Custom Agent</p>
          <p className="text-xs text-gray-600 mt-1">Build around your specific rules</p>
        </button>
      </div>

      {/* Agent Detail Panel */}
      {selectedAgent && (
        <AgentDetail
          agent={agents.find((a) => a.id === selectedAgent)!}
          onClose={() => setSelectedAgent(null)}
        />
      )}
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="bg-[#14141f] rounded-xl p-4 border border-white/5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg">{icon}</span>
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs text-gray-500 mt-0.5">{label}</p>
    </div>
  );
}

function AgentCard({
  agent,
  isSelected,
  onSelect,
}: {
  agent: Agent;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      onClick={onSelect}
      className={`relative bg-[#14141f] rounded-xl p-5 border transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-purple-500/5 group ${
        isSelected
          ? 'border-purple-500/40 shadow-lg shadow-purple-500/10'
          : 'border-white/5 hover:border-white/10'
      }`}
    >
      {/* Status indicator */}
      <div className="absolute top-4 right-4">
        <StatusBadge status={agent.status} />
      </div>

      {/* Agent icon & name */}
      <div className="flex items-start gap-3 mb-3">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center text-lg shadow-lg`}>
          {agent.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm group-hover:text-white transition-colors">{agent.name}</h3>
          <p className="text-[10px] text-gray-500 mt-0.5">{agent.category}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2">{agent.description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {agent.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5">
        <div className="flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="text-xs text-gray-500">{agent.tasksCompleted} tasks</span>
        </div>
        <span className="text-[10px] text-gray-600">{agent.lastActive}</span>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: 'active' | 'idle' | 'processing' }) {
  const config = {
    active: { label: 'Active', color: 'bg-green-400', textColor: 'text-green-400' },
    processing: { label: 'Working', color: 'bg-blue-400 animate-pulse', textColor: 'text-blue-400' },
    idle: { label: 'Idle', color: 'bg-gray-500', textColor: 'text-gray-500' },
  };

  const { label, color, textColor } = config[status];

  return (
    <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 ${textColor}`}>
      <div className={`w-1.5 h-1.5 rounded-full ${color}`} />
      <span className="text-[10px] font-medium">{label}</span>
    </div>
  );
}

function AgentDetail({ agent, onClose }: { agent: Agent; onClose: () => void }) {
  return (
    <div className="mt-6 bg-[#14141f] rounded-xl border border-white/5 overflow-hidden">
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center text-2xl shadow-lg`}>
              {agent.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{agent.name}</h3>
              <p className="text-sm text-gray-400">{agent.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/5 transition-colors text-gray-400 hover:text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-sm font-medium text-gray-300 mb-3">All Skills</h4>
          <div className="flex flex-wrap gap-2">
            {agent.skills.map((skill) => (
              <span key={skill} className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-300 mb-3">Activity</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Tasks completed</span>
              <span>{agent.tasksCompleted}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Last active</span>
              <span>{agent.lastActive}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Status</span>
              <StatusBadge status={agent.status} />
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-300 mb-3">Actions</h4>
          <div className="space-y-2">
            <button className="w-full text-left text-xs px-3 py-2 rounded-lg bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors">
              💬 Chat with this agent
            </button>
            <button className="w-full text-left text-xs px-3 py-2 rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 transition-colors">
              ⚙️ Configure settings
            </button>
            <button className="w-full text-left text-xs px-3 py-2 rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 transition-colors">
              📋 View task history
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
