import { ChevronDown } from 'lucide-react';
import { useAppStore } from '../store/appStore';

export default function AgentsList() {
  const { agents } = useAppStore();
  const regularAgents = agents.filter((a) => !a.isOrchestrator);
  const maestro = agents.find((a) => a.isOrchestrator);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
      {/* Agents list */}
      <div className="divide-y divide-gray-100">
        {regularAgents.map((agent) => (
          <div
            key={agent.id}
            className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div
              className={`w-12 h-12 rounded-full ${agent.color} flex items-center justify-center text-xl shrink-0`}
            >
              {agent.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900">{agent.name}</h3>
            </div>
            <span className="px-3 py-1 text-xs font-medium border border-gray-300 rounded-full text-gray-700 bg-white">
              {agent.role}
            </span>
          </div>
        ))}
      </div>

      {/* Maestro section */}
      {maestro && (
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <div className="flex items-center gap-4 mb-4">
            <div
              className={`w-14 h-14 rounded-full ${maestro.color} flex items-center justify-center text-2xl shrink-0`}
            >
              {maestro.avatar}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-lg">{maestro.name}</h3>
              <span className="inline-block mt-1 px-3 py-1 text-xs font-medium border border-gray-900 rounded-full text-gray-900 bg-white">
                {maestro.role}
              </span>
            </div>
          </div>
          
          {maestro.description && (
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {maestro.description}
            </p>
          )}

          <button className="w-full px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-200">
            Ver Maestro
          </button>
        </div>
      )}

      {/* View all link */}
      <div className="border-t border-gray-200 p-4 text-center">
        <button className="flex items-center justify-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors mx-auto">
          Ver todos
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
