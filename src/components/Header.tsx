import { Bot, CheckCircle } from 'lucide-react';
import { agents } from '../data/agents';

export default function Header() {
  const agentCount = agents.length;
  const enabledCount = 14; // This would come from a skills count in real implementation

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Tus agentes</h1>
        
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
          <Bot className="w-5 h-5 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">{agentCount} agentes</span>
          <div className="w-px h-4 bg-gray-300" />
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">{enabledCount} Habilitadas</span>
          </div>
        </div>
      </div>
    </header>
  );
}
