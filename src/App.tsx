import Header from './components/Header';
import QuickAccessGrid, { KnowledgeCard } from './components/QuickAccessGrid';
import TeamOrbit from './components/TeamOrbit';
import AgentsList from './components/AgentsList';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Quick access grid */}
        <QuickAccessGrid />

        {/* Main content: Team orbit + Agents list */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Team orbit - takes 2 columns on desktop */}
          <div className="lg:col-span-2">
            <TeamOrbit />
          </div>

          {/* Agents list - takes 1 column on desktop */}
          <div className="lg:col-span-1">
            <AgentsList />
          </div>
        </div>

        {/* Knowledge card */}
        <KnowledgeCard />
      </main>
    </div>
  );
}
