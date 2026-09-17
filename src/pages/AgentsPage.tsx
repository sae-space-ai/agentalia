import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/appStore';

export default function AgentsPage() {
  const { agents } = useAppStore();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Agentes</h1>
          <p className="text-gray-400 mt-1">Gestiona tu equipo de agentes de IA</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all font-medium">
          + Añadir agente
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent, index) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => navigate(`/agents/${agent.id}`)}
            className="glass glass-hover rounded-xl p-5 cursor-pointer transition-all"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${agent.color} flex items-center justify-center text-2xl`}>
                {agent.avatar}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">{agent.name}</h3>
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
                  'bg-gray-500'
                }`} />
                <span className="text-xs text-gray-400 capitalize">{agent.status}</span>
              </div>
              {agent.skills && (
                <span className="text-xs text-gray-500">{agent.skills.length} habilidades</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
