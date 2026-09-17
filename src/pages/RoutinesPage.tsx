import { useAppStore } from '../store/appStore';
import { Zap, Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RoutinesPage() {
  const { routines, agents } = useAppStore();

  const getAgentName = (agentId: string) => {
    const agent = agents.find(a => a.id === agentId);
    return agent ? agent.name : 'Sin asignar';
  };

  const getFrequencyLabel = (freq: string) => {
    switch (freq) {
      case 'daily': return 'Diaria';
      case 'weekly': return 'Semanal';
      case 'monthly': return 'Mensual';
      default: return 'Personalizada';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Rutinas</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Automatizaciones programadas de tus agentes</p>
      </div>

      <div className="grid gap-4">
        {routines.map((routine, index) => (
          <motion.div
            key={routine.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{routine.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{routine.description}</p>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-600 dark:text-gray-300">
                      {getAgentName(routine.assignedTo)}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {getFrequencyLabel(routine.frequency)}
                    </span>
                    {routine.schedule && (
                      <>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{routine.schedule}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <button
                className={`p-2 rounded-lg transition-colors ${
                  routine.isActive
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30'
                    : 'bg-gray-50 dark:bg-gray-700 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {routine.isActive ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
