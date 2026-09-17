import { useAppStore } from '../store/appStore';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function AgentsPage() {
  const { agents } = useAppStore();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Agentes</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Gestiona tu equipo de agentes de IA</p>
        </div>
        <button className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium text-sm">
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
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition-all cursor-pointer"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-12 h-12 rounded-full ${agent.color} flex items-center justify-center text-2xl`}>
                {agent.avatar}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">{agent.name}</h3>
                <span className="inline-block mt-1 px-2 py-0.5 text-xs border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300">
                  {agent.role}
                </span>
              </div>
            </div>

            {agent.description && (
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
                {agent.description}
              </p>
            )}

            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${
                  agent.status === 'active' ? 'bg-green-500' :
                  agent.status === 'processing' ? 'bg-blue-500 animate-pulse' :
                  'bg-gray-300'
                }`} />
                <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">{agent.status}</span>
              </div>
              {agent.skills && (
                <span className="text-xs text-gray-400">{agent.skills.length} habilidades</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
