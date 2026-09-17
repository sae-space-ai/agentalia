import { motion } from 'framer-motion';
import { Grid3X3, ExternalLink } from 'lucide-react';
import { useAppStore } from '../store/appStore';

export default function AppsPage() {
  const { apps, agents } = useAppStore();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Apps</h1>
        <p className="text-gray-400 mt-1">Aplicaciones creadas por tus agentes</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {apps.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="glass glass-hover rounded-xl p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                <Grid3X3 className="w-6 h-6 text-white" />
              </div>
              <button className="p-2 rounded-lg hover:bg-white/10 transition-all">
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            <h3 className="font-semibold text-white mb-1">{app.name}</h3>
            <p className="text-sm text-gray-400 mb-3">{app.description}</p>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-300">v{app.version}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                app.status === 'published' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : app.status === 'draft'
                  ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
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
