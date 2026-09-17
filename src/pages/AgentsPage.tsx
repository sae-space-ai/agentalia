import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Edit2, Trash2, Eye } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { toast } from 'sonner';
import AgentForm from '../components/AgentForm';
import type { Agent } from '../data/schema';

export default function AgentsPage() {
  const { agents, deleteAgent } = useAppStore();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [editingAgent, setEditingAgent] = useState<Agent | null>(null);

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`¿Estás seguro de eliminar el agente "${name}"? Esta acción no se puede deshacer.`)) {
      deleteAgent(id);
      toast.success(`Agente "${name}" eliminado`);
    }
  };

  const handleEdit = (agent: Agent) => {
    setEditingAgent(agent);
    setShowForm(true);
  };

  const handleCreate = () => {
    setEditingAgent(null);
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Agentes</h1>
          <p className="text-gray-400 mt-1">Gestiona tu equipo de agentes de IA ({agents.length} agentes)</p>
        </div>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all font-medium"
        >
          + Añadir agente
        </button>
      </div>

      {agents.length === 0 ? (
        <div className="glass rounded-xl p-12 text-center">
          <p className="text-gray-400 mb-4">No hay agentes creados aún</p>
          <button
            onClick={handleCreate}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all font-medium"
          >
            Crear primer agente
          </button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass glass-hover rounded-xl p-5 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${agent.color} flex items-center justify-center text-2xl`}>
                  {agent.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white truncate">{agent.name}</h3>
                  <span className="inline-block mt-1 px-2 py-0.5 text-xs border border-white/20 rounded-full text-gray-300">
                    {agent.role}
                  </span>
                </div>
              </div>

              {agent.description && (
                <p className="text-sm text-gray-400 line-clamp-2 mb-3">{agent.description}</p>
              )}

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    agent.status === 'active' ? 'bg-green-400' :
                    agent.status === 'processing' ? 'bg-blue-400 animate-pulse' :
                    agent.status === 'idle' ? 'bg-yellow-400' :
                    'bg-gray-500'
                  }`} />
                  <span className="text-xs text-gray-400 capitalize">{agent.status}</span>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => navigate(`/agents/${agent.id}`)}
                    className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
                    title="Ver detalles"
                  >
                    <Eye className="w-4 h-4 text-gray-400" />
                  </button>
                  <button
                    onClick={() => handleEdit(agent)}
                    className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
                    title="Editar"
                  >
                    <Edit2 className="w-4 h-4 text-gray-400" />
                  </button>
                  <button
                    onClick={() => handleDelete(agent.id, agent.name)}
                    className="p-1.5 hover:bg-red-500/20 rounded-lg transition-all"
                    title="Eliminar"
                  >
                    <Trash2 className="w-4 h-4 text-red-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <AgentForm
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
          setEditingAgent(null);
        }}
        editingAgent={editingAgent}
      />
    </div>
  );
}
