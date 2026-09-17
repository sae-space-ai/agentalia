import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Zap, FileText, Grid3x3, Users, ChevronRight, Lightbulb, Bot } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import OrbitalVisualization from '../components/OrbitalVisualization';
import AgentForm from '../components/AgentForm';

export default function DashboardPage() {
  const navigate = useNavigate();
  const { agents, tasks, objectives, routines, files, contacts, apps } = useAppStore();
  const [showAgentForm, setShowAgentForm] = useState(false);

  const activeAgents = agents.filter(a => a.status === 'active' || a.status === 'processing').length;
  const pendingTasks = tasks.filter(t => t.status === 'pending' || t.status === 'in-progress').length;
  const activeRoutines = routines.filter(r => r.isActive).length;

  const quickAccessItems = [
    { id: 'tasks', icon: CheckCircle, title: 'Tareas', subtitle: `${pendingTasks.toString().padStart(2, '0')}`, path: '/tasks', color: 'cyan' },
    { id: 'objectives', icon: TrendingUp, title: 'Objetivos', subtitle: `${objectives.length} activos`, path: '/objectives', color: 'purple' },
    { id: 'routines', icon: Zap, title: 'Rutinas', subtitle: `${activeRoutines.toString().padStart(2, '0')}`, path: '/routines', color: 'yellow' },
    { id: 'files', icon: FileText, title: 'Archivos', subtitle: `${files.length} archivos`, path: '/files', color: 'pink', badge: 'Próximamente' },
    { id: 'apps', icon: Grid3x3, title: 'Apps', subtitle: `${apps.length} apps creadas`, path: '/apps', color: 'blue' },
    { id: 'contacts', icon: Users, title: 'Contactos', subtitle: `${contacts.length} contactos`, path: '/contacts', color: 'green' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold text-white text-glow-cyan">Tus agentes</h1>
          <p className="text-gray-400 mt-2">
            {activeAgents} activos de {agents.length} totales
          </p>
        </div>
        
        <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
          <Bot className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-medium text-white">{agents.length} agentes</span>
          <div className="w-px h-4 bg-white/20" />
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-400">{activeAgents} Habilitadas</span>
          </div>
        </div>
      </motion.div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickAccessItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => navigate(item.path)}
              className="glass glass-hover rounded-2xl p-5 cursor-pointer group transition-all hover:border-cyan-500/30"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-all">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h3 className="font-semibold text-white mb-1">{item.title}</h3>
              {item.badge && (
                <span className="inline-block text-[10px] font-medium bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full mb-1.5 border border-yellow-500/30">
                  {item.badge}
                </span>
              )}
              <p className="text-sm text-gray-400">{item.subtitle}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content: Orbital + Agents List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Orbital Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 glass rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Tu equipo · {agents.length}</h2>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">{activeAgents} habilitados</span>
              <button 
                onClick={() => setShowAgentForm(true)}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all glow-cyan"
              >
                + Añadir agente
              </button>
            </div>
          </div>
          <OrbitalVisualization />
        </motion.div>

        {/* Agents List */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl overflow-hidden"
        >
          <div className="p-4 border-b border-white/10">
            <h3 className="font-semibold text-white">Agentes activos</h3>
          </div>
          <div className="divide-y divide-white/5">
            {agents.slice(0, 6).map((agent) => (
              <div
                key={agent.id}
                onClick={() => navigate(`/agents/${agent.id}`)}
                className="flex items-center gap-3 p-4 hover:bg-white/5 cursor-pointer transition-all"
              >
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${agent.color} flex items-center justify-center text-lg`}>
                  {agent.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white text-sm truncate">{agent.name}</h4>
                  <p className="text-xs text-gray-400 truncate">{agent.role}</p>
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  agent.status === 'active' ? 'bg-green-400' :
                  agent.status === 'processing' ? 'bg-blue-400 animate-pulse' :
                  'bg-gray-500'
                }`} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Knowledge Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass glass-hover rounded-2xl p-6 cursor-pointer group"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center border border-yellow-500/30">
            <Lightbulb className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-white mb-1">Conocimiento del agente</h3>
            <p className="text-sm text-gray-400">Lo que el equipo ha aprendido sobre ti y tu trabajo.</p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
        </div>
      </motion.div>

      <AgentForm
        isOpen={showAgentForm}
        onClose={() => setShowAgentForm(false)}
      />
    </div>
  );
}
