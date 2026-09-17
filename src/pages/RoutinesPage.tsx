import { motion } from 'framer-motion';
import { Zap, Play, Pause } from 'lucide-react';
import { useAppStore } from '../store/appStore';

export default function RoutinesPage() {
  const { routines, agents, updateRoutine } = useAppStore();

  const getFrequencyLabel = (freq: string) => {
    switch (freq) {
      case 'hourly': return 'Cada hora';
      case 'daily': return 'Diaria';
      case 'weekly': return 'Semanal';
      case 'monthly': return 'Mensual';
      default: return 'Personalizada';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Rutinas</h1>
        <p className="text-gray-400 mt-1">Automatizaciones programadas de tus agentes</p>
      </div>

      <div className="grid gap-4">
        {routines.map((routine, index) => (
          <motion.div
            key={routine.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="glass rounded-xl p-5"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30">
                  <Zap className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{routine.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{routine.description}</p>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-300">{agents.find(a => a.id === routine.assignedTo)?.name}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-300">{getFrequencyLabel(routine.frequency)}</span>
                    {routine.schedule && (
                      <>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-300">{routine.schedule}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={() => updateRoutine(routine.id, { isActive: !routine.isActive })}
                className={`p-2 rounded-lg transition-all ${
                  routine.isActive
                    ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
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
