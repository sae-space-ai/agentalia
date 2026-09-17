import { useAppStore } from '../store/appStore';
import QuickAccessGrid, { KnowledgeCard } from '../components/QuickAccessGrid';
import TeamOrbit from '../components/TeamOrbit';
import AgentsList from '../components/AgentsList';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const { agents } = useAppStore();

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tus agentes</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {agents.filter(a => a.status === 'active').length} activos de {agents.length} totales
          </p>
        </div>
        
        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 shadow-sm">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {agents.filter(a => a.status === 'active').length} activos
            </span>
          </div>
          <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {agents.length} agentes
          </span>
        </div>
      </motion.div>

      {/* Quick Access Grid */}
      <QuickAccessGrid />

      {/* Main Content: Team Orbit + Agents List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TeamOrbit />
        </div>
        <div className="lg:col-span-1">
          <AgentsList />
        </div>
      </div>

      {/* Knowledge Card */}
      <KnowledgeCard />
    </div>
  );
}
