import {
  CheckCircle,
  TrendingUp,
  Zap,
  FileText,
  Grid3x3,
  Users,
  ChevronRight,
  Lightbulb,
} from 'lucide-react';
import { quickAccessItems } from '../data/agents';

const iconMap: Record<string, any> = {
  CheckCircle,
  TrendingUp,
  Zap,
  FileText,
  Grid3x3,
  Users,
};

export default function QuickAccessGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {quickAccessItems.map((item) => {
        const Icon = iconMap[item.icon];
        return (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                <Icon className="w-5 h-5 text-gray-600" />
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
            {item.badge && (
              <span className="inline-block text-[10px] font-medium bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full mb-1.5">
                {item.badge}
              </span>
            )}
            <p className="text-sm text-gray-500 leading-relaxed">{item.subtitle}</p>
          </div>
        );
      })}
    </div>
  );
}

export function KnowledgeCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer group">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
          <Lightbulb className="w-6 h-6 text-amber-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 mb-0.5">Conocimiento del agente</h3>
          <p className="text-sm text-gray-500">Lo que el equipo ha aprendido sobre ti y tu trabajo.</p>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors shrink-0" />
      </div>
    </div>
  );
}
