import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AgentsGrid from './components/AgentsGrid';
import MaestroChat from './components/MaestroChat';

export default function App() {
  const [activeView, setActiveView] = useState<'agents' | 'chat' | 'metrics'>('agents');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#0a0a0f] text-white overflow-hidden">
      <Sidebar
        activeView={activeView}
        setActiveView={setActiveView}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          activeView={activeView}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="flex-1 overflow-y-auto">
          {activeView === 'agents' && <AgentsGrid />}
          {activeView === 'chat' && <MaestroChat />}
          {activeView === 'metrics' && <MetricsView />}
        </main>
      </div>
    </div>
  );
}

function MetricsView() {
  return (
    <div className="p-6 lg:p-8">
      <h2 className="text-2xl font-semibold mb-6">Business Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard title="Revenue" value="$12,450" change="+12%" positive />
        <MetricCard title="New Leads" value="48" change="+8%" positive />
        <MetricCard title="Meetings" value="12" change="+3" positive />
        <MetricCard title="Tasks Completed" value="156" change="+24%" positive />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#14141f] rounded-xl p-6 border border-white/5">
          <h3 className="text-lg font-medium mb-4">Weekly Activity</h3>
          <div className="space-y-3">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
              <div key={day} className="flex items-center gap-3">
                <span className="text-sm text-gray-400 w-8">{day}</span>
                <div className="flex-1 bg-[#1e1e2e] rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    style={{ width: `${[65, 80, 45, 90, 70, 30, 20][i]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#14141f] rounded-xl p-6 border border-white/5">
          <h3 className="text-lg font-medium mb-4">Agent Performance</h3>
          <div className="space-y-4">
            {[
              { name: 'Marketing Agent', tasks: 42, status: 'active' },
              { name: 'Outreach Agent', tasks: 38, status: 'active' },
              { name: 'Scheduling Agent', tasks: 28, status: 'active' },
              { name: 'Finance Agent', tasks: 15, status: 'idle' },
              { name: 'Research Agent', tasks: 22, status: 'active' },
              { name: 'Design Agent', tasks: 11, status: 'idle' },
            ].map((agent) => (
              <div key={agent.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${agent.status === 'active' ? 'bg-green-400' : 'bg-gray-500'}`} />
                  <span className="text-sm">{agent.name}</span>
                </div>
                <span className="text-sm text-gray-400">{agent.tasks} tasks</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, change, positive }: { title: string; value: string; change: string; positive: boolean }) {
  return (
    <div className="bg-[#14141f] rounded-xl p-5 border border-white/5">
      <p className="text-sm text-gray-400 mb-1">{title}</p>
      <p className="text-2xl font-semibold">{value}</p>
      <p className={`text-sm mt-1 ${positive ? 'text-green-400' : 'text-red-400'}`}>{change} this week</p>
    </div>
  );
}
