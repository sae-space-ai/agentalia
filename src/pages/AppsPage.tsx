import { useAppStore } from '../store/appStore';
import { Grid3X3, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AppsPage() {
  const { apps, agents } = useAppStore();

  const getAgentName = (agentId: string) => {
    const agent = agents.find(a => a.id === agentId);
    return agent ? agent.name : 'Desconocido';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Apps</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Aplicaciones creadas por tus agentes</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {apps.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Grid3X3 className="w-6 h-6 text-white" />
              </div>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{app.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{app.description}</p>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">
                Creada por {getAgentName(app.createdBy)}
              </span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                app.status === 'published' 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                  : app.status === 'draft'
                  ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400'
              }`}>
                {app.status === 'published' ? 'Publicada' : app.status === 'draft' ? 'Borrador' : 'Archivada'}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
