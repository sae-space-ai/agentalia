import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { useAppStore } from '../store/appStore';

export default function ObjectivesPage() {
  const { objectives, agents } = useAppStore();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Objetivos</h1>
        <p className="text-gray-400 mt-1">Seguimiento de objetivos del equipo</p>
      </div>

      {objectives.length === 0 ? (
        <div className="glass rounded-xl p-12 text-center">
          <Target className="w-12 h-12 text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-white mb-2">Aún no hay objetivos</h3>
          <p className="text-gray-400">Crea objetivos para que tus agentes trabajen hacia ellos</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {objectives.map((obj, index) => (
            <motion.div
              key={obj.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-white mb-1">{obj.title}</h3>
                  <p className="text-sm text-gray-400">{obj.description}</p>
                </div>
                <span className="text-sm text-gray-400">{agents.find(a => a.id === obj.assignedTo)?.name}</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Progreso</span>
                  <span className="font-medium text-white">{obj.progress}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all" style={{ width: `${obj.progress}%` }} />
                </div>
              </div>

              {obj.keyResults && obj.keyResults.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Resultados clave</h4>
                  <ul className="space-y-1">
                    {obj.keyResults.map((kr, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {kr}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
